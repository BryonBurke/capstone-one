import React from 'react';
import { Link } from 'react-router-dom'
import NewKeg from './NewKeg'

const masterKegList = [
  {
    name: 'Vortex',
    brand: 'Fort George',
    price: "6.00",
    alcoholcontent: "3.5",
    pintsRemaining:"124"
  },
  {
    name: 'Hefe',
    brand: 'Widmer',
    price: "6.00",
    alcoholcontent: "5.0",
    pintsRemaining:"124"
  },
];




function KegList(){
  return (
    <div >
      <Link to ="/newkeg">New Keg</Link>
      <Link to ="/employee">Employee</Link>
      <Link to ="/patron">Patron</Link>

      {masterKegList.map((keg, index) => (
        <NewKeg
          name={keg.name}
          brand={keg.brand}
          pintsRemaining ={keg.pintsRemaining}
          key={index}
          />
      ))}
    </div>


  );
}

export default KegList;
