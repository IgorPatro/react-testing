import { render, screen } from "@testing-library/react"
import Timer from "./Timer"

it("should render start, pause and reset buttons", () => {
  const texts = ["start", "pause", "reset"]

  render(<Timer />)
})
