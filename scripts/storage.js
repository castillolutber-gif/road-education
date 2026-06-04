import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
import { app } from "./firebase.js";

const db = getFirestore(app);

// Guardar puntaje, usuario del usuario en Firestore
export async function guardarPuntaje(uid, puntaje, nombre) {
  const ref = doc(db, "usuarios", uid);
  await setDoc(ref, { puntaje, nombre }, { merge: true });
}

// Obtener puntaje del usuario desde Firestore
export async function obtenerPuntaje(uid) {
  const ref = doc(db, "usuarios", uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    return snap.data().puntaje;
  }
  return 0;
}