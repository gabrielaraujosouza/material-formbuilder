import React from 'react'
import Draggable from '../Draggable'
import Droppable from '../Droppable'
import Button from '@material-ui/core/Button';
import ListButtonsMenu from '../ListButtonsMenu'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import RenderForm from '../RenderForm'
import {sortableContainer, sortableElement, sortableHandle} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { createField, addElementByIdFromNode} from './formUtils'

const DragHandle = sortableHandle(() => <Grid container item xs={3}>
        <Grid item xs={12} >
        <Button variant="contained" color="primary">
            Primary
        </Button>
       
        </Grid>
    </Grid>);

const SortableItem = sortableElement(({value}) => <li><DragHandle value={value}/></li>);

const SortableContainer = sortableContainer(({children}) => {
  return <ul>{children}</ul>;
})
  
export default class DndTest extends React.Component{

    state = {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
        // [<input type="button" draggable="true" value={"x1"} style={{paddingLeft: '10%'}}/>,
        // <input type="button" draggable="true" value={"x2"} style={{paddingLeft: '10%'}}/>,
        // <input type="button" draggable="true" value={"x3"} style={{paddingLeft: '10%'}}/>,
        // <input type="button" draggable="true" value={"x4"} style={{paddingLeft: '10%'}}/>],
        itemCount: Number(1),
        fields: []
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
          items: arrayMove(items, oldIndex, newIndex),
        }));
      };

    drag = (e) => {
        const campo = e.target.attributes['data-value'] && e.target.attributes['data-value'].value
        const existentField = e.target.attributes['data-existent-value'] && e.target.attributes['data-existent-value'].value
        campo && e.dataTransfer.setData('field', campo);
        existentField && e.dataTransfer.setData('existentField', existentField);
    }

    drop = (e) => {
        const field = e.dataTransfer.getData('field');
        const existentField = e.dataTransfer.getData('existentField');
        const main = e.target.attributes['data-main'] && e.target.attributes['data-main'].value

        const fieldId = e.target.attributes['data-existent-value'] && e.target.attributes['data-existent-value'].value

        console.log('dragging', fieldId)
        console.log('dragging', existentField)
        console.log('dragging', main)
        if(!field && !existentField){
            return
        }
        let { fields, itemCount } = this.state;
        console.log('antes', e.target)
        const campo = createField(field, itemCount, existentField, fields)
        console.log('depois', fields)
        if(main){
            fields.push(campo)
        } else {
            console.log(addElementByIdFromNode(fields, campo, fieldId? Number(fieldId): Number(e.target.id)), existentField ? false: true)
        }

        this.setState({fields: fields , itemCount: existentField ? this.state.itemCount : this.state.itemCount + 1})
    }

    noAllowDrop = (e) => {
        e.stopPropagation();
    }
    
    allowDrop = (e) => {
        e.preventDefault();
    }

    render(){
        const list = [<input type="button" value={"x1"} />,
        <input type="button" value={"x2"} style={{
            paddingLeft: '10%'
        }}/>,
        <input type="button" value={"x3"} />,
        <input type="button" value={"x4"} />]

        return (
            <div>
            <Grid container >
                <Grid item xs={3}>
                    <ListButtonsMenu drag={this.drag} noAllowDrop={this.noAllowDrop}/>
                </Grid>
                <Grid container item xs={9}>
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

                    <Grid item xs={12} style={{height: '400px'}}>
                        <RenderForm drag={this.drag} drop={this.drop} noAllowDrop={this.noAllowDrop} allowDrop={this.allowDrop} fields={this.state.fields}/>
                    </Grid>
                </Grid>
                
            </Grid>
            {/*<Grid container>
            <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
            {this.state.items.map((value, index) => (
              <SortableItem key={`item-${value}`} index={index} value={value} />
            ))}
          </SortableContainer>
            </Grid>*/}
            </div>
        )
    }
    /*<Button 
            onDragStart={this.drag} 
            draggable="true" 
            key={'xxxxk'}
            id={'xxxsasdasd'}
            //onDrag={(event) => console.log(event)} 
            //onMouseUp={(event) => handleMouseUp(event)} 
            variant="contained"><span id='spani'>Default</span></Button>


            <input id="buttonl" type="button" key={"xxxx"} value={"1233 Button"}
            draggable="true" onDragStart={this.drag} 
            onDrag={e => e.preventDefault()}
            //onDragEnd={e => {console.log('end'); e.stopPropagation()
                //preventDefault()
            //} 
                />*/
}