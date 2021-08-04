import {
    Link,
    useHistory,
    useParams
} from 'react-router-dom'
import {
    useState,
    useEffect
} from 'react';
import {
    Table
} from 'react-bootstrap';

const EditEmployee = () => {

    const [employees, setEmployees] = useState([]);
    const [employee_name, setEmployeeName] = useState("");
    const [company_name, setCompanyName] = useState("");
    const [contact_no, setContact] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const {
        id: eid
    } = useParams();


    function updateEmployee() {
        let updatedEmp = {
            employee_name,
            company_name,
            contact_no,
            username,
            password
        };
        fetch('http://127.0.0.1:8000/api/employee/update/' + eid, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEmp)
        })

        history.push('/employee/list');
    }

    return ( <
        >
        <
        center >
        <
        h1 className = 'mt-5' > Update Employee < /h1> <
        div className = 'mt-5 col-5' >
        <
        Table striped bordered >
        <
        tbody >
        <
        tr >
        <
        td > Employee Name < /td> <
        td >
        <
        input type = "text"
        class = "form-control"
        name = "employee_name"
        onChange = {
            (e) => setEmployeeName(e.target.value)
        } > < /input> < /
        td > <
        /tr> <
        tr >
        <
        td > Company Name < /td> <
        td >
        <
        input type = "text"
        class = "form-control"
        name = "company_name"
        onChange = {
            (e) => setCompanyName(e.target.value)
        } > < /input> < /
        td > <
        /tr> <
        tr >
        <
        td > Contact No < /td> <
        td >
        <
        input type = "text"
        class = "form-control"
        name = "contact_no"
        onChange = {
            (e) => setContact(e.target.value)
        } > < /input> < /
        td > <
        /tr> <
        tr >
        <
        td > Username < /td> <
        td >
        <
        input type = "text"
        class = "form-control"
        name = "username"
        onChange = {
            (e) => setUsername(e.target.value)
        } > < /input> < /
        td > <
        /tr> <
        tr >
        <
        td > Password < /td> <
        td >
        <
        input type = "password"
        class = "form-control"
        name = "password"
        onChange = {
            (e) => setPassword(e.target.value)
        } > < /input> < /
        td > <
        /tr> <
        tr >
        <
        td colspan = "3"
        align = "center" > < button class = "btn btn-success"
        onClick = {
            updateEmployee
        }
        style = {
            {
                width: '400px'
            }
        } > Update < /button></td >
        <
        /tr> < /
        tbody > <
        /Table> < /
        div > <
        Link to = '/employee/list'
        className = 'btn btn-outline-success' > Go Back < /Link> < /
        center > <
        />
    );
}

export default EditEmployee;