export async function postData(data) {
  const response = await fetch(`http://localhost:3000/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const user = await response.json();
  localStorage.setItem(user.id, JSON.stringify(user));
  return user;
}
