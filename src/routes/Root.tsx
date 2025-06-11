import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <main className="w-full h-full">
      <Outlet />
    </main>
  )
}
