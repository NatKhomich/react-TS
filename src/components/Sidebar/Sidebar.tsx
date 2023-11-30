import {Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import React from "react";
import {NavLink} from "react-router-dom";

type SidebarProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
        <div>
            <Drawer anchor="left" open={isOpen} onClose={onClose} >
                <List style={{width: '300px'}}>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/">

                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/clock">
                            <ListItemText primary="Clock" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/switch">
                            <ListItemText primary="Switch" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/rating">
                            <ListItemText primary="Rating" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/select">
                            <ListItemText primary="Select" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/pagination">
                            <ListItemText primary="Pagination" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/file">
                            <ListItemText primary="InputFile" />
                        </ListItemButton>
                    </ListItem>

                </List>
            </Drawer>
        </div>
    );
};


