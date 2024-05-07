import {getDefaultHeaders, handleApiError} from '@/util/fetch';
import {API_URL} from '../environment';
import { Drink } from '@/app/app-provider';


export async function fetchDrinks(): Promise<Drink[]> {
    const url = new URL('api/drinks', API_URL);
    const response = await fetch(url, {
        method: 'GET',
        headers: await getDefaultHeaders(),
    });
    await handleApiError(response);
    return await response.json()
    
}

