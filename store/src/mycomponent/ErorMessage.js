function ErorMessage(props) {
    return (
        <span className={props.state[props.id] ? 'show' : 'hide'}>
            {props.eror}
        </span>
    )
}
export default ErorMessage