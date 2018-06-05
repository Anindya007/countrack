import React, { Component } from 'react';


export default class Form extends Component{
	
	constructor(props){
		super(props);
		
		this.handleInput.bind(this);
		this.handleChecked.bind(this);
		this.saveActivityForm.bind(this);
		
		//this.text=React.createRef();
		//this.icons = React.createRef();
		
	 	 
	 }
	
	state ={name:"",nature:"Good",icon:"",icon_names: ['icon-book','icon-briefcase','icon-beer','icon-camera','icon-coffee','icon-clock','icon-glass','icon-flight','icon-food','icon-moon','icon-music','icon-video']};
		
	
	 componentWillReceiveProps(nextProps){
		
		//cannot call the focus() on this ref .Don't know why.Hence printing the ref
		/*
		if( nextProps.mode)
		console.log(this.text);
		 */
	 }
	
	handleInput(e){
		this.setState({name:e.target.value});
		//console.log(this.state.name);
		e.preventDefault();
	}
	
	handleChecked(e){
		let nature = e.target.checked?'Good':'Bad';
		this.setState({nature:nature});
		//console.log(this.state.nature);
		e.preventDefault();
	}
	
	handleIcon(e){
		
		let icon=e.target.className.split('-')[1];
		//slice() returns a shallow copy of the array in the state
		let  icon_names = this.state.icon_names.slice();
		
		icon_names[icon_names.indexOf(e.target.className)]  = e.target.className + ' selected';
		
		this.setState({icon:icon,icon_names:icon_names});
		
		e.preventDefault();
	}
	
	saveActivityForm(e){
	//Cannot access any DOM specific properties of Ref.Others are saying that they can be accessed in lifecycle hooks only 	
		//let icon = this.icons.innerHTML;
		//console.log(icon);
		
		
		let activity = {name:this.state.name,nature:this.state.nature,icon:this.state.icon};
		
		this.props.showActivityList(activity);
		
		this.resetActivityForm();
		this.hideActivityForm();
	}
	
	hideActivityForm(e){
		this.props.hideMode(false);
	}
	
	resetActivityForm(){
		let  icon_names = this.state.icon_names.slice();
		
		let selected_class;
		icon_names.forEach((e) => {
						if(e.match("selected$"))
								selected_class = e;
		}	
						)
		
		icon_names[icon_names.indexOf(selected_class)] = selected_class.split(" ")[0];
		this.setState({name:"",icon_names:icon_names});
	}
	
  render(){	
	  let cls = "io  container " + (this.props.mode?"form-mode":"action-mode");
	 	  
	 return(
		<section className={cls}>
        <a className="button-purple" id="addActivity" onClick={(e) => this.props.showActivityForm(e)}> <em>+</em> Add new activity to track</a>
      <form>
          <section className='row'>
            <input type="text" placeholder="Name (e.g. Workout)" name="activityName"  onChange={(e) => {this.handleInput(e)}} value={this.state.name}></input>
            <label for="nature"><input type="checkbox" defaultChecked="checked" id="nature" name="nature" onChange={(e) => {this.handleChecked(e)}} 
			></input> Good </label>
          </section>
          <section className='row' >
            <div className="icons" >
			{this.state.icon_names.map((e,index) => <i className={e}  onClick={(e) => this.handleIcon(e)} key={index}></i> )}
            </div>
            <div className="row actions">
              <a className="button-purple" id="saveActivity" onClick={(e) => {this.saveActivityForm(e)}}>&#10004; Save</a>
              <a className="button-grey" id="cancelActivity" onClick={(e) => {this.hideActivityForm(e)}}>&#10008; Cancel</a>
            </div>
          </section>
		 </form>
		</section>
	
		
    )

  }
}