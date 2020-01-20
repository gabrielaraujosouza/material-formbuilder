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

export default class InputField extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const { fields, drop, allowDrop, drag, noAllowDrop, index, element } = this.props;
        return (
            <Grid item xs={12}
                //key={index} 
                align="center"
                style={{
                    paddingTop : '10px',
                    backgroundColor: "red",
                    height: '70px'
                }}
                data-existent-value={element.id}  
            >
           
                <FormControl 
                    variant="outlined"
                    data-existent-value={element.id}>
                    <TextField
                        id={`${element.id}`}
                        key={`${element.type} -${element.id}`} 
                        onDragStart={drag}
                        onDrop={drop}
                        draggable="true" 
                        onDragOver={allowDrop}
                        data-existent-value={element.id}
                    /*onDrop={drop}
                    onDragOver={allowDrop}
                    key={`txt-${e.type} -${e.id}`}
                    data-existent-value={e.id}*/
                        variant="outlined"
                        label={`Input ${element.id}`}
                        defaultValue={`Input ${element.id}`}
                    />
                </FormControl>
            </Grid>
        )
    }

}