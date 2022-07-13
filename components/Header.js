import React from "react"

export default function Header(){
    return(
        <div className="header">
            <img src="./components/wren.jpg" />
            <h1> Wren Gilson </h1>
            <h2> Web Developer </h2>
            <div className="header--buttons">
                <div className="header--button header--email" href="mailto:wren.gilson@gmail.com">
                    <img src="./components/email.png" />
                    <div className="header--button-text">Email</div>
                </div>
                
                <div className="header--button header--linkedin" href="https://www.linkedin.com/in/wren-gilson-abb861aa/">
                    <img src="./components/linkedin.png"/>
                    <div className="header--button-text">LinkedIn</div>
                </div>
                
                <div className="header--button header--github" href="https://github.com/WrenGilson">
                        <img src="./components/github.png" />
                        <div className="header--button-text">Github</div>
                </div>
                
            </div>        
        </div>
    )
    
}