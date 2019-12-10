import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Style from "../styles/global.css"

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
  <div className="mainColumn">
  <section className="bio">

  </section>
  </div>
  </div>
  </Layout>
)

export default IndexPage
