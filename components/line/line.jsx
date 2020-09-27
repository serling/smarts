import PropTypes from "prop-types";
import cn from "classnames";

import Clicker from "../clicker/clicker";

const authors = {
  me: "me",
  other: "other",
};

const Line = ({ text, author, action }) => {
  const itsMe = author === authors.me;

  const handleOnClick = action => {
    console.log("click action:", action);
  }

  return (
    <>
      <div
        className={cn("line", {
          [`line--${authors[author]}`]: authors[author],
        })}
      >
        {itsMe && action ?
        <Clicker onClick={() => action && handleOnClick(action)} theme={Clicker.themes.dialoge} text={text} /> : <p className="line__text">{text}</p>}
      </div>
      <style jsx>{`
        .line {
          &__text {
            background-color: #fdf8ea;
            display: inline-block;
            padding: 0.25rem 1rem;
            border-radius: 4px;
            border: 1px solid black;
            box-shadow: 1px 1px 1px 0px #999696;
          }
        }
      `}</style>
    </>
  );
};

Line.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.string,
  author: PropTypes.oneOf(Object.values(authors)),
};

Line.defaultProps = {
  author: authors.me
};

export default Line;
