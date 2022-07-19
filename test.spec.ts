import MyClass from "./MyClass";
import myFunction from "./myFunction";
import "jest-extended";
jest.mock("./MyClass");

it("works", () => {
  // Act
  myFunction();

  // Assert
  expect(MyClass.prototype.initialize).toHaveBeenCalledBefore(
    jest.mocked(MyClass.prototype.finalize)
  );
});
