const hashTable = (size) => {
  // 建立一個 hash table 可以存資料
  let table = [];
  // 先根據 hash table 的長度來將建立二維陣列，方便處理衝突的情況。
  for (let i = 0; i < size; i++) table.push([]);

  // parse 把非 number 型態的 key 轉換成 number
  const parse = (str) => {
    let sum = 0;
    for (char of str) sum += char.charCodeAt();
    return sum % size;
  };

  const hash1 = (key) => key % size;

  const hash2 = (key) => {
    let parseKey;
    if (typeof key !== "number") parseKey = parse(key);
    else parseKey = key;

    A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(size * ((parseKey * A) % 1));
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
myHashTable.set('white', "#FFFFFF")
myHashTable.set('magenta', "#FF00FF")
myHashTable.set('red', "#FF0000")
console.log(myHashTable.get('red'))
myHashTable.printAll()

/*
output:

{ key: 'red', value: '#FF0000' }
[
  [ { key: 'white', value: '#FFFFFF' } ],
  [],
  [],
  [ { key: 'magenta', value: '#FF00FF' } ],
  [],
  [ { key: 'red', value: '#FF0000' } ]
]
*/