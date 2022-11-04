import { render, screen, fireEvent } from "@testing-library/react"
import Form from "./Form"

it("should render name input", () => {
  render(<Form />)
  const inputElement = screen.getByPlaceholderText(/name/i)
  expect(inputElement).toBeInTheDocument()
})

it("should change name input's value", () => {
  render(<Form />)
  const inputElement = screen.getByPlaceholderText(/name/i)
  fireEvent.change(inputElement, { target: { value: "John" } })
  expect(inputElement).toHaveValue("John")
})

it("should initially render disabled button", () => {
  render(<Form />)
  const submitButtonElement = screen.getByText(/submit/i)
  expect(submitButtonElement).toHaveAttribute("disabled")
})

it("should remove button's disable attribute after changing name's input", () => {
  render(<Form />)
  const inputElement = screen.getByPlaceholderText(/name/i)
  fireEvent.change(inputElement, { target: { value: "John" } })

  const submitButtonElement = screen.getByText(/submit/i)
  expect(submitButtonElement).not.toHaveAttribute("disabled")
})
