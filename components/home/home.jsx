import Clicker from "../clicker/clicker";
import Dialoge from "../dialoge/dialoge";

const lines = [
  {
    text: "hello",
  },
  {
    author: "other",
    text: "Hey, what's up?",
  },
  {
    text: "Nothing. You?",
  },
  {
    author: "other",
    text: "The usual.",
  },
  {
    author: "other",
    text: "Having fun! :)",
  },
  {
    text: "Okay, cool.",
  },
  {
    text: "Well, see you later.",
  },
  {
    text: "Bye.",
  },
];

const Home = () => {
  const handleOnClick = () => {
    console.log("clickety!");
  };

  return (
    <>
      <div className="home">
        <h1 className="home__title">HOME</h1>
        <div>
          <Clicker href="#" text="click" onClick={handleOnClick} />
        </div>
        <div>
          <Dialoge lines={lines} />
        </div>
      </div>
      <style jsx>{`
        .home {
          &__title {
          }
        }
      `}</style>
    </>
  );
};

export default Home;
