/*
Melakukan grouping data array 2D dan grouping berdasarkan satu kriteria kolom1
Contoh :
data = [["proj1",10],["proj2",15],["proj1",3]]
out = groupAndSum(data)

out:
[["proj1",13],["proj2",15]]

*/
function groupAndSum(data: string[][]) {
  const groupedAndSummed: { [key: string]: number } = {};
  const result: string[][] = [];

  for (const array of data) {
    const key1 = array[0];
    const value = array[1];

    if (key1 in groupedAndSummed) {
      groupedAndSummed[key1] += value;
    } else {
      groupedAndSummed[key1] = value;
    }
  }

  for (const key in groupedAndSummed) {
    result.push([key, groupedAndSummed[key]]);
  }

  return result;
}
