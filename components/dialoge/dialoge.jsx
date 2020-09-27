import PropTypes from "prop-types";
import cn from "classnames";

import Line from "../line/line";
import ProfilePicture from "../profile-picture/profile-picture";

const Dialoge = ({ lines }) => {
  return (
    <>
      <div className="dialoge">
        <div className="dialoge__image">
          <ProfilePicture src="ryan.jpg" />
        </div>
        {lines.length > 0 && (
          <ul className="dialoge__list">
            {lines.map((line, index) => (
              <li
                key={index}
                className={cn("dialoge__item", {
                  "dialoge__item--other": line.author === "other",
                  "dialoge__item--me": line.author !== "other",
                })}
              >
                <Line {...line} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <style jsx>
        {`
          .dialoge {
            $self: &;
            max-width: 300px;

            &__image {
              display: inline-block;
              margin: 0.5rem;
            }

            &__list {
              display: flex;
              flex-direction: column;
            }

            &__item {
              margin-top: 1rem;

              &:first-child {
                margin-top: 0;
              }

              &--me {
                + #{$self}__item--me {
                  margin-top: 0.25rem;
                }
              }

              &--other {
                align-self: flex-end;

                + #{$self}__item--other {
                  margin-top: 0.25rem;
                }
              }
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
