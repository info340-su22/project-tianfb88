import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Filter(props) {
    const [textInput, setTextInput] = useState("");
    const [onC, setOnCampus] = useState(false);
    const [offC, setOffCampus] = useState(false);
    const [isStudio, setStudio] = useState(false);
    const [isOne, setOneB] = useState(false);
    const [isTwo, setTwoB] = useState(false);
    const [isThr, setThrB] = useState(false);
    const [isFour, setFourB] = useState(false);

    let inputHandler = (event) => {
        let lowerCaseInput = event.target.value.toLowerCase();
        setTextInput(lowerCaseInput);
    }

    let handleOn = (event) => {
        let on = event.target.checked;
        if (onC !== on) {
            setOnCampus(on);
        }
    }

    let handleOff = (event) => {
        let off = event.target.checked;
        if (offC !== off) {
            setOffCampus(off);
        }
    }

    let handleOne = (event) => {
        let studioCheck = event.target.checked;
        if (isStudio !== studioCheck) {
            setStudio(studioCheck);
        }
    }

    let handleTwo = (event) => {
        let oneBCheck = event.target.checked;
        if (isOne !== oneBCheck) {
            setOneB(oneBCheck);
        }
    }

    let handleThr = (event) => {
        let twoBCheck = event.target.checked;
        if (isTwo !== twoBCheck) {
            setTwoB(twoBCheck);
        }
    }

    let handleFour = (event) => {
        let thrBCheck = event.target.checked;
        if (isThr !== thrBCheck) {
            setThrB(thrBCheck);
        }
    }

    let handleFive = (event) => {
        let fourBCheck = event.target.checked;
        if (isFour !== fourBCheck) {
            setFourB(fourBCheck);
        }
    }
    return(
        <section className='sect1'>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={inputHandler} />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => {props.applySearchCallback(textInput)}}>Search</button>
                <button className="btn btn-outline-secondary" type="submit" onClick={() => {props.applyFilterCallback(onC, offC, isStudio, isOne, isTwo, isThr, isFour)}}>Apply Filter</button>
            </form>
            <h3 className="question">Distance to UW Campus</h3>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" checked={onC} onChange={handleOn} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        On Campus
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" checked={offC} onChange={handleOff} />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Off Campus
                    </label>
                </div>
                <h3 className="question">Floor Plan</h3>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="one" checked={isStudio} onChange={handleOne} />
                    <label className="form-check-label" htmlFor="flexRadioDisabled">
                        Studio
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="one" checked={isOne} onChange={handleTwo} />
                    <label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
                        1B
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="one" checked={isTwo} onChange={handleThr} />
                    <label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
                        2B
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="one" checked={isThr} onChange={handleFour} />
                    <label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
                        3B
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="one" checked={isFour} onChange={handleFive} />
                    <label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
                        4B
                    </label>
                </div>
        </section>
    )
}

function AptCard(props) {
    let apt = props.apt;
    let aptName = apt.name;
    let aptLocation = 'Location: ' + apt.location;
    let aptFloorplan = 'Floor plan: ' + apt.floorplan;
    let aptImage =  apt.img;
    //let aptAddress = 'Address: ' + apt.address;

    let [isSaved, setIsSaved] = useState(false);
    let [btnStyle, setBtnStyle] = useState(["success", "add"]);

    let handleClick = (event) => {
        if (!isSaved) {
            setIsSaved(true);
        } else {
            setIsSaved(false);
        }
        if (btnStyle[0] === "success") {
            setBtnStyle(["danger", "close"]);
            props.addCallback(aptName);
        } else {
            setBtnStyle(["success", "add"]);
            props.deleteCallback(aptName);
        }
    }

    return (
        <div className="card">
            <img src={aptImage} alt={aptName} />
            <p>{aptName}</p>
            <ul>
                <li>{aptLocation}</li>
                <li>{aptFloorplan}</li>
            </ul>
            <div className="card-header">
                {aptName} <button className={'btn btn-outline-' + btnStyle[0]} type='submit' onClick={handleClick}>
                    <span className="material-symbols-outlined pt-1">{btnStyle[1]}</span>
                </button>
                <Link to={'search/' + aptName} className="btn btn-primary">Learn More</Link>
            </div>
        </div>
    )
}


