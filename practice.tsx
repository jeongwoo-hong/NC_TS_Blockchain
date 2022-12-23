let a : unknown;

if(typeof a === 'number'){
    let b = a + 1
}

if(typeof a === 'string'){
    let b = a.toUpperCase()
}

function hello(){
    console.log('x')
}

function add(a:number, b:number):number {
    return a + b
}

const add2 = (a:number, b:number) => a + b

type Add = (a:number, b:number) => number;

const add3:Add = (a, b) => a + b

type Config = {
    path: string,
    state: object
}

type Push = {
    (path:string):void
    (obj:Config):void
}

const push:Push = (config) => {
    if(typeof config === "string") console.log(config)
    else {
        console.log(config.path, config.state)
    }
}

type Add3 = {
    (a:number, b:number) :number,
    (a:number, b:number, c:number): number
}

const add4:Add3 = (a, b, c?:number) => {
    if(c) return a+b+c
    return a + b
}

type SuperPrint = {
    <T>(arr:T[]):T
}

const superPrint: SuperPrint = (arr) => arr[0]

const A = superPrint([1, 2, 3, 4])
const B = superPrint([true, false])
const C = superPrint(["a", "b", "c"])
const D = superPrint([1, 2, true, false])
