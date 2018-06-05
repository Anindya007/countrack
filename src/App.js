import React, { Component } from 'react';

//import Form from './Form';
import './css/cssnormalize-min.css';
import './css/fontello-embedded.css';
import './css/countrack.css';
import GlobalContainer from './GlobalContainer';

class App extends Component {
  render() {
    return (
		<div className="app">
		<Header></Header>
        <GlobalContainer></GlobalContainer>
      </div>
    );
  }
}



class Header extends Component{
	
	render(){
		return(<header className='container'>
        <h1 className='brand'>countrack<span>.me</span></h1>
        <a className="menu-icon button-purple"><i className='icon-menu'></i></a>
      </header>);
	}
}

export default App;
