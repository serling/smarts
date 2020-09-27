import PropTypes from "prop-types";
import cn from "classnames";

const sizes = {
  normal: "normal",
  small: "small",
};

const ProfilePicture = ({ src, size }) => {
  return (
    <>
      <div
        className={cn("profile-picture", {
          [`profile-picture--${sizes[size]}`]: sizes[size],
        })}
      >
        <span className="profile-picture__image" />
      </div>
      <style jsx>{`
        .profile-picture {
          border: 1px solid black;
          border-radius: 50%;

          &--normal {
            width: 100px;
            height: 100px;
          }

          &--small {
            width: 50px;
            height: 50px;
          }

          &__image {
            background: url("${src}") no-repeat center center;
            background-size: cover;
            width: 100%;
            height: 100%;
            display: block;
          }
        }
      `}</style>
    </>
  );
};

ProfilePicture.propTypes = {
  src: PropTypes.string,
  size: PropTypes.oneOf(Object.values(sizes)),
};

ProfilePicture.defaultProps = {
  size: sizes.normal,
};

ProfilePicture.sizes = sizes;

export default ProfilePicture;
