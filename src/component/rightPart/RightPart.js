import React, { Component } from 'react'
import { connect} from 'react-redux';
import './rightPart.css';

class RightPart extends Component {
	render() {
		return (
			<div className="contact_right_part">
				<div className="right_part_avatar">
					<h1>AIUHOIU OAUSH SIUHA  IUHAIA IAU  SIUH SIUB SNIOIJ DOIS SODIXO LKNOAS JKNC</h1>
					{/* <img className="right_part_avatar_img" src={require('../../data/img/'+this.props.rightPartData.avatar+'.jpg')}></img> */}
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
    // showCart: ()=>{
    //   const action = { type: 'SHOW_CART'};
    //   dispatch(action);
    // }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RightPart);