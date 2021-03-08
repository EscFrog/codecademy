// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const sampleFactory = (number, dnaBases) => {
  return {
    specimenNum: number,
    dna: dnaBases,

    mutate() {
      const index = Math.floor(Math.random() * this.dna.length);
      const selectedBase = this.dna[index];
      let mutatedBase = selectedBase;
      
      while (selectedBase === mutatedBase) {
        mutatedBase = returnRandBase();
      }
      
      this.dna[index] = mutatedBase;
      return this.dna;
    },

    compareDNA(another) {
      let matchCount = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === another.dna[i]) {
          matchCount++;
        }
      }

      const matchRate = matchCount / this.dna.length * 100;

      console.log(`specimen #${this.specimenNum} and specimen #${another.specimenNum} have ${matchRate.toFixed()}% DNA in common`);
      // return matchRate;
    },

    willLikelySurvive() {
      let chanceCount = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          chanceCount++;
        }
      }
      
      const survivalProb = chanceCount / this.dna.length * 100;

      return (survivalProb >= 60) ? true : false;
    },

    complementStrand() {
      let complementStrand = [];
      for (let i = 0; i < this.dna.length; i++) {
        switch (this.dna[i]) {
          case 'A':
            complementStrand.push('T')
            break;
          case 'T':
            complementStrand.push('A')
            break;
          case 'C':
            complementStrand.push('G')
            break;
          case 'G':
            complementStrand.push('C')
            break;
          default:
            break;
        }
      }
      return complementStrand;
    }
  }
}

let validSamples = [];
let sampleNum = 0;
while (validSamples.length < 30) {
  const sample = sampleFactory(sampleNum, mockUpStrand());
  if (sample.willLikelySurvive()) {
    validSamples.push(sample)
  };
  sampleNum++;
}
console.log(validSamples);


