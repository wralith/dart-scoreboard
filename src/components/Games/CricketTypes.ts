export interface CricketScoreObject {
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