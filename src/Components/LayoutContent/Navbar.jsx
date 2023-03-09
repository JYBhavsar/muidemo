import React from 'react'

export default function Navbar(props) {

    const token = localStorage.getItem("token");
    const authenticated = localStorage.getItem("authenticated");
    const clickHandle =()=>{
        props.showAlert("Welcome to home page !","success");
    }
    const HandleLogout =()=>{
        localStorage.setItem("authenticated", false);
        localStorage.setItem("token","");
    }

    return (
        <nav className={`navbar navbar-expand-lg`}>
            <div className="container-fluid">
                <a onClick={clickHandle} className="navbar-brand" href='/'>{props.title}</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {authenticated && token==="2010961130"?
                             <>
                             <a className="nav-link" aria-current="page" href="/task">Add Task</a>
                             </>
                            :<a className="nav-link" aria-current="page" href="/">Home</a>
                            }
                        </li>
                    </ul>
                    {authenticated && token==="2010961130"?
                    <>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{float:'right'}} >
                        <li>
                        <a className="nav-link" aria-current="page" href="/" 
                            style={{float:'right',border:'1px solid black',color:'black'}} 
                            onClick={HandleLogout}
                        >LogOut</a>
                        </li>
                    </ul>
                    </>
                    :''}
                </div>
            </div>
        </nav>
    )
}

