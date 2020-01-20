import React from 'react'
import PropType from 'prop-types'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputField from '../Components/Input';

export default class Table extends React.Component{

    constructor(props){
        super(props)
    }

    renderTr= (children) => {
        const { fields, drop, allowDrop, drag, noAllowDrop, index, element } = this.props;
        return children.map((e, index) => {
            return (
                <Grid container item key={`tr-${e.id}`}
            data-existent-value={e.id}
            onDrop={drop}
            > 
                {this.renderTd(e.children)}
            </Grid>
            )
        })
    }

    renderTd = (children) => {
        const { fields, drop, allowDrop, drag, noAllowDrop, index, element } = this.props;
        return children.map((e, index) => {
            return (<Grid
					item
                    xs={12 / children.length}
                    key={`td-${e.id}` }
					style={{ backgroundColor: '#c3c3', height: '70px', padding: '0 5%', textAlign: 'center' }}
					onDrop={drop}
                    onDragOver={allowDrop}
                    data-existent-value={e.id}
				>
                    {e.children && this.renderChildElements(e.children)}
                    {!e.children && 'TD' }
				</Grid>)
        })
    }

    renderChildElements = (children) => {
        const { fields, drop, allowDrop, drag, noAllowDrop, index, element } = this.props;
        return children.map((e, index) => {
            if(e.type === 'input'){
            return (
                <InputField key={index} element={e} index={index} {...this.props} />)
        }

        if(e.type === 'button'){
            return (<Grid item xs={12} key={index}>
                    <input 
                        id={e.id}
                        type="button" key={`${e.type} -${e.id}`} value={`Button ${e.id}`} 
                        onDragStart={drag}
                        onDrop={drop}
                        draggable="true" 
                        onDragOver={allowDrop}
                        data-existent-value={e.id}/>
                </Grid>)
        }
        if(e.type === 'checkbox'){
            return (
                <Grid container item xs={12} key={index}
                align="center"
                    style={{paddingTop : '10px',height: '70px'}}
                >
                <Grid item 
                xs={4}></Grid>
                <Grid item 
                xs={4}
                id={e.id}
                align="center"
                data-existent-value={e.id} 
                key={`${e.type} -${e.id}`}
                onDragStart={drag}
                    onDrop={drop}
                    draggable="true" 
                    onDragOver={allowDrop}

                style={{backgroundColor : 'blue',}}>
                <FormControlLabel 
                
                    
                        data-existent-value={e.id}
                    control={<Checkbox 
                        value={`CheckBox ${e.id}`}
                        data-existent-value={e.id} 
                    />} 
                    label={`CheckBox ${e.id}`} />
                    </Grid>
                    <Grid item 
                    xs={4}></Grid>
                </Grid>)
        }

        if(e.type === 'list'){
            return (
                <Grid container item xs={12} 
                id={e.id}
                    key={`${e.type} -${e.id}`}
                    onDragStart={drag}
                        onDrop={drop}
                        draggable="true" 
                        onDragOver={allowDrop}
                        data-existent-value={e.id}
                        align="center"
                        style={
                            {backgroundColor: "red", border: '1px', padding : '10px',height: '50px',
                        paddingLeft: '20px'}}
                >
                            
                </Grid>)
        }
        if(e.type === 'table'){
            return (
                <Grid container item xs={12} direction="row"
                align="center"
                data-existent-value={e.id}
                key={`t-${e.type} -${e.id}`}
                style={{
                    paddingTop : '10px',
                    backgroundColor: "gray",
                    height: '308px'
                }}
                >
                <Grid xs={4} data-existent-value={e.id} item></Grid>
                <Grid xs={4} container item justify="center" align="center"
                    onDragOver={allowDrop}
                    data-existent-value={e.id}
                    draggable="true"
                    id={`${e.id}`}
                    key={`${e.type} -${e.id}`} >
                            {this.renderTr(e.children)}
                </Grid>
                <Grid xs={4} item data-existent-value={e.id}></Grid>
            </Grid>
            )
        }
        })
    }

    render(){
        const { fields, drop, allowDrop, drag, noAllowDrop, index, element } = this.props;
        return (
            <Grid container item xs={12} direction="row"
                align="center"
                data-existent-value={element.id}
                style={{
                    paddingTop : '10px',
                    backgroundColor: "gray",
                    height: '308px'
                }}
                >
                <Grid xs={4} data-existent-value={element.id} item></Grid>
                <Grid xs={4} container item justify="center" align="center"
                    onDragOver={allowDrop}
                    data-existent-value={element.id}
                    draggable="true"
                    id={`${element.id}`}
                    key={`${element.type} -${element.id}`} >
                            {this.renderTr(element.children)}
                </Grid>
                <Grid xs={4} item data-existent-value={element.id}></Grid>
            </Grid>
        )
    }

}