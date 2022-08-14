import React from "react";
import NavBar from "../components/NavBar";

const skills = () => {
  return (
    <div className="w-screen h-screen flex-col relative">
      <NavBar />
      <div className="w-full h-5/6 flex flex-col items-center justify-center ">
        <h1>Skills</h1>
        <p className="w-full flex flex-wrap space-x-10">
          <span className="text-html font-Pretendard_ExtraBold text-7xl">
            HTML5
          </span>
          <span className="text-Javascript font-Pretendard_ExtraBold text-7xl">
            Javascript
          </span>
          <span className="text-Typescript font-Pretendard_ExtraBold text-7xl">
            Typescript
          </span>
          <span className="text-CSS3 font-Pretendard_ExtraBold text-7xl">
            CSS3
          </span>
          <span className="text-React font-Pretendard_ExtraBold text-7xl">
            React.js
          </span>
          <span className="text-Redux font-Pretendard_ExtraBold text-7xl">
            Redux
          </span>
          <span className="text-black font-Pretendard_ExtraBold text-7xl">
            Next.js
          </span>
          <span className="text-ReactQuery font-Pretendard_ExtraBold text-7xl">
            React Query
          </span>
          <span className="text-SC font-Pretendard_ExtraBold text-7xl">
            Styled-Component
          </span>
          <span className="text-Tailwind font-Pretendard_ExtraBold text-7xl">
            TailwindCSS
          </span>
        </p>
      </div>
    </div>
  );
};

export default skills;
