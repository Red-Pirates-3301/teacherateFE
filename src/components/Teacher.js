import React from "react";
import "./Teacher.css";
import Stars from "./Stars";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Teacher() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState([]);
  const [inputValue, setInputValue] = useState('');
  let userID = localStorage.getItem("userID")
  let ip = localStorage.getItem("ip")

  function handleInputChange(event) {
    setInputValue(event.target.value);
    console.log(event.target.value);
  }

  useEffect(() => {
    axios
      .post("https://teacherate-be-git-red-pirates-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/api/get_teacher", { id: id })
      .then((response) => {
        setTeacher(JSON.parse(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function addRating() {
    axios
      .post("https://teacherate-be-git-red-pirates-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/api/add_rating", { userID: userID, teacher_id: id, rating: inputValue })
      .then((response) => {
        console.log(response.data);
        window.location.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return <div className="teacher">
    <div className="main_con">
        <h1>{teacher.teacher_name}</h1>
        <p>{teacher.subject}</p>
        <Stars filledStars={teacher.rating} style={{ marginBottom: 0 }} />
        <div className="inpcon">
            <input placeholder="only 1-5" type="number" min="1" max="5" value={inputValue} onChange={handleInputChange}/>
            <button onClick={addRating}>Add rating</button>
        </div>
    </div>
  </div>;
}

export default Teacher;
