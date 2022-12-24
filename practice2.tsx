interface User3 {
    firstName:string,
    lastName:string,
    sayHi(name:string):string
    fullName():string
}

interface Human {
    health:number,
}

class Player3 implements User3, Human {
    constructor(
        public firstName:string,
        public lastName:string,
        public health:number
    ) {}
        fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
        sayHi(name: string){
            return `Hello ${name}. my name is ${this.fullName()}`
        }
}