abstract class User3 {
    constructor(
        protected firstName:string,
        protected lastName:string
    ) {}
    abstract sayHi(name:string):string
    abstract fullName():string
}

class Player3 extends User3 {
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string) {
        return `Hello ${name}. my name is ${this.fullName}`
    }
}