export interface CricketScoreObject {
    1?: number
    2?: number
    3?: number
    12?: number
    13?: number
    14?: number
    15: number
    16: number
    17: number
    18: number
    19: number
    20: number
    21: number
}

export interface CricketPlayerObject {
    name: string
    scores: CricketScoreObject
}

export type KeyOfScore = keyof CricketScoreObject
