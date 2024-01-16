// const arr = ["Blue", "Orange", "Red", "Violet", "Imposter"]
// // const approx = Math.floor(Math.random * arr)

// for(n = 0; n < arr.length; n++) {
//   console.log(arr[n]);
// }

const obj = [
  {
    Title: "The Lightening Thief",
    Author: "Rick Riordan",
    Year: "2014",
    Category: "Greek Mythology"
  },
  {
    Title: "Divine Evil",
    Author: "Nora Roberts",
    Year: "2011",
    Category: "Fiction"
  },
  {
    Title: "Angels and Demons",
    Author: "Dan Brown",
    Year: "2009",
    Category: "Fiction"
  }
]

for (n = 0; n < obj.length; n++) {
  console.log(obj[n].Author)
  console.log(obj[n].Category)
  console.log(obj[n].Title)
}

function first() {
  console.log("This is my second function");
}
first();

console.log(typeof first)
console.log(typeof first)