import React, { useState } from "react";
import { dataList } from "../data/data";

const $ = window.$;
function Crowd(props) {
  const [submitForm, setSubmitForm] = useState({
    key: 1,
    rate: 0,
    comment: "",
  });

  const onSubmit = () => {
    const item = props.data.filter(
      (item) => item.key === parseInt(submitForm.key)
    )[0];
    const { rateList } = item;
    if (rateList) {
      rateList.push(parseInt(submitForm.rate));
      let sumRate = 0;
      rateList.forEach((item) => {
        sumRate += item;
      });
      item.rate = (sumRate / rateList.length).toFixed(1);
    } else {
      item.rateList = [parseInt(submitForm.rate)];
      item.rate = item.rateList[0];
    }
    item.times = item.rateList.length;
    item.comment.push(submitForm.comment);
    alert("Form has been submitted!"); 
    $(document.getElementById("reset")).click()
    return false;
  };

  return (
    <>
      <main>
        <div className="main-block">
          <form className="rate">
            <h2 className="resident">Residents Rating</h2>
            <h3>Apartment Name</h3>
            <select
              className="form-control"
              onChange={(event) => {
                setSubmitForm({
                  ...submitForm,
                  key: event.target.value,
                });
              }}
            >
              {props.data.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.name}
                </option>
              ))}
            </select>
            <div>
              <table>
                <tbody>
                  <tr>
                    <th className="first-col"></th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                  </tr>
                  <tr>
                    <td className="second-col">Rating</td>
                    {(() => {
                      const res = [];
                      for (let index = 0; index < 5; index++) {
                        res.push(
                          <td key={index}>
                            <input
                              type="radio"
                              value={index + 1}
                              name="distance"
                              onChange={(event) => {
                                setSubmitForm({
                                  ...submitForm,
                                  rate: event.target.value,
                                });
                              }}
                            />
                          </td>
                        );
                      }
                      return res;
                    })()}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="comments">Any further comment</p>
            <textarea
              rows="5"
              required
              onInput={(event) => {
                setSubmitForm({
                  ...submitForm,
                  comment: event.target.value,
                });
              }}
            ></textarea>
            <div className="btn-block">
              <button className="sub" type="button" onClick={onSubmit}>
                Send
              </button>
              <button
                className="sub"
                type="reset"
                id="reset"
                style={{ display: "none" }}
              ></button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Crowd;
