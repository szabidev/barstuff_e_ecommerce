import { getDefaultHeaders } from '@/util/fetch';
import { API_URL } from '../environment';

export async function createOrGetUser(email: string): Promise<Response> {
  const url = new URL('api/users', API_URL);
  // console.log(url);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email, name: 'test' }),
  });

  return response;
}

export async function login(email: string): Promise<Response> {
  const url = new URL('api/users/login', API_URL);
  // console.log(url);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email }),
  });

  return response;
}

export async function me(): Promise<Response> {
  const url = new URL('api/users/me', API_URL);
  // console.log(url);
  const response = await fetch(url, {
    method: 'GET',
    headers: await getDefaultHeaders(),
  });

  return response;
}
