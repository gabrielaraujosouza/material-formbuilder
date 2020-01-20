import React from 'react'
import PropType from 'prop-types'

export default class Draggable extends React.Component {

    drag = (e) => {
        e.dataTransfer.setData('xx', e.target.id);
    }

    noAllowDrop = (e) => {
        e.stopPropagation();
    }

    render(){
        return (
            <div id={this.props.id} draggable="true" onDragStart={this.drag} 
            onDragOver={this.noAllowDrop}
                style={this.props.style}>
            {this.props.children}
            </div>

        );
    }
}

Draggable.propTypes = {
    id: PropType.string,
    style: PropType.object,
    children: PropType.node
}