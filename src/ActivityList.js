import React, { Component } from 'react';
let randomIdGenerator = require('random-id-generator');


export default class ActivityList extends Component{

constructor(props){
super(props);
}	
state={activityList:[]};

persistActivity(list){
	//If i don't call the slice the list object passed by the caller gets changed and gives an empty array
	window.localStorage.setItem(randomIdGenerator(), JSON.stringify(list.slice().pop()));
}



render(){
	
	let activityList = this.props.activityList;
	
	console.log(activityList);
	
	if(activityList.length !== 0)
	{
	this.persistActivity(activityList);
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



