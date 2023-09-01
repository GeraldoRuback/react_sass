import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiPython,
  DiPhp,
  DiSass
} from 'react-icons/di'

import { BiLogoTypescript } from 'react-icons/bi'
import { RiJavascriptFill } from 'react-icons/ri'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "react", name: "React", icon: <DiReact />},
  { id: "sass", name: "Sass", icon: <DiSass />},
  { id: "ts", name: "TypeScript", icon: <BiLogoTypescript />},
  { id: "js", name: "JavaScript", icon: <RiJavascriptFill />},
  { id: "html", name: "HTML5", icon: <DiHtml5 />},
  { id: "css", name: "CSS3", icon: <DiCss3 />},
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />},
  { id: "mysql", name: "MySQL", icon: <DiMysql />},
  { id: "python", name: "Python", icon: <DiPython />},
  { id: "php", name: "PHP", icon: <DiPhp />}
]


const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer
