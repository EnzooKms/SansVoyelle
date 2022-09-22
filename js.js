let voyelles = ["a","e","i","o","u","y"]

function SansVoyelle(str) {

    if(typeof str !== "string") throw "Vous devez mettre un string"
    let result = str

    for(let i = 0, l = str.length; i < l; i++) {

        if(voyelles.find(e => e === str[i])) {
            result = result.replace(str[i], "")
            console.log(result)
        }

    }
    
    return [str, result]
}

console.log(SansVoyelle("aeiouytrgda"))

setInterval(() => {
    
}, 1 * 100000);