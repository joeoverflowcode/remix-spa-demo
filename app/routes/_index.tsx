import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <div>
        <h1 className="text-green-500 text-2xl">Hello World</h1>
        <ul>
          <li>
            <Link to="about"> About</Link>
          </li>
          <li>
            <Link to="/team">Our Team</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
