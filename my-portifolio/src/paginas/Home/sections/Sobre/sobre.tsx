import { Card, CardActionArea, CardContent, CardMedia, Container, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';
import img_Icon_chapeu from "../../../../assets/img/chapéu-de-formatura-60.png";


const Sobre = () => {

    const SobreStyle = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        color: theme.palette.primary.contrastText
    }))
    const ImgStyle = styled("img")(() => ({
        width: "32%"
    }))



    return (
        <>
            <SobreStyle>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography textAlign="center" variant="h4" padding="20px">Sobre mim</Typography>

                            <Grid container display="flex" justifyContent="center" spacing={4}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <Grid alignItems="center" display="flex" justifyContent="center" padding="20px">
                                                <ImgStyle src={img_Icon_chapeu} />
                                            </Grid>

                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Formação Técnica
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    Desenvolvimento de Sistemas
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    SENAI "Nami Jafet" - Mogi das Cruzes/SP
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    06/2022 - 12/2023
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <Grid alignItems="center" display="flex" justifyContent="center" padding="20px">
                                                <ImgStyle src={img_Icon_chapeu} />
                                            </Grid>

                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Técnologo
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    Análise e Desenvolvimento de Sistemas
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    UMC - Mogi das Cruzes/SP
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    02/2024 - 12/2025
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>

                            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam excepturi nulla alias quasi natus ipsam, libero blanditiis consequuntur quam perferendis optio magnam magni, officiis nostrum ad assumenda odio architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias modi debitis laboriosam, neque dolores sunt ad impedit culpa ea architecto nesciunt quo, officia saepe, libero error odit odio molestiae? Sapiente!</Typography>
                            <hr />
                            <Grid container display="flex" justifyContent="center" spacing={4}>
                                <Typography textAlign="center" variant="h4" padding="20px" display="flex" justifyContent="center">Habilidades</Typography>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
            </SobreStyle>
        </>
    )

}

export default Sobre
