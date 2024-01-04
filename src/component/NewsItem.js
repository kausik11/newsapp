import React, { Component } from 'react'

export class NewsItem extends Component {

   

  render() {
    //props destructuring
    let {title, description,Imgurl,newsurl} = this.props;
    return (
      <>
       <div className="card" style={{width: "18rem"}}>
      <img src={!Imgurl ? "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/FA62/production/_132189046_gettyimages-1900579592.jpg" : Imgurl } alt='{title}'/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
         <a href={newsurl}  className="btn btn-primary btn-sm btn-dark">Read More</a>
      </div>
       </div>
       </>
      
    )
  }
}

export default NewsItem

