import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

const buttonStyle =  {
  display: 'grid',
  backgroundColor: '##1d77ab',
  textAlign: 'center',
  paddingTop: '5vh',
  fontFamily: 'Roboto',
  color: 'black',
  fontSize: '25px',
}

const addKegStyle = {
  padding: '30px',
  border: 'solid red',
  borderWidth: 'thick',
  borderRadius: '30px',
  fontSize: '25px',
}

const addReturnStyle = {
  padding: '30px',
  border: 'solid green',
  borderWidth: 'thick',
  borderRadius: '30px',
  fontSize: '14px',
  marginLeft: '30px'
}

const navstyle ={
  backgroundColor: 'lightblue',
  margin: '20px',
  marginTop: '20px',
  marginLeft: '20px',
  border: 'solid red',
  borderWidth: 'thick',
  borderRadius: '30px',
  padding: '2px',
  height: '19vh',
  width: '10vh',
  fontSize: '25px',
  textAlign: 'center',
  margin: '10'
}


function NewKegForm(props){

  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _pintsRemaining = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: _name.value,
      brand: _brand.value,
      price: _price.value,
      alcoholContent: _alcoholContent.value,
      pintsRemaining: _pintsRemaining.value,
      id: v4()});

      _name.value = '';
      _brand.value = '';
      _price.value = '';
      _alcoholContent.value = '';
      _pintsRemaining.value = '';
    }

    return (
      <div>
        <ul>

          <form onSubmit={handleNewKegFormSubmission}>
            <li style={buttonStyle}><input
              type='text'
              id='names'
              placeholder='Name'
              ref={(input) => {_name = input;}}/></li>
            <li style={buttonStyle}><input
              type='text'
              id='brand'
              placeholder='Brand'
              ref={(input) => {_brand = input;}}/></li>
            <li style={buttonStyle}><input
              type='text'
              id='price'
              placeholder='Price'
              ref={(input) => {_price = input;}}/></li>
            <li style={buttonStyle}><input
              type='text'
              id='alcoholContent'
              placeholder='Alcohol Content'
              ref={(input) => {_alcoholContent = input;}}/></li>
            <li style={buttonStyle}><input
              type='number'
              id='pintsRemaining'
              placeholder='Pints Remaining'
              ref={(input) => {_pintsRemaining = input;}}/></li>
            <br/>
            <br/>

            <button style={addKegStyle}type='submit'>Add Keg</button>
              <br/>
              <br/>
                <br/>










            </form>
          </ul>
          <Link to="/" style={addReturnStyle}>Go back to Keg List </Link>
        </div>
      );
    }

    NewKegForm.propTypes = {
      onNewKegCreation: PropTypes.func
    };
    export default NewKegForm;
