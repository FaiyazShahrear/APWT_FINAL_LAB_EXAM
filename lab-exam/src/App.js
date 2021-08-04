import RegisterEmployer from './components/employee/RegisterEmployer';
import EditEmployer from './components/employee/EditEmployer';
import EmployerList from './components/employee/EmployerList';
import AdminNavbar from './components/AdminNavbar';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';;

function App() {
    return ( <
        Router >

        <
        Switch >
        <
        Route exact path = '/' >
        <
        h1 align = "center" > Welcome To Admin Page! < /h1> <
        AdminNavbar / > < /
        Route > <
        Route path = '/register' >
        <
        RegisterEmployer status = 'add' / >
        <
        /Route>

        <
        Route exact path = '/employee/list' >
        <
        EmployeeList / >
        <
        /Route> <
        Route exact path = '/employee/edit/:id' >
        <
        EditEmployee / >
        <
        /Route>

        <
        Route exact path = '/employee' >
        <
        Employee / >
        <
        /Route>



        <
        Route path = '*' >
        404 not found <
        /Route>           < /
        Switch > <
        /Router>
    );
}

export default App;