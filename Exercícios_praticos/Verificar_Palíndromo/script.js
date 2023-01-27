// solução 1
function palindromo(string) {
    if ( !string ) return "string inexistente";

    return string.split( "" ).reverse( ).join( "" ) === string;
}

console.log( palindromo( "ovo" ) )
console.log( palindromo( "gato" ) )
console.log( palindromo(  ) )

// solução 2
function palindromo2(string) {
    if ( !string ) return "string inexistente";
    
    for ( i = 0; i < string.length / 2; i++ ){
        if ( string[ i ] !== string[string.length - 1 - i] ) {
            return false;
        }
    }
    return true
}
console.log(palindromo2( "abba"))
console.log(palindromo2( "abra"))
console.log(palindromo2( ))