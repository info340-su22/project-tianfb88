import React, { useState } from 'react';

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
        if (onC != on) {
            setOnCampus(on);
        }
    }

    let handleOff = (event) => {
        let off = event.target.checked;
        if (offC != off) {
            setOffCampus(off);
        }
    }

    let handleOne = (event) => {
        let studioCheck = event.target.checked;
        if (isStudio != studioCheck) {
            setStudio(studioCheck);
        }
    }

    let handleTwo = (event) => {
        let oneBCheck = event.target.checked;
        if (isOne != oneBCheck) {
            setOneB(oneBCheck);
        }
    }

    let handleThr = (event) => {
        let twoBCheck = event.target.checked;
        if (isTwo != twoBCheck) {
            setTwoB(twoBCheck);
        }
    }

    let handleFour = (event) => {
        let thrBCheck = event.target.checked;
        if (isThr != thrBCheck) {
            setThrB(thrBCheck);
        }
    }

    let handleFive = (event) => {
        let fourBCheck = event.target.checked;
        if (isFour != fourBCheck) {
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
            <h3 class="question">Distance to UW Campus</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" checked={onC} onChange={handleOn} />
                        <label className="form-check-label" for="flexCheckDefault">
                            On Campus
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" checked={offC} onChange={handleOff} />
                        <label className="form-check-label" for="flexCheckChecked">
                            Off Campus
                        </label>
                    </div>
                    <h3 className="question">Floor Plan</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="one" checked={isStudio} onChange={handleOne} />
                        <label className="form-check-label" for="flexRadioDisabled">
                        Studio
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="one" checked={isOne} onChange={handleTwo} />
                        <label className="form-check-label" for="flexRadioCheckedDisabled">
                        1B
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="one" checked={isTwo} onChange={handleThr} />
                        <label className="form-check-label" for="flexRadioCheckedDisabled">
                        2B
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="one" checked={isThr} onChange={handleFour} />
                        <label className="form-check-label" for="flexRadioCheckedDisabled">
                        3B
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="one" checked={isFour} onChange={handleFive} />
                        <label className="form-check-label" for="flexRadioCheckedDisabled">
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
    let aptFloorplan = 'Floor plan: ' + apt.floorPlan;
    let aptImage = '/img/apartment/' + apt.img;
    let aptAddress = 'Address: ' + apt.address;

    let [isSaved, setIsSaved] = useState(false);
    let [btnStyle, setBtnStyle] = useState(["success", "add"]);

    let handleClick = (event) => {
        if (!isSaved) {
            setIsSaved(true);
        } else {
            setIsSaved(false);
        }
        if (btnStyle[0] == "success") {
            setBtnStyle(["danger", "close"]);
            props.addCallback(aptName);
        } else {
            setBtnStyle(["success", "add"]);
            props.deleteCallback(aptName);
        }
    }

    return (
        <div className="cardFrame">
            <div className="cardShadow">
                <img src={aptImage} className="card-img-top" alt={aptName} />
                <div className="card-header">
                    {aptName} <button className={'btn btn-outline-' + btnStyle[0]} type='submit' onClick={handleClick}>
                        <span className="material-symbols-outlined pt-1">{btnStyle[1]}</span>
                    </button>
                </div>
                <div className="card-body">
                    <p className="card-text">{aptLocation}</p>
                    <p className="card-text">{aptFloorplan}</p>
                    <p className="card-text">{aptAddress}</p>
                </div>
            </div>
        </div>

    )

}


function CardList(props) {
    let apartments = props.apartments;
    let cardsArray = apartments.map((apt) => {
        return <AptCard myKey={apt.key} apt={apt} addCallback={props.addCallback} deleteCallback={props.deleteCallback} />
    })

    if(cardsArray == 0) {
        return(
            <h2 className='result'>No results found</h2>
        )
    } else {
        return (
            <div className="cardGroup">
                <div className="row">
                    {cardsArray}
                </div>
            </div>
        )
    }
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

    if(textInput == "") {
        apartments = apartments;
    } else {
        apartments = apartments.filter((apt) => apt.name.toLowerCase().includes(textInput));
    }

    if (onC == true && offC == false) {
        apartments = apartments.filter((apt) => apt.location == 'On-campus Apartment');
    } else if (offC == false && onC == true) {
        apartments = apartments.filter((apt) => apt.location == 'Off-campus Apartment');
    } else {
        apartments = apartments;
    }

    if (isStudio == true) {
        apartments = apartments.filter((apt) => apt.floorPlan.includes('Studio'));
        if(isOne == true) {
            apartments = apartments.filter((apt) => apt.floorPlan.includes('1B'));
        }
    } else if(isTwo == true) {
        apartments = apartments.filter((apt) => apt.floorPlan.includes('2B'));
    } else if(isThr == true) {
        apartments = apartments.filter((apt) => apt.floorPlan.includes('3B'));
    } else if(isFour == true) {
        apartments = apartments.filter((apt) => apt.floorPlan.includes('4B'));
    }

    return (
        <div>
            <Filter applyFilterCallback={applyFilter} applySearchCallback={applySearch}/>                                          
            <CardList apartments={apartments} addCallback={props.addCallback} deleteCallback={props.deleteCallback} />                                     
        </div>
    )
}
