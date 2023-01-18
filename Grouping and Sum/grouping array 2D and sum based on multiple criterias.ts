function groupAndSum(data: any[], keys: number[]) {
  const groupedAndSummed: any[] = [];
  const intermediate: { [key: string]: { [key: string]: number } } = {};

  for (const array of data) {
    let key = "";
    for (const index of keys) {
        key += array[index] + "-";
    }
    key = key.slice(0, -1);
    const value = array[2];

    if (key in intermediate) {
      intermediate[key] += value;
    } else {
      intermediate[key] = value;
    }
  }

  for (const key in intermediate) {
    const keyValues = key.split("-");
    keyValues.push(intermediate[key]);
    groupedAndSummed.push(keyValues);
  }

  return groupedAndSummed;
}

//contoh penggunaan
const data = [  ['A', 'X', 'Jan', 10],
  ['B', 'Y', 'Feb', 20],
  ['A', 'Z', 'Mar', 15],
  ['B', 'X', 'Apr', 5],
  ['A', 'Y', 'May', 25],
  ['B', 'Z', 'Jun', 30],
];

const keys = [0, 1, 2];

const groupedAndSummed = groupAndSum(data, keys);
console.log(groupedAndSummed);

//output
[
  ['A', 'X', 'Jan', 10], 
  ['A', 'Z', 'Mar', 15], 
  ['A', 'Y', 'May', 25], 
  ['B', 'Y', 'Feb', 20], 
  ['B', 'X', 'Apr', 5], 
  ['B', 'Z', 'Jun', 30] 
]


