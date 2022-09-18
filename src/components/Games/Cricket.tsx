import { useEffect, useState } from "react"
import { Button, Center, Group, Space, Switch } from "@mantine/core"
import { showNotification } from "@mantine/notifications"

import { KeyOfScore } from "./CricketTypes"
import CricketTable from "./CricketTable"
import { initialPlayerScores, initialScores } from "./CricketObjects"
import CricketConfig, { Config } from "./CricketConfig"
import { Fireworks } from "@fireworks-js/react"
import { IconCheck } from "@tabler/icons"

const initialConfig: Config = {
    player1Name: "Player 1",
    player2Name: "Player 2",
    buttonType: "default",
}

function Cricket() {
    const [isPlus, setIsPlus] = useState(false)
    const [points, setPoints] = useState(structuredClone(initialScores(isPlus)))
    const [config, setConfig] = useState(initialConfig)
    const [showFireworks, setShowFireworks] = useState(false)

    const isPlayer1Win = Object.values(points[0].scores).every((score) => score === 3)
    const isPlayer2Win = Object.values(points[1].scores).every((score) => score === 3)
    const resetScores = (obj: any) =>
        Object.keys(obj[0].scores).forEach((key) => {
            obj[0].scores[key] = 0
            obj[1].scores[key] = 0
        })

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

    useEffect(() => {
        const newPoints = [...points]
        if (isPlayer1Win || isPlayer2Win) {
            if (isPlayer1Win) {
                newPoints[0].legs++
            }
            if (isPlayer2Win) {
                newPoints[1].legs++
            }
            const winnerName = isPlayer1Win ? config.player1Name : config.player2Name

            showNotification({
                icon: <IconCheck size={18} />,
                color: "teal",
                title: `${winnerName} won a leg!`,
                message: `Congratulations ${winnerName}!!!`,
            })

            setShowFireworks(true)
            setTimeout(() => {
                setShowFireworks(false)
            }, 5000)

            resetScores(newPoints)
        }
    }, [points])

    return (
        <>
            {showFireworks && (
                <Fireworks style={{ position: "fixed", width: "100%", height: "80%" }} />
            )}
            <Center style={{ flexDirection: "column" }}>
                <CricketTable
                    scores={points}
                    onClick={onScoreClick}
                    isPlus={isPlus}
                    config={config}
                />
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
