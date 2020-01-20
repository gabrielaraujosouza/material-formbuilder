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
import Table from '../Components/Table'

export default class RenderForm extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        const { fields, drop, allowDrop, drag, noAllowDrop } = this.props;
        console.log(fields)
        return (
                <Grid container item xs={12} draggable="true" onDrop={drop}  onDragOver={allowDrop} 
                    data-main={true}
                    style={
                            {backgroundColor: "#fff", height: '100%', width: '100%', border: '1px'}} 
                            justify="center">
                    <CssBaseline />
                    {fields && fields.map((e, index) => {
                        
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
                                <Table key={`tr-${index}`} element={e} index={index} {...this.props} />
                            )
                        }
                        

                    })
                    }
                        {/*<Grid item xs={6}>
                            <Droppable id ="1"style={{backgroundColor: 'blue', width:  '100%', height: '300px'}}>
                                <Draggable id="item1">Some 1</Draggable>
                                <Draggable id="item2">Some 2</Draggable>
                            </Droppable>
                        </Grid>
                        <Grid item xs={6}>
                            <Droppable id="2" style={{backgroundColor: 'red', width:  '100%', height: '300px'}}>
                        
                            </Droppable>

                        </Grid>*/}
                </Grid>
        )
    }
}
RenderForm.propTypes = {
    id: PropType.string,
    style: PropType.object,
}