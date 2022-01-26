import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import {Link as RouterLink, matchPath, useLocation} from 'react-router-dom';
import {Container, Divider, Tabs} from "@mui/material";
import styled from "@emotion/styled";
import {Tab, Box} from "@mui/material";

const sections = [
    { title: 'Home', url: '/'},
    { title: 'About', url: '/about'},
    { title: 'Experience', url: '/experience'},
    { title: 'Projects', url: '/project'},
    { title: 'Resume', url: '/resume'},
];

const TitleLink = styled(RouterLink)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 24,
    fontWeight: 500,
    textDecoration: 'none',
    color: '#000000',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    fontFamily: 'Roboto',
});

function useRouteMatch(patterns) {
    const {pathname} = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i];
        const possibleMatch = matchPath(pattern, pathname);
        if (possibleMatch != null) {
            return possibleMatch;
        }
    }
}

function Header() {
    const routeMatch = useRouteMatch(['/', '/about', '/experience', '/project', '/resume'])
    const currentTab = routeMatch?.pattern?.path;

    const [currUser, setCurrUser] = useState({
        name: "",
        avatar_url: "",
        authority: 0,
        id: -1
    });
    const [firstLoad, setFirstLoad] = useState(true);
    const [authed, setAuthed] = useState(false);
    const [avatarAnchorEl, setAvatarAnchorEl] = useState(null);
    const open = Boolean(avatarAnchorEl);
    const cookie = new Cookies();

    if (firstLoad) {
        const user = cookie.get('currUser', {doNotParse: false})
        if (typeof user !== "undefined") {
            setCurrUser(user);
            setAuthed(true);
        }
        setFirstLoad(false);
    }

    const handleClick = (event) => {
        setAvatarAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAvatarAnchorEl(null);
    }

    const handleSignOut = () => {
        cookie.remove('currUser');
        setAuthed(false);
        setCurrUser({
            name: "",
            avatar_url: "",
            authority: 0,
            id: -1
        });
    }

    return (
        <React.Fragment>
            <Container maxWidth={"xl"}>
                <Toolbar>
                    <Typography
                        component="h3"
                        variant="h5"
                        color="inherit"
                        align="left"
                        noWrap
                        sx={{ flex: 1 }}
                    >
                        <TitleLink to='/'>
                            EasyBlog
                        </TitleLink>
                    </Typography>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    {!authed ? (
                        <IconButton href={"https://github.com/login/oauth/authorize?client_id=59a8ae99c37a2786cd2b"}>
                            <GitHubIcon/>
                        </IconButton>
                    ) : (
                        <div>
                            <IconButton
                                id={"avatar-button"}
                                onClick={handleClick}
                            >
                                <Avatar src={currUser.avatar_url} sx={{width: 26, height: 26}} />
                            </IconButton>
                            <Menu
                                id={"avatar-menu"}
                                anchorEl={avatarAnchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </Container>
            <Divider light/>
            <Container maxWidth={"xl"}>
                <Toolbar
                    maxWidth="xl"
                    component="nav"
                    variant="dense"
                    sx={{ justifyContent: 'flex-start', overflowX: 'auto' }}
                >
                    <Tabs
                        value={currentTab}
                        variant={"scrollable"}
                        aria-label={"scrollable auto styled tabs"}
                        textColor={"primary"}
                        indicatorColor={"primary"}
                    >
                        {sections.map((section) => (
                            <Tab
                                label={section.title}
                                component={RouterLink}
                                to={section.url}
                                value={section.url}
                                key={section.title}
                            >
                                {section.title}
                            </Tab>
                        ))}
                    </Tabs>
                </Toolbar>
            </Container>
        </React.Fragment>
    );
}

export default Header;