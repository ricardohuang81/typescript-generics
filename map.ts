class MapIt<T> {
  private map: {[key:string]:T} = {};

  setItem(key:string, item:T) {
    this.map[key] = item;
  }
  getItem(key:string) {
    return this.map[key];
  }
  clear() {
    this.map = {};
  }
  printMap() {
    for (let key in this.map) {
      console.log(key + ": " + this.map[key]);
    }
  }
}

const numberMap = new MapIt<number>();
numberMap.setItem("UFC Interim Champs", 1);
numberMap.setItem("UFC Undisputed Champs", 8);
console.log(numberMap);
console.log(numberMap.getItem("UFC Undisputed Champs"));
numberMap.printMap();

const stringMap = new MapIt<string>();
stringMap.setItem("Israel Adesanya", "The Last Style Bender");
stringMap.setItem("Robert Whittaker", "The Da Reaper");
console.log(stringMap);
console.log(stringMap.getItem("Israel Adesanya"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
// console.log(stringMap);
