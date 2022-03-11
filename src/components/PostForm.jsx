import React, { useState } from "react";
import MyButton from './UI/button/MyButton.jsx';
import MyInput from './UI/input/MyInput.jsx';


const PostForm = ({createPost}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) =>
    {
      e.preventDefault()
      const NewPost = {
          ...post, id: Date.now()
      }
      setPost({title: '', body: ''})
      createPost(NewPost)
    }

    return (
        <form>
            <MyInput 
                value = {post.title}
                onChange = {e => setPost({...post, title: e.target.value})}
                type="text" 
                placeholder="Название поста"/>
            <MyInput 
                value ={post.body}
                onChange = { e => setPost({...post, body: e.target.value})}
                type="text" 
                placeholder="Описание поста"/>
            <MyButton onClick={addNewPost}>Добавить пост</MyButton>
        </form>
    );
};

export default PostForm;