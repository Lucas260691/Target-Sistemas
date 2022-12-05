const reverseString = (words) => {
    let wordReverse = ""
    i = words.length -1
    for(i; i >=0; i--){
        wordReverse += words[i]
    }
    return wordReverse
}
console.log(reverseString('target'));