import React,{Component, Fragment} from 'react';
import Card from "./Card";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import LazyLoad from 'react-lazyload'

class App extends Component {

    constructor(props){
      super(props);
      this.menuItem = React.createRef();
      this.state = {
        items: [],
        originalItems: [],
        active: 'all',
        menuItems: ['all','react.js','jquery','javascript','html',"css"]
      }
    }

    componentDidMount(){
      axios.get('./port.json')
        .then(res =>
            this.setState({
              items: res.data,
              originalItems: res.data
            })
          )
    }

    setValue = (e) =>{
    	let items = this.state.originalItems.slice();
    	let curName = e.target.getAttribute('dataname');
    	let curValue = e.target.getAttribute('datavalue');
    	let newItems = [];
    	if (curValue !== '#all') {
    		newItems = items.filter(item => item.hashtags.includes(curValue));
    	}
    	else{
    		newItems = items;
    	}
    	this.setState({
    		items: newItems,
    		active: curName
    	})
    }

  render(){
    return (
      <Fragment>     
      <div className="section-intro">
      	{this.state.originalItems.length ?
	        <Carousel autoPlay={true} 
	        		  transitionTime={1000} 
	        		  interval={5000}
	        		  swipeable={true} 
	        		  emulateTouch={true} 
	        		  stopOnHover={true}
	        		  showArrows={false}
	        		  showThumbs={false}
	        		  showIndicators={false}
	        		  showStatus={false}
	        		  infiniteLoop={true} >
	        	{this.state.originalItems.slice(0,3).map((item, index) => 
		            <div className="carousel-item" key={index}>
		                <img src={item.image} />
		                <div className="carousel-overlay">
			                <div className="carousel-description">
			                	<h2>{item.name}</h2>
			                	<p>{item.description}</p>
			                	<a href={item.link} target="_blank" className="main-button">Open</a>
			                </div>
		                </div>
		            </div>
	        	)}
	        </Carousel>
      	: <div className="section-loading">Loading</div>}
      </div>
      <div className="section-header">
        <ul className="portfolio-menu">
        	{this.state.menuItems.map((menuItem, index) =>
				<li key={index}
					className={this.state.active === menuItem ? 'portfolio-menu__link_active' : ""} 
					onClick={this.setValue} 
					datavalue={'#' + menuItem}
					dataname={menuItem} >{menuItem}</li>
        	)}
        </ul>
        {this.state.items.length ?
        	<p className="portfolio-selected">{this.state.items.length} out of {this.state.originalItems.length} items selected</p>
         : null}
      </div>

      <div className="card-section">
        {this.state.items.map((item,index) => 
         <LazyLoad once height={200} key={index} offset={-100}>	 
          <Card once link={item.link} image={item.image} gif={item.gif} title={item.name} description={item.description} hashtags={item.hashtags} />
        </LazyLoad>
        )}
      </div>
      <footer>
        <p>+375 44 7396417</p>
        <p>aleksandr_kalinin_1995@mail.ru</p>
      </footer>      
      </Fragment>
    );    
  }
}

export default App;
