import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/Amanihh/my-summarizer.git",
              "_blank"
            )
          }
          title="Repository Link"
          className="black_btn transition"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
      <p className="text-sm text-center text-slate-600 mt-2" >
        (Process can take up to 30 seconds depending on the length of the article. Please be patient.)
      </p>
    </header>
  );
};

export default Hero;
