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

const pAequorFactory = (num, dnaArray) =>{
  return {
    specimenNum: num,
    dna: dnaArray,
    mutate(){
      let index = Math.floor(Math.random() * this.dna.length + 1);
      let base = this.dna[index];
      let newBase = '';
      do
      {
        newBase = returnRandBase();
      }while(base === newBase);
      this.dna[index] = newBase;
    },
    compareDNA(pAequor){
      let inCommon = 0;
      for(let i =0; i < this.dna.length; i++)
      {
        if(this.dna[i] === pAequor.dna[i])
        {
          inCommon++;
        }
      }
      let avg = Math.round(inCommon/this.dna.length*100);
      console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${avg}% DNA in common.`);
    },
    willLikelySurvive()
    {
      let cAndG = 0;
      for(let i =0; i < this.dna.length; i++)
      {
        if(this.dna[i] === 'C' || this.dna[i] === 'G')
        {
          cAndG++;
        }
      }
      let avg = Math.round(cAndG/this.dna.length*100);
      if(avg >= 60)
      {
        return true;
      }
      return false;
    }
  };
}

const test = pAequorFactory(4, mockUpStrand());
const test2 = pAequorFactory(5, mockUpStrand());
test.mutate();
console.log(test.dna);
console.log(test2.dna);
test.compareDNA(test2);
console.log(test.willLikelySurvive());

let survivingDNA = [];
let count = 1;
while(survivingDNA.length < 30)
{
  let dnaTest = pAequorFactory(count, mockUpStrand());
  if(dnaTest.willLikelySurvive())
  {
    survivingDNA.push(dnaTest);
    count++;
  }
}
console.log(survivingDNA.length);
console.log(survivingDNA);










