const printItems = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      if(array.length === 0){
        return;
      }
      printItems(item);

    } else {
      console.log(item);
    }
  }
}

const array = ["😎", ["💩", "🤗"], "😼", "😂"];
printItems(array);