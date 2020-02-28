import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
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

const columnHeadingStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
};

const headinglocationStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};







function KegList(){
  return (


    <div >
      <ul>
        <li><Link to ="/newkeg">New Keg</Link></li>
        <li><Link to ="/employee">Employee</Link></li>
        <li><Link to ="/patron">Patron</Link></li>
      </ul>

      <div style={columnHeadingStyles}>

        <h3 style={headinglocationStyles}>Name</h3>
        <h3 style={headinglocationStyles}>Brand</h3>
        <h3 style={headinglocationStyles}>Price</h3>
        <h3 style={headinglocationStyles}>Alcohol Content</h3>
        <h3 style={headinglocationStyles}>Pints Remaining</h3>
      </div>

      {masterKegList.map((keg, index) => (
        <NewKeg
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholcontent ={keg.alcoholcontent}
          pintsRemaining ={keg.pintsRemaining}
          key={index}
          />
      ))}
    </div>


  );
}

export default KegList;
