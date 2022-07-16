<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.24.0/babel.js"></script>

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
