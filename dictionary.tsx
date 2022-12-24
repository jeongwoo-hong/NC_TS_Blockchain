type Words = {
    [key:string]: string
}

class Dict {
    private words:Words
    constructor() {
        this.words = {}
    }

    add(word:Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    word(term:string){
        return this.words[term]
    }
    static hello() {
        return "hello"
    }
}

class Word {
    constructor(
        public readonly term:string,
        public def:string
    ) {}
}

const kimchi = new Word("kimchi", "korean food")

const dict = new Dict()

dict.add(kimchi)