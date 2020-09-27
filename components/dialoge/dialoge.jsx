import { useRef, useEffect } from "react";

import PropTypes from "prop-types";
import cn from "classnames";

import Line from "../line/line";
import Loading from "../loading/loading";

const Dialoge = ({ lines, isLoading }) => {
  const threadRef = useRef();

  useEffect(() => {
    if (!threadRef) return;

    threadRef.current.scrollTop = threadRef.current.scrollHeight;
  }, [lines]);

  return (
    <>
      <div className="dialoge">
        <div className="dialoge__wrapper" ref={threadRef}>
          <div className="dialoge__content">
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
                    <Line {...line} isDisabled={isLoading} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          {isLoading && (
            <div className="dialoge__loading">
              <Loading />
            </div>
          )}
        </div>
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

            width: 100%;
            height: 100%;
            overflow: hidden;

            &__wrapper {
              height: 500px;
              overflow-y: scroll;
              overflow-x: hidden;
              padding-right: 17px;
              box-sizing: content-box;
              width: 100%;
            }

            &__loading {
              padding-left: 1rem;
            }

            &__content {
              padding-bottom: 0.5rem;
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
