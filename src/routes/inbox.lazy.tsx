import { FC } from "react"
import { createLazyFileRoute } from "@tanstack/react-router"

const Inbox: FC = () => {
  return <div>Inbox</div>
}

export const Route = createLazyFileRoute("/inbox")({
  component: Inbox,
})
