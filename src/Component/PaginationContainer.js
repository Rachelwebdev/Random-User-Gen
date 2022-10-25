import React from "react";
import User from "./User";

import Pagination from "./Pagination";
import { useState, useEffect } from "react";

const PaginationContainer = () => {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [apiError, setApiError] = useState("");

  const url = "https://randomuser.me/api/?results=100";
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setApiData(data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="title-heading">HELLO, I AM A NEW USER 🧑</h1>
      {isLoading ? (
        <div style={{ color: "black", textAlign: "center", fontSize: "2rem" }}>
          A moment please...
        </div>
      ) : (
        <Pagination
          dataLimit={10}
          pageLimit={5}
          RenderComponent={User}
          data={apiData}
          loading={isLoading}
        />
      )}
    </div>
  );
};

export default PaginationContainer;
