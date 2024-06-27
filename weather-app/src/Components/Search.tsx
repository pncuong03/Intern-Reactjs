import { ChangeEvent } from "react";

type PropSearch = {
  term: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

const Search = ({ term, onInputChange, onSubmit }: PropSearch) => (
  <section className="w-full max-w-[500px] flex flex-col text-center items-center justify-center px-10 p-24 h-[500px] bg-orange-400 bg-opacity-20  rounded drop-shadow-lg text-zinc-700">
    <h1 className="text-4xl font-thin">
      <span className="font-black">Weather Forecast</span>
    </h1>
    <p className="text-sm mt-2">
      Please enter the name of the city you want to searchs
    </p>
    <div className="relative flex mt-4">
      <input
        type="text"
        value={term}
        className="px-2 py-1 rounded-l-md border-2 border-white"
        onChange={onInputChange}
      />

      <button
        className="rounded-r-md border-2 bg-orange-200  text-zinc-100 px-2 py-1 cursor-pointer"
        onClick={onSubmit}
      >
        search
      </button>
    </div>
  </section>
);

export default Search;
