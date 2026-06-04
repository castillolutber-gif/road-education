import { guardarPuntaje, obtenerPuntaje } from "./storage.js";

let puntajeActual = 0;

export function incrementarPuntaje(cantidad) {
  puntajeActual += cantidad;
}

export function obtenerPuntajeActual() {
  return puntajeActual;
}

export function resetearPuntaje() {
  puntajeActual = 0;
}

export async function guardarPuntajeUsuario(uid, nombre) {
  await guardarPuntaje(uid, puntajeActual, nombre);
}

export async function cargarPuntajeUsuario(uid) {
  puntajeActual = await obtenerPuntaje(uid);
  return puntajeActual;
}