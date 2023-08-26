import styles from "./CreatPost.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"

const CreatPost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [bory, setBory] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const handSubmit = (e) =>{
    e.preventDefault()
  }


  return (
    <div className={styles.create_post}>
        <h1>Crie sua postagem</h1>
        <p>Compartilhe seus pensamentos</p>
        <form onSubmit={handSubmit}> 
          <label>
            <span>Titulo:</span>
            <input type="text" name="title" required placeholder="Escreva o titulo da sua postagem" onChange={(e)=> setTitle(e.target.value)} value={title}/>        
          </label>
          <label>
            <span>URL da imagem:</span>
            <input type="text" name="image" required placeholder="Insira uma imagem" onChange={(e)=> setImage(e.target.value)} value={image}/>        
          </label>
          <label>
            <span>Conteúdo:</span>
            <textarea name="bory" required placeholder="Escreva seus pensamentos" onChange={(e)=> setBory(e.target.value)} value={bory} ></textarea>        
          </label>
          <label>
            <span>Tags:</span>
            <input type="text" name="tags" required placeholder="Insira as tags" onChange={(e)=> setTags(e.target.value)} value={tags}/>        
          </label>
          <button className="btn">Postar</button>
          
        </form>
    </div>
  )
}

export default CreatPost