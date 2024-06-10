import { useNavigate, useLocation } from 'react-router-dom'
import Button from '../components/Button'
import H1 from '../components/H1'
import styles from './Home.module.css'

function Home() {
  const location = useLocation()

  if (location.state?.foi) {
    window.location.reload(true)
  }

  return (
    <section>
      <H1 text="Inicie Sua Visita" />
      <div>
        <Button url="/Cidade" type="button" value="Entrar" />
        <Button url="/QrCode" type="button" value="QR CODE" />
      </div>
    </section>
  )
}

export default Home
