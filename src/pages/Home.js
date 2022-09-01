import Dashboard from "./Dashboard";

function Home(props) {
  props.assignToken();
  return (
    <div className="bg-[#F4F4FA] h-screen md:h-[90vh] flex justify-center items-center px-6 py-5 md:px-12 md:py-10">
      <div className="w-[100%] h-[100%] border-black border-4 rounded-2xl bg-[#F4F4FA] shadow-slate-400 shadow-2xl relative flex flex-col justify-center">
        <div className="h-[1.8rem] w-[9rem] bg-slate-900 rounded-b-2xl absolute top-0 left-[40%] md:left-[44.5%] flex flex-row justify-center items-center gap-2">
          <div className=" rounded-full bg-[#F4F4FA] h-2 w-2"></div>
          <div className=" rounded-full bg-[#F4F4FA] h-2 w-2"></div>
          <div className=" rounded-full bg-[#F4F4FA] h-2 w-2"></div>
        </div>
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;
