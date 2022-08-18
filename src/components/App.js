import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppointTable from './appointtable';
import Crowdsource from './crowdsource';
import PageFilter from './home';
import Nav from './Nav';
import About from './AboutUs';
import APT from '../data/aptData.json';
import DetailPage from './detailPage';
import Search from './Search';
import _ from 'lodash';

function App(props) {

        let apartments = props.apartments;
        let [savedApartments, setSavedApartments] = useState([]);
    
        function addToSavedList(name) {
            let apt = _.find(apartments, {name: name});
            let copy = [...savedApartments];
            if (!copy.includes(apt)) {
                copy.push(apt);
                setSavedApartments(copy);
            }
        }
    
        function deleteFromSavedList(name) {
            let copy = [...savedApartments];
            copy = copy.filter(apt => apt.name !== name);
            setSavedApartments(copy);
        }
    return (
            <Routes>
                <Route path= "/" element={<Nav />} >
                    <Route path ='home' element={<PageFilter apartments={APT} addCallback={addToSavedList} deleteCallback={deleteFromSavedList}/>} >
                        <Route path="home/:aptName" element={<DetailPage />} />
                    </Route>
                    <Route path="detailPage" element={<DetailPage />} />
                    <Route path="crowdsource/*" element={<Crowdsource data={APT} />} />
                    <Route path="appointment" element={<AppointTable />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
    )
}

export default App;