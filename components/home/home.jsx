import { useReducer } from "react";

import Dialoge from "../dialoge/dialoge";
import Alternatives from "../alternatives/alternatives";
import Loading from "../loading/loading";
import ProfilePicture from "../profile-picture/profile-picture";

import { initialLines, initialAlternatives } from "../../data/home";

const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case "add-response":
      console.log("--> adding response from Ryan");
      return {
        ...state,
        lines: [
          ...state.lines,
          {
            text: payload.text,
            author: "other",
            timestamp: payload.timestamp,
          },
        ],
      };
    case "add-line":
      console.log("--> adding line from you");
      return {
        ...state,
        lines: [
          ...state.lines,
          {
            text: payload.text,
            timestamp: payload.timestamp,
          },
        ],
      };
    case "add-alternatives":
      console.log("--> adding alternatives");
      return {
        ...state,
        alternatives: payload.alternatives,
      };
    case "toggle-loading":
      console.log("--> toggling loading");
      return { ...state, isLoading: payload.isLoading };
    default:
      console.log("--> NO ACTIONS WITH THAT TYPE");
      return state;
  }
};

const init = ({ initialLines, initialAlternatives }) => {
  return {
    lines: initialLines,
    alternatives: initialAlternatives,
    isLoading: false,
  };
};

const Home = () => {
  const [state, dispatch] = useReducer(
    reducer,
    { initialLines, initialAlternatives },
    init
  );

  return (
    <>
      <div className="home">
        <h1 className="home__title">Ryan's House</h1>
        <div className="home__chat">
          <div className="home__image">
            <ProfilePicture src="ryan.jpg" />
          </div>
          <div className="home__thread">
            <Dialoge lines={state.lines} />
            {state.isLoading && (
              <div className="home__loading">
                <Loading />
              </div>
            )}
          </div>
        </div>

        <div className="home__alternatives">
          <Alternatives alternatives={state.alternatives} dispatch={dispatch} />
        </div>
      </div>
      <style jsx>{`
        .home {
          &__title {
            margin-bottom: 2rem;
          }

          &__chat {
            max-width: 400px;
            margin: 0 auto;
            position: relative;
          }

          &__thread {
          }

          &__image {
            position: absolute;
            left: -100px;
            top: 0;
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
        }
      `}</style>
    </>
  );
};

export default Home;
