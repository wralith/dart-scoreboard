import { ActionIcon, Center, Table } from "@mantine/core"
import CricketSingle from "./CricketSingle"
import { CricketPlayerObject, KeyOfScore } from "./CricketTypes"

// const scores = [
//     { name: 15, player1: 0, player2: 0 },
//     { name: 16, player1: 1, player2: 3 },
//     { name: 17, player1: 0, player2: 2 },
//     { name: 18, player1: 0, player2: 0 },
//     { name: 19, player1: 3, player2: 0 },
//     { name: 20, player1: 2, player2: 1 },
//     { name: "Bullseye", player1: 2, player2: 1 },
// ]

interface Props {
    scores: CricketPlayerObject[]
    onClick: (key: KeyOfScore, player: number) => void
}

function CricketTable({ scores, onClick }: Props) {
    const scoresArray = [
        { name: 15, player1: scores[0].scores[15], player2: scores[1].scores[15] },
        { name: 16, player1: scores[0].scores[16], player2: scores[1].scores[16] },
        { name: 17, player1: scores[0].scores[17], player2: scores[1].scores[17] },
        { name: 18, player1: scores[0].scores[18], player2: scores[1].scores[18] },
        { name: 19, player1: scores[0].scores[19], player2: scores[1].scores[19] },
        { name: 20, player1: scores[0].scores[20], player2: scores[1].scores[20] },
        { name: 21, player1: scores[0].scores[21], player2: scores[1].scores[21] },
    ]

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
            <td>{score.name == 21 ? "Bullseye" : score.name}</td>
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
        <Table striped style={{ textAlign: "center" }} verticalSpacing="md">
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
