// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){
    cats.push(Ralph)
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
}
function destructivelyRemoveLastCat(Ralph){
    cats.pop()
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift()
}
function appendCat(Broom){
    const copyOfCats = [...cats]
    const newCats = [...cats, "Broom"]
    return(newCats)
}

function prependCat(Arnold){
    const copyOfCats = [...cats]
    const newCats = ["Arnold", ...cats]
    return(newCats)
}

function removeLastCat(Garfield){
    const copyOfCats = [...cats]
    copyOfCats.pop();
    return(copyOfCats)
}

function removeFirstCat(Milo){
    const copyOfCats = [...cats]
    copyOfCats.shift();
    return(copyOfCats)
}

    


        