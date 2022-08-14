import React from "react";
import MainKeyword from "../components/MainKeyword";
import NavBar from "../components/NavBar";

const index = () => {
  return (
    <div className="w-screen h-screen flex-col relative overflow-x-hidden select-none">
      <NavBar />
      <div className=" w-full flex flex-col items-center justify-center space-y-20 py-40">
        <h1>안녕하세요!</h1>
        <div className="w-3/4 h-40 bg-gray-100 hover:bg-gray-300 transition-colors"></div>
        <h1>김근영입니다.</h1>
      </div>
      <div className="w-full ">
        <h3 className="ml-4 pb-4">
          키워드를 드래그 해, 위 박스에 드롭해보세요!
        </h3>
        <div className="w-full flex flex-wrap justify-evenly">
          <MainKeyword keyword="1" bottom={1} left={5} />
        </div>
      </div>
    </div>
  );
};

export default index;
