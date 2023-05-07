import React from "react";
import "./styles/DevCard.css";

export const DevCard = ({ name, desc, imgSrc }) => {
  //   console.log({ id, name, desc, imgSrc });

  const makeTable = (desc) => {
    const rows = [];
    let count = 0;
    for (let key in desc) {
      key === "Responsibility"
        ? rows.push(
            <>
              <tr key={++count}>
                <td colSpan="2">{key}:</td>
              </tr>
              <tr key={++count}>
                <td colSpan="2">{desc[key]}</td>
              </tr>
            </>
          )
        : rows.push(
            <>
              <tr key={++count}>
                <td>{key}:</td>
                <td>{desc[key]}</td>
              </tr>
            </>
          );
    }

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  };

  return (
    <div className="devCard">
      <img className="logo" src={imgSrc} alt={name} />
      <h3>{name.split().map((w) => w[0].toUpperCase() + w.substr(1))}</h3>
      {Object.keys(desc).length < 1 ? (
        <p>No Personal Data found!</p>
      ) : (
        makeTable(desc)
      )}
    </div>
  );
};
