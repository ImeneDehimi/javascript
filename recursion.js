let i =0
function palindrome(str,i){
    if (str == null || str.length == 1){
        return "palindrom"
    }
    while(i<Math.round(str.length/2)-1){
        if (str[i] != str[str.length-i-1]){
            return "not a palindrome"
        }
        else{
            palindrome(str,i+1)
        }
        break
    }
    return "palindrom"
}

console.log(palindrome("radar",i));