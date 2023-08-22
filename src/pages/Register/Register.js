import styles from "./Register.module.css"
import { useState, useEffect } from "react"

const Register = () => {
  return (
    <div>
        <h1>Registre-se no Blog para realizar suas postagens</h1>
        <p>Crie o seu usuário e compartilhe as suas historias!</p>
        <form>
            <label>
                <span>Nome:</span>
                <input type="text" name="displayName" required placeholder="Nome do usuário"/>
            </label>
            <label>
                <span>Email:</span>
                <input type="email" name="email" required placeholder="E-mail do usuário"/>
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name="password" required placeholder="Insira sua senha"/>
            </label>
            <label>
                <span>Confirmação de senha:</span>
                <input type="password" name="confirmPassword" required placeholder="Confirme sua senha"/>
            </label>
            <button className="btn">Registrar</button>
        </form>
    </div>
  )
}

export default Register