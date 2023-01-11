import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "./App";
import Shop from "./Components/shop/Shop";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Route Tests", () => {
  it("renders the page navigation correctly", async () => {
    const user = userEvent.setup();
    render(<App />, { wrapper: BrowserRouter });

    expect(screen.getByText(/sounds like/i)).toBeInTheDocument();

    await user.click(screen.getByText(/shop/i));
    expect(screen.getByText(/add to cart/i)).toBeInTheDocument();

    await user.click(screen.getByRole("img", { name: /go to cart/i }));
    expect(screen.getByText(/checkout/i)).toBeInTheDocument();
  });
});

describe("Shop Tests", () => {
  it("routes all products correctly", () => {
    render(<Shop />, { wrapper: BrowserRouter });

    expect(screen.getAllByRole("img")).toBe(13);
  });

  it("routes to a specific catalogue", async () => {
    const user = userEvent.setup();
    render(<Shop />, { wrapper: BrowserRouter });

    await user.click(screen.getByText(/iPhone/i));
    expect(screen.getAllByRole("img")).toBe(4);
    expect(screen.getAllByTestId("productName"))[0].toHaveTextContent("iPhone");
  });
});
