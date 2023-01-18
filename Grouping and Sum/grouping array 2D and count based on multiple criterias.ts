function groupAndCount(data: any[], keys: number[]) {
  const groupedAndCounted: any[] = [];
  const intermediate: { [key: string]: number } = {};

  for (const array of data) {
    let key = "";
    for (const index of keys) {
        key += array[index] + "-";
    }
    key = key.slice(0, -1);

    if (key in intermediate) {
      intermediate[key]++;
    } else {
      intermediate[key] = 1;
    }
  }

  for (const key in intermediate) {
    const keyValues = key.split("-");
    keyValues.push(intermediate[key]);
    groupedAndCounted.push(keyValues);
  }

  return groupedAndCounted;
}

//Contoh penggunaan
const data = [  ['A', 'X', 'Jan', 10],
  ['B', 'Y', 'Feb', 20],
  ['A', 'Z', 'Mar', 15],
  ['B', 'X', 'Apr', 5],
  ['A', 'Y', 'May', 25],
  ['B', 'Z', 'Jun', 30],
];

const keys = [0, 1];

const groupedAndCounted = groupAndCount(data, keys);
console.log(groupedAndCounted);

//Output
[ 
  ['A', 'X', 1], 
  ['A', 'Z', 1], 
  ['A', 'Y', 1], 
  ['B', 'Y', 1], 
  ['B', 'X', 1], 
  ['B', 'Z', 1] 
]
