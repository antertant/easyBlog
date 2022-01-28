import {useSearchParams} from "react-router-dom";
import {useState, Fragment} from "react";
import {CircularProgress, Container, Typography} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Editor from "./Editor";

export default function EditPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [article, setArticle] = useState(null);
    const [firstLoad, setLoad] = useState(true);
    const [isLoading, setLoading] = useState(true);
    const id = searchParams.get('articleId');

    async function fetchArticle() {
        let response = await fetch('/api/blogPost/getById/' + id);
        let data = await response.json();
        setArticle(data);
        setLoading(false);
    }

    if (firstLoad) {
        fetchArticle();
        setLoad(false);
    }

    return (
        <Fragment>
            {isLoading ? (
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                    <Box sx={{textAlign: 'center'}}>
                        <CircularProgress/>
                        <Typography color={'primary'} variant={'subtitle1'} sx={{mt: 2}}>
                            Loading...
                        </Typography>
                    </Box>
                </Box>
            ) : (
                <Editor
                    title={article.articleTitle}
                    abstract={article.articleAbstract}
                    content={article.articleContent}
                    id={article.id}
                />
            )}
        </Fragment>
    )
}