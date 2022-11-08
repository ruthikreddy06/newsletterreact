import React, { Component } from 'react'
import NewItems from './NewItems';
import Spinner from './Spinner';

export default class news extends Component {
    constructor(){
        super();
        this.state={articles:[],pages:1,pagesize:9,totalResults:0,count:0,disable:false,loading:false}
    }
     OnClickNext=async()=>{
        this.setState({loading:true});
        if(this.state.pages<=this.state.count){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5b9f1f03dc2741e7ba17b93a15f5ec08&page=${this.state.pages+1}&pagesize=${this.state.pagesize=30}`;
        let data=await fetch(url);
        let parseddata=await data.json();
        this.setState({loading:false});
        this.setState({articles:parseddata.articles,pages:this.state.pages+1});
    }
        else{
           this.setState({disable:false});
        }
    }  
     OnClickPrevious=async()=>{
        this.setState({loading:true});
        if(this.state.pages>1){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5b9f1f03dc2741e7ba17b93a15f5ec08&page=${this.state.pages-1}&pagesize=${this.state.pagesize=30}`;

        let data=await fetch(url);
        let parseddata=await data.json();
        this.setState({loading:false});
        this.setState({articles:parseddata.articles,pages:this.state.pages-1});
        }
        else{
            this.setState({disable:true});
        }

    }  
       async componentDidMount(){
        this.setState({loading:true});
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5b9f1f03dc2741e7ba17b93a15f5ec08&page=1&pagesize=30`;
            let data=await fetch(url);
            let parseddata=await data.json();
            this.setState({loading:false});
            this.setState({articles:parseddata.articles,totalResults:parseddata.totalResults});
            this.setState({count:Math.ceil (parseddata.totalResults/9)});
        }
    
  render() {
   
    return (
   
     <div className="container my-4 bodycolor">
        <h1 className="text-center headingnames1" style={{margin:'40px 0px'}}><h1 className='headlines'>Top Headlines</h1></h1>
        {this.state.loading && <Spinner/>}
       <div className="row">
       {this.state.articles.map((elements)=>{
        return !this.state.loading && <div className="col-md-4 my-3">
        <NewItems title={elements.title!==null?elements.title.slice(0,73)+"...":"text not avaliable"} description={elements.description!==null?elements.description.slice(0,172)+"....":"text not avaliable"} imageUrl={elements.urlToImage} url={elements.url} source={elements.source.name} category={this.props.category} />
    </div>
       })}
      
     </div>
    <div className="container my-3 d-flex justify-content-between">
    <button disabled={this.state.disable||this.state.pages===1?true:false} type="button" class="btn btn-dark" onClick={this.OnClickPrevious} >&larr;previous</button>
     <button disabled={this.state.disable}type="button" class="btn btn-dark"onClick={this.OnClickNext}>next&rarr;</button>

    </div>
     </div>
    
     
    );
    }
}
