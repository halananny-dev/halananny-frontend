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
