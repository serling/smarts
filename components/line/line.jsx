import PropTypes from "prop-types";
import cn from "classnames";

import Clicker from "../clicker/clicker";

const authors = {
  me: "me",
  other: "other",
};

const Line = ({ text, author, onClick }) => {
  return (
    <>
      <div
        className={cn("line", {
          [`line--${authors[author]}`]: authors[author],
        })}
      >
        {text &&
          React.createElement(
            author === authors.other ? "p" : Clicker,
            {
              onClick,
              tag: "button",
              text,
              className: "line__text",
            },
            <span>{text}</span>
          )}
      </div>
      <style jsx>{`
        .line {
          background-color: #fdf8ea;
          display: inline-block;
          padding: 0.25rem 1rem;
          border-radius: 4px;
          border: 1px solid black;
          box-shadow: 1px 1px 1px 0px #999696;

          &--me {
          }

          &--other {
          }
        }
      `}</style>
    </>
  );
};

Line.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  author: PropTypes.oneOf(Object.values(authors)),
};

Line.defaultProps = {
  author: authors.me,
};

export default Line;
