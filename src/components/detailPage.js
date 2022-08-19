import { useParams } from "react-router-dom";
import React from "react";

function Detail(props) {
  const params = useParams();
  const data = props.data.filter((item) => item.key === parseInt(params.id))[0];

  return (
    <div>

            <header className="info-header">
                <h2>
                    <a href={data.link}>{data.name}</a>
                </h2>
            </header>

            <main className="info-main">
                <div className="cardFrame">
                    <div className="cardShadow">
                        <a href={data.link}><img src={data.img} className="pb-3" alt={data.name}/></a>

                        <div className="card-body">

                            <div className="row">
                                <div className="cardContent">
                                    <h2 className="card-title"><strong>Location</strong></h2>
                                    <p className="card-text">{data.location}</p>
                                    <h2 className="card-title"><strong>Address</strong></h2>
                                    <p className="card-text">{data.address}</p>
                                </div>
                                <div className="cardContent">
                                    <h2 className="card-title"><strong>floor Plans</strong></h2>
                                    <p className="card-text">{data.floorplan}</p>
                                    <h2 className="card-title"><strong>Monthly Rent</strong></h2>
                                    <p className="card-text">{data.rent}</p>
                                    <h2 className="card-title"><strong>Resident's Rating</strong></h2>
                                    <p className="card-text">{data.times} users have rated this apartment, the average rating
                                                                          is {data.rate} out of 5.</p>
                                    <h2 className="card-title"><strong>Comments</strong></h2>
                                    <p className="card-text">{data.comment.map((item) => (<p>{item}</p>))}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
      </div>
  );
}

export default Detail;
