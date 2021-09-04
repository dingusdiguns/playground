import React from "react";

class WindowIcon extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

  

    click(){
        this.setState({ clicked: true })
    }

    dragStart( e ){
        var img = new Image();
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
        e.dataTransfer.setDragImage(img, 0, 0);
        this.setState({ dragStart: {
            x: e.clientX,
            y: e.clientY
        } })

        this.props.addChildProxy({x: e.clientX, y: e.clientY})
    }

    drag( e ){
        let x = e.clientX;
        let y = e.clientY;
        
        let diff = {
            x: (x - this.state.dragStart.x),
            y: ( y - this.state.dragStart.y )
        }

        let pos = {
            x: x,
            y: y
        }



        if( diff.x < -100 || diff.y < -100 && (e.clientX !== 0 || e.clientY !== 0) ){
            if( diff.x < diff.y ){
                this.props.setChildProxyPosition( { x: pos.x } );
            }else{
                this.props.setChildProxyPosition( { y: pos.y } );
            }
        }else{
            this.props.removeChildProxy()
        }

    }

    dragEnd(){
        this.props.dragEnd()
    }



    render(){
        return(
            <div className = "window-icon" 
                ref = "icon"
                onDragStart = { this.dragStart.bind( this ) }
                onDrag = { this.drag.bind( this ) }
                draggable = {true}
            >
            </div>
        )
    }
}

export default WindowIcon;