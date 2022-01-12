import divergenceImg from "../tempResources/divergence.jpg";
import pixClockImg from "../tempResources/pixClock.png";
import searchImg from "../tempResources/searchEngine.gif";
import PrjCard from "../Components/projects/PrjCard";
import Grid from "@mui/material/Grid";

const projects = [
    {
        image: divergenceImg,
        title: 'Divergence Meter',
        description: `
        Maecenas eget nisl quis sapien euismod convallis nec sed diam. Curabitur vitae 
        vulputate quam, eget molestie dolor. Phasellus iaculis nunc id ex interdum, in 
        blandit ante tempor. Aenean lobortis eros id magna convallis posuere. Curabitur 
        at sagittis nisi. Vivamus id pellentesque lectus. Aliquam erat volutpat. Curabitur 
        eros justo, tristique ac leo eu, ullamcorper tempus risus. Integer varius ex risus, 
        id sodales lacus efficitur quis.`,
        postUrl: "#",
        gitUrl: "#",
    },
    {
        image: pixClockImg,
        title: 'Pixel Clock',
        description: `
        Maecenas eget nisl quis sapien euismod convallis nec sed diam. Curabitur vitae 
        vulputate quam, eget molestie dolor. Phasellus iaculis nunc id ex interdum, in 
        blandit ante tempor. Aenean lobortis eros id magna convallis posuere. Curabitur 
        at sagittis nisi. Vivamus id pellentesque lectus. Aliquam erat volutpat. Curabitur 
        eros justo, tristique ac leo eu, ullamcorper tempus risus. Integer varius ex risus, 
        id sodales lacus efficitur quis.`,
        postUrl: "#",
        gitUrl: "https://github.com/antertant/PIXCLOCK-ASM-DOS",
    },
    {
        image: searchImg,
        title: 'Full-text Search Engine',
        description: `
        Maecenas eget nisl quis sapien euismod convallis nec sed diam. Curabitur vitae 
        vulputate quam, eget molestie dolor. Phasellus iaculis nunc id ex interdum, in 
        blandit ante tempor. Aenean lobortis eros id magna convallis posuere. Curabitur 
        at sagittis nisi. Vivamus id pellentesque lectus. Aliquam erat volutpat. Curabitur 
        eros justo, tristique ac leo eu, ullamcorper tempus risus. Integer varius ex risus, 
        id sodales lacus efficitur quis.`,
        postUrl: "#",
        gitUrl: "https://github.com/antertant/LightSearch25",
    }
]

export default function ProjectPage() {
    return (
        <Grid container spacing={4} sx={{mt: '1em', mb: '4em'}}>
            {projects.map((project) => (
                <Grid item sm={6} key={project.title}>
                    <PrjCard
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        postUrl={project.postUrl}
                        gitUrl={project.gitUrl}
                    />
                </Grid>
            ))}
        </Grid>
    );
}