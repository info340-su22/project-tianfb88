import React, { useState } from "react";
import { savedLists } from "../data/data";
import { useNavigate } from "react-router-dom";

function Saved(props) {
  const Navigate = useNavigate();
  const dataList = savedLists();
  const [filterData, setFilterData] = useState({
    floorplan: "Studio",
    campus: "On-campus",
  });

  const floorPlans = [
    "Studio",
    "1B1B",
    "2B1B",
    "2B2B",
    "3B1B",
    "3B2B",
    "3B3B",
    "4B2B",
    "4B4B",
  ];
  const campus = ["On-campus", "Off-campus"];

  return (
    <>
      <main>
        <div className="container">
          <section className="sect1">
            <h3 className="question">Distance to UW Campus</h3>
            {campus.map((item, index) => (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="campus"
                  value={item}
                  checked={filterData.campus === item}
                  onClick={() => {
                    setFilterData({
                      ...filterData,
                      campus: item,
                    });
                  }}
                />
                <label className="form-check-label" htmlFor="flexRadioDisabled">
                  {item}
                </label>
              </div>
            ))}
            <h3 className="question">Floor Plan</h3>
            {floorPlans.map((item, index) => (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="floorPlan"
                  value={item}
                  checked={filterData.floorplan === item}
                  onClick={() => {
                    setFilterData({
                      ...filterData,
                      floorplan: item,
                    });
                  }}
                />
                <label className="form-check-label" htmlFor="flexRadioDisabled">
                  {item}
                </label>
              </div>
            ))}
          </section>

          <section className="sect2">
            <div className="new-container">
              {dataList.map((item, index) => {
                if (
                  item.location.match(filterData.campus) &&
                  item.floorplan.match(filterData.floorplan)
                ) {
                  return (
                    <div className="card" key={index}>
                      <img src={item.img} alt="gray color apartment building" />
                      <p>{item.name}</p>
                      <ul>
                        <li>{item.location}</li>
                        <li>Floor plans: {item.floorplan}</li>
                        <li>Address: {item.address}</li>
                        <li>
                          <a href="https://hfs.uw.edu/campus-living/Undergraduate-Housing/Cedar-Apartments">
                            Official website
                          </a>
                        </li>
                      </ul>
                      <div className="newButton">
                        <button
                          type="button"
                          className="btn btn-info"
                          onClick={() => {
                            Navigate(`/detail/${item.key}`);
                          }}
                        >
                          learn more
                        </button>
                      </div>
                    </div>
                  );
                } else {
                  return <></>;
                }
              })}
            </div>
          </section>
          <section className="sect3">
            <ul className="info">
              <h4>Popular Choices</h4>
              <li>
                <a href="https://www.themseattle.com/?gclid=Cj0KCQjwxb2XBhDBARIsAOjDZ36WetZZiR19bhbrGW-1PrZlTBRBzE3jfDv1XvPILOZlybpADmBjGdoaAjMKEALw_wcB">
                  <p>The M</p>
                </a>
              </li>
              <li>
                <a href="https://liveatnolan.com/">
                  <p>Nolan</p>
                </a>
              </li>
              <li>
                <a href="https://www.americancampus.com/student-apartments/wa/seattle/hub-u-district-seattle">
                  <p>Hub U District</p>
                </a>
              </li>
              <li>
                <a href="https://www.americancampus.com/student-apartments/wa/seattle/twelve-at-u-district?utm_source=&utm_medium=&utm_campaign=&utm_content=&gclid=Cj0KCQjwxb2XBhDBARIsAOjDZ35CwWGmoIDwZBwOhay81Hyjevry3LN4jxko3NUP1Duc_OHoqqAvITAaApRbEALw_wcB">
                  <p>Twelve at U District</p>
                </a>
              </li>
              <li>...</li>
              <p className="suggest">Find more by searching at this website!</p>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export default Saved;