function CardList(props) {
    let apartments = props.apartments;
    let cardsArray = apartments.map((apt) => {
        return <AptCard key={apt.key} apt={apt} addCallback={props.addCallback} deleteCallback={props.deleteCallback} />
    })

    if(cardsArray === 0) {
        return(
            <h2 className='result'>No results found</h2>
        )
    } else {
        return (
            <section className='sect2'>
                <div className='new-container'>
                    {cardsArray}
                </div>
            </section>
        )
    }
}

function SectionThree() {
    return(
        <section className="sect3">
            <ul className="info">
                <h4>Popular Choices</h4>
                <li><a href="https://www.themseattle.com/?gclid=Cj0KCQjwxb2XBhDBARIsAOjDZ36WetZZiR19bhbrGW-1PrZlTBRBzE3jfDv1XvPILOZlybpADmBjGdoaAjMKEALw_wcB"><p>The M</p></a></li>
                <li><a href="https://liveatnolan.com/"><p>Nolan</p></a></li>
                <li><a href="https://www.americancampus.com/student-apartments/wa/seattle/hub-u-district-seattle"><p>Hub U District</p></a></li>
                <li><a href="https://www.americancampus.com/student-apartments/wa/seattle/twelve-at-u-district?utm_source=&utm_medium=&utm_campaign=&utm_content=&gclid=Cj0KCQjwxb2XBhDBARIsAOjDZ35CwWGmoIDwZBwOhay81Hyjevry3LN4jxko3NUP1Duc_OHoqqAvITAaApRbEALw_wcB"><p>Twelve at U District</p></a></li>
                <li>...</li>
                <p className="suggest">Find more by searching at this website!</p>
            </ul>
        </section>
    )
}

export default function PageFilter(props) {
    let apartments = props.apartments;

    const [location, setLocation] = useState({in: false, out: false});
    const [floorPlan, setFloorPlan] = useState({s: false, one: false, two: false, thr: false, four:false});
    const [textInput, setTextInput] = useState("");

    let applySearch = (searchString) => {
        setTextInput(searchString)
    }
    
    let applyFilter = (onCa, offCa, stu, b1, b2, b3, b4) => {
        setLocation({in: onCa, out: offCa});
        setFloorPlan({s: stu, one: b1, two: b2, thr: b3, four: b4});
    }

    let onC = location.in;
    let offC = location.out;

    let isStudio = floorPlan.s;
    let isOne = floorPlan.one;
    let isTwo = floorPlan.two;
    let isThr = floorPlan.thr;
    let isFour = floorPlan.four;

    if(textInput === "") {
        apartments = [...apartments];
    } else {
        apartments = apartments.filter((apt) => apt.name.toLowerCase().contains(textInput));
    }

    if (onC === true && offC === false) {
        apartments = apartments.filter((apt) => apt.location === 'On-campus Apartment');
    } else if (offC === false && onC === true) {
        apartments = apartments.filter((apt) => apt.location === 'Off-campus Apartment');
    }

    if (isStudio === true) {
        apartments = apartments.filter((apt) => apt.floorPlan.contains('Studio'));
    } else if(isOne === true) {
        apartments = apartments.filter((apt) => apt.floorPlan.contains('1B'));
    } else if(isTwo === true) {
        apartments = apartments.filter((apt) => apt.floorPlan.contains('2B'));
    } else if(isThr === true) {
        apartments = apartments.filter((apt) => apt.floorPlan.contains('3B'));
    } else if(isFour === true) {
        apartments = apartments.filter((apt) => apt.floorPlan.contains('4B'));
    }

    return (
        <div>
            <Filter applyFilterCallback={applyFilter} applySearchCallback={applySearch}/>                                          
            <CardList apartments={apartments} addCallback={props.addCallback} deleteCallback={props.deleteCallback} />   
            <SectionThree />                                  
        </div>
    )
}
