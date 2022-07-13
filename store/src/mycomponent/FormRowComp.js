import Row from 'react-bootstrap/Row';
import FormGroupDecide from './formgroupdecide';

function FormRowComp(props){
    return(
        <Row className="mb-3">
            {props.group.map((obj,index)=><FormGroupDecide key={index} type={obj.type} state={props.state} changeButton={props.changeButton} col={obj.col} id={obj.id} optioneror={props.optioneror} onblur={props.onblur} label={obj.label} iconName={obj.iconName} placeholder={obj.placeholder} eror={obj.eror} options={obj.options}></FormGroupDecide>)}
        </Row>
    )
}
export default FormRowComp