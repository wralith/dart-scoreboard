import { CricketPlayerObject, CricketScoreObject } from "./CricketTypes"

export const initialCricketScoreObject: CricketScoreObject = {
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
}

export const initialCricketPlusScoreObject: CricketScoreObject = {
    1: 0,
    2: 0,
    3: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
}

export const initialScores: (isPlus?: boolean) => CricketPlayerObject[] = (isPlus = false) => [
    {
        name: "Player 1",
        scores: { ...(!isPlus ? initialCricketScoreObject : initialCricketPlusScoreObject) },
    },
    {
        name: "Player 2",
        scores: { ...(!isPlus ? initialCricketScoreObject : initialCricketPlusScoreObject) },
    },
]
