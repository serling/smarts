import PropTypes from "prop-types";
import cn from "classnames";

const elements = {
  a: "a",
  button: "button",
};

const themes = {
  default: "default",
};

const Clicker = ({ children, className, tag, href, theme, text }) => {
  return (
    <>
      {React.createElement(
        `${href ? "a" : elements[tag]}`,
        {
          href,
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
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(themes)),
};

Clicker.defaultProp = {
  tag: elements.a,
  theme: themes.default,
};

export default Clicker;
