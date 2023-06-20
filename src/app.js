let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [
  ".com",
  ".cr",
  ".us",
  ".xyz",
  ".es",
  ".co",
  ".net",
  ".io",
  ".ar"
];

let number = 1;

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extension.length; l++) {
        //domainTxt +=
          console.log(number + "  " + pronoun[i] + adj[j] + noun[k] + extension[l]);
        number++;
      }
    }
  }
}

