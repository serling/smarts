import Clicker from "../clicker/clicker";
import Dialoge from "../dialoge/dialoge";

const lines = [
  {
    author: "other",
    text:
      "Hey, what's up? Let me help you. I can do all sorts of stuff. Turning on lights, starting the vaccum cleaner. Change the tune for the washer. You name it!",
  },
  {
    author: "other",
    text: "Just let me know.",
  },
  {
    text: "Add an alternative",
    action: "add-line",
  },
  {
    text: "Add a response",
    action: "add-response",
  },
  {
    text: "Turn on the washer",
  },
];

const Home = () => {
  const handleOnClick = (action) => {
    console.log("clickety!", action);
  };

  const handleOnAddLine = () => {
    console.log("adding line");
  };

  const handleOnAddResponse = () => {
    console.log("adding response");
  };

  return (
    <>
      <div className="home">
        <h1 className="home__title">HOME</h1>
        <div>
          <Dialoge lines={lines} onLineClick={handleOnClick} />
        </div>
        <div className="home__debug">
          <Clicker text="add line" onClick={handleOnAddLine} />
          <Clicker text="add response" onClick={handleOnAddResponse} />
        </div>
      </div>
      <style jsx>{`
        .home {
          position: relative;

          &__debug {
            position: absolute;
            top: 0;
            right: 0;
            margin: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
