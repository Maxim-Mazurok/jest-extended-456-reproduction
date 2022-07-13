import MyClass from "./MyClass";

export default function () {
  const myClassInstance = new MyClass();
  myClassInstance.initialize();
  myClassInstance.finalize();
}
