import React, { Component } from 'react'
import Green from './Green.jpg'
import Science from './science.jpg'
import Sports from './sports.jpg'
import technology from './technology.jpg'
import entertainment from './entertainment.jpg'
import business from './business.jpg' 
import health from './health.jpg'
export default class NewItems extends Component {
  cardcoloring(){
    if(this.props.category==="science"){
      return "coloringscience"
    }
    else if(this.props.category==="technology"){
      return "coloringtechnology"
    }
    else if(this.props.category==="health"){
      return "coloringhealth"
    }
    else if(this.props.category==="general"){
      return "coloring"
    }
    else if(this.props.category==="entertainment"){
      return "coloringentertainment"
    }
    else if(this.props.category==="business"){
      return "coloringbusiness"
    }
    else if(this.props.category==="sports"){
      return "coloringsports"
    }
  }
  photoselection(){
    if(this.props.category==="science"){
      return Science
    }
    else if(this.props.category==="technology"){
      return technology
    }
    else if(this.props.category==="health"){
      return health
    }
    else if(this.props.category==="general"){
      return Green
    }
    else if(this.props.category==="entertainment"){
      return entertainment
    }
    else if(this.props.category==="business"){
      return business
    }
    else if(this.props.category==="sports"){
      return Sports
    }
  }
  render() {
    return (
        <div className={"card "+this.cardcoloring()}  style={{width:"18rem"}}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {this.props.source}
  </span>
            <img className="w3-image" src={this.props.imageUrl!=null?this.props.imageUrl:this.photoselection()}  alt="img not avaliable" onerror={this.photoselection()}/>
  <div className="card-body">
    <h5 className="card-title headingnames1">{this.props.title}</h5>
    <p className="card-text headingnames">{this.props.description}</p>
    <a href={this.props.url} className="btn btn-sm btn-dark" >read more</a>
  </div>
</div>
    )
  }
}
