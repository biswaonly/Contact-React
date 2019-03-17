import React, { Component } from 'react'
import "./leftPart.css";
import { connect} from 'react-redux';
import { withRouter } from 'react-router';
import ContactCard from './ContactCard';
import LeftHeader from './LeftHeader';

class LeftPart extends Component {
	render() {
		return (
			<div className="contact_left_part">
				<LeftHeader />
				<div className="contact_list">
					{this.props.data.map((item)=>{
						return(
							<ContactCard item={item} key={item.id}/>
						)
					})}
				</div>
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
		
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(LeftPart));