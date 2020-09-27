import PropTypes from "prop-types";
import cn from "classnames";

const elements = {
  link: "a",
  button: "button",
};

const themes = {
  default: "default",
  dialoge: "dialoge"
};

const Clicker = ({ children, className, tag, href, theme, text, onClick }) => {
  const Element = href ? elements.link : elements[tag];

  const props = {
    href,
    onClick,
    className: cn(
      "clicker",
      { [`clicker--${themes[theme]}`]: themes[theme] }, 
      className
    ),
  }

  return <><Element {...props}>{children || text}</Element>
  <style jsx>
        {`
          .clicker {
            display: inline-block;

            &__content {
              
            }

            &--dialoge {
              text-decoration: underline;
              background-color: #fdf8ea;
              display: inline-block;
              padding: 0.25rem 1rem;
              border-radius: 4px;
              border: 1px solid black;
              box-shadow: 1px 1px 1px 0px #999696;

              &:hover, &:focus {
               text-decoration: none;
              }
            }

            &--default {
              text-decoration: underline;

              &:hover, &:focus {
               text-decoration: none;
              }
            }
          }
        `}
      </style>
  </>;

  
};

Clicker.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOf(Object.values(elements)),
  href: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(themes)),
};

Clicker.defaultProps = {
  tag: elements.button,
  theme: themes.default,
};

Clicker.themes = themes;

Clicker.elements = elements;

export default Clicker;
