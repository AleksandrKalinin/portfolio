import React,{Component, Fragment} from 'react';

class Card extends Component {

    constructor(props){
      super(props);
      this.state={
        item: 0
      }
      this.imageRef = React.createRef(); 
    }


  render(){
    return (
        <div className="card" onMouseOver={e => (e.currentTarget.children[1].children[0].src = this.props.gif)}
        					  onMouseOut={e => (e.currentTarget.children[1].children[0].src = this.props.image)}
          >
          <div className="card-icon">
            <div className="card-icon-wrapper">
              <i className="fa fa-search-plus"></i>        
            </div>
          </div>
          <div className="card-image">
            <img src={this.props.image} alt="" ref={this.imageRef} />
          </div>
          <div className="card-description">
            <div className="card-description__inner">
              <h2>{this.props.title}</h2>
              <p>{this.props.description}
              </p>
              <div className="card-hashtags">
                {this.props.hashtags.map((item,index) =>
                  <span key={index}>{item}</span>
                )}
              </div>             
            </div>
            <a href={this.props.link} target="_blank" className="card-button main-button">Learn more</a>
          </div>
        </div>
    );    
  }
}

export default Card;
