import { Caption1 } from "@fluentui/react-components";
import { FC } from "react";

interface CardDescriptionProps { 
    classes: any,
    children: any
}

export const CardDescription: FC<CardDescriptionProps> = ({
    classes, 
    children 
}) => <Caption1 className={classes.caption}>{children}</Caption1>