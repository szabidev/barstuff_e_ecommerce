import { getDefaultHeaders, handleApiError } from "@/util/fetch";
import { API_URL } from "../environment";
import { Drink } from "@/app/app-provider";

export async function fetchDrinks(
  page = 1,
  searchTerm = "",
  pageSize = 40
): Promise<{
  drinks: Drink[];
  totalItems: number;
  page: number;
  pageSize: number;
}> {
  const url = new URL(`api/drinks`, API_URL);
  url.searchParams.append("page", page.toString());
  url.searchParams.append("pageSize", pageSize.toString());
  if (searchTerm) {
    url.searchParams.append("searchTerm", searchTerm);
  }

  const response = await fetch(url, {
    method: "GET",
    headers: await getDefaultHeaders(),
  });

  await handleApiError(response);
  const data = await response.json();
  console.log("data from req", data);
  return data;
}
