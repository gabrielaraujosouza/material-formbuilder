import React from 'react'
import PropType from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextRotationNoneIcon from '@material-ui/icons/TextRotationNone';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TableChartIcon from '@material-ui/icons/TableChart';

export default class ListButtonsMenu extends React.Component {

   constructor(props){
       super(props)
   }

    render(){
        const { drag, noAllowDrop } = this.props

        return (
            <List key={'ul-d'}>
            <ListItem 
                button
                data-value={"button"} key={1} 
                draggable="true"
                onDragStart={drag}
                onDragOver={noAllowDrop}
                style={this.props.style}>
                <ListItemIcon >
                    <AddBoxIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Button" />
            </ListItem>
            <ListItem 
                button
                data-value={"input"} key={2}
                draggable="true"
                onDragStart={drag}
                onDragOver={noAllowDrop}
                style={this.props.style}>
                <ListItemIcon >
                    <ArrowForwardIosIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Input" />
            </ListItem>
            <ListItem 
                button
                data-value={"list"} key={3}
            draggable="true"
            onDragStart={drag}
            onDragOver={noAllowDrop}
            style={this.props.style}>
            <ListItemIcon >
                    <TextRotationNoneIcon color="primary"/>
                </ListItemIcon>
            <ListItemText primary="Lista" />
            </ListItem>
            <ListItem 
                button
                data-value={"checkbox"} key={4}
            draggable="true"
            onDragStart={drag}
            onDragOver={noAllowDrop}
            style={this.props.style}>
            <ListItemIcon >
                    <CheckBoxIcon color="primary"/>
                </ListItemIcon>
            <ListItemText primary="Checkbox" />
            </ListItem>
            <ListItem 
                button
                data-value={"table"} key={5}
            draggable="true"
            onDragStart={drag}
            onDragOver={noAllowDrop}
            style={this.props.style}>
            <ListItemIcon >
                    <TableChartIcon color="primary"/>
                </ListItemIcon>
            <ListItemText primary="Table" />
            </ListItem>
            </List>

        );
    }
}

ListButtonsMenu.propTypes = {
    id: PropType.string,
    style: PropType.object,
    children: PropType.node
}