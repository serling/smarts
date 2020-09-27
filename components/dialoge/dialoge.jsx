import { useReducer, useEffect } from "react";
import { Slide } from "react-awesome-reveal";

import PropTypes from "prop-types";
import cn from "classnames";

import Line from "../line/line";
import ProfilePicture from "../profile-picture/profile-picture";

const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case "add-response":
      return {
        ...state,
        lines: [
          ...state.lines,
          {
            text: payload.text,
            author: "other",
          },
        ],
      };
    case "add-line":
      console.log("--> adding line");
      return {
        ...state,
        lines: [
          ...state.lines,
          {
            text: payload.text,
          },
        ],
      };
    case "remove-line":
      return state;
    default:
      throw new Error();
  }
};

const Dialoge = ({ lines }) => {
  const [state, dispatch] = useReducer(reducer, { lines });

  const handleOnClick = (action) => {
    dispatch({
      type: action,
      payload: { text: "This line was added dynamically." },
    });
  };

  return (
    <>
      <div className="dialoge">
        <div className="dialoge__image">
          <ProfilePicture src="ryan.jpg" />
        </div>
        {state.lines.length > 0 && (
          <ul className="dialoge__list">
            {state.lines.map((line, index) => (
              <li
                key={index}
                className={cn("dialoge__item", {
                  "dialoge__item--other": line.author === "other",
                  "dialoge__item--me": line.author !== "other",
                })}
              >
                <Line {...line} onClick={handleOnClick} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <style jsx global>{`
        .dialoge {
          $self: &;

          &__item {
            margin-top: 1rem;

            &:first-child {
              margin-top: 0;
            }

            &--me {
              align-self: flex-end;

              + #{$self}__item--me {
                margin-top: 0.25rem;

                .line__header {
                  display: none;
                }
              }
            }

            &--other {
              + #{$self}__item--other {
                margin-top: 0.25rem;

                .line__header {
                  display: none;
                }
              }
            }
          }
        }
      `}</style>
      <style jsx>
        {`
          .dialoge {
            $self: &;

            &__image {
              display: inline-block;
              margin: 0.5rem;
            }

            &__list {
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

Dialoge.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.shape(Line.propTypes)),
};

export default Dialoge;
