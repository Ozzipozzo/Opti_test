// exo = transform the array to get the first index as key
const input = [  
    ["key1", 1, 2, 3, 4],
    ["key2", 4, 5, 6, 7]
]

const transform = x => {

    const tab = x.reduce((acc, row) => { 
        // console.log(row[0])
        // console.log(row.filter(e))
        acc[row.shift()] = row.filter(val => val !== '');
        return acc; 
    }, {});

    console.log(tab);
}

transform(input)

  // output :
  // {
  //   key1: [1, 2, 3, 4],
  //   key2: [4, 5, 6, 7],
  // }