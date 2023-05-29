import { NavLink } from 'react-router-dom';
import './signIn.scss';
import { useEffect, useState } from 'react';
import ModalNotice from '../modalNotice/modalNotice';
import { BackgroundSigninDiv, EyeIcon } from '../../styleComponant/styleComp';
import  { useTheme } from 'styled-components';
import { BlockSignDiv, TagInput, TagLabel } from '../../styleComponant/styleComp';
import NaviBar from '../Navbar/nav';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/actions';
import LoadingModal from '../loadingModal/loadingModal';
import NoticeRegisterOrSignInModal from '../noticeRegisterOrSignInModal/noticeRegisterOrSignInModal';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contentCheckEmail, setContentCheckEmail] = useState('');
    const [contentCheckPassword, setContentCheckPassword] = useState('');
    const [notice, setnotice] = useState({isshow: false, message: "", severity: ""});
    const [reRenderEmail, setReRenderEmail] = useState(false);
    const [reRenderPassword, setReRenderPassword] = useState(false);
    const [checkDataResponse, setCheckDataRespons] = useState(true);
    const [preData, setPreData] = useState();
    

    useEffect(() => {
        if (reRenderEmail) {
            if (email === '') {
                setContentCheckEmail('This field cannot be left blank.');
            } else {
                if (email.indexOf('@') === -1 && email !== '') setContentCheckEmail(`The email you entered is invalid because it is missing the '@' symbol.`);
                else setContentCheckEmail('');
            }
        } else {
            setReRenderEmail(true);
        }
    }, [email])

    useEffect(() => {
        if (reRenderEmail) {
            if (email === '') {
                setContentCheckEmail('This field cannot be left blank.');
            } else {
                if (email.indexOf('@') === -1 && email !== '') setContentCheckEmail(`The email you entered is invalid because it is missing the '@' symbol.`);
                else setContentCheckEmail('');
            }
        } else {
            setReRenderEmail(true);
        }
        if (reRenderPassword) {
            if (password === '') {
                setContentCheckPassword('This field cannot be left blank.');
            } else {
                if ((password.length < 6) && password !== '') setContentCheckPassword('Your password must be at least 6 characters long.');
                else setContentCheckPassword('');
            }
        } else {
            setReRenderPassword(true);
        }
    }, [password])
    
    const check_val = () => {

        if (reRenderPassword) {
            if (password === '') {
                setContentCheckPassword('This field cannot be left blank.');
            } else {
                if ((password.length < 6) && password !== '') setContentCheckPassword('Your password must be at least 6 characters long.');
                else setContentCheckPassword('');
            }
        } else {
            setReRenderPassword(true);
        }
        if (contentCheckEmail === '' && contentCheckPassword === '') {
            return true;
        } else {
            return false;
        }
    }

    const dispatch = useDispatch();
    const data = useSelector(state => state.signInReducer.data);
    const loading = useSelector(state => state.signInReducer.loading)
    const error = useSelector(state => state.signInReducer.error)

    const handleClickSignInButton = () => {
        const datasend = {
            email: email,
            password: password
        }
        if (email === '' || password === '') {
            setnotice({isshow: true, message: "Bạn cần nhập đầy đủ cả 2 ô email và password, vui lòng kiểm tra lại!", severity: "Waning"})
        } else {
            if (check_val()) {
                //Gửi request
                setCheckDataRespons(true)
                dispatch(signIn(datasend));
                if (error) {
                    setnotice({isshow: true, message: error, severity: "ERROR"})
                }
              
            } else {
                setnotice({isshow: true, message: "Vui lòng kiểm tra lại thông tin bạn đã nhập và sửa cho đúng định dạng!", severity: "Waning"})
            }
        }
    }

    const theme_now = useTheme()


    return (
        <>
            <LoadingModal show={loading}/>
            {(data) && (checkDataResponse) && (data !== preData) ? 
                <>
                    {data.err === 0 ? 
                        <>
                            <NoticeRegisterOrSignInModal user={{email: email, password: password}} message="Bạn đã đăng nhập thành công!"/>
                        </> 
                        : 
                        <>
                            {data.err === 1 ? 
                                <>
                                    {setContentCheckPassword(data.message)}
                                    {setPreData(data)}
                                    {setCheckDataRespons(false)}
                                </> : 
                                <>
                                    {setContentCheckEmail(data.message)}
                                    {setPreData(data)}
                                    {setCheckDataRespons(false)}
                                </>}
                        </> }
                </>
            : null}
            <div classNameName='containerPage'>
                <BackgroundSigninDiv className="h-120 gradient-form">
                <NaviBar/>
                    <div className="container" >
                        <div>
                        <div className="col-xl-10" >
                            <BlockSignDiv className="card rounded-3 text-black container_sign">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                <div className="card-body p-md-5 mx-md-4">

                                    <form>
                                    <p style={{color: theme_now.textColor}}>Please login to your account</p>

                                    <div className="form-outline form-floating mb-4">
                                        <TagInput type="text" id="form2Example11" className="form-control"
                                        placeholder=" " onChange={(e) => {setEmail(e.target.value)}}/>
                                        <TagLabel className="form-label" >Email address</TagLabel>
                                        <div className='waningNotice'>{contentCheckEmail}</div>
                                    </div>    
                                    <div style={{ position: "relative" }} className="form-outline form-floating mb-4">
                                            <TagInput type={showPassword ? "text" : "password"} className="form-control" placeholder=' '
                                            onChange={(e) => {setPassword(e.target.value)}}/>
                                            <EyeIcon
                                                onClick={() => setShowPassword(!showPassword)}
                                                className={showPassword ? "bi bi-eye-slash-fill" : 'bi bi-eye-fill'}
                                            ></EyeIcon>
                                            <TagLabel className="form-label">Password</TagLabel>
                                            <div className='waningNotice'>{contentCheckPassword}</div>
                                    </div>
                

                                    <div className="text-center pt-1 mb-5 pb-1" style={{"display": "flex", "flexDirection" : "column"}}>
                                        <div className="btn mb-3 gradient-custom-2" style={{"color": "white"}} onClick={()=>handleClickSignInButton()}>Log in</div>
                                        <a className="text-muted" style={{"cursor": "pointer"}}>Forgot password?</a>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-center pb-4">
                                        <p style={{color: theme_now.textColor}} className="mb-0 me-2">Don't have an account?</p>
                                        <NavLink to="/sign-up" className="btn btn-outline-danger">Sign up</NavLink>
                                    </div>

                                    </form>
                                </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                    <h4 className="mb-4">Please log in to access all of our features.</h4>
                                    <p className="small mb-0">If you haven't registered for an account, please click on "Sign up" button to create a new account.</p>
                                </div>
                                </div>
                            </div>
                            </BlockSignDiv>
                        </div>
                        </div>
                    </div>
                    </BackgroundSigninDiv>
                </div>
            <ModalNotice show={notice.isshow} onHide={()=>setnotice(!notice.isshow)} message={notice.message} severity={notice.severity}/>
        </>
    )
}

export default SignIn;