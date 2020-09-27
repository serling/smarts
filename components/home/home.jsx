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
    action: 'ACTION.DO_SOMETHING'
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

//TODO: handle onclick for dialoge lines

const Home = () => {
  const handleOnClick = action => {
    console.log("clickety!", action);
  };

  const handleOnAddLine = () => {
    console.log("adding line");
  } 

  const handleOnRemoveLine = () => {
    console.log("removing line");
  } 


  return (
    <>
      <div className="home">
        <h1 className="home__title">HOME</h1>
        <div>
          <Dialoge lines={lines} onLineClick={handleOnClick} />
        </div>
        <div className="home__debug">
          <Clicker text="add line" onClick={handleOnAddLine} />
          <Clicker text="remove line" onClick={handleOnAddLine} />
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
