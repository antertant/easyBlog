import {Link as RouterLink} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import PropTypes from "prop-types";
import {Link, Container, Typography} from "@mui/material";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const styles = makeStyles(theme => ({
    link: {
        color: '#3874ac',
        textDecoration: 'none',
        fontWeight: 600,
        fontFamily: 'Roboto',
        "&:hover": {
            color: '#38ac4b',
        },
    },
    date: {
        color: '#5684ad',
    }
}));

const PostTitle = styled(Link)({
    textDecoration: 'none',
    color: '#3874ac',
});

export default function MainPost(props) {

    const {articleId, title, abstract, date} = props;

    const classes = styles();
    const postDate = new Date(date);

    return (
        <Container key={'post-' + articleId}>
            <Typography component={"div"} variant={"h6"} gutterBottom>
                <RouterLink  to={'/post/' + articleId} className={classes.link}>
                    {title}
                </RouterLink>
            </Typography>
            <Typography
                component={"div"}
                variant={"subtitle2"}
                className={classes.date}
                mb={2}
                gutterBottom
            >
                Post on: {postDate.toString()}
            </Typography>
            <Typography component={"div"} variant={"body1"} gutterBottom>
                {abstract}
            </Typography>
            <Divider light />
        </Container>
    );

}

MainPost.propTypes = {
    articleId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};