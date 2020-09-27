const Loading = () => {
  return (
    <>
      <div className="loading">
        <div className="loading__message">Ryan is typing</div>
        <div className="loading__dialoge">
          <div className="loading__icon">...</div>
        </div>
      </div>
      <style jsx>{`
        .loading {
          &__dialoge {
            background-color: #fdf8ea;
            display: inline-block;
            padding: 0.25rem 1rem;
            border-radius: 4px;
            border: 1px solid black;
            box-shadow: 1px 1px 1px 0px #999696;
            animation: pulse 1.8s alternate infinite ease-in-out;
          }

          &__message {
            font-size: 0.6rem;
            color: #9e9e9e;
            margin: 0 0 0.2rem 0;
          }

          &__icon {
            font-size: 1.3rem;
            line-height: 1;
          }

          @keyframes pulse {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Loading;
