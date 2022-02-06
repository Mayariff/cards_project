import React, {useEffect} from 'react';
import './App.module.css';
import Header from "./Header/Header";
import Routing, {PATH} from "./routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {initializeAppTC} from "../m2_BLL/0n_App-reduser";
import {AppRootStateType} from "../m2_BLL/store";
import {Link} from "react-router-dom";
import s from "./App.module.css";


function App() {
    const dispatch =useDispatch()
    const isInitialized = useSelector<AppRootStateType, boolean>(store=> store.app.isInitialized)



    useEffect( ()=> {
        dispatch(initializeAppTC())
    }, [dispatch])
    if(!isInitialized){
        return <Link to={PATH.LOGIN_PAGE} />
    }

  return (
    <div className="App">
        <Header />
        <div className={s.main}>
            <Routing/>
        </div>
    </div>
  );
}

export default App;
