export async function getData () {
  const response = await fetch('http://localhost:3000/users')
  if (response.status !== 200) return console.warn('error')
  return await response.json()
}
