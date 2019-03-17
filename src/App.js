import React, { Component } from 'react';
import './App.css';
import Contact from './component/Contact';
import { withRouter } from 'react-router';
import { connect} from 'react-redux';

class App extends Component {
  searchBarClose=()=>{
    this.props.addToState({searchBarOpen: false})
  }
  render() {
    return (
      <div className="App" onClick={this.searchBarClose}>
        <Contact />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    ...state
  }
}

function mapDispatchToProps(dispatch){
  return{
		addToState : (value)=>{
			const action={type : "ADD_TO_STATE", value}
			dispatch(action);
		}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));