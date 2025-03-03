import { supabase } from "@/lib/supabase";

export const uploadFile = async (file: any, bucketName: string) => {
  const filePath = `${Date.now()}_${file.name}`;

  await supabase.storage.from(bucketName).upload(filePath, file);

  const { data: publicUrlData } = supabase.storage
    .from(bucketName)
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
};

export const addDocument = async (file, name, user_id) => {
  const url = await uploadFile(file, "documents");

  await supabase
    .from("documents")
    .insert([{ file_url: url, name, user_id }])
    .select();
};
