
function reverseArray(arr) {
  let reverse = [];
  for (let i = arr.length - 1; i > -1; i--) {
    reverse.push(arr[i]);
  }
  console.log(reverse);
  return reverse;
}

//reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12]);

describe('Testing ReverseArray', () => {
  test('It should reverse the elements of an array.', () => {
    expect(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12])).toEqual([-12, 823, -923, 10, 23, 3546, 2354, 89]);
  });
});
