import {getDefaultHeaders, handleApiError} from '@/util/fetch';
import {API_URL} from '../environment';


// export async function fetchProjects(): Promise<Response> {
//     const url = new URL('api/projects', API_URL);
//     const response = await fetch(url, {
//         method: 'GET',
//         headers: await getDefaultHeaders(),
//     });
//     await handleApiError(response);
//     return await response.json();
// }

