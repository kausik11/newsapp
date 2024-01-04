import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    // article = [
    //     {
    //     "source": {
    //     "id": "bbc-sport",
    //     "name": "BBC Sport"
    //     },
    //     "author": null,
    //     "title": "Who was 'outstanding'? Garth's Team of the Week",
    //     "description": "Which players impressed our football pundit Garth Crooks enough to make his latest Team of the Week?",
    //     "url": "http://www.bbc.co.uk/sport/football/67865895",
    //     "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/FA62/production/_132189046_gettyimages-1900579592.jpg",
    //     "publishedAt": "2024-01-02T22:52:16.7792118Z",
    //     "content": "At the end of the Premier League Christmas fixtures, BBC football pundit Garth Crooks is on hand to give you his Team of the Week.\r\nWho has made his starting XI? Take a look and then pick your own te… [+9783 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "fox-sports",
    //     "name": "Fox Sports"
    //     },
    //     "author": null,
    //     "title": "Four-team CFP changed college football, was necessary step in postseason evolution",
    //     "description": "The four-team College Football Playoff, which will officially come to an end Monday, brought a necessary change to the sport's postseason, but not without controversy.",
    //     "url": "http://www.foxsports.com/stories/college-football/cfp-10-changed-college-football-not-all-for-better-and-was-necessary-step-in-postseason-evolution",
    //     "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/01/1408/814/Jim-Harbaugh.jpg?ve=1&tl=1",
    //     "publishedAt": "2024-01-02T20:56:06Z",
    //     "content": "The four-team playoff changed college football. Not just the postseason and crowning of a national champion that finally could be called undisputed.\r\nCollege Football Playoff 1.0, which wraps up a 10… [+7338 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "fox-sports",
    //     "name": "Fox Sports"
    //     },
    //     "author": "Michael Cohen",
    //     "title": "At Rose Bowl, Michigan found sweet, long-awaited catharsis",
    //     "description": "Three years of drama and two years of failure in the College Football Playoff spilled from Michigan's players, coaches and administrators during a full-scale unburdening once Monday's game went final.",
    //     "url": "http://www.foxsports.com/stories/college-football/at-rose-bowl-michigan-found-sweet-long-awaited-catharsis",
    //     "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/01/1408/814/01.01.24_Rose-Bowl-Column_Cohen_16x9.jpg?ve=1&tl=1",
    //     "publishedAt": "2024-01-02T09:20:39Z",
    //     "content": "PASADENA, Calif. It was fourth-and-goal when Warde Manuel began to pace. The gentle stroll of Michigan's athletic director peeled him away from the tension and torture he was feeling inside, another … [+9953 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "bleacher-report",
    //     "name": "Bleacher Report"
    //     },
    //     "author": "David Kenyon",
    //     "title": "Unique Stats from the 2023 College Football Regular Season",
    //     "description": "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
    //     "url": "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
    //     "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
    //     "publishedAt": "2023-12-12T12:00:00Z",
    //     "content": "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "talksport",
    //     "name": "TalkSport"
    //     },
    //     "author": "161385360554578",
    //     "title": "Rice rescues Arsenal, Arteta evades Raya question, more Premier League build-up",
    //     "description": "talkSPORT.com brings you all the latest news, views and gossip from the world of football. Today’s headlines: Mikel Arteta dodges David Raya question after goalkeeper’s errors Declan Ri…",
    //     "url": "https://talksport.com/football/1667216/football-news-live-arsenal-mikel-arteta-david-raya-premier-league/",
    //     "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/12/jw-TALKSPORT-BLOG-06-12.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
    //     "publishedAt": "2023-12-06T09:06:42Z",
    //     "content": "Mikel Arteta didn't provide a straight answer when asked about David Raya's struggles during Arsenal's win at Luton.\r\nArsenal claimed a dramatic last-gasp win at Kenilworth Road with Declan Rice's st… [+1106 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "talksport",
    //     "name": "TalkSport"
    //     },
    //     "author": "Josh Fordham",
    //     "title": "Tottenham fans feared relegation without Harry Kane but Ange Postecoglou has got them scoring more...",
    //     "description": "Tottenham losing Harry Kane in the summer sent the fans into crisis mode and you can’t blame them. Not only was he their record goalscorer, but also one of the best strikers in world football seaso…",
    //     "url": "https://talksport.com/football/1666888/tottenham-goals-harry-kane-ange-postecoglou/",
    //     "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/12/Kane_Postecoglou-Comp.png?strip=all&quality=100&w=1500&h=1000&crop=1",
    //     "publishedAt": "2023-12-05T17:57:19Z",
    //     "content": "Tottenham losing Harry Kane in the summer sent the fans into crisis mode and you cant blame them.\r\nNot only was he their record goalscorer, but also one of the best strikers in world football season … [+2220 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "espn-cric-info",
    //     "name": "ESPN Cric Info"
    //     },
    //     "author": null,
    //     "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
    //     "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
    //     "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
    //     "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
    //     "publishedAt": "2020-04-27T07:20:43Z",
    //     "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
    //     }
    //     ]
    constructor(){
        super();
        // console.log("hello i am constructor from news component")
        this.state = {
            articles: [],
            loading : false,
            page : 1

        }
        
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7ec8535c8a56486abccd4927ba1f1938&pageSize=20";
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({articles: parsedata.articles, totalArticles: parsedata.totalResults});
    }

    handlenextclick = async ()=>{
        if(this.state.page+1 > Math.ceil(this.state.totalArticles/20)){
        }else{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7ec8535c8a56486abccd4927ba1f1938&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        let parsedata = await data.json();
        // console.log(parsedata);
         this.setState({
            page : this.state.page + 1,
            articles: parsedata.articles

         })
        }
    }

    handlepreviousclick = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7ec8535c8a56486abccd4927ba1f1938&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parsedata = await data.json();
        // console.log(parsedata);
         this.setState({
            page : this.state.page -1,
            articles: parsedata.articles

         })
    }
  render() {
    return (
      <div className='container my-3'>
        <h2 style={{textAlign:"center"}}>NewsApp Top Headlines</h2>
        
        <div className='row'>
        {this.state.articles.map((item)=>{
              return <div className='col-md-4' key={item.url}>
              <NewsItem  title={item.title ? item.title.slice(0,45) : " "} description={item.description ?  item.description.slice(0,88) : " "} Imgurl={item.urlToImage} newsurl={item.url}/>
              </div>
        })}            
        </div>
        <div className='container2 d-flex justify-content-between'>
        <button type="button" disabled={this.state.page <= 1} className="btn btn-primary btn-dark" onClick={this.handlepreviousclick}>&laquo; Previous</button>
        <button  type="button" className="btn btn-primary btn-dark" onClick={this.handlenextclick}>Next &raquo;</button>
        </div>
        
           </div>
    )
  }
}

export default News
