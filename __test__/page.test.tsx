import MyPage from "@/app/page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(
  () =>
    Promise.resolve({
      json: () => Promise.resolve({ data: "complete" }),
    }) as Promise<Response>
);

it("test", async () => {
  render(await MyPage());
  expect(screen.getByText("complete")).toBeInTheDocument();
});
