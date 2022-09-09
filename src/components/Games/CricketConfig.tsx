import { FormEvent, SetStateAction, useState } from "react"
import { Modal, Button, Group, Input, Space, Select } from "@mantine/core"

export interface Config {
    player1Name: string
    player2Name: string
    buttonType: "transparent" | "subtle" | "filled" | "light" | "outline" | "default" | "gradient"| undefined
}

interface Props {
    setConfig: React.Dispatch<SetStateAction<Config>>
}

function CricketConfig({ setConfig }: Props) {
    const [opened, setOpened] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newConfig: Config = {
            player1Name: (e.target as any).player1Name.value,
            player2Name: (e.target as any).player2Name.value,
            buttonType: (e.target as any).buttonType.value || "default",
        }
        setConfig(newConfig)
    }

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Configure"
                centered
                transition="fade"
                transitionDuration={600}
                transitionTimingFunction="ease"
            >
                <form onSubmit={handleSubmit}>
                    <Input.Wrapper id="player1Name" label="Player 1 Name">
                        <Input id="player1Name" placeholder="..." />
                    </Input.Wrapper>
                    <Input.Wrapper id="player2Name" label="Player 2 Name">
                        <Input id="player2Name" placeholder="..." />
                    </Input.Wrapper>
                    <Select
                        name="buttonType"
                        label="Button Type"
                        placeholder="Pick one"
                        data={[
                            { value: "default", label: "Default" },
                            { value: "transparent", label: "Transparent" },
                            { value: "subtle", label: "Subtle" },
                            { value: "filled", label: "Filled" },
                            { value: "outline", label: "Outline" },
                            { value: "light", label: "Light" },
                        ]}
                    />
                    <Space h="lg" />
                    <Button type="submit">Set Config</Button>
                </form>
            </Modal>

            <Group position="center">
                <Button onClick={() => setOpened(true)}>Configure</Button>
            </Group>
        </>
    )
}

export default CricketConfig
