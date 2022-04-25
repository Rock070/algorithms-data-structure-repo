const hashTable = (size) => {
  // 建立一個 hash table 可以存資料
  let table = [];
  // 先根據 hash table 的長度來將建立二維陣列，方便處理衝突的情況。
  for (let i = 0; i < size; i++) table.push([]);

  // division method
  const hash1 = (key) => key % size;

  // multiplication method
  const hash2 = (key) => {
    A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(size * ((key * A) % 1));
  };

  // set 幫助把資料存進 hash table
  const set = (key, value) => {
    let index = hash2(key);
    table[index].push({ key, value });
  };

  // get 取得值
  const get = (key) => {
    let index = hash2(key);
    for (let i = 0; i < table[index].length; i++) {
      if (table[index][i].key === key) return table[index][i];
    }
  };

  // 印出 hash table
  const printAll = () => {
    console.log(table);
  };

  return {
    size,
    table,
    parse,
    hash1,
    hash2,
    set,
    get,
    printAll,
  };
}

let myHashTable = hashTable(6)
myHashTable.set(11424, 'Mike')
myHashTable.set(6254, "James");
myHashTable.set(554, "Kevin");
myHashTable.set(4174, "Drake");
console.log(myHashTable.get(4174))
myHashTable.printAll()


/*
output:

{ key: 4174, value: 'Drake' }
[
  [],
  [ { key: 6254, value: 'James' } ],
  [ { key: 11424, value: 'Mike' }, { key: 554, value: 'Kevin' } ],
  [],
  [ { key: 4174, value: 'Drake' } ],
  []
]
*/