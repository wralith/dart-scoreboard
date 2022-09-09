import { IconCheck, IconFocus, IconTarget, IconTargetOff } from "@tabler/icons"

interface Props {
    score: number
}

const iconSize = 28

function CricketSingle({ score }: Props) {
    if (score === 1) {
        return <IconTarget size={iconSize}  color="orange" />
    }
    if (score === 2) {
        return <IconTargetOff size={iconSize} color="red" />
    }
    if (score === 3) {
        return <IconCheck size={iconSize + 6} color="green" />
    }

    return <IconFocus size={iconSize} color="blue" />
}

export default CricketSingle
