
function insertShiftArray(array, element) {
  let middle = array.length / 2;
  if (middle % 1 !== 0) {
    middle += 0.5;
  }
  let newArray = [];

  for (let i = 0; i< middle; i++) {
    newArray[newArray.length] = array[i];

  }
  newArray[newArray.length] = element;

  for (let i = middle; i < array.length; i++) {
    newArray[newArray.length] = array[i];
  }
  console.log(newArray);
  return newArray;
}

insertShiftArray([42,8,23,42], 16);

// describe('Testing insertShiftArray', () => {
//   test('It should insert the given element into the middle of the array.', () => {
//     expect(insertShiftArray([42,8,15,23,42], 16)).toEqual([42,8,15,16,23,42]);
//   });
// });
