import React from 'react'
import PropType from 'prop-types'

export default class Droppable extends React.Component{

    drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('xx');
        console.log('drop', data)
        //e.target.appendChild(document.getElementsByTagName(data));
    }

    over = (ev) => {
        console.log('over')
       ev.preventDefault();
       ev.dataTransfer.dropEffect = "move"
      }

    allowDrop = (e) => {
        e.preventDefault();
    }

    render(){
        return (
        <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
            {this.props.children}
        </div>

        )
    }
}

Droppable.propTypes = {
    id: PropType.string,
    style: PropType.object,
    children: PropType.node
}