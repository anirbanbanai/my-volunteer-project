import { Link } from 'react-router-dom';
import log from '../assets/logos/Group 1329.png'

const Header = () => {
    return (
        <div className='ps-5 pr-4'>
            <div className="navbar bg-base-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-bold text-xl'><Link to='/'>Home</Link></li>
                        <li className='font-bold text-xl'>
                            <Link to='/don'>Donation</Link>
                        </li>
                        <li className='font-bold text-xl'><Link>Event</Link></li>
                        <li className='font-bold text-xl'><Link to='/vol'>Volunteer</Link></li>
                        </ul>
                    </div>
                    <img className='w-[] md:w-[300px]' src={log} alt="" />
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold text-xl'><Link to='/'>Home</Link></li>
                        <li className='font-bold text-xl'>
                            <Link to='/don'>Donation</Link>
                        </li>
                        <li className='font-bold text-xl'><Link>Event</Link></li>
                        <li className='font-bold text-xl'><Link to='/vol'>Volunteer</Link></li>
                    </ul>
                </div>
                <div className='gap-4'>
                    <button className='btn btn-warning'><Link to='/register'>Register</Link></button>
                    <button className='btn '>Admin</button>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
            </div>
        </div>
    );
};

export default Header;