import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

function EditKeg(props){
  console.log(props.currentRouterPath);
  return (
    <div>
      <h2>EditKeg</h2>
      <KegList kegList={props.kegList}
      currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

EditKeg.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default EditKeg;
