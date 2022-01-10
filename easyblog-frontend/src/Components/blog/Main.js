import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import {useState} from "react";

import MainPost from "./MainPost";

function Main(props) {
    const { posts, title } = props;

    const [abstracts, setAbstracts] = useState([]);
    const [firstLoad, setLoad] = useState(true);

    async function fetchAbstracts() {
        let response = await fetch("/api/blogPost/getAllAbstracts");
        let list = await response.json();
        setAbstracts(list);
    }

    if (firstLoad) {
        fetchAbstracts();
        setLoad(false);
    }

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

            {abstracts.map((abstract) => (
                <MainPost title={abstract.articleTitle}
                          abstract={abstract.articleAbstract}
                          articleId={abstract.id}
                          date={abstract.articlePostTime}
                />
            ))}
        </Grid>
    );
}

Main.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
};

export default Main;