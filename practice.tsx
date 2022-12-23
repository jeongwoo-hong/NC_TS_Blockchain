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

