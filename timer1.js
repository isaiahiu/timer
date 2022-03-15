const argv = process.argv.slice(2);

argv.forEach((x) => {
  let number = Number(x) * 1000;
  if (typeof number === "number" && number >= 0) {
    setTimeout(() => process.stdout.write("."), number);
  }
});
