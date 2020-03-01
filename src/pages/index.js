import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/resume"
import Style from "../styles/global.css"

import linkedIN from "../images/linkedIn.svg"
import dl from "../images/download.svg"
import profile from "../images/t1.jpg"


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
      <div className="photoWrapper"><img src={profile} /></div>
      <div className="bioWriteup"><p>I'm a (mostly) front end developer born and raised in Saskatchewan, currently living my best life in Montreal, QC. I use a variety of tools to make beautiful and functional things on the internet. I firmly believe that Skyrim belongs to everybody.<br /><br /> I work alongside a fantastic team at <a href="https://www.jonar.com">Jonar</a> that I am very proud to be a part of.</p></div>
    </div>
  </section>
  <section className="resume">
    <div className="titleWrapper">
      <h1>Resume</h1><div className="fancyBox"><a className="no-ul" href="https://affectionate-colden-9c3357.netlify.com/static/resumeJan2020.pdf" download><div className="d-flex"><p>Resume</p><img src={dl} /></div></a></div>
    </div>
    <div className="resumeContentSection">
      <Resume />
    </div>
  </section>
  <section className="projects">
    <div className="titleWrapper">
      <h1>Projects</h1>
      {/*<div className="fancyBox"><div className="d-flex"><p>Projects</p><img src={dl} /></div></div>
      This is for Tristan's resume*/}
    </div>
    <div className="projectsContentSection">
      
      <div className="quarterBox bg-paragon"><a href="https://www.paragon-erp.com"><div className="a"><h2>paragon-erp.com</h2><p>As an employee of Jonar, I was responsible for building and launching of a new website promoting Jonar's flagship product, ParagonERP.<span className="hideOnS"> Built using Gatsby, a static site generator for React, and deployed with Netlify.</span></p></div></a></div>
      <div className="quarterBox bg-jonar"><a href="https://www.jonar.com"><div className="b"><h2>jonar.com</h2><p>After the ParagonERP.com project, Jonar.com was migrated away from Wordpress and rebuilt, again using Gatsby/ReactJS.</p></div></a></div>
      <div className="quarterBox bg-evans"><a href="https://www.janeevans.ca"><div className="c"><h2>janeevans.ca</h2><p>Portfolio site built for artist Jane Evans to showcase her work and methods. Built in Wordpress.</p></div></a></div>
      <div className="quarterBox bg-ufcw"><a href="https://www.ufcw1400.ca"><div className="d"><h2>ufcw1400.ca</h2><p>Information portal built for a local union, the UFCW1400, to host documents and provide updates to members. Built in Wordpress.</p></div></a></div>
    </div>
  </section>
  <div className="d-flex lastLine"><p className="my-1">Oh hey you made it to the bottom! </p><a href="mailto:michael@freedomgopher.com" className="no-ul"><div className="fancyBox2"><p className="cm">Contact me</p></div></a></div>
  </div>
  </div>
  </Layout>
)

export default IndexPage
