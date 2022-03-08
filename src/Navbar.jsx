import logo from '../src/assets/logo.png';
import '../src/css/navbar.css';
function Navbar()
{
    return (
        <>
            <div className="w-full flex flex-col">
                <div className='flex justify-center my-5'>
                <img  src={logo} height="400px" width="400px" alt="" />
                </div>
                <ul className='flex w-full justify-center'>
                    <li className='mx-4 nav_li capitalize'>Wishlist</li>
                    <li className='mx-4 nav_li capitalize'>cart</li>
                    <li className='mx-4 nav_li capitalize'>orders</li>
                    <li className='mx-4 nav_li capitalize'>notifications</li>
                    <li className='mx-4 nav_li capitalize'>profile</li>
                    <li className='mx-4 nav_li capitalize'>help</li>
                </ul>
            </div>
        </>
    );
}
export default Navbar;