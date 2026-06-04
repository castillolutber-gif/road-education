import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { app } from "./firebase.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Login con Google
export function loginConGoogle() {
  return signInWithPopup(auth, provider);
}

// Logout
export function cerrarSesion() {
  return signOut(auth);
}

// Escucha si hay un usuario logueado (funciona entre dispositivos)
export function escucharSesion(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user); // user es null si no hay sesión
  });
}