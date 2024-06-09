import styles from './Nav.module.css'
import { FaChevronLeft } from 'react-icons/fa'
import logo from '../img/parque.png'

function Nav(props) {
  return (
    <nav className={styles.ContainerNav}>
      <a href="/">
        <FaChevronLeft />
      </a>
      <img src={logo} alt="" />
      <p>{props.numero}</p>
    </nav>
  )
}

export default Nav
