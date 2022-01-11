import {Avatar, CircularProgress, Container, CssBaseline} from "@mui/material";
import aboutMe from "../tempResources/aboutMe.md";
import {useState} from "react";
import ReactMarkdown from "markdown-to-jsx";
import avatar from "../tempResources/avatar.jpg"
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
                <Container maxWidth={'xl'} sx={{mt: '2em'}}>
                    <Avatar
                        alt={"Haocheng Wu"}
                        src={avatar}
                        sx={{ width: 192, height: 192}}
                    />
                    <Box maxWidth={'md'}>
                        <ReactMarkdown>
                            {about.content}
                        </ReactMarkdown>
                    </Box>
                </Container>
            )}
        </React.Fragment>
    );
}