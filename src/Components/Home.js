import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store";

const Home = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Quisqueya Soul Naturals</h1>
      <div>Welcome !!</div>
    </div>
  );
};

export default Home;
