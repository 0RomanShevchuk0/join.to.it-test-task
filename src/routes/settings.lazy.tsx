import { FC } from "react"
import { createLazyFileRoute } from "@tanstack/react-router"

const Settings: FC = () => {
  return <div>Settings</div>
}

export const Route = createLazyFileRoute("/settings")({
  component: Settings,
})
