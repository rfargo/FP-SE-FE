import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './LandingPage.css'
import logo from '../../../assets/img/brand/logo.png'; 

class LandingPage extends Component{

	render(){
		return(
			<div className="app align-items-center">
				<div className="container-fluid" id="part1">
					<div className="row">
						<div className="col-6" id="part1-1">
							<img src = {logo} alt="Logo" className="logo-image"/>
							<h1>An IoT to <span>understand</span> 
							<br /> your <span>customers</span> better</h1>
							<button type="button" class="btn btn-light btn-lg">Learn More</button>
						</div>
						<div className="col-6">
							<ReactPlayer url= "https://www.youtube.com/watch?v=ysz5S6PUM-U" id="video" />
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="col-12"></div>
				</div>
			</div>
		);
	}
}

export default LandingPage;