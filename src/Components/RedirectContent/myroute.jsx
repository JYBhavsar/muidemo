import React, {useState} from "react"; 
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "../LayoutContent/Navbar.jsx";
import FlashMessage from "../LayoutContent/snackbar.jsx";
import Spinner from '../LayoutContent/Spinner.jsx';

const Login = React.lazy(() => import('../LoginContent/login'))
const Dashboard = React.lazy(() => import('../DashboardContent/dashboard'))
const TaskMgmt = React.lazy(() => import('../TaskManagment/TaskMgmt'))


const Myroute =(props)=>{

    const [alert, setAlert] = useState(null);
    const showAlert = (message, type)=>{
        console.log(message);
        setAlert({
            msg: message,
            type: type
        });
    }

    return(
        <>
        {alert?<FlashMessage alert={alert} />:''}
        <Navbar title={"MUI Demo"} showAlert={showAlert} />
        <Router>
            <Routes>
                <Route path="/dashboard" element={
                                        <React.Suspense fallback={<><Spinner/></>}>
                                           <Dashboard showAlert={showAlert}/> 
                                        </React.Suspense>
                                        }>
                </Route>
                <Route path="/task" element={
                                        <React.Suspense fallback={<><Spinner/></>}>
                                            <TaskMgmt showAlert={showAlert}/>
                                        </React.Suspense>
                                        }>
                </Route>
                <Route path="/" element={
                                        <React.Suspense fallback={<><Spinner/></>}>
                                            <Login showAlert={showAlert}/>
                                        </React.Suspense>
                                        }>
                </Route>
            </Routes>
        </Router>
        </>
    )

}

export default Myroute;