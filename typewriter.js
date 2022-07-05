const sentence = "hello there from lighthouse labs";

let ms = 0;

const text = sentence + "\n";
for (const letter of text) {
  setTimeout(() => process.stdout.write(letter), ms)
  ms += 50;
};
