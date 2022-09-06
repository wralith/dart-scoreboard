import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"

import AppLayout from "./components/UI/AppLayout"
import HomeView from "./views/HomeView"
import CricketView from "./views/CricketView"

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light")
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
                <NotificationsProvider>
                    <AppLayout>
                        <Routes>
                            <Route path="/" element={<HomeView />} />
                            <Route path="/cricket" element={<CricketView />} />
                        </Routes>
                    </AppLayout>
                </NotificationsProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default App
