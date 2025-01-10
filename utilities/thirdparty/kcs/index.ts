class Blob {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    }

    /**
     * Upload a file to the storage.
     * @param file The file to upload.
     * @returns The upload response, including the file URL.
     */
    async uploadFile(file: File): Promise<{ url: string; message: string }> {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(`${this.baseUrl}/create.php`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Upload failed with status ${response.status}`);
        }

        const result = await response.json();
        if (!result.u) {
            throw new Error(result.message || "Unknown upload error");
        }

        return { url: result.file.url, message: result.message };
    }
}
const KabeerCloud = {
    Blob,
}
export default KabeerCloud;
