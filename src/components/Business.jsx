import React, { useState, useEffect } from "react";
import Home from "./Home";
import axios from "axios";

const Business = ({ tittle }) => {
  return (
    <div>
      <Home tittle={"Business News"} />
    </div>
  );
};

export default Business;
