import PropTypes from "prop-types";
import cn from "classnames";
import { Slide } from "react-awesome-reveal";

import Clicker from "../clicker/clicker";

const authors = {
  me: "me",
  other: "other",
};

const Line = ({ text, author, action, onClick }) => {
  const itsMe = author === authors.me;

  return (
    <>
      <Slide triggerOnce duration={200} direction={itsMe ? "right" : "left"}>
        <div
          className={cn("line", {
            [`line--${authors[author]}`]: authors[author],
          })}
        >
          {!itsMe && <div className="line__by">Ryan said</div>}
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
          &__by {
            font-size: 0.6rem;
            color: #9e9e9e;
          }

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
  author: authors.me,
};

export default Line;
