import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import {Container} from "@mui/material";
import ExpPaper from "../Components/experiences/ExpPaper";
import spaceCube from "../static/space-cube.png"
import crofts from "../static/crofts-accountants.png";
import banana from "../static/fast-banana.png";

const exps = [
    {
        instLogo: spaceCube,
        institute: "SpaceCube",
        position: 'Research Assistant',
        duration: 'February 2020 - March 2020',
        location: 'Ottawa, ON, Canada',
        description:
            `
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Nullam sollicitudin quam et elit aliquam, vitae vehicula ipsum sodales.
- Sed sagittis eros quis turpis pellentesque, sed facilisis tellus facilisis.
- Phasellus rutrum elit a pulvinar viverra.
            `,
    },
    {
        instLogo: crofts,
        institute: "Croft's Accountants",
        position: 'Software Engineer',
        duration: 'November 2019 - January 2020',
        location: 'Toronto, ON, Canada',
        description:
            `
- Nam sollicitudin leo et tincidunt tincidunt.
- Phasellus at eros venenatis, dapibus augue et, elementum tellus.
- In ut eros sed felis accumsan sodales.
- Sed viverra est quis quam sodales dignissim.
            `,
    },
    {
        instLogo: banana,
        institute: "Fast Banana",
        position: 'Software Engineer Intern',
        duration: 'March 2019 - August 2019',
        location: 'Toronto, ON, Canada',
        description:
            `
- Donec maximus dolor ut porttitor laoreet.
- Ut suscipit dui eu quam ullamcorper, sed consequat neque aliquet.
- Duis non augue eleifend, imperdiet tellus a, aliquet nibh.
            `,
    }
]

export default function ExperiencePage() {
    return (
        <Container maxWidth={'xl'} sx={{mt: '2em', mb: '4em'}}>
            <Stack
                spacing={2}
                divider={<Divider/>}
                maxWidth={'md'}
            >
                {exps.map((exp) => (
                    <ExpPaper
                        instLogo={exp.instLogo}
                        inst={exp.institute}
                        pos={exp.position}
                        duration={exp.duration}
                        loc={exp.location}
                        desc={exp.description}
                        key={exp.institute}
                    />
                ))}
            </Stack>
        </Container>
    );
}