import React from 'react';
import { useParams } from 'react-router-dom';
import sample_apts from '../data/aptData.json'
import _ from 'lodash';

export default function DetailPage(props) {
    const params = useParams();
    let aptNameString = params.aptName;

    let apt = _.find(sample_apts, {name: aptNameString});
    if(!apt) return <h2>No Apartment specified</h2>;


    let aptName = apt['name'];
    let aptWebsite  = apt['link'];
    let aptImg = '/img/' + apt['img'];
    let aptFloorplan = apt['floorplan'];
    let aptAddress = apt['address'];
    let aptLocation = apt['location'];
    let aptRent = apt['rent'];

    return (
        <div>

            <header className="info-header">
                <h2>
                    <a href={aptWebsite}>{aptName}</a>
                </h2>
            </header>

            <main className="info-main">
                <div className="cardFrame">
                    <div className="cardShadow">
                        <a href={aptWebsite}><img src={aptImg} className="pb-3" alt={aptName}/></a>

                        <div className="card-body">

                            <div className="row">
                                <div className="cardContent">
                                    <h2 className="card-title"><strong>Location</strong></h2>
                                    <p className="card-text">{aptLocation}</p>
                                    <h2 className="card-title"><strong>Address</strong></h2>
                                    <p className="card-text">{aptAddress}</p>
                                </div>
                                <div className="cardContent">
                                    <h2 className="card-title"><strong>floor Plans</strong></h2>
                                    <p className="card-text">{aptFloorplan}</p>
                                    <h2 className="card-title"><strong>Monthly Rent</strong></h2>
                                    <p className="card-text">{aptRent}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>





        </div>
    )
}