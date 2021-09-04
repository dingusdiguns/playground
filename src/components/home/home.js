import React from "react"
import Window from "../universal/window"
import Context from "../../constants/windows/home/context";

class Home extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className = "home">
                <Window type = "Viewport" context = { Context }></Window>
            </div>
        )
    }
}

export default Home