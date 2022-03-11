import React, {useState, useRef} from 'react';
import './styles/App.css';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect.jsx';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'React', body: 'React - язык программирования'},
    {id: 2, title: 'HTML', body: 'HTML - язык гипертекстовой разметки'}
  ])
  
  const [selectedSorts, setSelectedSorts] = useState('')


  const createPost = (NewPost) =>
  {
    setPosts([...posts, NewPost])
  }

  const removePost = (post) =>
  {
    setPosts(posts.filter(p => p.id != post.id))
  }

  const sortPosts = (sort) =>
  {
    setSelectedSorts(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }



  return (
    <div className="App">
      <PostForm createPost = {createPost}/>
      <hr style={{margin: "15px 0"}}/>
      <MySelect
      value = {selectedSorts}
      onChange = {sortPosts}
      defaultValue = "Сортировка по"
      options = {[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
      ]}
      />
      {posts.length
      ? 
      <PostList posts = {posts} removePost = {removePost} title = {'Список постов'}/>
      : 
      <h1 style={{textAlign: "center"}}>
        Не найдено постов
      </h1>
      }
    </div>
  );
}

export default App;
