import { Box, List, ListItem, Typography } from "@mui/material"

export const HomePage = (): JSX.Element => {
    return (<Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
        <Typography variant='h6'>TODO:</Typography>
        <List sx={{ mb: 4 }}>
            <ListItem>1. List users using only MUI Components. (Display only avatar and user name)</ListItem>
            <ListItem>2. On user click: Open a MUI drawer with user details.</ListItem>
            <ListItem>3. In the drawer add a button that redirects to a new page where you can see the full details of an user.</ListItem>
        </List>

        <Typography variant='subtitle1'>Mandatory MUI Components to be used:</Typography>
        <List>
            <ListItem><a href='https://mui.com/material-ui/react-avatar/'>MUI Avatar</a></ListItem>
            <ListItem><a href='https://mui.com/material-ui/react-drawer/'>MUI Drawer</a></ListItem>
        </List>
    </Box>);
}