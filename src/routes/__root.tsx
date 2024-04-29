import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="flex min-h-screen flex-col">
      <div className="flex gap-4 p-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="border-2 border-black p-4 flex-1">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});
