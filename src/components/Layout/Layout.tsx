import { NavLink, Outlet } from 'react-router-dom';
import './Layout.scss';

function Layout() {
  return (
    <div className="layout">
      {/* <canvas className="mouse-canvas"></canvas> */}
      <div className="half-page page-right">
        <header>
          <h1 className="title">
            <a href="/">vanolson.com</a>
          </h1>
          <h3>this is my website</h3>
        </header>
        <main>
          <Outlet />
        </main>
        <nav>
          <NavLink to="/">home</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/stuff">stuff</NavLink>
        </nav>
        <footer></footer>
      </div>
      <div className="half-page page-left">
        <div className="face-wrapper">
          <div
            className="face"
            aria-label="ascii art of a smiling face, with two eyes and a mouth. the eyes blink every so often"
          >
            <div className="eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
            <div className="mouth"></div>
          </div>
          <div className="face-label">
            <h5>here is a rough approximation of what i look like</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
