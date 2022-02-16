qTeams = {
  aaiec: 400,
  aaiwc: 60,
  qai: 200,
  poc: 100,
  gtm: 50,
  hr: 10,
};

var arr = [];

// Storing object in an array with values as keys and keys as values
for (k in qTeams) {
  arr[qTeams[k]] = k;
}

// printing array elements
arr.map((element, index) => {
  console.log(`${index} -> ${element}`);
});
