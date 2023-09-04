/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/hacker-1.jpg";

const imageAltText = "An AI generated hacker photo";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Cisco Certified CyberOps Associate",
    description:
      "Certified by Cisco to perform CyberSecurity Operations like Digital Forensics, Malware Analysis and many more.",
    url: "https://www.credly.com/badges/71e6eef7-b0cd-4bec-a6c0-ab629d726a08/linked_in_profile",
  },
  {
    title: "ISC2 Certified in CyberSecurity",
    description:
      "Entry-Level certification in Cybersecurity by the International Information System Security Certification Consortium",
    url: "https://www.credly.com/badges/f380f81a-232a-457b-8fa3-b0f552debd87/linked_in_profile",
  },
  {
    title: "My Resume",
    description:
      "Link to a folder containing both of my resumes. Includes my experience and abilities as a Cyber Security Analyst and as a CM.",
    url: "https://drive.google.com/drive/folders/1ORofpA5uD4F7zoZZoFJicgRbJ-l-LA2Q?usp=drive_link",
  },
  {
    title: "Meta Certified Community Manager",
    description:
      "Meta Certification after training to implement tested community strategies for growth and engagement",
    url: "https://www.credly.com/badges/220f1172-e224-491b-998e-a20218d9497e/linked_in_profile",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
