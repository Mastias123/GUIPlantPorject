function TodoRowItem(props) {

    return (
        <tr>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

//This line allows the use of this component in the application
export default TodoRowItem 