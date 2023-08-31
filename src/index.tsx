import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Topbar from './components/Topbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import BottomBar from './components/BottomBar';
import theme from './Theme';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/> {/*ฟอนต์ Roboto*/}
      <link href="https://fonts.googleapis.com/css2?family=Itim&family=Nunito&display=swap" rel="stylesheet" />  {/*ฟอนต์ itim*/}
      <link href="https://fonts.googleapis.com/css2?family=Prompt&display=swap" rel="stylesheet"></link> {/*ฟอนต์ Prompt*/}
      <ThemeProvider theme={theme}>
        <Topbar />
        <App />
        <BottomBar />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
