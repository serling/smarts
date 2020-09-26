import React from 'react';

//TODO: scss with styled-jsx (nesting, etc)

const Home = () => {
    return (<>
    <div className="home">
        <h1 className="home__title">HOME</h1>
    </div>
    <style jsx>{`
       .home {
        &__title { 
           color: red;
       }
       }
      `}</style>
    </>)
}

export default Home;