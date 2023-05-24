import React from 'react';
import Header from '../Header/Header';
import SecTitle from '../shared/SecTitle/SecTitle';
import Sec2 from '../Sec2/Sec2';
import Sec3 from '../Sec3/Sec3';
import Sec4 from '../Sec4/Sec4';
import { useTitle } from '../useCustom/useCustom';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Header></Header>
            <SecTitle one='From 11:00am to 10:00pm' two='order online'></SecTitle>
            <Sec2></Sec2>
            <Sec3></Sec3>
            <SecTitle one='Check it out' two='from out menu'></SecTitle>
            <Sec4></Sec4>
        </div>
    );
};

export default Home;