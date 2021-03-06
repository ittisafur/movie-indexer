import { FunctionComponent } from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import { FaTv } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar: FunctionComponent = () => {
  return (
    <nav className='nav-wrapper text-white font-mont font-semibold lg:flex flex-col w-24 hidden h-screen bg-dark-550 text-center md:flex'>
      <div className='mb-5'>
        <h1 className='text-xl'>
          <Link to='/'>TMDb</Link>
        </h1>
      </div>
      <div>
        <ul>
          <li className='my-8'>
            <Link to='/'>
              <div className='flex flex-col items-center'>
                <BiCameraMovie size={36} />
              </div>
            </Link>
          </li>
          <li className='my-8'>
            <Link to='/tvshows'>
              <div className='flex flex-col items-center'>
                <FaTv size={32} />
              </div>
            </Link>
          </li>
          <li className='my-8'>
            <a className='text-xl' href='/#'>
              <div className='flex flex-col items-center'>
                <IoGameController size={32} />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
