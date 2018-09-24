import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './LandingPage.css'
import logo from '../../../assets/img/brand/logo.png';
import graph from '../../../assets/img/image/graph.png';

class LandingPage extends Component{

	render(){
		return(
			<div className="app align-items-center">
				<div className="container-fluid" id="part1">
					<div className="row">
						<div className="col-6" id="part1-1">
							<img src = {logo} alt="Logo" className="logo-image"/>
							<h1>An IoT to <span className="bold">understand</span> 
							<br /> your <span className="bold">customers</span> better</h1>
							<button type="button" class="btn btn-light btn-lg">Register Now</button>
						</div>
						<div className="col-6">
							<ReactPlayer url= "https://www.youtube.com/watch?v=ysz5S6PUM-U" id="video" />
						</div>
						<div className="col-12" id="scroll-area">
							<p className = "align-bottom" id="scroll-more">
								<i class="material-icons">keyboard_arrow_down</i>
									Scroll More to Know More
								<i class="material-icons">keyboard_arrow_down</i>
							</p>
						</div>						
					</div>
				</div>
				<div className="container-fluid" id="part2">
					<div className="col-12">
						<h2 className="bring-business">Bring Your Business to <span className="bold underline">Another Level</span></h2>
					</div>
					<div className="row">
						<div className="col-4">
							<img src = {graph} alt="Logo" className="graph-image"/>
						</div>
						<div className="col-8">
							<p className="bring-explain">
								<span className="bold">Skye</span> is an IoT which is designed to help you understand more about 
							your customer and their habits. Skye will gives you a data about the 
							<span className="bold"> amount of people that comes to your shop on a frequency of time. </span> 
							It could be every hour, every day, even on every month. </p>
							<p className="bring-explain">
							That alone is enough for you to create a <span className="bold">much better business 
							decision </span>such as to create an event on your shop or making a better customer 
							targeting for your shop. 
							<span className="bold underline"><br />Skye will help you bring your business to another level.</span>
							</p>
							<button type="button" class="btn btn-primary btn-lg">Learn More</button>
						</div>
					</div>
				</div>
				<div className="container-fluid" id="part3">
					<div className="row">
						<div className="col-12">
							<div className="pricing">
								<h3><span className="bold">All In Pricing</span></h3>
								<hr />
								<h2><span className="super">Rp</span><span className="bold">100.000</span></h2>
								<p>/Outlet/Camera/Month</p>
								<h4><span className="bold">Free Support</span> and
								<span className="bold"> No Contract</span></h4>
							</div>
							<div className="pricing-button"><span className="bold">Register Now</span></div>
						</div>
					</div>
				</div>
				<div className="container-fluid" id="part4">
					<div className="row">
						<div className="col-6">
							<h3><span className="bold">Are you ready</span> to bring your
							<br /> business to the <span className="bold">next level</span>&#63;</h3>
						</div>
						<div className="col-6">
							<button type="button" class="btn btn-light btn-lg yes-ready">Yes, I'm Ready</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LandingPage;