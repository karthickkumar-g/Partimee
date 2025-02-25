import { useOutletContext } from "react-router-dom";
import Filter from "../components/Filter";
import Jobs from "../components/Jobs";

const Home = () => {
  const context = useOutletContext() || {}; // Ensure context is always an object
  const { searchVal = "" } = context; // Provide a default value

  return (
    <div className="home-page flex w-[90%] mx-auto p-[20px] justify-between relative">
      <div className="filter_section w-[20%] h-[80vh] sticky top-8 bg-greyIsh pt-8 rounded-md">
        <Filter />
      </div>
      <div className="jobs_section w-[77%] bg-greyIsh rounded-md">
        <Jobs searchVal={searchVal} />
      </div>
    </div>
  );
};

export default Home;
