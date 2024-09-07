import { Link } from "@tanstack/react-router"
import { FC } from "react"

const Sidebar: FC = () => {
  return (
    <aside className="w-64 h-full bg-gray-900 text-white flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-bold">IMPEKABLE</h2>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="block p-4 hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="block p-4 hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/inbox" className="block p-4 hover:bg-gray-700">
              Inbox
            </Link>
          </li>
          <li>
            <Link to="/products" className="block p-4 hover:bg-gray-700">
              Products
            </Link>
          </li>
          <li>
            <Link to="/calendar" className="block p-4 hover:bg-gray-700">
              Calendar
            </Link>
          </li>
          <li>
            <Link to="/settings" className="block p-4 hover:bg-gray-700">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
