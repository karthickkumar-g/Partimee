const Filter = () => {
  return <div className="flex items-center h-[80vh]">
    <div className="flex w-[80%] h-full mx-auto flex-col">
    <h1 className="text-3xl font-semibold border-b-2">Filter</h1>
    <div className="filter-1 mt-3">
        <h1 className="text-xl my-2 font-semibold">Locations</h1>
      <div className="inps">
        <input type="radio" name="cbe" id="cbe" />
        <label htmlFor="cbe" className="ml-1">Coimbatore</label>
      </div>
      <div className="inps">
        <input type="radio" name="chen" id="che" />
        <label htmlFor="chen" className="ml-1">Chennai</label>
        </div>
        <div className="inps">
        <input type="radio" name="pol" id="pol" />
        <label htmlFor="pol" className="ml-1">Pollachi</label>
        </div>
        <div className="inps">
        <input type="radio" name="mad" id="mad" />
        <label htmlFor="mad" className="ml-1">Madurai</label>
        </div>
    </div>
    <div className="border-b-2 h-auto mt-5"></div>
    <div className="filter-2 mt-3">
        <h1 className="text-xl my-2 font-semibold">Mode</h1>
      <div className="inps">
        <input type="radio" name="cbe" id="cbe" />
        <label htmlFor="cbe" className="ml-1">Part-time</label>
      </div>
      <div className="inps">
        <input type="radio" name="chen" id="che" />
        <label htmlFor="chen" className="ml-1">Full-time</label>
        </div>
        <div className="inps">
        <input type="radio" name="pol" id="pol" />
        <label htmlFor="pol" className="ml-1">Remote</label>
        </div>
        <div className="inps">
        <input type="radio" name="mad" id="mad" />
        <label htmlFor="mad" className="ml-1">Hybrid</label>
        </div>
    </div></div>
  </div>;
};

export default Filter;
