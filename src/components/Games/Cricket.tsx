import { useEffect, useState } from "react"
import { Button, Center, Group, Space, Switch } from "@mantine/core"

import { KeyOfScore } from "./CricketTypes"
import CricketTable from "./CricketTable"
import { initialScores } from "./CricketObjects"
import CricketConfig, { Config } from "./CricketConfig"

const initialConfig: Config = {
    player1Name: "Player 1",
    player2Name: "Player 2",
    buttonType: "default"
}

function Cricket() {
    const [isPlus, setIsPlus] = useState(false)
    const [points, setPoints] = useState(structuredClone(initialScores(isPlus)))
    const [config, setConfig] = useState(initialConfig)

    useEffect(() => {
        setPoints(structuredClone(initialScores(isPlus)))
    }, [isPlus])

    const onScoreClick = (key: KeyOfScore, player: number) => {
        const newPoints = [...points]
        newPoints[player].scores[key] < 3
            ? newPoints[player].scores[key]++
            : (newPoints[player].scores[key] = 0)
        setPoints(newPoints)
    }

    return (
        <>
            <Center style={{ flexDirection: "column" }}>
                <CricketTable scores={points} onClick={onScoreClick} isPlus={isPlus} config={config} />
                <Space h="xl" />
                <Group>
                    <Button onClick={() => setPoints(structuredClone(initialScores(isPlus)))}>
                        Restart
                    </Button>
                    <CricketConfig setConfig={setConfig} />
                    <Switch
                        checked={isPlus}
                        onChange={() => setIsPlus(!isPlus)}
                        size="xl"
                        offLabel="Plus"
                        onLabel="Plus"
                    />
                </Group>
            </Center>
        </>
    )
}

export default Cricket
