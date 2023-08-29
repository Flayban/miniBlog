import styles from "./Search.module.css"
//hooks
import { useFetchDocuments } from '../../Hooks/useFetchDocuments'
import { useQuery } from '../../Hooks/useQuery'

//Components
import PostDetail from '../../components/PostDetail'
import { Link } from 'react-router-dom'
const Search = () => {
  const query = useQuery()
  const search = query.get("q")
  const {documents: posts} = useFetchDocuments("posts", search)
  return (
    <div className={styles.search_container}>
        <h2>Search</h2>
        <div className={styles.nopost}>
            {posts && posts.length === 0 && (
                <>
                  <p>Nenhum dado encontrado</p>
                  <Link to ="/" className ="btn btn-dark">Voltar</Link>
                </>
            )}
            {posts && posts.map((post)=> (
              <PostDetail key={post.id} post={post}/>
            ))}
        </div>
    </div>
  )
}

export default Search