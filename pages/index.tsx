import React from "react";
import MainKeyword from "../components/MainKeyword";
import NavBar from "../components/NavBar";

const index = () => {
  return (
    <div className="w-screen h-screen flex-col relative overflow-x-hidden select-none">
      <NavBar />
      <div className="w-full flex justify-start px-8  py-8 desktop:hidden hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className=" w-full flex flex-col items-center justify-center space-y-16 desktop:space-y-20 desktop:py-40 pb-10">
        <h1>안녕하세요!</h1>
        <div className="w-3/4 h-28 desktop:h-40 bg-gray-100 hover:bg-gray-300 transition-colors"></div>
        <h1>김근영입니다.</h1>
      </div>
      <div className="w-full bg-white h-[10%] desktop:h-[0%]"></div>
      <div className="w-full z-10">
        <h3 className="ml-4 pb-4">
          키워드를 드래그 해, 위 박스에 드롭해보세요!
        </h3>
        <div className="w-full flex flex-wrap justify-evenly z-20">
          <MainKeyword keyword="꿈" color="white" />
          <MainKeyword keyword="열정" color="#FF7816" />
          <MainKeyword keyword="새로움" color="#6D48FF" />
          <MainKeyword keyword="견고함" color="#FF65DD" />
          <MainKeyword keyword="책임감" color="#FBFF48" />
          <MainKeyword keyword="클린 코드" color="#48E9FF" />
        </div>
      </div>
    </div>
  );
};

export default index;
