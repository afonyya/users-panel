export async function deleteData (id) {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  localStorage.removeItem(id)
}
