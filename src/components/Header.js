import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Navigation from './Navigation';
import Clock from 'react-digital-clock';
import {Row,Col} from "react-bootstrap";
// import('./components/Navigation').then(Navigation => Navigation.default);
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">

         <nav  id="nav-wrap" style={{ display:"block"}}>
                 {/*<di>HI</di>*/}
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>


                 {/*<Col md="6" xs="6">*/}
                     <ul id="nav" className="nav" style={{alignContent:"center",display:"block"}}>
                         <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                         <li><a className="smoothscroll" href="#about">About</a></li>
                         <li><a className="smoothscroll" href="">Gallery</a></li>
                         <li><a className="smoothscroll" href="/blogCards">Blogs</a></li>
                         <li><a className="smoothscroll" href="#portfolio">Resume</a></li>
                         <li><a className="smoothscroll" href="#testimonials">Cerfications</a></li>
                         <li><a className="smoothscroll" href="#contact">Honors & Awards</a></li>
                         <li><a className="smoothscroll" href="#contact">Projects</a></li>
                         <li><a className="smoothscroll" href="#contact">Life Events</a></li>
                         <li><a className="smoothscroll" href="#contact">Services</a></li>
                         <li><a className="smoothscroll" href="#contact">My Updates</a></li>
                     </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{resumeData.name}</h1>
               <h2 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.currentRole}
               </h2>
                <h5 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.otherTitles}
                </h5>

               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.date}>
                                <a href={item.url} target="_blank"><i className={item.className} aria-hidden="true"></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
                <h4>
                    <Clock/>
                </h4>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}