function findDistinctSum(set1, set2) {
  let distinctElements = [];
  
  for (let i = 0; i < set1.length; i++) {
    if (!distinctElements.includes(set1[i])) {
      distinctElements.push(set1[i]);
    }
  }
  
  for (let i = 0; i < set2.length; i++) {
    if (!distinctElements.includes(set2[i])) {
      distinctElements.push(set2[i]);
    }
  }
  
  let sum = 0;
  for (let i = 0; i < distinctElements.length; i++) {
    sum += distinctElements[i];
  }
  
  return sum;
}

// Test example
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = findDistinctSum(set1, set2);
console.log(result); // Output: 13 (distinct elements: 2, 4, 7)

function dotProduct(v1, v2) {
    let result = 0;
    
    if (v1.length !== v2.length) {
      throw new Error('Vectors must have the same length.');
    }
    
    for (let i = 0; i < v1.length; i++) {
      result += v1[i] * v2[i];
    }
    
    return result;
  }
  
  function areVectorsOrthogonal(vectors) {
    for (let i = 0; i < vectors.length; i++) {
      for (let j = i + 1; j < vectors.length; j++) {
        if (dotProduct(vectors[i], vectors[j]) !== 0) {
          return false;
        }
      }
    }
    return true;
  }
  
  // Test example
  const vectors = []
  