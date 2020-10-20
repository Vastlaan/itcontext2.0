import React, {useEffect, useState} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import marked from 'marked'
import Article from '../articleTemplate'



type TParams = { id: string };

interface ArticleProps{
  categories?: any[];
  content?: string;
  created_at?: string;
  date?: string;
  id?: number;
  image?: any;
  published_at?: string;
  title?: string;
  updated_at?: string
}

export default function ({match}: RouteComponentProps<TParams>){

  const {id} = match.params

  const [article, setArticle] = useState<ArticleProps>({})
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch(`https://api.itcontext.nl/articles/${id}`)
    .then(res=>res.json())
    .then(data=>{
      setArticle(data)
      setLoading(false)
    })
    .catch(e=>console.error(e))
  },[])

  function getMarkdownText() {
    var rawMarkup = marked(article.content!, {sanitize: true});
    return { __html: rawMarkup };
  }

  if(!loading){
    return (
      <Article id={article.id!} title={article.title!} date={article.date!} categories={article.categories!} markup={getMarkdownText()}/>
    )
  }
  else{
    return(
      <div>loading data...</div>
    )
  }
  
  
}
