// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


/* 
Parameters
    What are they giving me? What are the expected arguments? Will it only ever be one type of data, or do I need to account for others? Will there ever be an invalid input? Do I need to account for unexpected edge cases?

Returns 
    What do they want me to return? Are they expecting a string? array? object? Is there a certain format the return is expected in? Will the expected return ever change for invalid inputs or edge cases?

Examples 
    Check your understanding! Are tests provided that you can reference as examples? What would happen in invalid or edge situations? Aim for at least 3 examples.

Pseudocode 
    In fairly plain speech, how would you solve this? What needs to happen to get from the starting inputs to the desired return? Think it through step by step, if you write something down and it is more than a single action, you may need to break it down more. Good pseudocode only comes with practice.
*/


//Solution
function reverseString(str) {
    let reversed = str.split("").reverse().join("")
    return reversed
}


//Tests
console.log(reverseString("world"))
console.log(reverseString("hello"))
console.log(reverseString(""))
console.log(reverseString("h"))

