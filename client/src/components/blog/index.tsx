import React from 'react'
import ReactGA from "react-ga";
import Header from './header'
import Articles from './articles'



export default function () {


  ReactGA.pageview("/blog");
  
  return (
    <section>
      <Header/>
      <Articles/>
    </section>
  )
}


