import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-database.js";

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

// Colocando  as informações do usuário

const signupButton = document.querySelector(".signup__button");
const signupError = document.querySelector(".signup-error");

signupButton.addEventListener('click', async (event) => {
    event.preventDefault()
    const email = document.querySelector(".signup__email").value;
    const password = document.querySelector(".signup__password").value;

    const result = await cadastrarUsuario(email, password);

    if (result.success) {
        signupError.textContent = "Usuário criado com sucesso! Agora faça login.";
    } else {
        signupError.textContent = "Erro: " + result.message;
    }
});

export {login}