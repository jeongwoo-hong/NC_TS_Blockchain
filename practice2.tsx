interface User3 {
    firstName:string,
    lastName:string,
    sayHi(name:string):string
    fullName():string
}

class Player3 implements User3 {
    constructor(
        public firstName:string,
        public lastName:string
    ) {}
        fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
        sayHi(name: string){
            return `Hello ${name}. my name is ${this.fullName()}`
        }
}