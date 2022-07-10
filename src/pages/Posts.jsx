import React, {useEffect, useState} from "react";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import usePosts from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";


function Posts() {
      const [posts, setPosts] = useState ([])
      const [filter, setFilter] = useState({sort: '', query: ''})
      const [modal, setModal] = useState(false);
      const [totalPages, setTotalPages] = useState(0); //totalCount состояние, в которое мы будем помещать общее кол-во постов, setTotalCount название функции. 0 постов - потому что мы не получили ответ от сервера
      const [limit] = useState(10);
      const [page, setpage] = useState(1);
      const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);



      const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count'] //достаем из хедера общее количество постов
        setTotalPages(getPageCount(totalCount, limit));// первым параметром передаем количество, вторым лимит
      })

      useEffect(() => {
          fetchPosts()
      }, [page]) //пустой массив, чтобы вынкция отработала только 1 раз

      const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
      }


      //получаем пост из дочернего компонента
      const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
      }

      const changePage = (page) => { // ф-я, которая будет изменять номер страницы и подгружать данные
          setpage(page) // когда мы изменили номер страницы
      }


  return (
    <div className="App">
         <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
            Создать пользователя
         </MyButton>
         <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/> {/*создаем ф-ю обратного вызова */}
         </MyModal>

         <hr style={{margin: '15px 0'}}></hr>
         <PostFilter
            filter={filter}
            setFilter={setFilter}
          />
          {postError &&
              <h1>Произошла ошибка ${postError}</h1>
          }
          {isPostsLoading //если переменная true, то будем показывать крутилку, иначе - список постов
              ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
              : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
          }
          <Pagination 
              page={page} 
              changePage={changePage} 
              totalPages={totalPages}
            />  {/*  передаем пропсами номер страницы и ф-ю, которая этот номер изменяет */}

    </div>
  );
}

export default Posts;