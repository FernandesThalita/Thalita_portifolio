import { Container, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';
 import img_Avatar from "../../../../assets/img/gif.gif";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ButtonStyle from "../../../../componentes/ButtonStyle/ButtonStyle";


const Intro = () => {

    const IntroStyle = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        color: theme.palette.primary.contrastText
    }))
    const ImgStyle = styled("img")(() => ({
        width: "80%",
        borderRadius: "30%",
    }))
  

    return (
        <>
            <IntroStyle>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={5} display="flex" justifyContent="center">
                            <ImgStyle src={img_Avatar} />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography  textAlign="center" variant="h1">Thalita de Lima</Typography>
                            <Typography  margin="10px 0px 25px 0px" variant="h2" textAlign="center" >Desenvolvimento de Sistemas</Typography>

                            <Grid container display="flex" justifyContent="center" spacing={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <ButtonStyle >
                                        <GitHubIcon />
                                        <Typography><a href="https://github.com/FernandesThalita">GitHub</a></Typography>
                                    </ButtonStyle>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <ButtonStyle>
                                        <ArrowDownwardIcon />
                                        <Typography>Download CV</Typography>
                                    </ButtonStyle>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
            </IntroStyle>
        </>
    )
}

export default Intro
