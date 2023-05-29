
import {useDispatch, useSelector} from "react-redux" 
import { setTheme } from "../../redux/actions";
import { useTheme } from "styled-components";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import styled from "styled-components";




const ChangeThemeBtn =  () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const theme_now = useSelector(state => state.setThemeReducer.theme)

    const [show_Option, setShow_Option] = useState(false);
    
    const handleChangeTheme = (isDark) => {
        const theme_name = isDark ? 'dark' : 'light';
        dispatch(setTheme(theme_name));
    }


    
    const DivOption = styled.div`
        display: flex;
        gap: 0.5rem;
        padding: 0.2rem 0.6rem;
        cursor: pointer;
        &:hover {
            color: blue;
            textDecoration: underline;
        }
    `

    return (
        <Dropdown show={show_Option} onSelect={() => setShow_Option(!show_Option)}>
        <DropdownToggle 
            style={{backgroundColor: "#69c892", borderColor: "#69c892", color: "black", }} 
            onClick={()=>setShow_Option(!show_Option)
        }>
            <i className={theme_now === 'dark' ?  "bi bi-moon-stars-fill" : "bi bi-brightness-high-fill"}></i>
        </DropdownToggle>
        <DropdownMenu style={{width: "3rem", borderRadius: '0.4rem'}}>
        <div style={{display: "flex", flexDirection: "column", gap: "0.3rem"}}>
            <Dropdown.Item>
            <DivOption onClick={()=>handleChangeTheme(false)}>
                <i class="bi bi-brightness-high-fill"></i>
                <div>Light</div>
            </DivOption>
            </Dropdown.Item>
            <Dropdown.Item>
            <DivOption onClick={()=>handleChangeTheme(true)}>
                <i class="bi bi-moon-stars-fill"></i>
                <div>Dark</div>
            </DivOption>
            </Dropdown.Item>
        </div>
        </DropdownMenu>
        </Dropdown>

    )
}

export default ChangeThemeBtn;