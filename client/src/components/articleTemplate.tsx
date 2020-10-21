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
        
        <Headline>
          <h3>{title}</h3>
        </Headline>
        <Info>
          <Date>
            <IoMdTimer/>
            {date}
          </Date>
          <Read>
            <AiOutlineRead/>
            <span>read time 10 min.</span>
          </Read>
          <Tags>
            <span>tags:</span>
            {categories.map(cat=>{
              return <span key={`category-${cat.id}`}>#{cat.name}</span>
            })}
          </Tags>
        </Info>
        <Content dangerouslySetInnerHTML={markup}/>
        
      </Article>
  )
}

const Article = styled.div`
  width: 90%;
  margin: 5rem auto;
  background-color:${p=>p.theme.bg};
`
const Headline = styled.div`
  margin: 1rem 0;
  padding:  0rem 2rem ;
  border-bottom: 1px solid ${p=>p.theme.greyLight};

  h3{
    
    font-size: 4rem;
    font-weight:600;
    font-family: ${fonts.headline};
    text-transform: uppercase;
    color:${p=>p.theme.greyDark};
    text-align: left;

    ${()=>respond('m','text-align: left;font-size: 2.5rem;')}
    
  }
`
const Info = styled.div`
  padding:0 2rem;
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  font-family: ${fonts.advent};
  
  &>*{
    margin: 0 2rem 0.5rem 0;
  }
  

  ${()=>respond('m','flex-direction: row; flex-wrap: wrap; align-items: center;')}
`
const Read = styled.div`
  display: flex;
  align-items: center;

  svg{
    font-size: 2rem;
    color: ${p=>p.theme.primaryLight};
    margin-right: 1rem;
  }

  span{
    font-size: 2rem;
  }
`
const Date = styled.div`

    display: flex;
    align-items: center;
    font-size: 2rem;
    
    color:${p=>p.theme.greyDark};

    svg{
      color:${p=>p.theme.primaryLight};
      margin-right: 1rem;
    }
`
const Tags = styled.div`
  flex: 1;
  text-align: right;

  span{
    font-size: 1.6rem;
    margin-right: 1rem;
    font-family: "Courier New", sans-serif;
    color: ${p=>p.theme.grey};
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
    font-family: ${fonts.code};
  }
`
