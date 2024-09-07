import { createRootRoute, Outlet } from "@tanstack/react-router"
import Sidebar from "../components/Sidebar"
import Input from "../shared/ui/Input"

export const Route = createRootRoute({
  component: () => (
    <div className="h-screen flex bg-red-400">
      <Sidebar />
      <div className="flex flex-col flex-grow overflow-hidden h-full bg-gray-100">
        <header className="p-4 bg-white shadow flex">
          <Input type="search" placeholder="Search" className="border-transparent px-2" />
        </header>
        <div className="p-6 flex-grow overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  ),
})
