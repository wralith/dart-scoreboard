import { Center, Space, Text, Title } from "@mantine/core"
import { Link } from "react-router-dom"

function HomeView() {
    return (
        <Center style={{ flexDirection: "column" }}>
            <Title order={1}>Dart Scoreboard</Title>
            <Space h="lg" />
            <Text>Please choose game from the menu or <Link to="/cricket">click</Link> for cricket!</Text>
        </Center>
    )
}

export default HomeView
