import { getDefaultHeaders, handleApiError } from "@/util/fetch";
import { API_URL } from "../environment";
import { Drink } from "@/app/app-provider";

interface FetchDrinksResponse {
  total: number;
  drinks: Drink[];
}

export async function fetchDrinks(
  page: number,
  pageSize: number
): Promise<FetchDrinksResponse> {
  const url = new URL(
    `api/drinks?skip=${(page - 1) * pageSize}&limit=${pageSize}`,
    API_URL
  );
  const response = await fetch(url, {
    method: "GET",
    headers: await getDefaultHeaders(),
  });
  await handleApiError(response);
  const data = await response.json();
  return { drinks: data.drinks, total: data.total };
}
