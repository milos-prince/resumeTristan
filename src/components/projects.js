import React from "react"
import mobile from "../../static/portfolioMobile.pdf"
import filter from "../../static/portfolioFilter.pdf"
import rules from "../../static/portfolioMobile.pdf"
import components from "../../static/portfolioMobile.pdf"

const Projects = () => (

    <div className="projectsContentSection">
      <div className="quarterBox bg-paragon"><a href={mobile} download><h3>Paragon</h3><h2>Mobile</h2></a><p className="hideOnS">Creating a mobile app suitable for a wide variety of users from a massive, feature-rich Enterprise Resource Planning (ERP) system.</p></div>
      <div className="quarterBox bg-jonar"><a href={filter} download><h3>Paragon</h3><h2>Filter & Bulk Actions</h2></a><p className="hideOnS">Allowing Paragon ERP users to locate and make changes to multiple references at once.</p></div>
      <div className="quarterBox bg-evans"><a href={rules} download><h3>Paragon</h3><h2>Rules & Workflows</h2></a><p className="hideOnS">Allowing Paragon ERP users to modify its behaviour to suit their specific business needs by creating “rules” using a natural language wizard.</p></div>
      <div className="quarterBox bg-ufcw"><a href={components} download><h3>Paragon</h3><h2>Component Library</h2></a><p className="hideOnS">Creating a single, consistent source for all Paragon ERP components and assets that would be easily shared by our growing team.</p></div>
    </div>

)

export default Projects
