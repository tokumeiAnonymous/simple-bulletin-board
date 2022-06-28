import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function CreateArticleForm({isOpen, openForm, createArticle}) {

  const dialogRef = useRef();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    isOpen ? dialogRef.current.showModal() : dialogRef.current.close();
  }, [isOpen])

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleContentChange(e) {
    setContent(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    createArticle(prev => ({...prev, data: [...prev.data, {
      id: uuidv4(),
      title: title,
      content: content,
      createdDate: '',
      upvote: 0,
      downvote: 0,
    }]}))
    openForm(false);
    setTitle('');
    setContent('');
  }

  function cancelCreate(e) {
    e.preventDefault();
    openForm(false);
    setTitle('');
    setContent('');
  }

  return (
    <dialog 
      ref={dialogRef}
      onSubmit={handleSubmit}
    >
      <form>
        <label htmlFor="title">Title: </label>
        <input 
          type="text" 
          name="title" 
          onChange={handleTitleChange}
          value={title}
        />
        <label htmlFor="content">Content: </label>
        <input 
          type="text" 
          name="content" 
          onChange={handleContentChange}
          value={content}
        />
        {/* created data will be generated */}
        <button type="submit" >
          Create
        </button>
        <button onClick={cancelCreate}>
          Cancel
        </button>
      </form>
    </dialog>
  )
}
