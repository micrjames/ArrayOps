import { ArrayOps } from "../ArrayOps";

describe("Operations", () => {
   let A: number[] = [];
   let B: number[] = [];
   let ops: ArrayOps<number> = new ArrayOps<number>(A, B);
   describe("On Arrays", () => {
	  beforeAll(() => {
		 A = [1, 3, 4, 5];
		 B = [1, 2, 5, 6, 7];
	  });
	  test.todo("Should intersect the arrays.");
	  test.todo("Should give difference of the arrays.");
	  test.todo("Should union the arrays.");
	  test.todo("Should give the symmetric difference of the arrays.");
   });
});
