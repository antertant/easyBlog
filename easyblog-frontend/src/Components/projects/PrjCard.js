import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    Container,
    Divider,
    ListItem,
    Stack,
    Typography
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import {useState} from "react";
import {List} from "@mui/icons-material";
import * as React from "react";

export default function PrjCard(props) {
    const {image, title, description, tags, postUrl, gitUrl} = props;

    const [gitButtonDisable, setGitButtonDisable] = useState(true);
    const [postButtonDisable, setPostButtonDisable] = useState(true);
    const [firstLoad, setFirstLoad] = useState(true);

    if (firstLoad) {
        if (gitUrl.length > 1) setGitButtonDisable(false);
        if (postUrl.length > 1) setPostButtonDisable(false);
        setFirstLoad(false);
    }

    return (
        <Card>
            <CardMedia component={'img'} src={image}/>
            <CardContent>
                <Typography
                    component={'h1'}
                    color={"primary"}
                    sx={{
                        fontWeight: 600,
                        fontSize: 32
                    }}
                    aria-label={"project title"}
                >
                    {title}
                </Typography>

                <Typography variant={'body1'} aria-label={"project description"}>
                    {description}
                </Typography>
            </CardContent>

            <CardActions sx={{mx: '0.5em', mb: '0.5em'}}>
                <Button
                    disabled={gitButtonDisable}
                    href={gitUrl}
                    target={'_blank'}
                    variant={"contained"}
                    startIcon={<GitHubIcon/>}
                    color={"primary"}
                    sx={{
                        mx: '0.5em'
                    }}
                >
                    Github
                </Button>
                <Button
                    disabled={postButtonDisable}
                    href={postUrl}
                    target={'_blank'}
                    variant={"contained"}
                    startIcon={<ArticleIcon/>}
                    color={"primary"}
                    sx={{
                        mx: '0.5em'
                    }}
                >
                    Article
                </Button>
            </CardActions>

            <Box sx={{my: 1}} aria-label={"project tags"}>
                <Container sx={{marginLeft: 'auto'}}>
                    Tags:
                    {tags.sort().map((tag) => (
                        <Chip
                            key={title + '-' + tag}
                            variant={'outlined'}
                            color={'primary'}
                            label={tag}
                            sx={{
                                mx: 0.3,
                                my: 0.2
                            }}
                        />
                    ))}
                </Container>
            </Box>
        </Card>
    )
}