function fiboMemo(index , cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if(index < 3) return 1;
    else {
      cache[index] = fiboMemo(index - 1 ,cache) + fiboMemo(index - 2 ,cache);
    }
  }
  return cache[index];
}

console.log(fiboMemo(6));
