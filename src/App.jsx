import React from 'react';
import Navbar from './Component/Navbar/Navbar/Navbar';
import PriceList from './Component/PriceList/PriceList';
import Dashboard from './Component/Dashboard/Dashboard';
import Phones from './Component/Phones/Phones';


const App = () => {
  return (
    <div>
      <h2 className='text-3xl font-bold text-pink-500'>Shohoz Learn</h2>
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <Phones></Phones>
    </div>
  );
};

export default App;