import React from 'react';
import './draggable.css';

export default class Draggable extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            diffX: 0,
            diffY: 0, 
            dragging: false,
            styles: {

            }
        }

        this._dragStart = this._dragStart.bind(this);
        this._dragStart = this._dragStart.bind(this);
        this._dragStart = this._dragStart.bind(this);
    }

    _dragStart(e){
        this.setState({
            diffX: e.screenX = e.currentTarget.getBoundingClientRect().left,
            diffY: e.screenY = e.currentTarget.getBoundingClientRect().top,
            dragging: true 
        }); 
    }

    _dragging(e){
        if(this.state.dragging){
            var left = e.screenX - this.state.diffX;
            var top = e.screenY - this.state.diffY;
    
            this.setState({
                styles: {
                    left: left,
                    top: top
                }
            });
        }  
    }

    _dragEnd(){
        this.setState({
            styles: {
                dragging: false
            }
        });
    }

    render(){
        return(
            <div className="Draggable" style={this.state.styles} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}>
                <div className='DraggableTitle'></div>
            </div>
        );
    }
}