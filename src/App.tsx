import { Search, User, HeartHandshake } from "lucide-react";

function App() {
  return (
    <>
      <div className=" bg-[#241E1D] min-h-[calc(100vh)] w-[100vw] max-w-[100vw] flex flex-col items-center p-2  ">
        <div className="bg-[#6f78d9]/20 w-[90vw] md:w-[94vw] h-14 text-2xl justify-between px-8 items-center flex font-bold text-center rounded-lg blur-6 0 ">
          <p className="text-[#fff]/80 flex items-center gap-1">
            {" "}
            <HeartHandshake className="text-red-400/50 hover:text-red-400/80 " />{" "}
            Ghazals
          </p>
          <div>
            <User className="text-[#fff]/50 hover:text-[#fff]/80" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-evenly  sm:w-6/12 sm:justify-between sm:px-8  w-4/6 bg-[#6f78d9]/15 h-12 hover:bg-[#6f78d9]/20 rounded-lg  px-2  ">
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
        <div className="mt-16  h-60vh]  py-4 w-5/6 sm:h-[48vh] md:h-[46vh] lg:h-[28vh] sm:w-6/12 bg-[#6f78d9]/15  items-center flex flex-col rounded p-4 ">
          <p className="  bg-none text-[#fff]/90 rounded focus:outline-none px-2 leading-8  w-fit ">
            donoñ jahān terī mohabbat meñ haar ke vo jā rahā hai koī shab-e-ġham{" "}
            <br />
            guzār ke vīrāñ hai mai-kada ḳhum-o-sāġhar udaas haiñ tum kyā ga.e ki{" "}
            <br />
            ruuTh ga.e din bahār ke ik fursat-e-gunāh milī vo bhī chaar din{" "}
            <br />
            dekhe haiñ ham ne hausle parvardigār ke duniyā ne terī yaad se{" "}
            <br />
            begāna kar diyā tujh se bhī dil-fareb haiñ ġham rozgār ke bhūle se{" "}
            <br />
            muskurā to diye the vo aaj 'faiz' mat pūchh valvale <br />
            dil-e-nā-kardā-kār ke
          </p>
          <p className=" px-2 text-[#fff]/50 text-sm mt-2 hover:text-red-500/80 w-2/5 text-center bg-[#fff]/10 py-2 rounded">
            Faiz Ahmed Faiz
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

// sm:h-[27vh] md:h-[20vh]
