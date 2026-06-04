import { escucharSesion, cerrarSesion } from "./auth.js";
import { inicializarUI, mostrarPuntaje } from "./ui.js";
import { guardarPuntajeUsuario, incrementarPuntaje, obtenerPuntajeActual } from "./score.js";

let usuarioActual = null;

escucharSesion(async (user) => {
  if (!user) {
    // Si no hay sesión, regresa al login
    window.location.href = "index.html";
    return;
  }
  usuarioActual = user;
  await inicializarUI(user);
});

document.getElementById("btnLogout").addEventListener("click", async () => {
  if (usuarioActual) {
    await guardarPuntajeUsuario(usuarioActual.uid, usuarioActual.displayName);
  }
  await cerrarSesion();
  window.location.href = "index.html";
});