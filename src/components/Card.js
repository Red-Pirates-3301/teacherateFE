import React from "react";
import "./Card.css";
import Stars from "./Stars";
import { Link } from 'react-router-dom';

function Card({ip, name, subject, place, rating, id, number_of_ratings }) {
  return (
    <div className="card">
      <h1 className="name">{name} <span><p>({number_of_ratings})</p></span></h1>
      <div className="group1">
        <p className="subject">{subject}</p>
        &nbsp;
        <p className="place">{"("}@{place}{")"}</p>
      </div>
      <Stars filledStars={rating} style={{ marginBottom: 0 }} />
      <Link to={`/teacher/${id}`}><button className="btn"> More info</button></Link>
    </div>
  );
}

export default Card;
