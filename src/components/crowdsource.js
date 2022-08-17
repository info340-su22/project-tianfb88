import React, { useState } from 'react';

export default function CrowdSource(props) {
    const[rating, setRating] = useState(null);
    const handleClick = (event) => {
        
    }
    
    return(
                <div className='crowd'>
                <div className="main-block">
                    <form className="rate" action="/">
                    <h2 className="resident">Residents Rating</h2>
                    <h3>Apartment Name</h3>
                    <input type="text"/>
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
                                    <td><input type="radio" value="On-campus Apartment" name="location" /></td>
                                    <td><input type="radio" value="Off-campus Apartment" name="location" /></td>
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
                                    <td><input type="checkbox" value="Studio" name="floor" /></td>
                                    <td><input type="checkbox" value="1B" name="floor" /></td>
                                    <td><input type="checkbox" value="2B" name="floor" /></td>
                                    <td><input type="checkbox" value="3B" name="floor" /></td>
                                    <td><input type="checkbox" value="4B" name="floor" /></td>
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
                                    <td><input type="radio" value="1" name="distance" /></td>
                                    <td><input type="radio" value="2" name="distance" /></td>
                                    <td><input type="radio" value="3" name="distance" /></td>
                                    <td><input type="radio" value="4" name="distance" /></td>
                                    <td><input type="radio" value="5" name="distance" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="comments">Any further comment</p>
                    <textarea rows="5"></textarea>
                    <div className="btn-block">
                        <button className="sub" type="submit" href="/" onChange={handleClick}>Send</button>
                    </div>
                    </form>
                </div>
            </div>
    )
}