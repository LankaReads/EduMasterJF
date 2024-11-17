import { Outlet } from "react-router-dom";



function AuthLayout(){
    return(
        <div className="d-flex min-vh-100 w-100">
            <div className="d-none d-lg-flex align-items-center justify-content-center w-50 bg-dark px-5">
                <div className="max-auto text-center text-primary">
                    <h1>Welacome to Student Portal</h1>
                </div>
            </div>
            <div className="d-flex flex-grow-1 align-items-center justify-content-center bg-light">
                <h1>Login</h1>
            </div>
        </div>
    );
}

export default AuthLayout;