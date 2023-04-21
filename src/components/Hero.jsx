import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={logo}
          alt="SummarizeMe_logo"
          className="w-28 object-contain"
        />

        <button
          type="button"
          onClick={() => window.open("https://github.com/ApexPlayground")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Improve your reading with SummarizeMe is a web-based app that summarizes
        articles from different sources, generating a brief and essential
        summary, helping users to save time and stay updated
      </h2>
    </header>
  );
};

export default Hero;
