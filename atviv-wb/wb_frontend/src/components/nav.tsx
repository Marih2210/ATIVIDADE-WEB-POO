import 'materialize-css/dist/css/materialize.min.css'
import '../styles/nav.css'
import { Link } from 'react-router-dom';



function Navbar (){ 

    return (
        <>
            <nav className='menu'>
                <div className="nav-wrapper">
                    <ul className='brand-logo'>WB</ul>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/cadastro">Cadastrar Cliente</Link></li>
                        <li><Link to="/">Listagem Clientes</Link></li>
                    </ul>
                </div>
            </nav>
        </>

    )

}

export default Navbar;