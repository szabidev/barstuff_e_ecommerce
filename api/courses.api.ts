import { API_URL } from "@/environment";
import { getDefaultHeaders, handleApiError } from "@/util/fetch";

export async function fetchCourses(): Promise<Response> {
  const url = new URL("api/courses", API_URL);
  const response = await fetch(url, {
    method: "GET",
    headers: await getDefaultHeaders(),
  });
  await handleApiError(response);
  const data = await response.json();
  return data;
}
