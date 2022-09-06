import { IconCheck, IconCircle0, IconCircle1, IconCircle2 } from "@tabler/icons"

interface Props {
    score: number
}

const iconSize = 28

function CricketSingle({ score }: Props) {
    if (score === 1) {
        return <IconCircle1 size={iconSize} />
    }
    if (score === 2) {
        return <IconCircle2 size={iconSize} />
    }
    if (score === 3) {
        return <IconCheck size={iconSize + 6} color="green" />
    }

    return <IconCircle0 size={iconSize} />
}

export default CricketSingle
