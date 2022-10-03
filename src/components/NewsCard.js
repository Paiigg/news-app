import React from "react";
import { Link } from "react-router-dom";
import Example from "../assets/example.png";
import { BiSearchAlt } from "react-icons/bi";

const NewsCard = ({ title, descrption, url, urlToImage, date }) => {
  return (
    <div>
      <div className="bg-white w-full overflow-x-hidden no-scrollbar h-[190px] mx-auto p-4">
        <div className="flex justify-between">
          <div className="h-[132px] overflow-y-scroll no-scrollbar">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-primary text-md"
            >
              {title}
            </a>
            <p className="text-slate-500 text-xs">{descrption}</p>
          </div>
          <img
            src={urlToImage}
            alt={urlToImage}
            className="w-[132px] h-[132px] object-cover"
          />
        </div>
        <p className="text-xs text-primary mt-5">{date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
