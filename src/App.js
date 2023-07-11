
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage'
import { makeStyles } from '@material-ui/core';
import Alert from './components/Alert';





const useStyles = makeStyles(() => ({

  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },

}))

function App() {

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes><Route path='/' Component={Homepage} exact /></Routes>
        <Routes><Route path='/coins/:id' Component={CoinPage} /></Routes>
      </div>
      <Alert/>
    </BrowserRouter>
  );
}

export default App;


//