import React, { Component } from 'react'
import "../contact.css";
import { connect} from 'react-redux';
import { withRouter } from 'react-router';

class ContactCard extends Component {
	render() {
		return (
			<div className="contact_card">
				<div className="contact_card_avatar">
					<img className="contact_card_avatar_img" src={require('../../data/img/'+this.props.item.avatar+'.jpg')} alt={this.props.item.name}></img>
				</div>
				<p>{this.props.item.name}</p>
			</div>
		)
	}
}

function mapStateToProps(state){
  return{
    ...state
  }
}

function mapDispatchToProps(dispatch){
  return{
		// addToState : (value)=>{
		// 	const action={type : "ADD_TO_STATE", value}
		// 	dispatch(action);
		// }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ContactCard));