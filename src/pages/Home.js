import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BarChart from "../components/BarChart";
import Navbar from "../components/Navbar";
import { logoutInitiate } from "../redux/actions";
import { API } from "../global";
import Magic from "../components/Magic";

const Home = () => {
  const [debt, setDebt] = useState();

  const getadaniDebt = () => {
    fetch(`${API}/chartjs`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((debt) => {
        setDebt(debt);
      });
  };

  useEffect(() => getadaniDebt(), []);

  // const comp = debt.map((data) => data.companyName);
  // console.log(comp);

  const chartData = {
    labels: debt ? debt.map((data) => data.companyName) : [],
    datasets: [
      {
        label: "Adani Group's Company vise Debt Percent",
        data: debt ? debt.map((data) => data.debtPercent) : [],
        backgroundColor: debt ? debt.map((data) => data.color) : [],
      },
    ],
  };

  const { currentUser } = useSelector((state) => state.user);

  console.log(currentUser.displayName);

  return (
    <div style={{ width: "100vw" }}>
      <Navbar />
      <Magic />
    </div>
  );
};

export default Home;

// function createBoxes() {
//   for (i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//       const box = document.createElement("div");
//       box.classList.add("box");
//       box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;

//       boxesContainer.appendChild(box);
//     }
//   }
// }

{
  /* <button className="btn btn-danger" onClick={handleAuth}>
        Logout
      </button> */
}
{
  /* {debt ? <BarChart chartData={chartData} /> : "Loading..."} */
}
