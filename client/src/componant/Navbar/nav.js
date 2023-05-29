    import { NavLink } from "react-router-dom";
    import ChangeThemeBtn from "../changeThemeButton/ChageThemeBtn";
    import { NavEle } from "../../styleComponant/styleComp";
    import "./nav.scss"
import { useDispatch, useSelector } from "react-redux";
import { checkIsSignIn } from "../../redux/actions";
import { useState } from "react";


    const NaviBar = () => { 
        const nav_element = {
            textDecoration: "none",
            color: "white",
            padding: "0 0.3rem"
        }

        const dispatch = useDispatch();
        dispatch(checkIsSignIn(localStorage.getItem('token')));
        const status = useSelector(state => state.checkSignInReducer.status);
        const error = useSelector(state => state.checkSignInReducer.error);

        console.log(status)

        return (
            <nav class="navbar navbar-expand-lg bg-body-tertiary w-100" style={{ position: "fixed" ,backgroundColor: "#69c892"}}>
                <div className="container-fluid">
                    <NavLink style={nav_element} to="/"><img src="https://www.sieuthidungcuthethao.com/datafiles/38994/upload/images/logo/logo-sieuthidungcuthethao1.png?t=1673403199" height="40" width="50"/></NavLink>
        
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavEle to="/">Home</NavEle>
                        <div style={{color: "white"}}>|</div>
                        <NavEle to="/product">Product</NavEle>
                    </div>
                    {/* <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    {status ? (<div>OK</div>) : 
                    (<div className="acount">
                        <NavEle to="/sign-in">Sign in</NavEle>
                        <div style={{color: "white"}}>/</div>
                        <NavEle to="/sign-up">Sign up</NavEle>
                    </div>)}
                    
                    <ChangeThemeBtn/>
                </div>
            </nav>
        );
    }

    export default NaviBar;