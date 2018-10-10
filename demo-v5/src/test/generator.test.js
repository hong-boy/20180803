function* gen(x, y){
  while(true){
    var x1 = yield x + 1;
    if(!x1){
      break;
    }
  }
  console.log(x1);
  let y1 = yield 1 + y;
  console.log(y1);
}

const pointer = gen(1, 2);
console.log(pointer.next());
console.log(pointer.next());
console.log(pointer.next());