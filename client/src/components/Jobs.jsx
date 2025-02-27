/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import ViteSVG from ".././assets/vite.svg"
import { Link } from "react-router-dom";
// import { userContext } from "../contexts/UserContext";
import { SearchContext } from "../contexts/SearchContext";


const jDetails = [
  {
    id: 1,
    job: "Software Engineer",
    datePosted: "Now",
    place: "Chennai",
    jobDesc: "Develop and maintain software applications.Develop and maintain software applications.Develop and maintain software applications.Develop and maintain software applications.",
    cName: "Tech Solutions Ltd",
    contact: "9876543210",
    mode: "onsite",
    jobType: "Full time",
    vacancy:10,
    cImg : ViteSVG
  },
  {
    id: 2,
    job: "Graphic Designer",
    datePosted: "2 days ago",
    place: "Bangalore",
    jobDesc: "Create visual concepts and designs.",
    cName: "Creative Minds Pvt Ltd",
    contact: "9876543211",
    mode: "remote",
    jobType: "Part time",
    vacancy:10,
    cImg : ViteSVG
  },
  {
    id: 3,
    job: "Data Analyst",
    datePosted: "5 days ago",
    place: "Hyderabad",
    jobDesc: "Analyze data and provide insights.",
    cName: "Data Corp",
    contact: "9876543212",
    mode: "hybrid",
    jobType: "Full time",
    vacancy:10,
    cImg : ViteSVG
  },
  {
    id: 4,
    job: "Customer Support Executive",
    datePosted: "1 week ago",
    place: "Pune",
    jobDesc: "Handle customer queries and issues.",
    cName: "HelpDesk Ltd",
    contact: "9876543213",
    mode: "onsite",
    jobType: "Part time",
    vacancy:10,
    cImg : ViteSVG
  },
  {
    id: 5,
    job: "Digital Marketing Specialist",
    datePosted: "Now",
    place: "Mumbai",
    jobDesc: "Manage digital marketing campaigns.",
    cName: "Market Leaders Co",
    contact: "9876543214",
    mode: "remote",
    jobType: "Full time",
    vacancy:10,
    cImg : ViteSVG
  },
  {
    id: 6,
    job: "Content Writer",
    datePosted: "Yesterday",
    place: "Delhi",
    jobDesc: "Write blogs and articles.",
    cName: "WordCraft Pvt Ltd",
    contact: "9876543215",
    mode: "hybrid",
    jobType: "Part time",
    vacancy:10,
    cImg : ViteSVG
  },
  {
    id: 7,
    job: "HR Recruiter",
    datePosted: "3 days ago",
    place: "Chennai",
    jobDesc: "Recruit and manage talent.",
    cName: "Talent Hub",
    contact: "9876543216",
    mode: "onsite",
    jobType: "Full time",
    vacancy:10,
    cImg : ViteSVG
  },
  {
    id: 8,
    job: "Social Media Manager",
    datePosted: "5 days ago",
    place: "Bangalore",
    jobDesc: "Manage social media presence.",
    cName: "SocialBuzz Co",
    contact: "9876543217",
    mode: "remote",
    jobType: "Part time",
    vacancy:10,
    cImg : ViteSVG
  },
  {
    id: 9,
    job: "Business Analyst",
    datePosted: "Now",
    place: "Hyderabad",
    jobDesc: "Analyze business processes.",
    cName: "Biz Solutions Pvt Ltd",
    contact: "9876543218",
    mode: "hybrid",
    jobType: "Full time",
    vacancy:10,
    cImg : ViteSVG
  },
  {
    id: 10,
    job: "Sales Executive",
    datePosted: "2 days ago",
    place: "Pune",
    jobDesc: "Drive sales and revenue.",
    cName: "SalesForce India",
    contact: "9876543219",
    mode: "onsite",
    jobType: "Part time"
  },
  {
    id: 11,
    job: "IT Support Engineer",
    datePosted: "4 days ago",
    place: "Mumbai",
    jobDesc: "Provide technical support.",
    cName: "Tech Help Desk",
    contact: "9876543220",
    mode: "onsite",
    jobType: "Full time"
  },
  {
    id: 12,
    job: "Video Editor",
    datePosted: "1 week ago",
    place: "Delhi",
    jobDesc: "Edit and enhance video content.",
    cName: "Media House Pvt Ltd",
    contact: "9876543221",
    mode: "remote",
    jobType: "Part time"
  },
  {
    id: 13,
    job: "UX/UI Designer",
    datePosted: "Yesterday",
    place: "Chennai",
    jobDesc: "Design user experiences and interfaces.",
    cName: "Design Studio",
    contact: "9876543222",
    mode: "hybrid",
    jobType: "Full time"
  },
  {
    id: 14,
    job: "Accountant",
    datePosted: "5 days ago",
    place: "Bangalore",
    jobDesc: "Manage company finances.",
    cName: "Finance Experts Ltd",
    contact: "9876543223",
    mode: "onsite",
    jobType: "Part time"
  },
  {
    id: 15,
    job: "Telecaller",
    datePosted: "2 days ago",
    place: "Hyderabad",
    jobDesc: "Call and engage with customers.",
    cName: "CallHub Pvt Ltd",
    contact: "9876543224",
    mode: "remote",
    jobType: "Part time"
  },
  {
    id: 16,
    job: "Backend Developer",
    datePosted: "Now",
    place: "Pune",
    jobDesc: "Develop server-side applications.",
    cName: "CodeBase Pvt Ltd",
    contact: "9876543225",
    mode: "hybrid",
    jobType: "Full time"
  },
  {
    id: 17,
    job: "AI/ML Engineer",
    datePosted: "3 days ago",
    place: "Mumbai",
    jobDesc: "Build AI models and solutions.",
    cName: "AI Innovations",
    contact: "9876543226",
    mode: "onsite",
    jobType: "Full time"
  },
  {
    id: 18,
    job: "Event Planner",
    datePosted: "5 days ago",
    place: "Delhi",
    jobDesc: "Plan and organize events.",
    cName: "EventX Pvt Ltd",
    contact: "9876543227",
    mode: "hybrid",
    jobType: "Part time"
  },
  {
    id: 19,
    job: "E-commerce Manager",
    datePosted: "Yesterday",
    place: "Chennai",
    jobDesc: "Manage online stores.",
    cName: "ShopEase Pvt Ltd",
    contact: "9876543228",
    mode: "remote",
    jobType: "Full time"
  },
  {
    id: 20,
    job: "Fitness Trainer",
    datePosted: "Now",
    place: "Bangalore",
    jobDesc: "Guide clients on fitness routines.",
    cName: "FitLife Gym",
    contact: "9876543229",
    mode: "onsite",
    jobType: "Part time"
  }
];

