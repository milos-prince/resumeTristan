import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/resume"
import Projects from "../components/projects"
import linkedIN from "../images/linkedIn.svg"
import dl from "../images/download.svg"
import profile from "../images/t1Compressed.jpg"
import resume from "../../static/resumeMar2020.pdf"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
    <div className="introduction">
    <div className="rainbowWrap"><div className="titleWrapper"><h1>Tristan Biehn</h1></div></div>
    <h2>UX/UI Designer</h2>
    <p className="bio">I draw from a background in Anthropology and ethnographic research to bring critical insights, incisive analysis, and a well-honed sense of empathy to the field of user experience. For UI work, I tap a lifelong passion for art and design that was never quite snuffed out by people telling me I’d “never get a job doing that”.</p>
    <p>Get in touch or check me out on LinkedIn.</p>
    </div>

    <div className="photoWrapper">
      <img src={profile} alt="Profile picture"/>
    </div>

  </section>
  <div className="mainContentWrapper">
  <div className="column">
  <section className="projects">
  <div className="rainbowWrap"><div className="titleWrapper">
      <h1>Projects</h1>
      <div className="fancyBox"><div className="d-flex"><p>Projects</p><img src={dl} /></div></div>
    </div>
    </div>
    <Projects />
  </section>
  <section className="resume">
  <div className="rainbowWrap"><div className="titleWrapper">
      <h1>Resume</h1><div className="fancyBox"><a className="no-ul" href={resume} download><div className="d-flex"><p>Resume</p><img src={dl} alt="download icon"/></div></a></div>
      </div></div>
      <div className="resumeSection">
      <h2>
      General Skills
      </h2>
      <p>
      Design tools: Sketch, InVision, Figma
      Designing for software, mobile, and web.
      Paying close attention to detail without losing track of the larger scale.
      Collecting and analysing data, identifying and solving complex problems.
      Translating ideas and facilitating communication between diverse groups.
      Working within an agile design process, collaborating with other internal teams.
      </p>
      </div>
      <div className="resumeSection">
      <h2>
      UI
      </h2>
      <p>
      Developing mockups and prototypes.
      Designing graphic interface elements.
      Ensuring continuity in visual elements throughout the project.
      Creating, using, and adding to component libraries and style guides.
      Illustrating design ideas using storyboards, process flows, and site maps.
      </p>
      </div>
      <div className="resumeSection">
      <h2>
      UX
      </h2>
      <p>
      Project planning and communication.
      Developing wireframes, mockups, and prototypes.
      Mobilizing qualitative and quantitative research techniques.
      Communicating design ideas and prototypes to developers.
      Gathering and evaluating user requirements in collaboration with other teams.
      </p>
      </div>
      <div className="resumeSection">
      <h2>
      Recent Employment History
      </h2>
      <ul>
        <li>UX/UI Designer at Jonar <span className="gray">2018 – 2019.</span></li>
        <li>Research Assistant <span className="gray">2015 – 2017.</span></li>
        <li>Teaching Assistant <span className="gray">2015 – 2017.</span></li>
      </ul>
      </div>
      <div className="resumeSection">
      <h2>
      Education
      </h2>
      <p>
      Master’s in Cultural Anthropology at Concordia University <span className="gray">Ongoing.</span>
      <br />
      Bachelor’s with Honours in Sociology and Anthropology from Concordia University.
      </p>
      </div>
  </section>
  <div className="d-flex lastLine"><p className="my-1">Oh hey you made it to the bottom! </p><a href="mailto:michael@freedomgopher.com" className="no-ul"><div className="fancyBox2"><p className="cm">Contact me</p></div></a></div>
  </div>
  </div>
  </Layout>
)

export default IndexPage
