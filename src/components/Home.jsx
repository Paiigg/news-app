import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Navbar from "./Navbar";
import axios from "axios";
import NewsCard from "./NewsCard";

const Home = ({ tittle }) => {
  const [data, setData] = useState([]);

  const [alert, setAlert] = useState(false);

  const [search, setSearch] = useState("");

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  const url = `https://newsdata.io/api/1/news?apikey=pub_11867fd20518301c2860a9de0e9e8c4a9f04f&q=${search}`;
  const url1 = `https://newsdata.io/api/1/news?apikey=pub_11867fd20518301c2860a9de0e9e8c4a9f04f&q=random`;

  const getArticles = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        console.log(response);
        setData(response.data.results);
        setAlert(true);
      });
      setSearch("");
      console.log(alert);
    }
  };

  useEffect(() => {
    const getWorld = async () => {
      const response = await axios.get(url1);
      console.log(response);
      setData(response.data.results);
    };
    getWorld();
  }, []);

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} getArticles={getArticles} />
      <section className=" md:absolute w-full px-4 md:w-9/12 right-14 h-screen overflow-y-scroll no-scrollbar">
        <div className="md:w-9/12">
          <h1
            tittle={"Around The World"}
            className="text-2xl text-primary font-semibold py-5 text-center md:text-left"
          >
            {tittle}
          </h1>
          <div className="flex justify-center  flex-col items-center gap-5">
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
      </section>
    </div>
  );
};

export default Home;
