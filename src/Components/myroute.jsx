import * as React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const Login = React.lazy(() => import('./login'))
const Dashboard = React.lazy(() => import('./dashboard'))
const Myroute =()=>{

    return(
        <Router>
            <Routes>
                <Route path="/" element={
                                        <React.Suspense fallback={<>Loading....</>}>
                                            <Login/>
                                        </React.Suspense>
                                        }>
                </Route>
                <Route path="/dashboard" element={
                                        <React.Suspense fallback={<>Loading....</>}>
                                            <Dashboard/>
                                        </React.Suspense>
                                        }>
                </Route>
            </Routes>
        </Router>
    )

}

export default Myroute;