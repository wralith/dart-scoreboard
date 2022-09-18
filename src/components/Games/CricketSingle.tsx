import { IconCheck, IconCircleDotted, IconFocus, IconTarget, IconTargetOff } from "@tabler/icons"

interface Props {
    score: number
}

const iconSize = 28

function CricketSingle({ score }: Props) {
    if (score === 1) {
        return <IconFocus size={iconSize} color="blue" />
    }
    if (score === 2) {
        return <IconTarget size={iconSize + 6} color="orange" />
    }
    if (score === 3) {
        return <IconTargetOff size={iconSize} color="red" />
    }
    return <IconCircleDotted size={iconSize} color="green" />

}

export default CricketSingle
