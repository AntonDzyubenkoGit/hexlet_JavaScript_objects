// Испытания. Javascript: Преобразование DNA в RNA
const DNK = { A: "U", C: "G", G: "C", T: "A" };

const dnaToRna = (dnk) => {
  const rnk = [];
  const dnkKey = Object.keys(DNK);

  for (const key of dnk) {
    if (!dnkKey.includes(key)) {
      return null;
    }
    rnk.push(DNK[key]);
  }

  return rnk.join('');
};

console.log(dnaToRna("ACGTGGTCTTAA")); //GGAU
