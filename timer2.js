const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", (x) => {
  let number = Number(x) * 1000;
  if (x === "b") {
    process.stdout.write("BEEP \n");
  }
  if (x === "\u0003") {
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  }
  if (typeof number === "number" && number >= 1000 && number <= 9000) {
    setTimeout(() => {
      process.stdout.write("BEEP \n");
    }, number);
    console.log(`setting timer for ${x} seconds ...`);
  }
});
