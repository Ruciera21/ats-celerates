import React from "react";
import Applied from "../../assets/icon_applied.png";
import AllJobs from "../../assets/icon_all.png";

function Card() {
  return (
    <>
      <section
        className="container-2xl border-solid rounded-3xl my-12 mx-12 h-96 bg-Hero bg-cover
    font-[Poppins] md:bg-top bg-center"
      >
        <div className="flex flex-col justify-center text-center items-center h-full">
          <h2 className="text-white text-2xl font-medium ">All you can eat</h2>
          <h1 className="md:text-5xl text-3xl text-white font-semibold py-3">
            CELERATES
          </h1>
        </div>
      </section>
      <section className="box-border mb-5">
        <div className="flex relative flex-row gap-8 md:gap-40 justify-center text-center items-center font-[Poppins]">
          <div className="bg-gray-300 -z-50 border-solid box-border flex flex-col items-center md:box-content rounded-2xl w-1/3 h-1/2">
            <img src={AllJobs} alt="" className="w-32" />
            <h1 className="my-2 text-6xl font-semibold">420</h1>
            <h1 className="mb-4 text-l">All jobs</h1>
          </div>
          <div className="bg-gray-300 -z-50 border-solid flex flex-col box-border items-center md:box-content rounded-2xl w-1/3 h-1/3 ">
            <img src={Applied} alt="" className="w-32" />
            <h1 className="my-2 text-6xl font-semibold">69</h1>
            <h2 className="mb-4 text-l">Applied</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
