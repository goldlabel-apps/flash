import * as React from 'react'
import {
    IconButton,
    Menu,
    MenuList,
    MenuItem,
    ListItemText,
    ListItemIcon,
    Typography,
} from '@mui/material'
import { Icon } from '../'

export default function Flash() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleMenuSelect = (item: string) => {
        

        switch(item) {
            case "github":
                // console.log("open repo", item)
                window.open("https://github.com/listingslab/flash", "_blank")
                break;
            case "skipintro":
                    // console.log("open repo", item)
                    const confirm = window.confirm("Are you sure you want to skip the intro? It's quite good?")
                    if (confirm) window.alert("ok")
                    break;
            default:
              // code block
          }

        closeFlashMenu()
        return true
    }

    const openFlashMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const closeFlashMenu = () => {
        setAnchorEl(null)
    }

    return (
        <React.Fragment>
                <IconButton
                    color="primary"
                    id="flash-menu-button"
                    aria-controls={open ? 'flash-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={openFlashMenu}
                >
                    <Icon icon="menu"/>
                </IconButton>

            <Menu
                id="admin-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={closeFlashMenu}
                MenuListProps={{
                    'aria-labelledby': 'admin-button',
                }}
            >
                <MenuList sx={{ width: 200, maxWidth: '100%' }}>
                    <MenuItem onClick={() => {
                        handleMenuSelect("github")
                    }}>
                        <ListItemIcon>
                            <Icon icon="github" />
                        </ListItemIcon>
                        <ListItemText>Github</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            ⌘G
                        </Typography>
                    </MenuItem>


                    <MenuItem onClick={() => {
                        handleMenuSelect("skipintro")
                    }}>
                        <ListItemIcon>
                            <Icon icon="skipintro" />
                        </ListItemIcon>
                        <ListItemText>Skip Intro</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            ⌘S
                        </Typography>
                    </MenuItem>

                </MenuList>
            </Menu>
        </React.Fragment>
    )
}
