import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, getAuth } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js";
import { ref, push, get, child, getDatabase } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCgvzldJ5iUqI6isDqoI4B62csFn3XMDAA",
    authDomain: "chat-de-conversa-oficial.firebaseapp.com",
    databaseURL: "https://chat-de-conversa-oficial-default-rtdb.firebaseio.com",
    projectId: "chat-de-conversa-oficial",
    storageBucket: "chat-de-conversa-oficial.firebasestorage.app",
    messagingSenderId: "871146675110",
    appId: "1:871146675110:web:e92beb7a5e411fae8f4d67"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Cadastrar e Logar

async function login(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

async function cadastrarUsuario(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

async function cadastrarInfo(nome, id, mensagem) {
    const messagesRef = ref(db, "Informações");
    await push(messagesRef, { nome, id , mensagem});
}

async function cadastrarEmail(nome, email) {
    const emailRef = ref(db, "pessoas");
    await push(emailRef, { nome, email});
}

export {login, cadastrarUsuario, cadastrarInfo, cadastrarEmail}