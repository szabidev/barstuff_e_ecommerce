export async function storeString(key: any, value: any) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
}

export async function readString(key: any) {
  try {
    const value = localStorage.getItem(key);
    if (value !== null) {
      return value.replace(/"/g, '');
    }
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function storeObject(key: any, value: any) {
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(e);
  }
}

export async function readObject(key: any) {
  try {
    const jsonValue = localStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e);
  }
}

export async function removeKey(key: any) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
}
