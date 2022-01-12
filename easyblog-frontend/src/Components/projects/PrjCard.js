import {Card, CardContent, Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export default function PrjCard(props) {
    const {image, title, description} = props;

    return (
        <Card>
            <CardMedia component={'img'} src={image}/>
            <CardContent>
                <Typography
                    component={'h1'}
                    sx={{
                        fontWeight: 600,
                        fontSize: 32
                    }}
                >
                    {title}
                </Typography>
                <Typography variant={'body1'}>
                    {description}
                </Typography>
            </CardContent>

        </Card>
    )
}