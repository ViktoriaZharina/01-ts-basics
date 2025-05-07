function getFirstElement<T extends string | number | boolean>(arr: T[]): T {
  return arr[0];
}

getFirstElement([1, 2, 3]); // 1
getFirstElement(["a", "b", "c"]); // "a"
getFirstElement([true, false, true]); // true

getFirstElement(["rtrt", 4, "ryry"]);
