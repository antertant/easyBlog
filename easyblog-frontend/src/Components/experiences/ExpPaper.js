import {Link, Card, Divider, Paper, Typography} from "@mui/material";
import ReactMarkdown from "markdown-to-jsx";
import {makeStyles} from "@mui/styles";
import CardMedia from "@mui/material/CardMedia";

const styles = makeStyles((theme) => ({
   logo: {
       height: '25%',
       width: '25%',
       margin: '1em 2em',
       border: 'none',
       [theme.breakpoints.down('sm')]: {
           height: '35%',
           width: '35%',
           border: 'none',
           display: 'table',
           margin: '1em auto',
       },
   }
}));

export default function ExpPaper(props) {
    const {instLogo, inst, pos, duration, loc, desc} = props;
    const classes = styles();

    return (
        <Paper elevation={3}>
            <Card variant={"outlined"} className={classes.logo}>
                <a href={"https://github.com/pigment/fake-logos"} target={'_blank'}>
                    <CardMedia component={"img"} src={instLogo}/>
                </a>
            </Card>
            <Typography
                component={'h2'}
                sx={{
                    fontSize: 24,
                    fontWeight: 700,
                    ml: '1em'
                }}
            >
                {inst}
            </Typography>
            <Divider/>
            <Typography
                component={'h3'}
                sx={{
                    fontSize: 18,
                    fontWeight: 500,
                    ml: '1.3em'
                }}
                gutterBottom
            >
                {pos}
            </Typography>
            <Typography
                component={'h4'}
                sx={{
                    opacity: 0.7,
                    ml: '1.4em'
                }}
            >
                {duration}
            </Typography>
            <Typography
                component={'h4'}
                sx={{
                    opacity: 0.7,
                    ml: '1.4em'
                }}
            >
                {loc}
            </Typography>
            <ReactMarkdown>
                {desc}
            </ReactMarkdown>
        </Paper>
    )
}