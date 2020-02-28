import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const columnHeadingStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
};

const headinglocationStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '30px'
};




function KegList(props){


  return (
    <div>

      <div style={columnHeadingStyles}>
        <p style={headinglocationStyles}>Name</p>
        <p style={headinglocationStyles}>Brand</p>
        <p style={headinglocationStyles}>Price</p>
        <p style={headinglocationStyles}>Alcohol Content</p>
        <p style={headinglocationStyles}>Pints Remaining</p>
      </div>
      <hr/>
        {props.kegList.map((keg) =>
          <Keg
            name={keg.name}
            brand={keg.brand}
            price={"$"+keg.price}
            alcoholContent= {keg.alcoholContent}
            pintsRemaining={keg.pintsRemaining}
            currentRouterPath={props.currentRouterPath}
            key={keg.id}/>
        )}

    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default KegList;
