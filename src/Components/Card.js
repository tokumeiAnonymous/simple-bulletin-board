export default function Card({article, updateArticle, openForm}) {
  const {id, title, content, createdDate} = article;
  // const contentPreview = content.substring(0, Math.min(50, content.length));

  function editArticle() {
    openForm(true);
    
  }

  function deleteArticle() {
    updateArticle(prev => {
      return {...prev,data: prev.data.filter(article => id !== article.id)}
    })
  }

  return (
    <div className="card">
      <div>{title}</div>
      <div>{content}</div>
      <div>{createdDate}</div>
      <button onClick={editArticle}>
        Edit
      </button>
      <button onClick={deleteArticle}>
        Delete
      </button>
    </div>
  )
}
