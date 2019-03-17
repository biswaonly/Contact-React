import React, { Component } from 'react'
import "../contact.css";
import { connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router';

class LeftHeader extends Component {
	searchBarClose=(e)=>{
		if(e.keyCode ===27){
			this.ipFocus.blur();
			this.props.addToState({searchBarOpen : false})
		}
	}
	searchBarOpen=(e)=>{
		e.stopPropagation();
		this.props.addToState({searchBarOpen : true})
		setTimeout(() => {
			this.ipFocus.focus();
		}, 100);
	}
	render() {
		return (
			<React.Fragment>
				<div className="contact_left_header">
					<div className={(this.props.searchBarOpen)?"search_bar_open":"search_bar_close"}>
						<h3>Contacts</h3>
						<div className="space"></div>
						<FontAwesomeIcon className="search_icon_fa" onClick={(e)=>this.searchBarOpen(e)} icon={faSearch} />
					</div>
					<div className={(this.props.searchBarOpen)?"search_show":"search_hide"}>
						<input type="search" placeholder="Search..." onKeyUp={(e)=>this.searchBarClose(e)} ref={ip=>{this.ipFocus=ip}}></input>
					</div>
				</div>
				<div className="create_contact">
					<div className="create_contact_logo">
						<FontAwesomeIcon className="user_icon_fa" onClick="" icon={faUserPlus} />
					</div>
					<h5>Create Contact</h5>
				</div>
			</React.Fragment>
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
		addToState : (value)=>{
			const action={type : "ADD_TO_STATE", value}
			dispatch(action);
		}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(LeftHeader));