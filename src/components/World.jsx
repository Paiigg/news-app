import Navbar from "./Navbar";

import NewsCard from "./NewsCard";
import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Home from "./Home";
import axios from "axios";

const World = ({ search, setSearch, getArticles }) => {
  const [world, setWorld] = useState([]);

  const url = `https://newsdata.io/api/1/news?apikey=pub_11867fd20518301c2860a9de0e9e8c4a9f04f&q=world`;

  useEffect(() => {
    const getWorld = async () => {
      const response = await axios.get(url);
      console.log(response);
      setWorld(response.data.results);
    };
    getWorld();
  }, []);

  return (
    <div>
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
            <div className="grid  md:grid-cols-2 gap-3">
              {world.map((datas) => {
                return (
                  <NewsCard
                    date={datas.pubDate}
                    url={datas.link}
                    title={datas.title}
                    descrption={datas.description}
                    urlToImage={datas.image_url}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default World;
