import {Card, Container, Divider, Paper, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import CardMedia from "@mui/material/CardMedia";

const styles = makeStyles((theme) => ({
    logo: {
        height: '128px',
        width: '128px',
        margin: 'auto',
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

export default function EduPaper(props) {
    const {image, name, duration, location, degree} = props;
    const classes = styles();

    return (
        <Paper elevation={3}>
            <Container sx={{my: '2em'}}>
                <Card variant={"outlined"} className={classes.logo}>
                    <a href={"https://github.com/pigment/fake-logos"} target={'_blank'}>
                        <CardMedia component={"img"} src={image}/>
                    </a>
                </Card>
                <Typography
                    component={'h2'}
                    sx={{
                        fontSize: 24,
                        fontWeight: 700,
                        textAlign: 'center'
                    }}
                >
                    {name}
                </Typography>
                <Typography
                    component={'h4'}
                    sx={{
                        opacity: 0.7,
                        textAlign: 'center'
                    }}
                >
                    {duration}
                </Typography>
                <Typography
                    component={'h4'}
                    sx={{
                        opacity: 0.7,
                        textAlign: 'center'
                    }}
                >
                    {location}
                </Typography>
                <Typography
                    component={'h4'}
                    sx={{
                        fontWeight: 600,
                        textAlign: 'center'
                    }}
                >
                    {degree}
                </Typography>
            </Container>
        </Paper>
    )
}