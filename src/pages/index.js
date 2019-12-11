import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Style from "../styles/global.css"

import linkedIN from "../images/linkedIn.svg"
import dl from "../images/download.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <div className="heroContentWrapper">
    <div className="introduction">
    <h2>Hey,</h2>
    <h2>My name is</h2>
    <h1 className="myNameIs">Bob Lazerman</h1>
    </div>
  </div>
  </section>
  <div className="mainContentWrapper">
  <div className="column">
  <section className="bio">
    <div className="contact">
      <p className="contactInfo"><a href="">Get in touch</a> or check me out on: </p><img src={linkedIN} />
    </div>
    <div className="bioMainContent">
      <div className="photoWrapper"></div>
      <div className="bioWriteup"><p>Mi naskiĝis en Connecticut antaŭ proksimume tridek jaroj. Mia nomo estas David Innes. Mia patro estis riĉa minejposedanto. Li mortis, kiam mi estis deknaŭjara. Laŭ lia testamento mi post la plenaĝiĝo ricevos lian tutan havaĵon, kondiĉe ke dum la antaŭaj du jaroj mi diligente dediĉu min al la heredota granda firmao.</p><p>peepee</p></div>
    </div>
  </section>
  <section className="resume">
    <div className="titleWrapper">
      <h1>Resume</h1><div className="fancyBox"><div className="d-flex"><p>Resume</p><img src={dl} /></div></div>
    </div>
    <div className="resumeContentSection"></div>
  </section>
  <section className="projects">
    <div className="titleWrapper">
      <h1>Projects</h1><div className="fancyBox"><div className="d-flex"><p>Projects</p><img src={dl} /></div></div>
    </div>
    
  </section>
  </div>
  </div>
  </Layout>
)

export default IndexPage
