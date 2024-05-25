import { Search, User } from "lucide-react";
import logo from "../src/assets/img/pinpng_com-ek-onkar-png-738322.webp";

function App() {
  return (
    <>
      <div className=" bg-[#000] min-h-[calc(100vh)] max-w-[calc(100vw)] relative flex flex-col items-center p-2 overflow-x-hidden ">
        <div className=" top-2 sticky z-90 lg:sticky bg-[#6f78d9]/80 w-[90vw] md:w-[94vw] h-14 text-2xl justify-between px-8 items-center flex font-bold text-center rounded-lg blur-6 0 ">
          <p className="text-[#fff]/80 flex items-center gap-1">
            {" "}
            <a href="https://www.tapeatale.com/">
              <img src={logo} alt="logo" className="h-8" />
            </a>
            {"   "}
          </p>
          <div>
            <User className="text-[#fff]/50 hover:text-[#fff]/80" />
          </div>
        </div>
        <div className="mt-8 flex items-center justify-evenly  sm:w-6/12 sm:justify-between sm:px-8  w-4/6 bg-[#6f78d9]/15 h-12 hover:bg-[#6f78d9]/40 rounded-lg  px-2  ">
          <div className="flex items-center sm:flex sm:flex-1  ">
            <Search className="text-[#fff]/50  px-0.5 md:block  hover:text-[#fff]/80" />
            <input
              type="text"
              className=" h-10 text-[#fff]/50  sm:px-2 text-sm pr-2 sm:flex sm:flex-1  rounded focus:outline-none bg-none"
              placeholder="Google"
              style={{ background: "none" }}
            />
          </div>
          <button className=" text-sm  text-white/60 hover:text-white/80 rounded focus:outline-none">
            Search
          </button>
        </div>
        {
          <div className="mt-16  py-4 w-5/6 sm:w-6/12 bg-[#6f78d9]/15 items-center flex  justify-center gap-2 rounded p-4 h-20">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full bg-white"
                ></div>
              ))}
          </div>
        }
        <p className="text-white/80 mt-2 w-5/6 lg:w-3/6  text-pretty text-center">
          The TapeAtale team presents a platform designed to enrich your
          browsing experience with daily ghazals, poems, and music. Enjoy a new
          piece of art and culture every day !
        </p>
        <div className="mt-10   py-4 w-5/6  sm:w-6/12 bg-[#6f78d9]/15  items-center flex flex-col rounded p-4 ">
          <p className="  bg-none text-[#fff]/90 rounded focus:outline-none px-2 leading-8  w-fit inline-block ">
            phir aaj dil-Gariib ye detaa hai <br />
            vaasta de jaa mirii qalam ko tuu ik
            <br />
            aur haadsa muddat hu.ii hai dard kaa ik jaam bhii piye <br /> tuu
            Gam me.n
            <br />
            ashk ghol ke de jaa do-aatisha <br /> kaaGaz kii korii riijh hai
            chup-chaap
            <br />
            dekhtii giito.n kaa lafz lafz bhaTaktaa hai qaafila <br /> chalnaa
            mai.n chaahuu.n paa.nv me.n kaa.nTo.n kii le ke pii.D <br /> ho kokh
            aur qabr me.n ab jo bhii faasla
          </p>
          <p className=" px-2 text-[#fff]/50 text-sm mt-2 hover:text-red-500/80  text-center bg-[#fff]/10 py-2 rounded inline-block">
            Shiv kumar batalvi
          </p>
        </div>
        <div className="inline-block lg:grid grid-cols-3 justify-center lg:pl-8  w-5/6 h-[60vh] lg:w-3/6 mt-10 bg-[#6f78d9]/15 rounded gap-2 pt-8  ">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="w-10/12 h-[25vh] lg:w-11/12 my-2 lg:my-0 lg:ml-0 lg:mr-0 rounded-lg mr-auto ml-auto flex-wrap bg-white border"
              ></div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;

// sm:h-[27vh] md:h-[20vh]
