import React from 'react';
import Header from '../../components/Header/Header';
import Underheader from '../../components/Underheader/Underheader';
import Firstsection from '../../components/Firstsection/Firstsection';
import Secondsection from '../../components/Secondsection/Secondsection';
import Featuredproduct from '../../components/Featuredproduct/Featuredproduct';
import Loginpage from '../Loginpage/Loginpage';

function Home() {
  return (
    <>
      {/* <Loginpage /> */}
      <Header />
      <Underheader />
      <Firstsection />
      <Secondsection />
      <Featuredproduct />
    </>
  );
}

export default Home;
