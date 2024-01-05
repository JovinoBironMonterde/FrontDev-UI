import React from 'react';
import Link from 'next/link';
// import Loadingspinner from './LoadingSpinner'

const Sidebar = () => {
  return (
    <>
      <div className="Sidebar-menu p-4">
        <ul>
            <Link className='L' href="/page/dashboard">
              <div className="Link p-2 rounded w-100">Dashboard</div>
            </Link>

            <Link className='L' href="/page/Profile">
              <div className="Link p-2 rounded w-100">Profile</div>
            </Link>
          
            <Link className='L' href="/page/buttons">
              <div className="Link p-2 rounded w-100">Buttons</div>
            </Link>
          
            <Link className='L' href="/page/cards">
              <div className="Link p-2 rounded w-100">Card</div>
            </Link>
          
            <Link className='L' href="/page/shadow">
              <div className="Link p-2 rounded w-100">Shadow</div>
            </Link>
          
            <Link className='L' href="/page/widgets">
              <div className="Link p-2 rounded w-100">Widgets</div>
            </Link>
          
            <Link className='L' href="/page/table">
              <div className="Link p-2 rounded w-100">Tables</div>
            </Link>
          
            <Link className='L' href="/page/form">
              <div className="Link p-2 rounded w-100">Form</div>
            </Link>
          
        </ul>
      </div>
    </>
  ); 
};

export default Sidebar;
