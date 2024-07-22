import { Text } from "@fluentui/react-components";
import { FC } from "react";

interface CardTitleProps { 
    children: any
}

export const CardTitle: FC<CardTitleProps> = ({ 
    children 
}) => <Text weight='semibold'>{children}</Text>