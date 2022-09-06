import {
    ActionIcon,
    Box,
    Center,
    Group,
    MediaQuery,
    Space,
    Title,
    useMantineColorScheme,
} from "@mantine/core"
import { IconMoonStars, IconSun, IconTarget } from "@tabler/icons"

function AppHeader() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    return (
        <Group position="apart" style={{ width: "100%" }}>
            <Center ml={5}>
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                    <IconTarget />
                </MediaQuery>
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                    <Space w="sm" />
                </MediaQuery>
                <Title order={3}>Dart Scoreboard</Title>
            </Center>
            <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                {colorScheme === "dark" ? <IconSun size={16} /> : <IconMoonStars size={16} />}
            </ActionIcon>
        </Group>
    )
}

export default AppHeader
