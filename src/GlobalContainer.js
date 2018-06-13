import React, { Component } from 'react';

import ActivityList from './ActivityList';
import Form from './Form';


export default class GlobalContainer extends Component{
	/*constructor(props){
		super(props);
	}*/

	state={mode:false,activity:{}};
	
	showActivityForm(e){
		e.preventDefault;
		this.setState({mode:true});
	}
	
	showActivityList(activity){
		
		//let newActivityList = [...this.state.activityList,activity];
		
		this.setState({activity});
	}
	
	hideMode(val){
		this.setState({mode:val});
	}
	
		
	render(){
		
		this.state.activityList;
		return(<div>
						<Form showActivityForm={this.showActivityForm.bind(this)} mode={this.state.mode}  showActivityList={this.showActivityList.bind(this)} 
									hideMode = {this.hideMode.bind(this)}></Form>
						<ActivityList  activity={this.state.activity}></ActivityList>
						</div>
						)
	}
	
	

}