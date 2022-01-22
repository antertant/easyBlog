import Markdown from "../common/Markdown";
import Box from "@mui/material/Box";
import * as React from "react";
import {useState} from "react";
import {CircularProgress} from "@mui/material";

export default function AboutMe() {
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
                <Box maxWidth={'md'} sx={{mt: '2em', md: '4em'}}>
                    <Markdown>
                        {about.content}
                    </Markdown>
                </Box>
            )}
        </React.Fragment>
    );
}