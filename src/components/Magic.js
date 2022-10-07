import React from "react";
import { useState } from "react";
import styled from "styled-components";
import "./magic.css";

const boxPostion = [
  { pixels: "0px 0px" },
  { pixels: "-125px 0px" },
  { pixels: "-250px 0px" },
  { pixels: "-375px 0px" },
  { pixels: "0px -125px" },
  { pixels: "-125px -125px" },
  { pixels: "-250px -125px" },
  { pixels: "-375px -125px" },
  { pixels: "0px -250px" },
  { pixels: "-125px -250px" },
  { pixels: "-250px -250px" },
  { pixels: "-375px -250px" },
  { pixels: "0px -375px" },
  { pixels: "-125px -375px" },
  { pixels: "-250px -375px" },
  { pixels: "-375px -375px" },
];

const Container = styled.div``;

const Magic = () => {
  const [bgImage, setBgImage] = useState(
    "https://media.giphy.com/media/XRNiyGKFYw5UbcRFpL/giphy.gif"
  );
  const boxesContainer = document.getElementById("boxes");

  const handleMagic = () => {
    if (boxesContainer.classList[1] === "big") {
      boxesContainer.classList.remove("big");
    } else {
      boxesContainer.classList.add("big");
    }
  };

  return (
    <Container>
      <button id="btn" className="magic" onClick={handleMagic}>
        Magic 🎩
      </button>
      <input
        type="text"
        onChange={(ele) => setBgImage(ele.target.value)}
        className="magicInput"
        placeholder="Add Your Image URL for Magic"
      />

      <div id="boxes" className="boxes">
        {boxPostion.map((pos) => (
          <div
            className="box"
            style={{
              backgroundPosition: pos.pixels,
              backgroundImage: `url(${bgImage})`,
            }}
          ></div>
        ))}
      </div>
    </Container>
  );
};

export default Magic;
