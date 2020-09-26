const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <header className="layout__header"></header>
        <div className="layout__content">{children}</div>
        <footer className="layout__footer"></footer>
      </div>
      <style jsx>{`
        .layout {
          max-width: 900px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default Layout;