const Jobs =() => {
  const {searchQuery} = useContext(SearchContext)
  // console.log(searchQuery);
  
  const [sortBy, setSortBy] = useState("");


  let filteredJobs = jDetails.filter((job) =>
    job.job.toLowerCase().includes((searchQuery || "").toLowerCase())
  );
  

  if (sortBy === "nearMe") {
    filteredJobs = filteredJobs.sort((a, b) => a.distance - b.distance);
  } else if (sortBy === "datePosted") {
    filteredJobs = filteredJobs.sort(
      (a, b) => new Date(b.datePosted) - new Date(a.datePosted)
    );
  }

  return (
    <div>
      <div className="px-10 py-7 job-top flex justify-between">
        <h1 className="font-semibold text-[25px] border-b-2">Jobs</h1>
        <select
          name="mode"
          id="mde"
          className="w-40 h-12 px-4 focus:outline-none border rounded-md"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="nearMe">Near Me</option>
          <option value="datePosted">Date Posted</option>
        </select>
      </div>

      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {filteredJobs.map((jd) => (
          <div
            key={jd.id}
            className="group singleJob w-[250px] p-[20px] bg-white rounded-[10px] shadow-lg hover:shadow-xl"
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor">
                {jd.job}
              </h1>
            </span>

            <div className="l2 flex mt-1 justify-between">
              <h6 className="text-[#ccc]">{jd.place}</h6>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive />
                {jd.datePosted}
              </span>
            </div>
            <div className="h-24 border-t-[2px] mt-[20px] overflow-x-auto ">
            <p className="text-[13px] text-[#959595] pt-[20px]">
              {jd.jobDesc}
            </p>

            </div>
            <div className="company flex items-center gap-2">
              {jd.cImg && <img src={jd.cImg} alt="" className="rounded-full w-6 h-6" /> }
              <span className="text-[14px] py-[1rem]">{jd.cName}</span>
              
            </div>

            <div className="company flex items-center gap-2">
              <span className="text-[14px] py-[1rem]">{jd.jobType}</span>
              <span className="border-r-2 h-6 w-1"></span>
              <span className="text-[14px] py-[1rem]">{jd.mode}</span>
              
            </div>

            {jd.vacancy && <div className="flex items-center gap-1">
            <span className="text-[14px] py-[1rem]">Vacancy <span className="border-r-2 h-6 w-1 mx-3"></span>  {jd.vacancy}</span>
            </div>}

            <button className="rounded-[10px] block p-[10px] w-full text-[14px] bg-blue-500 font-semibold text-white hover:bg-blue-700">
              <Link to={'/apply-job'}>Apply Now</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
