import React, { useState } from 'react';

export function filter(props) {
    const [inputValue, setInputValue] = useState('');
    return(
        <section className='sect1'>
            <h3 class="question">Distance to UW Campus</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="one" />
                        <label className="form-check-label" for="flexRadioDisabled">
                            less than 1 miles
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="one" />
                        <label className="form-check-label" for="flexRadioCheckedDisabled">
                            less than 5 miles
                        </label>
                    </div>
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="one" />
                        <label className="form-check-label" for="flexRadioCheckedDisabled">
                            less than 10 miles
                        </label>
                    </div>
                    <h3 className="question">Monthly Rent</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="two" />
                        <label className="form-check-label" for="flexRadioDisabled">
                            less than $1,000
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="two" />
                        <label className="form-check-label" for="flexRadioCheckedDisabled">
                            less than $1,500
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="two" />
                        <label className="form-check-label" for="flexRadioCheckedDisabled">
                            less than $2,000
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="two" />
                        <label className="form-check-label" for="flexRadioCheckedDisabled">
                            over $2,000
                        </label>
                    </div>
                    <h3 className="question">Floor Plan</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label" for="flexCheckDefault">
                        Studio
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label" for="flexCheckChecked">
                        1B1B
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label" for="flexCheckChecked">
                        2B1B
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label" for="flexCheckChecked">
                        2B2B
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label" for="flexCheckChecked">
                        3B1B
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label" for="flexCheckChecked">
                        3B2B
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label" for="flexCheckChecked">
                        3B3B
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label" for="flexCheckChecked">
                        4B2B
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label" for="flexCheckChecked">
                        4B4B
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label" for="flexCheckChecked">
                        5B5B
                        </label>
                    </div>
                </section>
    )
}