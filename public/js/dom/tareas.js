import { deleteTarea } from "../api/tareas.js";

export async function render(tareas) {
  if (tareas.length === 0) {
    const root = document.querySelector('#root');
    root.innerHTML = '<p class="text-center">No hay tareas para mostrar</p>';
    return;
  }

  const root = document.querySelector('#root');
  root.innerHTML = '';  // Limpiamos el HTML
  
  tareas.forEach((tarea) => {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title"><a href="./show.html?id=${tarea.id}">${tarea.titulo}</a></h5>
        <p class="card-text">${tarea.descripcion}</p>
        <p class="card-text">${tarea.path}</p>
        <button id="btn-eliminar-${tarea.id}"class="btn btn-danger" data-id="${tarea.id}">Eliminar</button>
      </div>
    `;

    const button = card.querySelector(`#btn-eliminar-${tarea.id}`);
    button.addEventListener('click', async () => {
      await deleteTarea(button.dataset.id);
      location.reload();
    });
    root.appendChild(card);
  })
}