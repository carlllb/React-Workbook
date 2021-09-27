import React, { useEffect, useState, useCallback } from "react";
import InputForm from "../Components/InputForm";
import CardDetails from "../Components/Card";
import { HashLoader } from "react-spinners";
import "../App.css";

const Home = () => {
  const [parsedData, setParsedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [searchName, setSearchName] = useState("");

  const getUserDetails = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const parsedResponse = await response.json();
      if (!response.ok) {
        throw new Error(
          `Server returned a response of ${parsedResponse.message} with status code of ${parsedResponse.status}.`
        );
      }
      setParsedData(() => [...parsedResponse]);
      setSearchResult(() => [...parsedResponse]);
      setIsLoading(() => false);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  useEffect(() => {
    const onFilter = parsedData.filter((data) =>
      data.firstName.toLowerCase().includes(searchName)
    );
    setSearchResult(onFilter);
  }, [parsedData, searchName]);

  const handleSearch = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <div className="header">
      <section>
        {isLoading ? (
          <div className="loader">
            <HashLoader color="#36D7B7" size={70} />
          </div>
        ) : (
          <div>
            <h1>Welcome to your workbook 📖</h1>
            <InputForm />
            <h2>User Details ℹ️</h2>
            <input
              type="text"
              placeholder="Search..."
              value={searchName}
              onChange={handleSearch}
              className="search"
            />
            <div className="container">
              {searchResult.length === 0 ? (
                <p> No result found ❌</p>
              ) : (
                <CardDetails data={searchResult} />
              )}
            </div>
            <footer className="footer">Made with ❤️️ by CBDC.♟️</footer>
          </div>
        )}
      </section>
    </div>
  );
};
export default Home;
