const API_URL = "http://localhost:8000/tareas";

export async function getTareas() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function getTarea(id) {
  const response = await fetch(API_URL + `/${id}`)
  return response.json();
}

export async function createTarea(tarea) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tarea),
  });
  return response.json();
}

export async function updateTarea(id, tarea) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tarea),
  });
  return response.json();
}

export async function deleteTarea(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
}