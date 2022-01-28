import {
    Button,
    Card, CardActions,
    CardContent, CardHeader,
    Container,
    Dialog, DialogActions,
    DialogTitle,
    FormGroup,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import Markdown from "../../common/Markdown";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

function createArticle(id, title, content, abstract) {
    return {
        id: id,
        articleTitle: title,
        articleContent: content,
        articleAbstract: abstract,
        articlePostTime: Date.now(),
    };
}

export default function Editor(props) {
    const {id, content, abstract, title} = props;

    const [vContent, setContent] = useState(content);
    const [vAbstract, setAbstract] = useState(abstract);
    const [vTitle, setTitle] = useState(title);
    const [img, setImg] = useState([]);
    const [imgName, setImgName] = useState("");

    const [alert, setAlert] = useState(false);

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleAbstract = (event) => {
        setAbstract(event.target.value);
    }

    const handleContent = (event) => {
        setContent(event.target.value);
    }

    const handleButton = () => {
        setAlert(true);
    }

    const handleClose = () => {
        setAlert(false);
    }

    const handleUpload = (event) => {
        setImg(event.target.files[0]);
    }

    const handleImgSubmit = () => {
        const formData = new FormData();
        formData.append(
            "myImage",
            img,
            img.name
        );
        (async ()=>{
            const response = await fetch("/api/uploadImg",{
                method:'POST',
                // headers:{
                'Content-Type':'multipart/form-data',
                // },
                body: formData,
            });
            // const body = await JSON.stringify(response);
            const body = await response.text();
            console.log(body);
            setImgName(body);
        })();
    }

    function handleSubmit(){
        const article = createArticle(id, vTitle, vContent, vAbstract);
        (async()=>{
            const response = await fetch("/api/blogPost/add",{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(article)
            })
            const body = await response.json();
            console.log(body);
        })();
        setAlert(false);
    }

    return (
        <Box>
            <Container sx={{my: 10, width: '80%'}}>
                <TextField
                    error={vTitle.length < 6}
                    fullWidth
                    margin={"normal"}
                    label={"Title"}
                    value={vTitle}
                    onChange={handleTitle}
                />
                <TextField
                    error={vAbstract.length === 0}
                    fullWidth
                    multiline
                    rows={6}
                    margin={"normal"}
                    label={"Abstract"}
                    value={vAbstract}
                    onChange={handleAbstract}
                />
                <Card>
                    <CardContent>
                        Upload Image Here
                        {imgName.length > 0 ? (
                            <div>
                                Image Name: {imgName}
                            </div>
                        ) : (
                            <div/>
                        )}
                    </CardContent>
                    <CardActions>
                        <Container sx={{mb: 2}}>
                            <div>
                                <input type={"file"} id={"img"}
                                       accept={"image/png,image/jpg,image/jpeg"}
                                       onChange={handleUpload}/>
                            </div>
                            <button style={{marginTop: '1em'}} onClick={handleImgSubmit}>
                                Submit
                            </button>
                        </Container>
                    </CardActions>
                </Card>
                <TextField
                    error={vContent.length === 0}
                    fullWidth
                    multiline
                    rows={30}
                    margin={"normal"}
                    label={"Content"}
                    value={vContent}
                    onChange={handleContent}
                />
                <Button variant={"contained"} onClick={handleButton}>
                    Submit
                </Button>

                <Dialog
                    open={alert}
                    onClose={handleClose}
                >
                    <DialogTitle>
                        Are you sure to submit?
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmit}>Confirm</Button>
                    </DialogActions>
                </Dialog>
            </Container>
            <Divider/>
            <Container>
                <Typography variant={'h4'} color={'primary'}>
                    Preview
                </Typography>

                <Card sx={{my: 2}}>
                    <CardContent>
                        <Markdown>
                            {vAbstract}
                        </Markdown>
                    </CardContent>
                </Card>

                <Card sx={{my: 2}}>
                    <CardContent>
                        <Markdown>
                            {vContent}
                        </Markdown>
                    </CardContent>
                </Card>
            </Container>
        </Box>

    );
}