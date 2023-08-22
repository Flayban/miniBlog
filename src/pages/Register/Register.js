import styles from "./Register.module.css"
import { useState, useEffect } from "react"

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()

    setError("")

    const user = {
        displayName,
        email,
        password
    }

    if(password != confirmPassword){
        setError("As senhas devem ser iguais!")
        return
    }
    console.log(user)
  }

  return (
    <div className={styles.register}>
        <h1>Registre-se no Blog para realizar suas postagens</h1>
        <p>Crie o seu usuário e compartilhe as suas historias!</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text" name="displayName" required placeholder="Nome do usuário" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
            </label>
            <label>
                <span>Email:</span>
                <input type="email" name="email" required placeholder="E-mail do usuário" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name="password" required placeholder="Insira sua senha" value={password} onChange={(e) => setPassWord(e.target.value)}/>
            </label>
            <label>
                <span>Confirmação de senha:</span>
                <input type="password" name="confirmPassword" required placeholder="Confirme sua senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>
            <button className="btn">Registrar</button>
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register