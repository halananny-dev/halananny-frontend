import { supabase } from "@/lib/supabase";

export const createUser = async (payload, password) => {
  const { error } = await supabase.auth.signUp({
    email: payload.email,
    password: password,
  });

  if (error) {
    return { data: null, error };
  }

  await logout();
  return await supabase.from("users").insert([payload]).select().single();
};

export const getUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return;
  } else {
    const { data: userDetails } = await supabase
      .from("users")
      .select("*")
      .eq("email", user.email)
      .single();

    return { ...user, ...userDetails };
  }
};

export const updateUser = async (payload, id) => {
  return (
    await supabase.from("users").update(payload).eq("id", id).select().single()
  ).data;
};

export const getNannies = async () => {
  return (
    await supabase
      .from("users")
      .select("*")
      .eq("role", "nanny")
      .not("verified_at", "is", null)
      .select()
      .limit(50)
  ).data;
};

export const getProfile = async (id) => {
  return (
    await supabase.from("users").select("*").eq("id", id).select().single()
  ).data;
};

export const getTable = async (userId, tableName) => {
  return (
    await supabase.from(tableName).select("*").eq("user_id", userId).select()
  ).data;
};

export const getSavedNannies = async (userId) => {
  const { data: savedNannies }: any = await supabase
    .from("saved_nannies")
    .select("nanny_id")
    .eq("user_id", userId);

  const nannyIds = savedNannies.map((n) => n.nanny_id);

  if (nannyIds.length === 0) return [];

  const { data: nannies } = await supabase
    .from("users")
    .select("*")
    .in("id", nannyIds);

  return nannies;
};

export const getNanny = async (userId, nannyId) => {
  return (
    await supabase
      .from("saved_nannies")
      .select("id")
      .eq("user_id", userId)
      .eq("nanny_id", nannyId)
      .select()
      .single()
  ).data;
};

export const saveNanny = async (user_id, nanny_id) => {
  return (
    await supabase
      .from("saved_nannies")
      .insert([{ user_id, nanny_id }])
      .select()
  ).data;
};

export const removeNanny = async (userId, nannyId) => {
  return (
    await supabase
      .from("saved_nannies")
      .delete()
      .eq("user_id", userId)
      .eq("nanny_id", nannyId)
      .select()
  ).data;
};

export const logout = async () => await supabase.auth.signOut();
