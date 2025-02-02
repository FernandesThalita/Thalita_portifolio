import { styled } from "@mui/material"
import { ReactNode } from "react"
interface ButtonStyleProp{
    children: ReactNode
}

const ButtonStyle: React.FC<ButtonStyleProp> = ({children}) => {

    const ButtonStyle = styled("button")(({theme}) => ({
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        outline: "none",
        justifyContent: "center",
        padding: "9px 20px 8px",
        transition: "0.4s",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "4px",
        gap: "15px",
        borderStyle: "none",

        color: theme.palette.secondary.contrastText,
        '&:hover':{
            opacity: ".75"
        }
    }))

    return (
        <>
            <ButtonStyle>{children}</ButtonStyle>
        </>
    )
}

export default ButtonStyle
