const BACKEND_URL = "http://localhost:3000/api";

export interface IMedia {
  id: string;
  title: string;
  mimeType: string;
}

export async function getMedias(): Promise<IMedia[]> {
  return fetch(`${BACKEND_URL}/media`)
    .then((res) => res.json())
    .catch((err) => console.log("🚀 ~ getMedias ~ err: ", err));
}

export function getMediaUrl(id: string) {
  return `${BACKEND_URL}/media/${id}`;
}
