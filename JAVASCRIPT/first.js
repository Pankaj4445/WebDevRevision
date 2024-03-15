function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function generateRandomPairs(names) {
    // Shuffle the array
    shuffle(names);
  
    const pairs = [];
    for (let i = 0; i < names.length; i += 2) {
      if (i + 1 < names.length) {
        pairs.push([names[i], names[i + 1]]);
      } else {
        // In case of odd number of elements, pair the last one with null or any other indicator
        pairs.push([names[i], null]);
      }
    }
  
    return pairs;
  }
  
  const names = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const randomPairs = generateRandomPairs(names);
  console.log(randomPairs);
  for (let i = 0; i< randomPairs.length; i++){
    console.log(randomPairs[i][0], " X ", randomPairs[i][1])
  }
  


