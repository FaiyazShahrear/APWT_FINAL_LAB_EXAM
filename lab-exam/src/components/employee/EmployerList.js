import {
    Link,
    useHistory
} from 'react-router-dom'
import {
    useState,
    useEffect
} from 'react';
import {
    Table
} from 'react-bootstrap';

const EmployerList = () => {

    const [list, setList] = useState([]);
    useEffect(async() => {
        let result = await fetch("http://127.0.0.1:8000/api/employee/list");
        result = await result.json();
        setList(result);
    }, [])

    function deleteEmployee(id) {
        fetch('http://127.0.0.1:8000/api/employee/delete/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }

    return ( <
        >
        <
        div className = 'row justify-content-center' >
        <
        div className = 'col-5 mt-5' >
        <
        center >
        <
        h1 > Employee List < /h1> <
        Table striped bordered className = 'mt-5' >
        <
        thead >
        <
        tr >
        <
        td > < b > Employee Name < /b></td >
        <
        td > < b > Company Name < /b></td >
        <
        td > < b > Contact No. < /b></td >
        <
        td > < b > Username < /b></td >
        <
        td > < b > Action < /b></td >
        <
        /tr> < /
        thead > <
        tbody > {
            list.map((employee) =>
                <
                tr >
                <
                td > {
                    employee.employee_name
                } < /td> <
                td > {
                    employee.company_name
                } < /td> <
                td > {
                    employee.contact_no
                } < /td> <
                td > {
                    employee.username
                } < /td> <
                td >
                <
                Link to = {
                    `/employee/edit/${employee.id}`
                }
                className = 'btn btn-warning mx-3' > Edit < /Link> <
                button onClick = {
                    () => deleteEmployee(employee.id)
                }
                className = 'btn btn-danger' > Delete < /button> < /
                td > <
                /tr>
            )
        } <
        /tbody> < /
        Table > <
        Link to = '/admin'
        className = 'btn btn-success' > Go Back < /Link> < /
        center > <
        /div> < /
        div > <
        />
    );
}

export default EmployerList;