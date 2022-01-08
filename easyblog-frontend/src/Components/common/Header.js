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
import {useState} from "react";

const sections = [
    { title: 'Home', url: '/home'},
    { title: 'About', url: '/about'},
    { title: 'Education', url: '/education'},
    { title: 'Experience', url: '/experience'},
    { title: 'Projects', url: '/project'},
];

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className={"MuiTabs-indicatorSPan"}/>}}
        />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    }
});

const StyledTab = styled((props) => <Tab disableRipple {...props}/>)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: '#23343e',
        '&.Mui-selected': {
            color: '#354955',
        },
        '&&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

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
        ['/home', '/about', '/education', '/experience', '/project']
    )
    const currentTab = routeMatch?.pattern?.path;

    return (
        <React.Fragment>
            <CssBaseline/>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="left"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    Haocheng Wu
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