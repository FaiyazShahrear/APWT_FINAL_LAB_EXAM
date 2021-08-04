import {
    Link
} from "react-router-dom"


const AdminNavbar = () => {

    return ( <
        div >
        <
        Link to = "/register" > Add Employer < /Link> |  <
        Link to = "/listExpenses" > Employer List < /Link> < /
        div >
    );
}

export default AdminNavbar;