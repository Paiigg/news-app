import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import Home from "./Home";
import axios from "axios";

const World = ({ tittle }) => {
  const [world, setWorld] = useState([]);
  const [kucing, setKucing] = useState(false);

  const url1 = `https://newsdata.io/api/1/news?apikey=pub_11867fd20518301c2860a9de0e9e8c4a9f04f&q=world`;
  useEffect(() => {
    const getWorld = async () => {
      const response = await axios.get(url1);
      console.log(response);
      setWorld(response.data.results);
      setKucing(true);
      console.log("home= ", kucing);
    };

    getWorld();
  }, []);
  return (
    <div>
      <Home tittle={"Around The World"} />

      {/* <section className=" md:absolute w-full px-4 md:w-9/12 right-14 h-screen overflow-y-scroll no-scrollbar">
        <div className="md:w-9/12">
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
      </section> */}
    </div>
  );
};

export default World;
