import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'react-bootstrap';
import FormRowComp from './FormRowComp';


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
    const [ishide, setishide] = useState(allFormGroups.map(() => false))

    const [inputs, setinputs] = useState(allFormGroups.map(() => ''))

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        for (const obj of allFormGroups) {
            inputCheck(obj, obj.id)
        }
    };
    function check(index, e) {
        if (allFormGroups[index].validations.require) {
            inputs[index] = e.target.value
            setinputs([...inputs])
            inputCheck(allFormGroups[index], index)
        }
    }

    function inputCheck(obj) {
        if (obj.validations.require) {
            if (inputs[obj.id].length === 0) {
                obj.eror = `${obj.label} is required`
                ishide[obj.id] = true
            }
            else if ((obj.validations.minLen || obj.validations.chars) && (obj.validations.minLen ? inputs[obj.id].length < obj.validations.minLen : ((!obj.validations.chars.test(inputs[obj.id]))))) {
                obj.eror = `${obj.label} must ${obj.validations.minLen ? `be include more than ${obj.validations.minLen} letters` : `include letters '@' and '.'`}`
                ishide[obj.id] = true
            }
            else {
                ishide[obj.id] = false
            }
            setishide([...ishide])
        }
    }

    function changebutton(e, index) {
        inputs[index] = e.target.textContent
        setinputs([...inputs])
        e.target.parentElement.getElementsByClassName('choosen')[0]?.classList.remove('choosen')
        e.target.classList.add('choosen')
        ishide[index] = false
        setishide([...ishide])
    }

    function hideOptionEror(e, index) {
        if (e.target.value) {
            inputs[index] = true
            setinputs([...inputs])
            ishide[index] = false
            setishide([...ishide])
        }
    }

    return (
        <div className='formdivcss'>
            <h1 style={{textAlign: 'center'}}>{props.formTitle}</h1>
            <Form noValidate onSubmit={handleSubmit} className='formcss'>
                {props.group.map((arr, index) => <FormRowComp key={index} group={arr} onblur={check} changeButton={changebutton} optioneror={hideOptionEror} state={ishide} ></FormRowComp>)}
                <Row>
                    <Button type="submit">{props.submitName ? props.submitName : 'Submit form'}</Button>
                </Row>
            </Form >
        </div>
    );
}
export default Formcomp