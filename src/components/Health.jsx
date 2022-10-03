import React, { useState, useEffect } from "react";
import Home from "./Home";
import axios from "axios";

const Health = ({ tittle }) => {
  return (
    <div>
      <Home tittle={"Health News"} />
    </div>
  );
};

export default Health;
