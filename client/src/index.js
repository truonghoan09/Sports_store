import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import store from './redux/store';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import {light, dark} from "../src/redux/Theme/theme.js"
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'


const ThemeWrapper = ({children}) => {
  const theme_now = useSelector(state => state.setThemeReducer.theme);
  useEffect(()=>{
    console.log('theme_now from ThemeWrapper: ',theme_now);
  }, [theme_now]) 
  return (
    <ThemeProvider  theme={theme_now === "dark" ? dark : light}>
      {children}
    </ThemeProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
