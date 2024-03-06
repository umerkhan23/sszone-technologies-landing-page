import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAkkiVmhGpWBjepV8GXF6uCuWYlNN6xa7A",
  projectId: "fastnascon-df9f0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword };
