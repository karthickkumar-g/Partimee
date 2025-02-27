import Filter from "../components/Filter";
import Jobs from "../components/Jobs";

const Home = () => {
  

  return (
    <div className="home-page flex w-[90%] mx-auto p-[20px] justify-between relative">
      <div className="filter_section w-[20%] h-[80vh] sticky top-8 bg-greyIsh pt-8 rounded-md">
        <Filter />
      </div>
      <div className="jobs_section w-[77%] bg-greyIsh rounded-md">
        <Jobs />
      </div>
    </div>
  );
};

export default Home;
