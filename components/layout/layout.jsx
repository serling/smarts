import React from 'react';

const Layout = ({children}) => {
    return (<>
        <header>haeder</header>
        <div className="layout__content">
        {children}
    </div>
    <footer>fooater</footer>
    </>)
}

export default Layout;