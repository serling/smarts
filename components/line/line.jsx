import PropTypes from "prop-types";
import cn from "classnames";
import { Slide } from "react-awesome-reveal";
import TimeAgo from "timeago-react";

import Clicker from "../clicker/clicker";

const authors = {
  me: "me",
  other: "other",
};

const Line = ({ text, author, action, onClick, timestamp }) => {
  const itsMe = author === authors.me;

  return (
    <>
      <Slide triggerOnce duration={200} direction={itsMe ? "right" : "left"}>
        <div
          className={cn("line", {
            [`line--${authors[author]}`]: authors[author],
          })}
        >
          <div className="line__header">
            <span className="line__by">{`${itsMe ? "You" : "Ryan"} said`}</span>
            {timestamp && (
              <span>
                <TimeAgo
                  datetime={timestamp}
                  opts={{ minInterval: 1 }} // relativeDate: timestamp
                />
              </span>
            )}
          </div>

          {itsMe && action ? (
            <Clicker
              onClick={() => action && onClick(action)}
              theme={Clicker.themes.dialoge}
              text={text}
            />
          ) : (
            <p className="line__text">{text}</p>
          )}
        </div>
      </Slide>

      <style jsx>{`
        .line {
          $self: &;
          margin-left: 1rem;

          &__header {
            display: flex;
            font-size: 0.6rem;
            color: #9e9e9e;
            margin: 0 0 0.2rem 0;
          }

          &__by {
            margin-right: 0.2rem;
          }

          &--me {
            #{$self}__header {
              justify-content: flex-end;
            }

            #{$self}__text {
              border-top-left-radius: 4px;
            }
          }

          &--other {
            #{$self}__text {
              border-bottom-right-radius: 4px;
            }
          }

          &__text {
            position: relative;
            background-color: #fdf8ea;
            display: inline-block;
            padding: 0.25rem 1rem;
            border-top-right-radius: 4px;
            border-bottom-left-radius: 4px;
            border: 1px solid black;
            box-shadow: 2px 2px 5px 0px #d4d2d2;
          }
        }
      `}</style>
    </>
  );
};

Line.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.string,
  timestamp: PropTypes.any, //TODO
  author: PropTypes.oneOf(Object.values(authors)),
};

Line.defaultProps = {
  author: authors.me,
};

export default Line;
