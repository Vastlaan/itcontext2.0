import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components";
import marked from 'marked'
import {respond, fonts,Text, Button} from '../../styles'
import { useIntl } from "react-intl";
import {IoMdTimer} from 'react-icons/io'
import {AiOutlineRead} from 'react-icons/ai'

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
            let rawMarkup = marked(article.content!, {sanitize: true});
            rawMarkup = rawMarkup.substring(0,200)+' ...'
            return { __html: rawMarkup };
          }

          const content = marked(article.content!)
          console.log(article.id)

          return <Article key={article.id}>
            <Headline><AiOutlineRead/><span>{article.title}</span></Headline>
            <Date><IoMdTimer/>{article.date}</Date>
            <Content dangerouslySetInnerHTML={getMarkdownText()}/>
            <Link style={{margin:"0 0 2rem 2rem"}} to={`/article/${article.id}`}>
              <Button>Read more</Button>
            </Link>
            <Tags>{article.categories!.map(cat=>{
              return <span key={`category-${cat.id}`}>#{cat.name}</span>
            })}
            </Tags>
            
          </Article>
        })}
      </Articles>
  )
}
const Articles = styled.div`
  padding: 2rem;
`
const Article = styled.div`
  width: 90vw;
  margin: 2rem auto;
  background-color:${p=>p.theme.bg};

`
const Headline = styled.h3`
  padding: 1rem 2rem;
  font-size: 2.5rem;
  font-weight:700;
  font-family: ${fonts.advent};
  background-color:${p=>p.theme.primary};
  color:${p=>p.theme.bg};
  display: flex;
  align-items: center;

  svg{
    margin-right: 1rem;
    color: white;
  }
`
const Date = styled.div`
    padding:  1rem 2rem;
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-family: ${fonts.advent};
    color:${p=>p.theme.greyDark};

    svg{
      color:${p=>p.theme.warm};
      margin-right: 1rem;
    }
`
const Content =styled.div`
  margin: 0 auto;
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

const Tags = styled.div`
  width: 100%;
  background-color: ${p=>p.theme.primary};
  padding: 1rem 2rem;
  margin-top:2rem;

  span{
    font-size: 1.6rem;
    margin-right: 1rem;
    font-family: "Courier New", sans-serif;
    color: ${p=>p.theme.bg};
  }
`