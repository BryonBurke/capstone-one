import React from 'react';
import PropTypes from 'prop-types';

const questionStyle =  {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  backgroundColor: '#a5e892',
  textAlign: 'center',
  paddingTop: '5vh',
  fontFamily: 'Roboto',
  color: 'black',
  fontSize: '25px',

}

const buttonStyle =  {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  backgroundColor: '##1d77ab',
  textAlign: 'center',
  paddingTop: '5vh',
  fontFamily: 'Roboto',
  color: 'black',
  fontSize: '25px',
}



function ConfirmationQuestions(props){
  return (
    <div style={questionStyle}>
      <p>Are you authorized to make changes to the Keg List?</p>
      <button style={buttonStyle} onClick={props.onAuthorizeConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onAuthorizeConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
