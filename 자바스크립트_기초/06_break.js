outer: for (var i = 0; i < 3; i++) {
  inner: for (var j = 0; j < 2; j++) {
    if (i === j) {
      break outer;
    }
    console.log(`[${i}, ${j}]`);
  }
}
