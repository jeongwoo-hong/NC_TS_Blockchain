type PlayerA = {
    name:string
}

type PlayerAA = PlayerA & {
    lastName:string
}

const playerA: PlayerAA ={
    name:"nico",
    lastName:"xxx"
}

///

interface PlayerB {
    name:string
}

interface PlayerBB extends PlayerB {
    lastName:string
}

interface PlayerBB {
    health:number
}

const playerB : PlayerBB = {
    name:"nico",
    lastName: "xxx",
    health:10
}