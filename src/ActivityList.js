import React, { Component } from 'react';


import Records from './records';
import _ from './utility';
//let randomIdGenerator = require('random-id-generator');

const createActivityModel = (activity)  => {
		
		debugger;
		
		 _.merge(activity,{id:'ct-'+_.guid(),records:new Records(new Date()),created:new Date(),updated:new Date()});
	
		return activity;
	}

export default class ActivityList extends Component{

constructor(props){
super(props);
}	
state={activityList:[],persist:false};

persistActivity(){
	//If i don't call the slice the list object passed by the caller gets changed and gives an empty array
	debugger;
	let activity = this.state.activityList.slice().pop();
	window.localStorage.setItem(activity.id, JSON.stringify(activity));
}

componentWillReceiveProps(newProps){
	//debugger;
	
		
	if(!(_.isEqual(newProps.activity,this.props.activity)))
	{
		let activity = createActivityModel(newProps.activity);	
		let newActivityList = [...this.state.activityList,activity];
		this.setState({activityList:newActivityList,persist:true});	
	}
	else
		this.setState({persist:false});

	
	
	}



componentDidMount(){
		
		let activityList = [];
		
		for(let key in localStorage){
			let item = JSON.parse(localStorage.getItem(key));
			//debugger;
			if(key.indexOf('ct-') === 0)
				activityList.push(item);
		}
		
		if(activityList.length != 0)
			this.setState({activityList:activityList});
	}

render(){
	
	let activityList = this.state.activityList;
	
	console.log(activityList);
	
	//debugger;
	
	if(activityList.length != 0 && this.state.persist)
	{
	this.persistActivity();
	}
	
	let list = activityList.map(({name,nature,icon},index) =>{
		
		 let cls1 = "data " +  typeof(icon) !== 'undefined' && icon !== '' ? 'iconed' : ''; 
   let cls2 =   typeof(icon) !== 'undefined' && icon !== '' ? 'icon-' + icon : '' ;
   
		return (
		<article className="activity container" key={index}>
		<section className='row container'>
  <div className={cls1}>
    <i className={cls2}></i>
    <p className="name">{name }</p>
  </div>

  <div className="count container">
    <p className="today"><label>today</label> <em></em></p>
    <p className="total"><label>total</label> <em></em></p>
  </div>

  <div className="controls">
    <a className='button-orange increment' >+1</a>
  </div>
</section>

<section className='row container'>
  <article className='graph'>
  </article>
</section>
</article>
)

	})
   
     
	
	
	return(
	<section className='activity-list container'>
       {list}
	</section>
 )

}

}



