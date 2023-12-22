import {data} from "../data/data";
import Ava from "./icons/Ava";
import {useState} from "react";

const Home = () => {
  const [trend, setTrend] = useState("post")

  const renderPosts = () => {
    return(
      <>
        {data.map(item => (
          <div className="ml-[35%] mt-12 w-[716px] flex">
            <div>
              <Ava/>
            </div>
            <div className="ml-4 text-left">
              <p>{item.author}</p>
              <p className="mt-6">{item.description}</p>
              <img src={item.image_path} alt="" className="w-[596px] h-[596px] mt-6 rounded-2xl"/>
            </div>
          </div>
        ))}
      </>
    )
  }

  const renderWorks = () => {
    return (
      <>

      </>
    )
  }

  return (
    <div className=" bg-[#F9FAFF] h-full">
      <div className="bg-[#F9FAFF] w-screen">
        <div className="bg-white flex justify-center py-5">
          <p className="ml-[250px] text-sm">Trending Posts</p>
          <p className="ml-7 text-sm">Trending works</p>
        </div>
      </div>
      {trend === "post" ? renderPosts() : renderWorks()}
    </div>
  )
}


export default Home;