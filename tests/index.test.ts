import { ArrayOps } from "../ArrayOps";

describe("Operations", () => {
   let A: number[] = [];
   let B: number[] = [];
   let ops: ArrayOps<number>;
   describe("On Arrays", () => {
	  beforeAll(() => {
		 A = [1, 3, 4, 5];
		 B = [1, 2, 5, 6, 7];
		 ops = new ArrayOps<number>(A, B);
	  });
	  test("Should intersect the arrays.", () => {
		 const opsInt = ops.intersection(); // A ⋂ B
		 expect(opsInt).toEqual([1, 5]);
	  });
	  test("Should give difference of the arrays.", () => {
		 const opsDiff = ops.difference(); // A \ B
		 expect(opsDiff).toEqual([3, 4]);
	  });
	  test("Should union the arrays.", () => {
		 const opsUnion = ops.union(); // A ∪ B
		 expect(opsUnion).toEqual([1, 2, 3, 4, 5, 6, 7]);
	  });
	  test("Should give the symmetric difference of the arrays.", () => {
		 const opsSymmDifference = ops.symmDifference(); // A Δ B = (A\B) ∪ (B\A)
		 expect(opsSymmDifference).toEqual([2, 3, 4, 6, 7]);
	  });
   });
});
