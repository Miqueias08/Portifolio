import {AiFillPhone,AiOutlineMail,AiFillEnvironment} from 'react-icons/ai';

import "../styles/components/informationcontainer.sass"

const InformationContainer = ()=>{
    return <section id='information'>
      <div className="info-card">
          <AiFillPhone id='pgone-icon'/>
          <div>
            <h3>Telefone</h3>
            <p>(15)99654-4878</p>
          </div>
      </div>
      <div className="info-card">
          <AiOutlineMail id='email-icon'/>
          <div>
            <h3>Email</h3>
            <p>miqueiasfernando@gmail.com</p>
          </div>
      </div>
      <div className="info-card">
          <AiFillEnvironment id='pin-icon'/>
          <div>
            <h3>Localização</h3>
            <p>São Miguel Arcanjo - SP</p>
          </div>
      </div>

    </section>
}

export default InformationContainer