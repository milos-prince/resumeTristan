import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import Resume from "./resume"
import Style from "../styles/global.css"

import linkedIN from "../images/linkedIn.svg"
import dl from "../images/download.svg"
import profile from "../images/t1.jpg"


const Projects = () => (

    <div className="projectsContentSection">
      <div className="quarterBox bg-paragon"><a href="https://www.paragon-erp.com"><div className="a"><h2>paragon-erp.com</h2><p>As an employee of Jonar, I was responsible for building and launching of a new website promoting Jonar's flagship product, ParagonERP.</p></div></a></div>
      <div className="quarterBox bg-jonar"><a href="https://www.wikett.com"><div className="b"><h2>wikett.com</h2><p>Product site for Wikett by Jonar, built using React & Gatsby</p></div></a></div>
      <div className="quarterBox bg-evans"><a href="https://www.janeevans.ca"><div className="c"><h2>janeevans.ca</h2><p>Portfolio site built for artist Jane Evans to showcase her work and methods.</p></div></a></div>
      <div className="quarterBox bg-ufcw"><a href="https://www.ufcw1400.ca"><div className="d"><h2>ufcw1400.ca</h2><p>Information portal built for a local union, the UFCW1400, to host documents and provide updates to members.</p></div></a></div>
    </div>

)

export default Projects
