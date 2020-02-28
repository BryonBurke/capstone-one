
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const columnHeadingStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
};

const headinglocationStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function Keg(props){


  const kegInformation =
  <div>
    <div style={columnHeadingStyles}>
      <h3 style={headinglocationStyles}>{props.name}</h3>
      <h3 style={headinglocationStyles}>{props.brand}</h3>
      <h3 style={headinglocationStyles}>{props.price}</h3>
      <h3 style={headinglocationStyles}>{props.alcoholContent}</h3>
      <h3 style={headinglocationStyles}>{props.pintsRemaining}</h3>


      
    </div>
  </div>



  if (props.currentRouterPath === '/editkeg'){
    return (
      <div onClick={() => {alert('hey, you just clicked the keg belonging to ' + props.names);}}>
        {kegInformation}
      </div>
    );
  } else {
    return (
      <div>
        {kegInformation}
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.number.isRequied,
  currentRouterPath: PropTypes.string

};

export default Keg;
