import {useParams} from "react-router-dom";
import {useState} from "react";
import Markdown from "../common/Markdown";
import {CircularProgress, Container} from "@mui/material";
import Box from "@mui/material/Box";

export default function Post() {
    const urlId = useParams();

    const [post, setPost] = useState({
        id: -1,
        articleAbstract: "",
        articleContent: "",
        articlePostTime: "",
        articleTitle: "",
    });
    const [firstLoad, setLoad] = useState(true);

    let isLoading = true;

    async function fetchPost() {
        let response = await fetch(`/api/blogPost/getById/${urlId.id}`);
        let content = await response.json();
        setPost(content);
    }

    if (firstLoad) {
        fetchPost();
        setLoad(false);
    }

    if (post.id != -1) {
        isLoading = false;
    }

    return (
        <Container maxWidth={"xl"} sx={{mt: '2em', md: '4em', ml: '1em'}}>
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
                <Box maxWidth={'md'}>
                    <Markdown>
                        {post.articleContent}
                    </Markdown>
                </Box>
            )}
        </Container>
    );
}