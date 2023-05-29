import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './componant/homePage/homePage';
import SignIn from './componant/signIn/signIn';
import SignUp from './componant/signUp/signUp';
import Product from './componant/product/product';
import LoadingModal from './componant/loadingModal/loadingModal';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/product' element={<Product/>}/>
        {/* <Route path='/loadingModal' element={<NoticeRegisterModal/>}/> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
