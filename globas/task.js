function countOccurrences(name) {
    let count = 0;
    let lowerName = name.toLowerCase();
    
    for (let i = 0; i < lowerName.length; i++) {
    if (lowerName[i] === "c" || lowerName[i] === "l" || lowerName[i] === "o" || lowerName[i] === "f" || lowerName[i] === "u" || lowerName[i] === "s") {
    count++;
    }
    }
    
    return count;
    }
    
    console.log(countOccurrences("Vishnu")); 