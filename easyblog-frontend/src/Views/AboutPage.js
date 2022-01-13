import {Avatar, CircularProgress, Container} from "@mui/material";
import {useState} from "react";
import Markdown from "../Components/common/Markdown";
import avatar from "../static/avatar.jpg"
import * as React from "react"
import Box from "@mui/material/Box";

export default function AboutPage() {

    const [about, setAbout] = useState({content: ""});
    const [firstLoad, setFirstLoad] = useState(false);
    let isLoading = true;

    async function fetchAbout() {
        let response = await fetch("/api/aboutMe");
        let content = await response.json();
        setAbout(content)
    }

    if (about.content.length > 0)  isLoading = false;

    if (!firstLoad) {
        fetchAbout();
        setFirstLoad(true);
    }

    return (
        <React.Fragment>
            {isLoading ? (
                <CircularProgress
                    sx={{
                        position: 'absolute',
                        top: '45%',
                        left: '45%',
                        opacity: 0.7,
                    }}
                />
            ) : (
                <Container maxWidth={'xl'} sx={{mt: '2em', ml: '1em'}}>
                    <Avatar
                        alt={"Haocheng Wu"}
                        src={avatar}
                        sx={{ width: 192, height: 192}}
                    />
                    <Box maxWidth={'md'} sx={{mt: '2em', md: '4em'}}>
                        <Markdown>
                            {about.content}
                        </Markdown>
                    </Box>
                </Container>
            )}
        </React.Fragment>
    );
}