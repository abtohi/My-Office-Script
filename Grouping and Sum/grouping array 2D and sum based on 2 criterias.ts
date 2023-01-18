function groupAndSum(data:string) {
  const groupedAndSummed: number[][] = [];
  const intermediate: { [key: string]: { [key: string]: number } } = {};

  for (const array of data) {
    const key1 = array[0];
    const key2 = array[1];
    const value = array[2];

    if (key1 in intermediate && key2 in intermediate[key1]) {
      intermediate[key1][key2] += value;
    } else if (key1 in intermediate) {
      intermediate[key1][key2] = value;
    } else {
      intermediate[key1] = {};
      intermediate[key1][key2] = value;
    }
  }

  for (const key1 in intermediate) {
    for (const key2 in intermediate[key1]) {
      groupedAndSummed.push([key1, key2, intermediate[key1][key2]]);
    }
  }

  return groupedAndSummed;
}

