
function insertShiftArray (start, num) {
  const middle = Math.ceil(start.length / 2);
  const left = start.slice(0, middle);
  const right = start.slice(middle);
  return [...left, num, ...right];
}

// insertShiftArray([42,8,15,23,42], 16);

describe('Testing insertShiftArray', () => {
  test('It should insert the given element into the middle of the array.', () => {
    expect(insertShiftArray([42,8,15,23,42], 16)).toEqual([42,8,15,16,23,42]);
  });
});
