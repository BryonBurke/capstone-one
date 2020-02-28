import React from 'react';

import PropTypes from 'prop-types';

function NewKeg(props){


  const layoutStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  };
  const locationStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

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

  return (

      <div style={layoutStyles}>
        <div style={locationStyles}>
          <p>{props.name}</p>
        </div>
        <div style={locationStyles}>
          <p>{props.brand}</p>
        </div>
        <div style={locationStyles}>
          <p>{props.price}</p>
        </div>
        <div style={locationStyles}>
          <p>{props.alcoholcontent}</p>
        </div>
        <div style={locationStyles}>
          <p>{props.pintsRemaining}</p>
        </div>
      </div>

  );
}

NewKeg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholcontent: PropTypes.number.isRequired,
};

export default NewKeg;
