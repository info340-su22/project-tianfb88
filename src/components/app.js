import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Crowd from "./crowdsource";
import Organizer from "./organizer";
import Appointment from "./appointtable";
import Detail from "./detailPage";
import Saved from "./saveList";
import AppHeader from "./header";
import AppFooter from "./footer";
import { dataList, addSaved } from "../data/data";
import Notify from './notify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppMain />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


function AppMain() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="about" element={<About />}></Route>
        <Route path="home" element={<Home data={dataList} />}></Route>
        <Route path="crowd" element={<Crowd data={dataList} />}></Route>
        <Route path="notify" element={<Notify />}></Route>
        <Route path="organizer" element={<Organizer />}></Route>
        <Route path="appointment" element={<Appointment />}></Route>
        <Route path="detail/:id" element={<Detail data={dataList} fun={addSaved} />}></Route>
        <Route path="saved" element={<Saved />}></Route>
      </Routes>
      <AppFooter />
    </>
  );
}

export default App;
