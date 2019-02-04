export const toRna = nucleotide => {
  const decode = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'};
  let n = nucleotide.toUpperCase().split("");
  let output = [];
  let check = 0;
  for (let check in n) {
    if (
      n[check] !== "G" ||
      n[check] !== "C" ||
      n[check] !== "T" ||
      n[check] !== "A"
    ) {
      check += 1;
    }
  }
  if (check === 0) {
    for (let i in n) {
      if (n[i] === "G" || n[i] === "C" || n[i] === "T" || n[i] === "A") {
        output.push(decode[n[i]]);
      } else {
        throw new Error("Invalid input DNA.");
      }
    }
  }
  return output.join("");
};
