import { ActionIcon, Center, Table } from "@mantine/core"
import CricketSingle from "./CricketSingle"
import { CricketPlayerObject, KeyOfScore } from "./CricketTypes"

interface Props {
    scores: CricketPlayerObject[]
    onClick: (key: KeyOfScore, player: number) => void
    isPlus: boolean
}

const ScoreName = ( number: number) => {
    if (number === 21) return "Bullseye"
    if (number === 1) return "3D"
    if (number === 2) return "Double"
    if (number === 3) return "Triple"
}

function CricketTable({ scores, onClick, isPlus }: Props) {
    let scoresArray = []
    for (let i = isPlus ? 12 : 15; i <= 21; i++) {
        scoresArray.push({
            name: i,
            player1: scores[0].scores[i as KeyOfScore] || 0,
            player2: scores[1].scores[i as KeyOfScore] || 0,
        })
    }

    if (isPlus) {
        for (let i = 1; i <= 3; i++) {
            scoresArray.push({
                name: i,
                player1: scores[0].scores[i as KeyOfScore] || 0,
                player2: scores[1].scores[i as KeyOfScore] || 0,
            })
        }
    }

    const rows = scoresArray.map(score => (
        <tr key={score.name}>
            <td>
                <Center>
                    <ActionIcon
                        variant="light"
                        color="blue"
                        size="xl"
                        onClick={() => onClick(score.name as KeyOfScore, 0)}
                        key={score.name + 10}>
                        <CricketSingle score={score.player1} />
                    </ActionIcon>
                </Center>
            </td>
            <td>
                {ScoreName(score.name) || score.name}
            </td>
            <td>
                <Center>
                    <ActionIcon
                        variant="light"
                        color="blue"
                        size="xl"
                        onClick={() => onClick(score.name as KeyOfScore, 1)}
                        key={score.name + 20}>
                        <CricketSingle score={score.player2} />
                    </ActionIcon>
                </Center>
            </td>
        </tr>
    ))
    return (
        <Table striped style={{ textAlign: "center" }} verticalSpacing={isPlus ? 2 : "md"}>
            <thead>
                <tr>
                    <th style={{ textAlign: "center" }}>Player1</th>
                    <th style={{ textAlign: "center" }}>Goals</th>
                    <th style={{ textAlign: "center" }}>Player2</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    )
}

export default CricketTable
