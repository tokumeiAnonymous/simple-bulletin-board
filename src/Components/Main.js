import Card from './Card';
import { useEffect} from 'react';
import CreateArticleForm from './CreateArticleForm';
import { useLocalStorage } from '../customHooks';

export default function Main({isOpen, openForm}) {
  // fetch data
  // display data
  const [articles, setArticles] = useLocalStorage('articles', {data:[]})

  useEffect(() => {
    localStorage.setItem('articles', JSON.stringify(articles));
  },[articles])
  
  const articleList = articles.data.map((article) => {
    return <Card 
      key={article.id} 
      article={article} 
      updateArticle={setArticles}
      openForm={openForm}
      />
  })
  return (
    <main>
      {articleList}
      <CreateArticleForm 
        isOpen={isOpen}
        openForm={openForm}
        createArticle={setArticles}
      />
      {/* <pre>{JSON.parse(articles, null, 2)}</pre> */}
    </main>
  )
}
