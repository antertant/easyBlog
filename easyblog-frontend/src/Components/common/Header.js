import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {Link as RouterLink, matchPath, useLocation} from 'react-router-dom';
import {CssBaseline, Tabs} from "@mui/material";
import styled from "@emotion/styled";
import {Tab, Box} from "@mui/material";

const sections = [
    { title: 'Home', url: '/'},
    { title: 'About', url: '/about'},
    { title: 'Education', url: '/education'},
    { title: 'Experience', url: '/experience'},
    { title: 'Projects', url: '/project'},
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
    const routeMatch = useRouteMatch(
        ['/', '/about', '/education', '/experience', '/project']
    )
    const currentTab = routeMatch?.pattern?.path;

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'flex-start', overflowX: 'auto' }}
            >
                <Tabs
                    value={currentTab}
                    aria-label={"styled tabs"}
                    textColor={"primary"}
                    indicatorColor={"primary"}
                >
                    {sections.map((section) => (
                        <Tab
                            label={section.title}
                            component={RouterLink}
                            to={section.url}
                            value={section.url}
                        >
                            {section.title}
                        </Tab>
                    ))}
                </Tabs>
            </Toolbar>
        </React.Fragment>
    );
}

export default Header;