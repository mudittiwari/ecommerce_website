import logo from '../src/assets/logo.png';
import '../src/css/navbar.css';
import { Link } from 'react-router-dom';
function Navbar()
{
    
    return (
        <>
            <div className="w-full flex flex-col">
                <div className='flex justify-center my-5'>
                <img  src={logo} height="400px" width="400px" alt="" />
                </div>
                {localStorage.getItem('user')?
                <ul className='flex w-full justify-center'>
                    <li className='mx-4 nav_li capitalize'><Link to="/wishlist">Wishlist</Link></li>
                    <li className='mx-4 nav_li capitalize'><Link to="/cart">Cart</Link></li>
                    <li className='mx-4 nav_li capitalize'><Link to="/orders">Orders</Link></li>
                    <li className='mx-4 nav_li capitalize'><Link to='/notifications'>Notifications</Link></li>
                    <li className='mx-4 nav_li capitalize'><Link to='/profile'>Profile</Link></li>
                    <li className='mx-4 nav_li capitalize'><Link to='/help'></Link></li>
                </ul>:<h1></h1>}
                <div className='flex justify-center'>
                <input type="text" placeholder='Search' className='w-1/2 my-6 rounded-3xl' style={{'backgroundColor':'rgba(196, 196, 196, 1)'}} />
                </div>
            </div>
        </>
    );
}
export default Navbar;