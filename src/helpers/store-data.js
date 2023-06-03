import { getData } from './';

export async function storeData() {
  const response = await getData();
  if (!response) return;
  response.forEach((item) => {
    localStorage.setItem(item.id, JSON.stringify(item));
  });
  return response;
}
