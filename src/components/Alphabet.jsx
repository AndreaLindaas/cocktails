export default function Alphabet(){
    function createAlphabet() {
        const alphabet = [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ];
      return alphabet.map((letter, index)=> {return <span key={index}>{letter}</span>})
     
    }
       

        return(
            <div>{createAlphabet()}</div>
          )
}
