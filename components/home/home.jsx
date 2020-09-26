import Clicker from "../clicker/clicker";
import Chat from "../chat/chat";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1 className="home__title">HOME</h1>
        <div>
          <Clicker href="#" text="click" />
        </div>
        <div>
          <Chat />
        </div>
      </div>
      <style jsx>{`
        .home {
          &__title {
          }
        }
      `}</style>
    </>
  );
};

export default Home;
