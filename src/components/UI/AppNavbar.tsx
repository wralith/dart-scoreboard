import { Box, NavLink } from "@mantine/core"
import { IconBrandGithub, IconHome, IconTarget } from "@tabler/icons"
import { Link, useLocation } from "react-router-dom"

function AppNavbar() {
    const location = useLocation()
    return (
        <Box style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            <Box>
                <NavLink
                    label="Home"
                    icon={<IconHome size={20} />}
                    component={Link}
                    to="/"
                    active={location.pathname === "/"}
                />
                <NavLink
                    label="Cricket"
                    icon={<IconTarget size={20} />}
                    component={Link}
                    to="/cricket"
                    active={location.pathname === "/cricket"}
                />
            </Box>
            <NavLink
                label="Github"
                icon={<IconBrandGithub size={20} />}
                description="Source Code"
                component="a"
                href=""
            />
        </Box>
    )
}

export default AppNavbar
