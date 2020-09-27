import { useReducer } from "react";

import Dialoge from "../dialoge/dialoge";
import Alternatives from "../alternatives/alternatives";
import ProfilePicture from "../profile-picture/profile-picture";

import { initialLines, initialAlternatives } from "../../data/home";

const init = ({ initialLines, initialAlternatives }) => {
  return {
    lines: initialLines,
    alternatives: initialAlternatives,
    isLoading: false,
  };
};

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
    case "reset-alternatives":
      console.log("--> resetting dialoge tree");
      return {
        ...state,
        lines: [
          ...state.lines,
          {
            text: payload.text,
          },
        ],
        alternatives: initialAlternatives,
        isLoading: false,
      };
    case "toggle-loading":
      console.log("--> toggling loading");
      return { ...state, isLoading: payload.isLoading };
    default:
      console.log("--> NO ACTIONS WITH THAT TYPE");
      return state;
  }
};

const awaitDelay = () => {
  const rnd = Math.floor(Math.random() * Math.floor(3)) * 1000;

  return new Promise(function (resolve) {
    setTimeout(resolve, rnd);
  });
};

const Home = () => {
  const [state, dispatch] = useReducer(
    reducer,
    { initialLines, initialAlternatives },
    init
  );

  //TODO: figure out interface towards more complex actions/series of actions
  const turnOnLights = async () => {
    dispatch({
      type: "toggle-loading",
      payload: { isLoading: true },
    });

    await awaitDelay();

    dispatch({
      type: "add-response",
      payload: { text: "There you go, buddy. All set.", timestamp: Date.now() },
    });

    dispatch({
      type: "add-alternatives",
      payload: {
        alternatives: [
          { text: "Thanks!", action: "reset-alternatives" },
          { text: "Okay, nice.", action: "add-line", timestamp: Date.now() },
        ],
      },
    });

    await awaitDelay();

    dispatch({
      type: "toggle-loading",
      payload: { isLoading: false },
    });

    dispatch({
      type: "add-response",
      payload: { text: "What else can I do you for?" },
    });
  };

  return (
    <>
      <div className="home">
        <div>
          <button onClick={turnOnLights}>mock async</button>
        </div>
        <h1 className="home__title">Ryan's House</h1>
        <div className="home__chat">
          <div className="home__image">
            <ProfilePicture src="ryan.jpg" />
          </div>
          <div className="home__thread">
            <Dialoge lines={state.lines} isLoading={state.isLoading} />
          </div>
        </div>

        <div className="home__alternatives">
          <Alternatives
            alternatives={state.alternatives}
            dispatch={dispatch}
            isDisabled={state.isLoading}
          />
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
