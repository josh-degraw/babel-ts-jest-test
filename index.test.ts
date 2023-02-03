import { something } from "./index";

describe("Something here", () => {
  test("type of something.foo should be literal 'hello world'", () => {
    expect(something.foo).toBe("hello world");
    //               ^?
  });
});
