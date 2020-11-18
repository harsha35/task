import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import SearchIcon from '@material-ui/icons/Search';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from './image.jpg';
class Header extends React.Component{
    render(){
        return(
            <div>
                <Card className="rootss">
                    <CardContent>
                
    <nav className="navbar">
      <ul className="navbar-nav">
          <li className="nav-item">
          <img className="shift2" src={logo}></img>
          <Link className="nav-links" to="/">SuperNebr</Link>
          </li>
      <li className="nav-item">
          <Link className="nav-link2" to="/1">Community 1</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link3" to="/1">Register as a seller</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/2">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/3">Share/Rent</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/4">Chit-Chat</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/5">Create Activity</Link>
        </li>


        <li className="nav-items1">
          <Link className="nav-link" to="/7">< SportsEsportsOutlinedIcon/></Link>
        </li>

        <li className="nav-items1">
          <Link className="nav-link" to="/6"><SearchIcon /></Link>
        </li>
        
        <li className="nav-items1">
          <Link className="nav-link" to="/8"><NotificationsIcon/></Link>
        </li>
        <li className="nav-items1">
          <Link className="nav-link" to="/9"><ShoppingCartIcon/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/11">Login</Link><span className="heads">or</span>
          </li>

          <li className="nav-item">
    
          <Link className="nav-link1" to="/10">Register</Link>
        </li>

      </ul>
    </nav>

    </CardContent>
    </Card>
  </div>
            
        )
    }
}
export default Header;