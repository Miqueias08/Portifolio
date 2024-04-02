import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di'
import "../styles/components/technologiescontainer.sass"
import { info } from 'sass'

const technologies = [
  {id:"html","name":"HTML5",icon:<DiHtml5 style={{ color: '#E44D26' }}/>},
  {id:"css","name":"CSS3",icon:<DiCss3 style={{ color: '#1572B6' }}/>},
  {id:"js","name":"JavaScript",icon:<DiJsBadge style={{ color: '#F0DB4F' }}/>},
  {id:"node","name":"Node.js",icon:<DiNodejsSmall style={{ color: '#83CD29' }}/>},
  {id:"mysql","name":"MySQL",icon:<DiMysql style={{ color: '#00618A' }}/>},
  {id:"react","name":"React",icon:<DiReact style={{ color: '#61DAFB' }}/>},
]

const TechnologiesContainer = () => {
  return <section className='technologies-container'>
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
      {technologies.map((tech)=>(
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technologies-info">
            <h3>{tech.name}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio blanditiis culpa sed animi quaerat</p>
          </div>
        </div>
      ))}
    </div>

  </section>
}

export default TechnologiesContainer