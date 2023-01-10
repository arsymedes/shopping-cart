import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import React from "react"
import App from './App';
import {BrowserRouter, MemoryRouter} from "react-router-dom"

describe("Route Tests", () => {
  it("renders the page navigation correctly", async () => {
    const user = userEvent.setup()
    render(<App />, {wrapper: BrowserRouter})
    
    expect(screen.getByText(/sounds like/i)).toBeInTheDocument()

    await user.click(screen.getByText(/shop/i))
    expect(screen.getByText(/add to cart/i)).toBeInTheDocument()
  })
})