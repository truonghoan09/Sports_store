import { useEffect, useState } from "react";
import "./signUp.scss";
import { NavLink } from "react-router-dom";
import ModalNotice from "../modalNotice/modalNotice";
import NaviBar from "../Navbar/nav";
import { BackgroundSigninDiv, BlockSignUpDiv, EyeIcon, SignUpButton, TagInput, TagLabel, TextDiv } from "../../styleComponant/styleComp";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/actions";
import LoadingModal from "../loadingModal/loadingModal";
import NoticeRegisterOrSignInModal from "../noticeRegisterOrSignInModal/noticeRegisterOrSignInModal";
import NoticeEmailExistModal from "../noticeRegisterOrSignInModal/noticeEmailExist";

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confrPassword, setconfrPassword] = useState('');
    const [C_name, setC_name] = useState('');
    const [C_email, setC_email] = useState('');
    const [C_password, setC_password] = useState('');
    const [C_confirmPassword, setC_confirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [notice, setnotice] = useState({isshow: false, message: '', severity: ''});
    const [reRenderName, setReRenderName] = useState(false);
    const [reRenderEmail, setReRenderEmail] = useState(false);
    const [reRenderPassword, setReRenderPassword] = useState(false);
    const [reRenderConfirmPassword, setReRenderConfirmPassword] = useState(false);
    const [firstNotice, setFirstNotice] = useState(true);
    const [showNoticeEmailExist, setShowNoticeEmailExist] = useState(true);

    useEffect(() => {
        if (reRenderName) {
            if (name === '') {
                setC_name('This field cannot be left blank.');
            } else { 
                setC_name('');
            }
        } else {setReRenderName(true)}
    }, [name])

    useEffect(() => {
        if (reRenderEmail) {
            if (email === '') {
                setC_email('This field cannot be left blank.');
            } else {
                if (email.indexOf('@') === -1 && email !== '') setC_email(`The email you entered is invalid because it is missing the '@' symbol.`);
                else setC_email('');
            }
        } else {setReRenderEmail(true)}
    }, [email])

    useEffect(() => {
        if (reRenderPassword) {
            if (password === '') {
                setC_password('This field cannot be left blank.');
            } else {
                if ((password.length < 6) && password !== '') setC_password('Your password must be at least 6 characters long.');
                else setC_password('');
            }
        } else {setReRenderPassword(true)}
    }, [password, confrPassword])

    useEffect(() => {
        if (reRenderConfirmPassword) {
            if (confrPassword === '') {
                setC_confirmPassword('This field cannot be left blank.');
            } else {
                if (C_password !== '' && password !== '' && confrPassword !== '') {
                    setC_confirmPassword('Please enter a password that meets the specified requirements!')
                } else {
                    if (confrPassword !== password && confrPassword !== '') setC_confirmPassword('Please double-check your confirm password, it should match the password.');
                    else if(confrPassword === password && confrPassword !== "" ) {setC_confirmPassword('')}
                }
            }
        } else {setReRenderConfirmPassword(true)}
    }, [confrPassword, password])


    const check_val = () => {
        if (reRenderName) {
            if (name === '') {
                setC_name('This field cannot be left blank.');
            } else { 
                setC_name('');
            }
        } else {setReRenderName(true)}
        if (reRenderEmail) {
            if (email === '') {
                setC_email('This field cannot be left blank.');
            } else {
                if (email.indexOf('@') === -1 && email !== '') setC_email(`The email you entered is invalid because it is missing the '@' symbol.`);
                else setC_email('');
            }
        } else {setReRenderEmail(true)}

        if (reRenderPassword) {
            if (password === '') {
                setC_password('This field cannot be left blank.');
            } else {
                if ((password.length < 6) && password !== '') setC_password('Your password must be at least 6 characters long.');
                else setC_password('');
            }
        } else {setReRenderPassword(true)}

        if (reRenderConfirmPassword) {
            if (confrPassword === '') {
                setC_confirmPassword('This field cannot be left blank.');
            } else {
                if (C_password !== '' && password !== '' && confrPassword !== '') {
                    setC_confirmPassword('Please enter a password that meets the specified requirements!')
                } else {
                    if (confrPassword !== password && confrPassword !== '') setC_confirmPassword('Please double-check your confirm password, it should match the password.');
                    else if(confrPassword === password && confrPassword !== "" ) {setC_confirmPassword('')}
                }
            }
        } else {setReRenderConfirmPassword(true)}

        if (C_name === '' && C_email === '' && C_password === '' && C_confirmPassword === '') {
            return true;
        } else {
            return false;
        }
    }

    const dispatch = useDispatch();
    const loading = useSelector(state => state.addUserReducer.loading);
    const data = useSelector(state => state.addUserReducer.data);
    const error = useSelector(state => state.addUserReducer.error);
    
    const handleClickSignUp =  () => {

        const datasend = {
            fullName: name,
            email: email,
            password: password
        }

        if (name === '' || email === '' || password === '' || confrPassword === '')
            setnotice({isshow: true, message: "Bạn cần nhập đầy đủ tất cả các ô: Fullname, Email, Password và Confirm Password, vui lòng kiểm tra lại!", severity: "Waning"})
        else 
        if (check_val()) {
            dispatch(addUser(datasend));
            setShowNoticeEmailExist(true);
        } else {
            setnotice({isshow: true, message: "Sai thông tin rồi, kiểm tra lại", severity: "Warning"})
        }
    }

    const backgroundStyle = {
        height: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        alignContent: "center",
    }
    
    const danger = {
        color: "red",
        fontSize: "0.8rem",
        paddingLeft: "0.3rem",
        paddingTop: "0.3rem",
    }

    useEffect (() => {
        if (error) {
            setnotice({isshow: true, message: error, severity: "ERROR"})
        }
    }, [error])

    return (
        <>
            <LoadingModal show={loading}/>
            {data ? 
                <>  
                    {data.err===0 && firstNotice ? <NoticeRegisterOrSignInModal user={{email: email, password: password}} message="Bạn đã đăng ký thành công tài khoản mới!"/> : null}
                    {data.err===1 && showNoticeEmailExist ? <NoticeEmailExistModal show={setShowNoticeEmailExist} onHide={() => {setShowNoticeEmailExist(false)}}/> : null}
                </> 
                : 
                null
            }
            <NaviBar/>
            <BackgroundSigninDiv style={backgroundStyle}>
                <BlockSignUpDiv style={{width: "35rem", height: "auto", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.1rem"}}>
                    <TextDiv style={{fontSize: "1.5rem", }}>Register a new account</TextDiv>
                    <div className="form-outline form-floating mb-4" style={{marginTop: "1rem"}}>
                                        <TagInput type="text" id="form2Example11" className="form-control"
                                        placeholder=" " onChange={(e)=> setName(e.target.value)}/>
                                        <TagLabel className="form-label" >Fullname</TagLabel>
                                        <div style={danger}>{C_name}</div>
                    </div>
                    <div className="form-outline form-floating mb-4">
                                        <TagInput type="text" id="form2Example11" className="form-control"
                                        placeholder=" " onChange={(e)=> {setEmail(e.target.value)}}/>
                                        <TagLabel className="form-label" >
                                            Email
                                        </TagLabel>
                                        <div style={danger}>{C_email}</div>
                    </div>
                    <div style={{ position: "relative" }} className="form-outline form-floating mb-4">
                                            <TagInput type={showPassword ? "text" : "password"} className="form-control" placeholder=' ' onChange={(e)=> setPassword(e.target.value)}/>
                                            <EyeIcon
                                                onClick={() => setShowPassword(!showPassword)}
                                                className={showPassword ? "bi bi-eye-slash-fill" : 'bi bi-eye-fill'}
                                            ></EyeIcon>
                                        <TagLabel className="form-label">Password</TagLabel>
                                        <div style={danger}>{C_password}</div>
                                    </div>
                    <div style={{ position: "relative" }} className="form-outline form-floating mb-4">
                                            <TagInput type={showConfirmPassword ? "text" : "password"} className="form-control" placeholder=' '
                                            onChange={(e)=> setconfrPassword(e.target.value)}/>
                                            <EyeIcon
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className={showConfirmPassword ? "bi bi-eye-slash-fill" : 'bi bi-eye-fill'}
                                            ></EyeIcon>
                                            <div style={danger}>{C_confirmPassword}</div>
                                        <TagLabel className="form-label">Confirm Password</TagLabel>
                                    </div>
                    <TextDiv className="note">You already have an account, <NavLink className={'navL'} to={"/sign-in"}>Login now!</NavLink></TextDiv>
                    <div style={{padding: "0.5rem 1rem"}}>
                        <SignUpButton className="butSignUp" onClick={()=>handleClickSignUp()}>Sign Up</SignUpButton>
                    </div>
                </BlockSignUpDiv>
            </BackgroundSigninDiv>
            <ModalNotice show={notice.isshow} onHide={() => setnotice(!notice.isshow)} message={notice.message} severity={notice.severity}/>
        </>
    )
}

export default SignUp;