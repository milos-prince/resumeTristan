import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Style from "../styles/global.css"

import linkedIN from "../images/linkedIn.svg"
import dl from "../images/download.svg"
import gatsbyGuy from "../images/gatsby-icon.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <div className="heroContentWrapper">
    <div className="introduction">
    <h2>Hey,</h2>
    <h2>My name is</h2>
    <h1 className="myNameIs">Michael Pinder</h1>
    </div>
  </div>
  </section>
  <div className="mainContentWrapper">
  <div className="column">
  <section className="bio">
    <div className="contact">
      <p className="contactInfo"><a href="mailto:michael@freedomgopher.com">Get in touch</a> or check me out on</p><a href="https://www.linkedin.com/in/michael-pinder-06b05b194/" className="no-ul"><img src={linkedIN} className="my-1"/></a>
    </div>
    <div className="bioMainContent">
      <div className="photoWrapper"><img src={gatsbyGuy} /></div>
      <div className="bioWriteup"><p>Mi naskiĝis en Connecticut antaŭ proksimume tridek jaroj. Mia nomo estas David Innes. Mia patro estis riĉa minejposedanto. Li mortis, kiam mi estis deknaŭjara. Laŭ lia testamento mi post la plenaĝiĝo ricevos lian tutan havaĵon, kondiĉe ke dum la antaŭaj du jaroj mi diligente dediĉu min al la heredota granda firmao. Beetley beetley beetley beetley beetley beetley beetley.</p></div>
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
    <div className="projectsContentSection">
      
      <div className="quarterBox a">a</div><div className="quarterBox b">b</div><div className="quarterBox c">c</div><div className="quarterBox d">d</div>
    </div>
  </section>
  <div className="d-flex lastLine"><p className="my-1">Oh hey you made it to the bottom! </p><a href="mailto:michael@freedomgopher.com" className="no-ul"><div className="fancyBox2"><p>Contact me</p></div></a></div>
  </div>
  </div>
  </Layout>
)

export default IndexPage
