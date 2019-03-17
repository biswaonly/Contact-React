import React, { Component } from 'react'
import { connect} from 'react-redux';
import './contact.css';
import LeftPart from './leftPart/LeftPart';
import RightPart from './rightPart/RightPart';

class Contact extends Component {
	render() {
		return (
			<div className="contact">
				<LeftPart />
				<RightPart />
			</div>
		)
	}
}
function mapStateToProps(state){
  return{
    ...state
  }
}

export default connect(mapStateToProps)(Contact);