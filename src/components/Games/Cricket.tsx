import { useState } from "react"
import { Button, Center, Space } from "@mantine/core"

import { CricketScoreObject, CricketPlayerObject, KeyOfScore } from "./CricketTypes"
import CricketTable from "./CricketTable"

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
        scores: { ...initialScoreObject },
    },
    {
        name: "Player 2",
        scores: { ...initialScoreObject },
    },
]

function Cricket() {
    const [points, setPoints] = useState(structuredClone(initialScores))

    const onScoreClick = (key: KeyOfScore, player: number) => {
        const newPoints = [...points]
        newPoints[player].scores[key] < 3
            ? newPoints[player].scores[key]++
            : (newPoints[player].scores[key] = 0)
        setPoints(newPoints)
    }

    return (
        <Center style={{ flexDirection: "column" }}>
            <CricketTable scores={points} onClick={onScoreClick} />
            <Space h="xl" />
            <Button onClick={() => setPoints(structuredClone(initialScores))}>Restart</Button>
        </Center>
    )
}

export default Cricket
