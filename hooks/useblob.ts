import { useState } from "react";
import KabeerCloud from "@/utilities/thirdparty/kcs"; // Adjust the import path as needed

interface UseBlobResult {
  uploadFile: (file: File) => Promise<void>;
  loading: boolean;
  error: string | null;
  success: boolean;
  fileUrl: string | null;
}

export const useBlob = (baseUrl: string): UseBlobResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const client = new KabeerCloud.Blob(baseUrl);

  const uploadFile = async (file: File) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    setFileUrl(null);

    try {
      const result = await client.uploadFile(file);
      setSuccess(true);
      setFileUrl(result.url);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { uploadFile, loading, error, success, fileUrl };
};
