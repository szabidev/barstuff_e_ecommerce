import {readString} from '@/util/storage';

export async function getDefaultHeaders() {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    const accessToken = await readString('token');

    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return headers;
}

export async function handleApiError(response: Response) {
    if (!response.ok) {
        throw new Error(
            'Failed to fetch projects: ' +
            response.status +
            ' ' +
            response.statusText +
            ' ' +
            response.url +
            '\n' +
            JSON.stringify(await response.json()));
    }
}