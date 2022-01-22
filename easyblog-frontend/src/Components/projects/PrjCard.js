import {Button, Card, CardActions, CardContent, Chip, Collapse, IconButton, Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useState} from "react";
import * as React from "react";
import {styled} from "@mui/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function PrjCard(props) {
    const {image, title, description, postUrl, gitUrl, tags} = props;

    const [gitButtonDisable, setGitButtonDisable] = useState(true);
    const [postButtonDisable, setPostButtonDisable] = useState(true);
    const [expanded, setExpanded] = React.useState(true);
    const [firstLoad, setFirstLoad] = useState(true);

    if (firstLoad) {
        if (gitUrl.length > 1) setGitButtonDisable(false);
        if (postUrl.length > 1) setPostButtonDisable(false);
        setFirstLoad(false);
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
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
                >
                    {title}
                </Typography>
                <Collapse in={expanded} timeout={"auto"} unmountOnExit>
                    <Typography variant={'body1'}>
                        {description}
                    </Typography>
                </Collapse>
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
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label={"show more"}
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
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