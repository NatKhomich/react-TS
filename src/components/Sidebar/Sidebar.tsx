import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";

type SidebarProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
        <Drawer anchor="left" open={isOpen} onClose={onClose}>
            <Box sx={{ width: 250 }} role="presentation" onClick={onClose} onKeyDown={onClose}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/*{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};