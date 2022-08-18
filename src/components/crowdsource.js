import React, { useState } from 'react';

export default function CrowdSource(props) {
    const [name, setName] = useState('');
    const [loc, setLoc] = useState(null);
    const [floorPlan, setFloorPlan] = useState('');
    const[rating, setRating] = useState(null);
    const [comment, setComment] = useState('');
    const [detail, setDetail] = useState({"key":null, "name":'', "floorplan":'',"rate":null,"comment":[], "times":''});

    const handleName = (event) => {
        let lowerCaseInput = event.target.value.toLowerCase();
        setName(lowerCaseInput);
    }

    const handleLoc = (event) => {
        setRating(event.target.value)
    }

    const handleFP = (event) => {
        let updateFP = [...floorPlan];
        if(event.target.checked) {
            updateFP = [...floorPlan, event.target.value];
            let updateFP = updateFP.toString();
        }
        setFloorPlan(updateFP);
    }
    const handleRate = (event) => {
        setRating(event.target.value)
    }

    const handleCom = (event) => {
        setComment(event.target.value);
    }

    const handleSend = (event) => {
        let exist = null;
        event.preventDefault();
        console.log('Your rating has been sent!');
        if(props.data.name.includes(name)){
            exist = props.data.filter((apt) => apt.name.toLowerCase() === name);
            exist.times = exist.times+1;
            exist.rate = round((exist.rate + rating)/times, 1);
            exist.comment = [...exist.comment, comment];
        } else {
            setDetail({"key":props.data.length+1, "name": name, "floorplan": floorPlan, "rate": rating, "comment":comment, "times":1});
            props.data = [...props.data, detail];
        }
        setName('');
        setLoc(null);
        setFloorPlan([]);
        setRating(null);
    }
    
    return(
                <div className='crowd'>
                <div className="main-block">
                    <form className="rate" action="/">
                    <h2 className="resident">Residents Rating</h2>
                    <h3>Apartment Name</h3>
                    <input type="text" onChange={handleName} />
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <th className="second-col"></th>
                                    <th>On Campus</th>
                                    <th>Off Campus</th>
                                </tr>
                                <tr>
                                    <td className="second-col">Location</td>
                                    <td><input type="radio" value="On-campus Apartment" name="location" checked={loc === 'On-campus Apartment'} onChange={handleLoc} /></td>
                                    <td><input type="radio" value="Off-campus Apartment" name="location" checked={loc === 'Off-campus Apartment'} onChange={handleLoc} /></td>
                                </tr>
                                <tr>
                                    <th className="second-col"></th>
                                    <th>Studio</th>
                                    <th>1B</th>
                                    <th>2B</th>
                                    <th>3B</th>
                                    <th>4B</th>
                                </tr>
                                <tr>
                                    <td className="second-col">Floor Plans</td>
                                    <td><input type="checkbox" value="Studio" name="floor" onChange={handleFP} /></td>
                                    <td><input type="checkbox" value="1B" name="floor" onChange={handleFP} /></td>
                                    <td><input type="checkbox" value="2B" name="floor" onChange={handleFP} /></td>
                                    <td><input type="checkbox" value="3B" name="floor" onChange={handleFP} /></td>
                                    <td><input type="checkbox" value="4B" name="floor" onChange={handleFP} /></td>
                                </tr>
                                <tr>
                                    <th className="first-col"></th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                </tr>
                                <tr>
                                    <td className="first-col">Your Rating</td>
                                    <td><input type="radio" value="1" name="distance" checked={rating === '1'} onChange={handleRate} /></td>
                                    <td><input type="radio" value="2" name="distance" checked={rating === '2'} onChange={handleRate} /></td>
                                    <td><input type="radio" value="3" name="distance" checked={rating === '3'} onChange={handleRate} /></td>
                                    <td><input type="radio" value="4" name="distance" checked={rating === '4'} onChange={handleRate} /></td>
                                    <td><input type="radio" value="5" name="distance" checked={rating === '5'} onChange={handleRate} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="comments">Any further comment</p>
                    <textarea rows="5" value={comment} onChange={handleCom} ></textarea>
                    <div className="btn-block">
                        <button className="sub" type="submit" href="/" onSubmit={handleSend}>Send</button>
                    </div>
                    </form>
                </div>
            </div>
    )
}