import React from 'react';
import NavBar from './NavBar';
import './FirstPage.css';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

const FirstPage = () => {
  return (
    <div class="box">
    <NavBar/>
    <ComponentOne/>
 <ComponentTwo/>
   
    </div>
  );
}

export default FirstPage;
