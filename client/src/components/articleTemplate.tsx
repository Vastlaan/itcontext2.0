import React from 'react'
import styled from "styled-components";
import {IoMdTimer} from 'react-icons/io'
import {AiOutlineRead} from 'react-icons/ai'
import {respond, fonts,Text} from '../styles'

interface ArticleProps{
  id: string|number;
  title: string;
  date: string;
  categories: any[];
  markup: {__html: string};
}

export default function ({id, title, date, markup, categories}:ArticleProps) {

  return (
    <Article key={id}>
        <Headline><AiOutlineRead/>{title}</Headline>
        <Date><IoMdTimer/>{date}</Date>
        <Content dangerouslySetInnerHTML={markup}/>
        <Tags>{categories.map(cat=>{
          return <span key={`category-${cat.id}`}>#{cat.name}</span>
        })}
        </Tags>
      </Article>
  )
}

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
    padding: 0rem 2rem;
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
  margin: 0rem auto;
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