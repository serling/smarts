import PropTypes from "prop-types";
import cn from "classnames";

const elements = {
  a: "a",
  button: "button",
};

const themes = {
  default: "default",
};

const Clicker = ({ children, className, tag, href, theme, text, onClick }) => {
  return (
    <>
      {React.createElement(
        `${href ? "a" : elements[tag]}`,
        {
          href,
          onClick,
          className: cn(
            "clicker",
            { [`clicker--${themes[theme]}`]: themes[theme] },
            className
          ),
        },
        <span className="clicker__content">{children || text}</span>
      )}
      <style jsx>
        {`
          .clicker {
            &__content {
              color: black;
            }
          }
        `}
      </style>
    </>
  );
};

Clicker.propTypes = {
  tag: PropTypes.oneOf(Object.values(elements)),
  href: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(themes)),
};

Clicker.defaultProp = {
  tag: elements.a,
  theme: themes.default,
};

export default Clicker;
