import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Home.css";
import axios from "axios";

function Home() {
  const [teacherArray, setTeacherArray] = useState([]);
  const [ip, setIp] = useState("");
  let userID = localStorage.getItem("userID");
  let search = localStorage.getItem("search");
  const csrf_url = "https://teacherate-be-git-red-pirates-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/api/get_csrf";

  function getIP() {
    localStorage.removeItem('ip')
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setIp(data.ip);
        localStorage.setItem("ip", data.ip);
        retrieveAccount();
      })
      .catch((error) => console.error(error));
  }

  function getCSRF() {
    localStorage.removeItem('csrf')
    axios
      .get(csrf_url)
      .then((response) => {
        localStorage.setItem("csrf", response.data.csrf_token);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function addAccount() {
    
    axios
      .post("https://teacherate-be-git-red-pirates-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/api/add_account", { ip: ip })
      .then((response) => {
        localStorage.setItem("userID", response.data.userID)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function retrieveAccount() {
      axios
      .post("https://teacherate-be-git-red-pirates-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/api/retrieve_account", {
        userID: userID,
        ip: ip,
      })
      .then((response) => {
        const status = response.data.status;
        if (status == 404) {
          addAccount();
        } else {
          let data = JSON.parse(response.data);
          localStorage.setItem("userID", data.userID);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(()=>{
    let ip_local = localStorage.getItem("ip")
    function isIPAddress(str) {
      const regex = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
      return regex.test(str);
    }

    if(isIPAddress(ip_local)){
      localStorage.removeItem('userID')
      retrieveAccount()
    }
  }, [localStorage.getItem("ip")])


  function getTeachers() {
    axios
      .get("https://teacherate-be-git-red-pirates-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/api/get_teachers")
      .then((response) => {
        setTeacherArray(JSON.parse(response.data));
        document.getElementById("empty").classList.add("none");
        document.getElementById("none").classList.add("main");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function runAll() {
    getIP()
    getCSRF()
    getTeachers()    
  }

  useEffect(()=>{
    runAll()
  }, [])

  return (
    <div className="home">
      <div id="none">
        {teacherArray.map((teacher, index) => (
          <div className="group2">
            <Card
              ip={ip}
              key={index}
              name={teacher.teacher_name}
              subject={teacher.subject}
              place={teacher.place}
              rating={teacher.rating}
              id={teacher.id}
              number_of_ratings={teacher.number_of_ratings}
            />
          </div>
        ))}
      </div>
      <div id="empty" className="empty">
        <img
          src="https://www.hbsg.co.za/wp-content/uploads/2019/04/loading-animations-preloader-gifs-ui-ux-effects-18.gif"
          alt=""
        />
        <p>
          Rating is completely anonymous (hidden). No one knows who you are!
        </p>
      </div>
    </div>
  );
}

export default Home;
