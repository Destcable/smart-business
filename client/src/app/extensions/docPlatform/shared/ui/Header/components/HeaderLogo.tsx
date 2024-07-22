import { FC } from "react"

interface HeaderLogoProps { 
    image: any,
    classes: any
}

export const HeaderLogo: FC<HeaderLogoProps> = ({ image, classes }) => { 
    return <img 
        src={image} 
        className={classes.headerLogo}
        alt='icon' 
    />
}