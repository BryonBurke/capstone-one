import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const styles = {
    backgroundColor: '#34ebd5',
    fontFamily: 'Roboto',
    color: 'white',
    textAlign: 'center',
  };

  const buttonStyle =  {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    backgroundColor: '#34ebd5',
    fontFamily: 'Roboto',
    color: 'white',
    textAlign: 'center',
    fontSize: '25px',
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

  return (
    <div>

      <div style={buttonStyle}>
        <Link to ="/newkeg" style={{ textDecoration: 'none'}}>
          <div style = {navstyle}>
            <p >New Keg</p>
          </div>
        </Link>


        <Link to ="/editkeg" style={{ textDecoration: 'none'}}>
          <div style = {navstyle}>
            <p >Edit Keg</p>
          </div>
        </Link>

        <h1 style={styles}>Tap Room Tracker</h1>

      </div>



    </div>
  );
}

export default Header;
