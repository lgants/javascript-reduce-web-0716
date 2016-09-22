const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 },
];

function couponCounter(totalAmount, location) {
  return totalAmount + location.amount;
}

function reduce(collection, callback, initialValue) {
  let result = initialValue;

  collection.forEach((product, index) => {
    result = callback(result, product, index, collection);
  });

  return result;
}

console.log(reduce(couponLocations, couponCounter, 0)); // prints 15
console.log(reduce(couponLocations, couponCounter, 3)); // prints 18
console.log(couponLocations.reduce(couponCounter, 0)); // also prints 15!
