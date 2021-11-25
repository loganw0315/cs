//1)Sum Zero
//Input:[1, 2, 3, -2]
//Runtime:  94 μs
//Runtime Complexity: O(n^2)
//Space Complexity: O(n^2)

const addtoZero = array =>{
    sumZero = false
    for (let i = 0; i < array.length; i++){
        for(let x = 0; x < array.length; x++){
            if(array[i] + array[x] === 0){
                sumZero = true
            }
            if(array[i] + array[i] === 0){
                sumZero = false
            }
        }
    }
    return sumZero
}

//2)Unique Characters
//Input: "Monday"
//Runtime: 56.8 μs
//Runtime Complexity: O(n)
//Space Complexity: O(n)
const hasUniqueChars= word =>{
    let unique = true;
    const set = new Set(word)

    if(set.size !== word.length){
        unique = false;
    }
    return unique;

}

//3)Pangram Sentence
//Input: "The quick brown fox jumps over the lazy dog!"
//Runtime:145.3 μs
//Runtime Complexity: O(n)
//Space Complexity: O(n)
const isPangram = string => {
    string = string.toLowerCase()
    let result = true
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for(let i= 0;i < alphabet.length; i++){
        if(string.indexOf(alphabet[i])==-1){
            result = false
            console.log(string.indexOf(alphabet[i]));
        }
    }
    return result
}




//4)Longest Word
//Input: ["hi", "hello"]
//Runtime: 52.8 μs
//Runtime Complexity: O(n)
//Space Complexity: O(n)
const findLongestWord = (arr) => {
    let longest = 0;
    for(let i=0;i<arr.length;i++){
       if(arr[i].length>longest){
           longest = arr[i].length
       }
   }
   return longest
}
