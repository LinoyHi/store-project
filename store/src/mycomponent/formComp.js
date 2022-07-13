import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'react-bootstrap';
import FormRowComp from './FormRowComp';
import { validate } from '../common/validations';


function Formcomp(props) {
    /*gets a group= array of arrays of objects each array is a row and each object is a formGroup in the row 
    and a submitName= string of what will the submit button will say
    object looks like:
    {id:1, type: 'text', 
    placeholder: 'Enter Email', 
    label: 'Email', 
    iconName: 'inbox-fill', 
    validations: { require: true, chars: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ , minLen: 6}, 
    eror: '', 
    options:[], col: true/false }

    returns JSX element
    */
    const allFormGroups = []
    for (const arr of props.group) {
        for (const obj of arr) {
            allFormGroups.push(obj)
        }
    }
    const [data,setdata]=useState(allFormGroups)
    const [inputs, setinputs] = useState(allFormGroups.map(() => ''))

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        for (const obj of allFormGroups) {
            console.log(obj)
            inputCheck(obj)
        }
    };
    function check(index, e) {
        if (allFormGroups[index].validations.require) {
            inputs[index] = e.target.value
            setinputs([...inputs])
            inputCheck(allFormGroups[index])
        }
    }

    function inputCheck(obj) {
        data[obj.id].eror= validate(inputs[obj.id],obj.validations,obj.label)
        setdata([...data])
    }

    function changebutton(e, index) {
        inputs[index] = e.target.textContent
        setinputs([...inputs])
        e.target.parentElement.getElementsByClassName('choosen')[0]?.classList.remove('choosen')
        e.target.classList.add('choosen')
    }

    function hideOptionEror(e, index) {
        if (e.target.value) {
            inputs[index] = true
            setinputs([...inputs])
        }
    }

    return (
        <div className='formdivcss'>
            <h1 style={{textAlign: 'center'}}>{props.formTitle}</h1>
            <Form noValidate onSubmit={handleSubmit} className='formcss'>
                {props.group.map((arr, index) => <FormRowComp key={index} group={arr} onblur={check} changeButton={changebutton} optioneror={hideOptionEror} ></FormRowComp>)}
                <Row>
                    <Button type="submit">{props.submitName ? props.submitName : 'Submit form'}</Button>
                </Row>
            </Form >
        </div>
    );
}
export default Formcomp