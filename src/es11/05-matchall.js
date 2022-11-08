const regex = /\b(Apple)+\b/g;

const fruit = "Apple, nana, aple, lola, low, mowpak";

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}
