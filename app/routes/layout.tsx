import { Link, Outlet } from "@remix-run/react";

export default function Layout() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>

            </ul>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    );
  }