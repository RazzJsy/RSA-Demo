export function concatAddress (arr, useComma) {
    let output = '';
    arr.forEach(function (item) {
        if (item) {
            output = output + (item + (useComma ? ', ' : ' '));
        }
    })
    
    if (useComma) {
        output = output.substring(0, output.lastIndexOf(','));
    }
    
    return output.trim();
}