import styles from "./CreatPost.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useInsertDocument } from "../../Hooks/useInsertDocument"


const CreatPost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBory] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")
  const {user} = useAuthValue()
  const {insertDocument, response} = useInsertDocument("posts")
  const navigate = useNavigate();

  const handSubmit = (e) =>{
    e.preventDefault()
    setFormError("") 
    //Validar URL da imagem
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
    }

    //Criar Array das Tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())
    //Checar todos os valores 
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!")
    }

    console.log(tagsArray);

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    })

    if(formError) return 

    insertDocument({
      title,
      image, 
      bory: body,
      tags,
      uid: user.uid,
      creatBy: user.displayName

    })
    //Redirect to homepage
    navigate("/")

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
            <textarea name="bory" required placeholder="Escreva seus pensamentos" onChange={(e)=> setBory(e.target.value)} value={body} ></textarea>        
          </label>
          <label>
            <span>Tags:</span>
            <input type="text" name="tags" required placeholder="Insira as tags" onChange={(e)=> setTags(e.target.value)} value={tags}/>        
          </label>
          {!response.loading && <button className="btn">Postar</button>}
          {response.loading && (<button className="btn" disabled >Aguarde</button>)}
          {response.error && (<p className="error">{response.error}</p>)}
          {formError && (<p className="error">{formError}</p>)}
          
        </form>
    </div>
  )
}

export default CreatPost