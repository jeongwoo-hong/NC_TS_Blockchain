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

const playerB : PlayerBB = {
    name:"nico"
}