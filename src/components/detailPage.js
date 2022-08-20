import { useParams } from "react-router-dom";
import React from "react";

function Detail(props) {
  const params = useParams();
  const data = props.data.filter((item) => item.key === parseInt(params.id))[0];
  return (
    <main className="info-main">
      <div className="detailcard">
        <div className="cardShadow">
          <img
            src={"/" + data.img}
            className="pb-3"
            alt={data.name}
            width="100%"
          />

          <div className="addB">
            <button
              className="btn btn-primary"
              onClick={() => {
                props.fun(data.key);
                alert("add success");
              }}
            >
              Add to Saved List
            </button>
          </div>
          <div className="detail" >
            <h2 className="card-title">
              Name
            </h2>
            <p className="card-text">{data.name}</p>
            <h2 className="card-title"></h2>
            <h2 className="card-title">
              Address
            </h2>
            <p className="card-text">{data.address}</p>
            <h2 className="card-title">
              floor Plans
            </h2>
            <p className="card-text">{data.floorplan}</p>
            <h2 className="card-title">
              Monthly Rent
            </h2>
            <p className="card-text">{data.rent}</p>
            <h2 className="card-title">
              Resident's Rating
            </h2>
            <p className="card-text">
              {data.times} users have rated this apartment, the average rating
              is {data.rate} out of 5.
            </p>
            <h2 className="card-title">
              Comments
            </h2>
            <p className="card-text">
              {data.comment.map((item) => (
                <p>{item}</p>
              ))}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Detail;
