import React, {useState} from 'react';
import CustomInput from "./UI/input/CustomInput";
import CustomButton from "./UI/buton/CustomButton";

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});

  function addNewPost(e) {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
      <form>
        {/*Управляемый эелемент*/}
        <CustomInput
            value={post.title}
            onChange= {e => setPost({...post, title: e.target.value})}
            type="text"
            placeholder={'Название поста'}
        />
        <CustomInput
            value={post.body}
            onChange= {e => setPost({...post, body: e.target.value})}
            type="text"
            placeholder={'Описание поста'}
        />
        {/*Неуправляемый эелемент*/}
        {/*<CustomInput
            ref={bodyInputRef}
            type="text"
            placeholder={'Описание поста'}
        />*/}
        <CustomButton onClick={addNewPost}>Создать пост</CustomButton>
      </form>
  );
};

export default PostForm;