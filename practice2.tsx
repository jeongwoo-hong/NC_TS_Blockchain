abstract class User {
    constructor(
        protected firstName:string,
        protected lastName:string
    ) {}
    abstract sayHi(name:string):string
    abstract fullName():string
}

class Player extends User {
    
}