import { supabase } from "@/lib/supabase";

export const createUser = async (payload) => {
  return await supabase.from("users").insert([payload]).select().single();
};

export const getUser = async () => {
  const { data } = await supabase.auth.getUser();

  return data.user;
};

export const updateUser = async (payload, id) => {
  await supabase.from("users").update(payload).eq("id", id).select();
};

export const getNannies = async () => {
  return (
    await supabase
      .from("users")
      .select("*")
      .eq("role", "nanny")
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
