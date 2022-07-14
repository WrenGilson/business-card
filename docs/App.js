import React from "react"
import ReactDOM from "react-dom"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"

export default function app(){
    return(
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )    
}
