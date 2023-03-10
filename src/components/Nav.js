import React, { useState } from "react";
import "./Nav.css";
import Countdown from "./Countdown";

function Nav() {
  const [searchQuery, setSearchQuery] = useState("");

  if (!localStorage.getItem("searchQuery")) {
    localStorage.setItem("searchQuery", "");
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    localStorage.setItem("searchQuery", event.target.value);
  };

  const handleSearch = () => {
    window.location.reload();
  };

  const handleClear = () => {
    localStorage.setItem("searchQuery", "");
    window.location.reload();
  };

  return (
    <div className="nav">
      <div className="svg">
        <a href="/">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 64 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.33075 0H0V30.624C1.59213 30.4582 3.24311 30.3048 4.94713 30.1645V17.9896H6.65614C7.79548 17.9896 8.59002 18.2744 9.03976 18.8441C9.51948 19.4137 9.75934 20.4182 9.75934 21.8573V27.614C9.75934 28.603 9.78079 29.3346 9.82369 29.8089C11.4344 29.7058 13.0835 29.614 14.7666 29.5342C14.7265 29.0193 14.7065 28.3942 14.7065 27.659V22.1272C14.7065 20.2683 14.4516 18.7841 13.9419 17.6748C13.4622 16.5654 12.6227 15.8308 11.4234 15.471V15.3811C13.5821 14.5116 14.6615 12.4428 14.6615 9.17468V7.2408C14.6615 4.78223 14.0768 2.96828 12.9075 1.79896C11.7382 0.599653 9.87927 0 7.33075 0ZM21.7438 29.2777C20.1961 29.3186 18.6702 29.3692 17.1689 29.4292L21.9617 0H28.6628L33.4117 29.1598C32.6986 29.1556 31.9821 29.1535 31.2624 29.1535C30.3392 29.1535 29.4213 29.157 28.5092 29.1638L27.9432 25.2304V25.3203H22.3215L21.7438 29.2777ZM42.9406 29.3415C41.3166 29.2884 39.6665 29.2461 37.9935 29.2152V4.49739H32.8215V0H48.1126V4.49739H42.9406V29.3415ZM64 30.783C59.8907 30.3248 55.3575 29.9506 50.5078 29.6769V0H64V4.49739H55.455V12.8176H62.246V17.315H55.455V26.9844H64V30.783ZM8.94981 12.7276C8.47009 13.2373 7.73552 13.4922 6.74609 13.4922H4.94713V4.49739H7.19583C8.06532 4.49739 8.69496 4.75225 9.08473 5.26195C9.50449 5.77165 9.71437 6.59618 9.71437 7.73552V10.1641C9.71437 11.3634 9.45952 12.2179 8.94981 12.7276ZM25.1548 5.48682L27.3586 21.0478H22.9061L25.0649 5.48682H25.1548Z"
              fill="#C00000"
            />
          </svg>
        </a>
      </div>
      {/* <Countdown /> */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {searchQuery == "" ? (
          <button onClick={handleClear} type="submit">
            Clear
          </button>
        ) : (
          <button type="submit">Search</button>
        )}
      </form>
    </div>
  );
}

export default Nav;
