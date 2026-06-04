import { cargarPuntajeUsuario } from "./score.js";

export function mostrarPuntaje(puntaje) {
  const elemento = document.getElementById("puntaje");
  if (elemento) elemento.textContent = `Puntaje: ${puntaje}`;
}

export function mostrarUsuario(user) {
  const elemento = document.getElementById("usuario");
  if (elemento) elemento.textContent = user ? `Jugador: ${user.displayName}` : "";
}

export async function inicializarUI(user) {
  mostrarUsuario(user);
  if (user) {
    const puntaje = await cargarPuntajeUsuario(user.uid);
    mostrarPuntaje(puntaje);
  }
}