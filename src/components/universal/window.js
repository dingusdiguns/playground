import React from "react";
import Icon from "./window-icon"

class Window extends React.Component{
    constructor( props ){
        super();
        this.state = {
            type: props.type,
            children: []
        }
    }

    children(){

    }

    addChild(){
        debugger
    }

    setChildProxyPosition( pos ){
        if( pos.x !== 0 ){
            this.setState({ proxy: pos })
        }
    }

    addChildProxy( pos ){
        // this.setState({ proxy: pos })
    }

    removeChildProxy(){
        this.setState({ proxy: undefined })
    }

    getOffset(){
        if( this.state.proxy ){
            let rect = this.refs.window.getBoundingClientRect();
            if( this.state.proxy.x ){
                return(
                    {
                        y: (rect.x + rect.width) - this.state.proxy.x
                    }
                )
            }else{
                return(
                    {
                        x: (rect.x + rect.width) - this.state.proxy.x
                    }
                )
            }
        }
    }

    icon(){
        if( !this.child ){
            return(
                <Icon
                    offset = { this.getOffset() }
                    context = { this.props.context }
                    addChild = { this.addChild.bind( this ) }
                    addChildProxy = { this.addChildProxy.bind( this ) }
                    setChildProxyPosition = { this.setChildProxyPosition.bind( this ) }
                    removeChildProxy = { this.removeChildProxy.bind( this ) }
                    dragEnd = { this.dragEnd.bind( this ) }
                />
            )
        }
    }

    childProxy(){
        if( this.state.proxy ){
            let rect = this.refs.window.getBoundingClientRect();
            if( this.state.proxy.x ){
                let width = (rect.x + rect.width) - this.state.proxy.x;
                var style = {
                    height: "100%",
                    width: `${width}px`
                }
            }else{
                let height =  (rect.y + rect.height) - this.state.proxy.y;
                var style = {
                    width: "100%",
                    height: `${height}px`,
                }
            }
            return(
                <div style = { style } className = "window-container">
                    <Window type = "Viewport" context = { this.props.Context }></Window>
                </div>
            )
        }
    }

    getInnerStyle(){
        if( this.state.proxy ){
            let rect = this.refs.window.getBoundingClientRect();
            if( this.state.proxy.x ){
                let width = rect.width - ((rect.x + rect.width) - this.state.proxy.x);
                return {
                    height: "100%",
                    width: `${width}px`
                }
            }else{
                let height =  rect.height - ((rect.y + rect.height) - this.state.proxy.y);
                return {
                    width: "100%",
                    height: `${height}px`,
                }
            }
        }
    }

    dragEnd(){
        debugger
    }

    children(){
        return this.state.children.map(
            (  el ) => {
                return(
                    <div>
                    </div>
                )
            }
        )
    }

    innerWindow(){
        if( !this.state.children ){
            return(
                <div className = "inner-window" style = { this.getInnerStyle() }>
                    {
                        this.icon()
                    }
                </div>
            )
        }
    }

    render(){
        return(
            <div ref = "window" className = "window">
                {
                    this.innerWindow()
                }

                {
                    this.children()
                }
                {
                    this.childProxy()
                }
            </div>
        )
    }
}

export default Window