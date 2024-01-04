import React from 'react';
import Link from 'next/link';
// import Loadingspinner from './LoadingSpinner'

const Sidebar = () => {
  return (
    <>
      <div className="ul">
        <li>
          <Link href="/page/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/page/Profile">Profile</Link>
        </li>
        <li>
          <Link href="/page/buttons">Buttons</Link>
        </li>
        <li>
          <Link href="/page/cards">Card</Link>
        </li>
        <li>
          <Link href="/page/shadow">Shadow</Link>
        </li>
        <li>
          <Link href="/page/widgets">Widgets</Link>
        </li>
        <li>
          <Link href="/page/table">Tables</Link>
        </li>
        <li>
          <Link href="/page/form">Form</Link>
        </li>
      </div>
    </>
  ); 
};

export default Sidebar;
