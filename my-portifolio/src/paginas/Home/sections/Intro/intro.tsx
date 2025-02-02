import { Container, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';
// import img_Avatar from "../../../../assets/img/thalita.jpeg";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import theme from "../../../../theme";

const Intro = () => {

    const IntroStyle = styled("div")(() => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        color: theme.palette.secondary.dark
    }))
    // const ImgStyle = styled("img")(() => ({
    //     width: "30%",
    //     borderRadius: "20%"
    // }))
    const ButtonStyle = styled("button")(() => ({
        appearance: "none",
        backgroundColor: "transparent"
    }))

    return (
        <>
            <IntroStyle>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        {/* <Grid item xs={12} md={4}>
                            <ImgStyle src={img_Avatar} />
                        </Grid> */}
                        <Grid item xs={12} md={12}>
                            <Typography textAlign="center" variant="h1">Thalita de Lima</Typography>
                            <Typography  variant="h2" textAlign="center">Desenvolvimento de Sistemas</Typography>

                            <Grid container display="flex" justifyContent="center">
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <ButtonStyle>
                                        <GitHubIcon />
                                        GitHub
                                    </ButtonStyle>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <button>
                                        <ArrowDownwardIcon />
                                        Download CV
                                    </button>
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
