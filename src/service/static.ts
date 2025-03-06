import { supabase } from "@/lib/supabase";

export const getStaticData = async (tableName) => {
  return (await supabase.from(tableName).select("*")).data;
};
