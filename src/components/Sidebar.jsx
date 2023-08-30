import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Avatar from '../img/eu.jpeg'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Geraldo Ruback de Rezende" />
      <p className="title">Front-End Developer</p>
      <SocialNetworks />
      <InformationContainer />
    </aside>
  )
}

export default Sidebar