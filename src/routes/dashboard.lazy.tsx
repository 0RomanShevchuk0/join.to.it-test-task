import { FC } from "react"
import { createLazyFileRoute } from "@tanstack/react-router"

const Dashboard: FC = () => {
  return <div>Dashboard</div>
}

export const Route = createLazyFileRoute("/dashboard")({
  component: Dashboard,
})
