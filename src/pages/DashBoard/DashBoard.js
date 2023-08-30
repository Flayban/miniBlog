import styles from "./DashBoard.module.css"
import { Link } from "react-router-dom"
//hooks
import {useAuthValue} from "../../context/AuthContext"
import {useFetchDocuments} from "../../Hooks/useFetchDocuments"
import { useDeleteDocument } from "../../Hooks/useDeleteDocument"

const DashBoard = () => {
  const {user} = useAuthValue()
  const uid = user.uid

  //post do usuario
  const {documents : posts, loading} = useFetchDocuments("posts", null, uid)
  
  //Deletar post
  const {deleteDocument} = useDeleteDocument("posts")
 

  if(loading){
    return <p>Carrengando</p>
  }
  return (
    <div className={styles.dashboard}>
        <h2>DashBord</h2>
        <p>Gerencie seus posts</p>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}>
            <p>Nenhum post seu foi encontrado</p>
            <Link to="/posts/creat" className="btn">Criar primeiro post</Link>
          </div>
        ) : (
          <>
            <div className={styles.post_header}>
              <span>Titulo</span>
              <span>Ações</span>
            </div>
            {posts && posts.map((post) =>
            <div key={post.id} className={styles.post_row}>
              <p>{post.title}</p>
              <div>
                <Link to= {`/posts/${post.id}`} className="btn btn-outline">Ver</Link>
                <Link to = {`/posts/edit/${post.id}`}  className="btn btn-outline">Editar</Link>
                <button onClick={()=>deleteDocument(post.id)} className="btn btn-outline btn-danger">Excluir</button>
              </div>

            </div>
            )}
          </>
        )}
        
    </div>
  )
}

export default DashBoard