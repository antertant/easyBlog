import {Avatar, Container, Grid, Tab, Tabs, useMediaQuery} from "@mui/material";
import avatar from "../tempResources/avatar.jpg"
import * as React from "react"
import {makeStyles} from "@mui/styles";
import AboutMe from "../Components/about/AboutMe";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Education from "../Components/about/education/Education";

const styles = makeStyles((theme) => ({
    container: {
        margin: '4em 0 4em 1em',
        [theme.breakpoints.down('sm')]: {
            margin: '4em 0 4em 0',
        },
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function AboutPage() {

    const classes = styles();
    const [value, setValue] = React.useState(0);
    const matches = useMediaQuery('(min-width: 600px)');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <React.Fragment>
            {matches ? (
                <Grid
                    container
                    maxWidth={'xl'}
                    className={classes.container}
                >
                    <Grid item lg={2.5} md={3.4} sm={4.5} xs={12}>
                        <Avatar
                            component={"div"}
                            alt={"Haocheng Wu"}
                            src={avatar}
                            sx={{ width: 192, height: 192, margin: 'auto'}}
                        />
                        <Tabs
                            component={"div"}
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{
                                borderRight: 1,
                                borderColor: 'divider',
                                maxWidth: 150,
                                margin: '2em auto 0 auto',
                            }}
                        >
                            <Tab label="About Me" {...a11yProps(0)} />
                            <Tab label="Education" {...a11yProps(1)} />
                        </Tabs>
                    </Grid>
                    <Grid item lg={9.5} md={8.6} sm={7.5} xs={12}>
                        <TabPanel value={value} index={0}>
                            <AboutMe/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Education/>
                        </TabPanel>
                    </Grid>
                </Grid>
            ) : (
                <Grid
                    container
                    maxWidth={'xl'}
                    className={classes.container}
                >
                    <Grid item container justifyContent="center">
                        <Grid item>
                            <Avatar
                                component={"div"}
                                alt={"Haocheng Wu"}
                                src={avatar}
                                sx={{ width: 192, height: 192, margin: 'auto'}}
                            />
                        </Grid>
                        <Grid item>
                            <Tabs
                                component={"div"}
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                sx={{
                                    borderRight: 1,
                                    borderColor: 'divider',
                                    maxWidth: 150,
                                    margin: '2em auto 0 auto',
                                }}
                            >
                                <Tab label="About Me" {...a11yProps(0)} />
                                <Tab label="Education" {...a11yProps(1)} />
                            </Tabs>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <TabPanel value={value} index={0}>
                            <AboutMe/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Education/>
                        </TabPanel>
                    </Grid>
                </Grid>
            )}
        </React.Fragment>
    );
}