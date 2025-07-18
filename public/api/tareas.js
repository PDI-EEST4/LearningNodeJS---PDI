const API_URL = 'http://localhost:8000/tareas'

export async function getTareas() {
  const response = await fetch(API_URL)
  const tareas = await response.json()

  return tareas
}

export async function createTarea(tarea) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tarea)
  })
  const data = await response.json()
  return data;
}