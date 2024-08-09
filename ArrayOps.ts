export class ArrayOps<T> {
   constructor(private A: Array<T>, private B: Array<T>) {}

   intersection(): T[] {
	  return this.A.filter(x => this.B.includes(x));
   }

   difference(): T[] {
	  return this.A.filter(x => !this.B.includes(x));
   } 

   symmDifference(): T[] {
	  // A Δ B = (A \ B) ∪ (B \ A)
	  return Array<T>();
   }

   union(): T[] {
	  const mergedArray = [...this.A, ...this.B]; 
	  const reducedArray = mergedArray.concat();

	  for(let right = 0; right < reducedArray.length; right++)
	  	 for(let left = 0; left < right; left++)
		 	if(reducedArray[left] === reducedArray[right])
			    reducedArray.splice(right, 1);

	  return reducedArray.sort();
   }
}
