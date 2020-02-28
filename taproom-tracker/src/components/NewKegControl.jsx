import React from 'react';
import PropTypes from "prop-types";
import ConfirmationQuestions from './ConfirmationQuestions';
import NewKegForm from './NewKegForm';


class NewKegControl extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    formVisibleOnPage: false
  };
    this.handleAuthorizeConfirmation = this.handleAuthorizeConfirmation.bind(this);
}

handleAuthorizeConfirmation(){
  this.setState({formVisibleOnPage: true});
}

render(){
  let currentlyVisibleContent = null;
  if (this.state.formVisibleOnPage){
        currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>;
  } else {
    currentlyVisibleContent = <ConfirmationQuestions onAuthorizeConfirmation={this.handleAuthorizeConfirmation}/>;
  }
  return (
    <div>
      {currentlyVisibleContent}
    </div>
  );
}
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;
