const crypto = require('crypto');
function findHashWithPrefix(prefix) {
    let input = 0 ;
    while(true){
        let inputstr = input.toString();
        let hash = crypto.createHash('sha256').update(inputstr).digest('hex');
       /* Hash Generation: This line creates a SHA-256 hash of inputStr:
            crypto.createHash('sha256'): Initializes a hash object using the SHA-256 algorithm.
            .update(inputStr): Updates the hash object with the input string.
            .digest('hex'): Computes the hash and returns it in hexadecimal format.*/
        if(hash.startsWith(prefix)){
            return {input : inputstr, hash : hash};
        }
        input ++;
    }
}
const result = findHashWithPrefix('00000');
console.log(`Input:${result.input}`);
console.log(`Hash:${result.hash}`);