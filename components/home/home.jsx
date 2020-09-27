import Clicker from "../clicker/clicker";
import Dialoge from "../dialoge/dialoge";
import Alternatives from "../alternatives/alternatives";
import Loading from "../loading/loading";

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
    text: "Turn on the washer",
  },
];

const alternatives = [
  {
    text: "Add an alternative",
    action: "add-line",
  },
  {
    text: "Add a response",
    action: "add-response",
  },
];

const Home = () => {
  const isLoading = false;

  return (
    <>
      <div className="home">
        <h1 className="home__title">Ryan's House</h1>
        <div className="home__chat">
          <Dialoge lines={lines} />
          {isLoading && (
            <div className="home__loading">
              <Loading />
            </div>
          )}
        </div>
        <div className="home__alternatives">
          <Alternatives alternatives={alternatives} />
        </div>
      </div>
      <style jsx>{`
        .home {
          position: relative;

          &__chat {
            max-width: 400px;
            margin: 0 auto;
          }

          &__loading {
            display: flex;
            justify-content: flex-start;
          }

          &__alternatives {
            border-top: 1px solid #eae9e9;
            margin-top: 1rem;
            padding-top: 0.5rem;
          }

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
