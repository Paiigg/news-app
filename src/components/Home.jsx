import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import HeroImg from "../assets/image-hero.png";
import Navbar from "./Navbar";
import axios from "axios";
import NewsCard from "./NewsCard";

const Home = () => {
  const [data, setData] = useState([]);

  const [alert, setAlert] = useState(false);

  const [search, setSearch] = useState("");

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  const url = `${proxyUrl}https://newsapi.org/v2/everything?q=${search}&apiKey=165e5fb7d6004aa09a11d3b489525478`;

  const getArticles = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        console.log(response);
        setData(response.data.articles);
        setAlert(true);
      });
      setSearch("");
      console.log(alert);
    }
  };

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} getArticles={getArticles} />
      <section className=" md:absolute w-full px-4 md:w-9/12 right-14 h-screen overflow-y-scroll no-scrollbar">
        <div className="md:w-9/12">
          <h1 className="text-2xl text-primary font-semibold py-5 text-center md:text-left">
            Articles or News for you
          </h1>
          <div className="flex justify-center  flex-col items-center gap-5">
            <p className="text-center  text-primary font-semibold text-md">
              {alert ? " " : "Go Search News You Want :3"}
            </p>
            <img
              className={alert ? "hidden" : "block rounded-lg px-4"}
              src={alert ? " " : "https://picsum.photos/500/300"}
              alt="https://picsum.photos/500/300"
            />

            <div className=" items-center gap-3 flex md:hidden mb-5 w-full px-4">
              <div className="relative w-full ">
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  onKeyPress={getArticles}
                  type="text"
                  placeholder="Seacrh here"
                  className="p-3 bg-primary/5 focus:outline-none rounded-xl w-full"
                />
                <BiSearchAlt
                  size={20}
                  className="absolute right-4 top-4 text-primary"
                />
              </div>
            </div>
          </div>
          <div className="grid  md:grid-cols-2 gap-3">
            {data.map((datas) => {
              return (
                <NewsCard
                  date={datas.publishedAt}
                  url={datas.url}
                  title={datas.title}
                  descrption={datas.description}
                  urlToImage={datas.urlToImage}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
