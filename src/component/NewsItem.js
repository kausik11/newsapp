import React, { Component } from 'react'


export class NewsItem extends Component {

   

  render() {
    //props destructuring
    let {title, description,Imgurl,newsurl,publish,source} = this.props;
    return (
      <>
       <div className="card"  >
      <img src={!Imgurl ? "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/FA62/production/_132189046_gettyimages-1900579592.jpg" : Imgurl } alt='{title}'/>
      <div className="card-body">
        <h5 className="card-title">{title}... <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left:"80%",top:"3%"}}>
   {source} <span className="visually-hidden">unread messages</span>
  </span></h5>
        <p className="card-text">{description}...</p>
        <p className='publishAt'>{new Date(publish).toUTCString()}</p>
         <a href={newsurl}  className="btn btn-primary btn-sm btn-dark">Read More</a>
      </div>
       </div>
       </>
      
    )
  }
}

export default NewsItem

