import { AttentionSeeker } from "react-awesome-reveal";
import PropTypes from "prop-types";

import Clicker from "../clicker/clicker";

const Alternatives = ({ alternatives, dispatch }) => {
  const handleOnClick = (text, action) => {
    dispatch({
      type: action,
      payload: {
        text,
        timestamp: Date.now(),
      },
    });
  };

  return (
    <>
      <div className="alternatives">
        <ul className="alternatives__list">
          {alternatives.map((alternative, index) => {
            return (
              <li key={index} className="alternatives__item">
                <AttentionSeeker duration={1200} effect="pulse">
                  <Clicker
                    {...alternative}
                    theme={Clicker.themes.dialoge}
                    onClick={() =>
                      handleOnClick(alternative.text, alternative.action)
                    }
                  />
                </AttentionSeeker>
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx>
        {`
          .alternatives {
            &__list {
              display: flex;
              margin-left: -1rem;
            }

            &__item {
              margin-left: 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

Alternatives.propTypes = {
  alternatives: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      action: PropTypes.string,
    })
  ),
};

export default Alternatives;
