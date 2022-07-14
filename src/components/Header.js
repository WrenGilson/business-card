import React from "react"
import ImgEmail from "./imgs/email.png"
import ImgLinkedin from "./imgs/linkedin.png"
import ImgGithub from "./imgs/github.png"
import ImgWren from "./imgs/wren.jpg"

export default function Header(){
    function Email() 
    {
        window.location = "mailto:wren.gilson@gmail.com";
    }

    return(
        <div className="header">
            <img src={ImgWren} />
            <h1> Wren Gilson </h1>
            <h2> Web Developer </h2>
            <div className="header--buttons">
                <a className="header--button header--email" href="mailto:wren.gilson@gmail.com">
                    <img src={ImgEmail}  />
                    <div className="header--button-text">Email</div>
                </a>
                
                <a className="header--button header--linkedin" href="https://www.linkedin.com/in/wren-gilson-abb861aa/">
                    <img src={ImgLinkedin}/>
                    <div className="header--button-text">LinkedIn</div>
                </a>
                
                <a className="header--button header--github" href="https://github.com/WrenGilson">
                        <img src={ImgGithub} />
                        <div className="header--button-text">Github</div>
                </a>
                
            </div>        
        </div>
    )
    
}