export type Thing = {
  foo: `hello ${"world" | "person"}`;
};

export const something = {
  foo: "hello world",
} satisfies Thing;
