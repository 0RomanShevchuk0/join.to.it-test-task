import { FC } from "react"
import { createLazyFileRoute } from "@tanstack/react-router"

const Products: FC = () => {
  return <div>Products</div>
}

export const Route = createLazyFileRoute("/products")({
  component: Products,
})
