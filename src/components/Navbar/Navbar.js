import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="NavBar" >
      <NavLink to='/'>
          <h3>PetShop</h3>
      </NavLink>

        <div className="Categories">
            <NavLink to={'/category/alimento balanceado'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Alimento Balanceado</NavLink>
            <NavLink to={'/category/alimento medicado'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Alimento Medicado</NavLink>
            <NavLink to={'/category/contactos'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Contactos</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar