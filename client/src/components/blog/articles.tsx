import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import marked from 'marked'
import {respond, fonts,Text} from '../../styles'
import { useIntl } from "react-intl";
import {IoMdTimer} from 'react-icons/io'

interface ArticleProps{
  content?: string;
  created_at?: string;
  date?: string;
  id?: number;
  image?: any;
  published_at?: string;
  title?: string;
  updated_at?: string
}

export default function () {
  const [articles, setArticles] = useState<ArticleProps[]>([])

  useEffect(()=>{
    fetch('https://api.itcontext.nl/articles').then(res=>res.json()).then(data=>setArticles(data)).catch(e=>console.error(e))
  },[])

  console.log(articles)


  return (
    <Articles>
        {articles.map(article=>{

          function getMarkdownText() {
            var rawMarkup = marked(article.content!, {sanitize: true});
            return { __html: rawMarkup };
          }

          const content = marked(article.content!)

          return <Article key={article.id}>
            <h3>{article.title}</h3>
            <Date><IoMdTimer/>{article.date}</Date>
            <Content dangerouslySetInnerHTML={getMarkdownText()}/>
          </Article>
        })}
      </Articles>
  )
}
const Articles = styled.div`
  padding: 2rem;
  
  display: grid;
  grid-template-columns: 1fr;

  ${()=>respond('m', 'grid-template-columns: 1fr 1fr;')}
`
const Article = styled.div`
  width: 90vw;
  margin: 2rem auto;
  background-color:${p=>p.theme.bg};
  h3{
    padding: 1rem 2rem;
    font-size: 2.5rem;
    font-weight:700;
    font-family: ${fonts.gayathri};
    background-color:${p=>p.theme.primary};
    color:${p=>p.theme.bg};
  }


`
const Date = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    font-size: 2rem;

    svg{
      color:${p=>p.theme.warm};
      margin-right: 1rem;
    }
`
const Content =styled.div`
  margin: 2rem auto;
  padding: 2rem;

  ol{
    padding-left: 2rem;

    li{
      font-weight: 700;
    }
  }
  p,li{
    font-size: 2.2rem;
    font-family:${fonts.cormoran};
  }

  pre{
    margin: 2rem auto;
    white-space: break-spaces;
    padding: 1rem;
    background-color: ${p=>p.theme.greyDark};
  }
  code{   
    font-size: 1.6rem;   
    color: gold;
  }
`