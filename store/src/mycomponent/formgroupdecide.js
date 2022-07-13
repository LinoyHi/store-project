import { Button, ButtonGroup, FormGroup } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ErorMessage from "./ErorMessage";

function FormGroupDecide(props){
    function returnOptions(type){
        const array=[]
        if(type==='button'){
            for(const str of props.options){
                array.push(<Button key={str} className='choicesbuttons' onClick={(e)=>props.changeButton(e,props.id)}>{str}</Button>)
            }
        }
        else{
            for(const str of props.options){
                array.push(<option key={str} value={str}>{str}</option>)
            }
        }
        return(array)
    }
    const type= ()=>{if(props.type==='text'){return (<Form.Control
        type="text"
        placeholder={props.placeholder}
        onBlur={(e) => props.onblur(props.id, e)}
    />)}
    else if(props.type==='option'){
        return (<Form.Control onClick={(e)=>props.optioneror(e,props.id)} as='select'>
        <option value=''>{props.placeholder}</option>
        {returnOptions('option')}
    </Form.Control>)
    }
    else if(props.type==='button'){
        return (<ButtonGroup aria-label="Basic example">
        {returnOptions('button')}
    </ButtonGroup>)
    }}
    return (
        <Form.Group as={props.col? Col:FormGroup} md="4" controlId={`validationCustom${props.label}`}>
            <Form.Label>{props.label}</Form.Label>
            <InputGroup>
                <InputGroup.Text className={`bi bi-${props.iconName}`}></InputGroup.Text>
                {type()}
            </InputGroup>
            <ErorMessage state={props.state} id={props.id} eror={props.eror}></ErorMessage>
        </Form.Group>
    )
}
export default FormGroupDecide
