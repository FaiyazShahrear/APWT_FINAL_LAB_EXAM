import {
    Link,
    useHistory
} from 'react-router-dom'
import {
    useState
} from 'react';
import {
    Table
} from 'react-bootstrap';

const AddJob = () => {

    const [company_name, setCompanyName] = useState("");
    const [job_title, setJobTitle] = useState("");
    const [job_location, setJobLocation] = useState("");
    const [salary, setSalary] = useState("");
    const history = useHistory();

    async function addJob() {
        let job = {
            company_name,
            job_title,
            job_location,
            salary
        };
        let resut = await fetch('http://127.0.0.1:8000/api/job/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(job)
        })

        history.push('/job/list');
    }

    return ( <
        >
        <
        center >
        <
        h1 className = 'mt-5' > Add Job < /h1> <
        div className = 'mt-5 col-5' >
        <
        Table striped bordered >
        <
        tbody >
        <
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
        td > Job Title < /td> <
        td >
        <
        input type = "text"
        class = "form-control"
        name = "job_title"
        onChange = {
            (e) => setJobTitle(e.target.value)
        } > < /input> < /
        td > <
        /tr> <
        tr >
        <
        td > Job Location < /td> <
        td >
        <
        input type = "text"
        class = "form-control"
        name = "job_location"
        onChange = {
            (e) => setJobLocation(e.target.value)
        } > < /input> < /
        td > <
        /tr> <
        tr >
        <
        td > Salary < /td> <
        td >
        <
        input type = "text"
        class = "form-control"
        name = "salary"
        onChange = {
            (e) => setSalary(e.target.value)
        } > < /input> < /
        td > <
        /tr> <
        tr >
        <
        td colspan = "3"
        align = "center" > < button onClick = {
            addJob
        }
        class = "btn btn-success"
        style = {
            {
                width: '400px'
            }
        } > Add < /button></td >
        <
        /tr> < /
        tbody > <
        /Table> < /
        div > <
        Link to = '/employee'
        className = 'btn btn-outline-success' > Go Back < /Link> < /
        center > <
        />
    );
}

export default AddJob;