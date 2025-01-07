import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="text-center h-screen">
      <h1>Hello World!</h1>
      <p className="text-green-400">This is my first Remix App</p>
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
