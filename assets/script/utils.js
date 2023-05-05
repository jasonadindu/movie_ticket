

//select HTML element
export function select(selector, parent = document) {
    return parent.querySelector(selector);
}


//print
export function print(arg) {
    console.log(arg);
}