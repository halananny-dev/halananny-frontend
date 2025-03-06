import { supabase } from "@/lib/supabase";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

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

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION!,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
  },
});

export async function uploadVideo(file) {
  const fileName = `${Date.now()}-${file.name}`;
  const fileType = file.type;
  const bucketName = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;

  console.log(file);

  const params: any = {
    Bucket: bucketName,
    Key: fileName,
    ContentType: fileType,
  };

  const command = new PutObjectCommand(params);

  const signedUrl = await getSignedUrl(s3, command, { expiresIn: 60 });
  console.log(signedUrl)

  await fetch(signedUrl, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": fileType,
    },
  });

  const fileUrl = signedUrl.split("?")[0]; // Remove query params
  return fileUrl;
}
