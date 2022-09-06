import { Button, Center, Grid, Space } from "@mantine/core"

import { CricketScoreObject, CricketPlayerObject, KeyOfScore } from "./CricketTypes"
import CricketTable from "./CricketTable"
import { useState } from "react"

const initialScoreObject: CricketScoreObject = {
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
}

const initialScores: CricketPlayerObject[] = [
    {
        name: "Player 1",
        scores: initialScoreObject,
    },
    {
        name: "Player 2",
        scores: initialScoreObject,
    },
]

function Cricket() {
    const [points, setPoints] = useState(initialScores)

    const onScoreClick = (key: KeyOfScore, player: number) => {
        console.log(key)
        console.log(player)
    }

    return (
        <Center style={{ flexDirection: "column" }}>
            <CricketTable scores={points} onClick={onScoreClick} />
            <Space h="xl" />
            <Button onClick={() => setPoints(initialScores)}>Restart</Button>
        </Center>
    )
}

export default Cricket
