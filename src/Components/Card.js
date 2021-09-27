import React from "react";
import styles from "./Card.module.css";

const CardDetails = ({ data }) => {
  const onDeleteHandler = async (id, index) => {
    if (window.confirm("Are you sure, you want to delete this contact?")) {
      try {
        //used a json server
        const response = await fetch(`http://localhost:3000/posts/${id}`, {
          method: "DELETE",
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
        alert("User details have been deleted!");
        window.location.reload(false);
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <>
      {data.map((data) => (
        <div className={styles.cardDetails} key={data.id}>
          <h2>EID:{data.eid}</h2>
          <p>
            <b> Fullname:</b> {data.firstName} {data.lastName}
          </p>
          <p>
            <b>Email:</b> {data.email}
          </p>
          <p>
            <b>Birthdate: </b> {data.birthdate}
          </p>
          <button
            type="button"
            onClick={() => onDeleteHandler(data.id)}
            className={styles.button}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};
export default CardDetails;
