import * as React from 'react';
import Grid from '@mui/material/Grid';
import {useState} from "react";

import MainPost from "./MainPost";
import {CircularProgress} from "@mui/material";

function Main() {

    const [abstracts, setAbstracts] = useState([]);
    const [firstLoad, setLoad] = useState(true);
    let isLoading = true;

    async function fetchAbstracts() {
        let response = await fetch("/api/blogPost/getAllAbstracts");
        let list = await response.json();
        setAbstracts(list);
    }

    if (firstLoad) {
        fetchAbstracts();
        setLoad(false);
    }

    if (abstracts.length > 0)  isLoading = false;

    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                },
            }}
        >
            {isLoading ? (
                <CircularProgress
                    sx={{
                        position: 'absolute',
                        top: '10%',
                        left: '30%'
                    }}
                />
            ) : (
                abstracts.map((abstract) => (
                        <MainPost title={abstract.articleTitle}
                                  abstract={abstract.articleAbstract}
                                  articleId={abstract.id}
                                  date={abstract.articlePostTime}
                        />
                    ))
            )}
        </Grid>
    );
}

export default Main;