import {
    CardHeader,
    Card as CardFluentUI
} from '@fluentui/react-components'
import React, { FC } from 'react'
import { useStyles } from './styles/Card.styles';
import { CardTitle } from './components/CardTitle';
import { CardDescription } from './components/CardDescription';

interface CardProps { 
    title: string,
    description: string
}

export const Card: FC<CardProps> = ({ 
    title, 
    description 
}) => {
    const classes = useStyles();

    const onClick = React.useCallback(() => console.log('Interactive!'), []);

    return <CardFluentUI className={classes.card} onClick={onClick}>
        <CardHeader
            header={<CardTitle>{title}</CardTitle>}
            description={
                <CardDescription classes={classes}>
                    {description}
                </CardDescription>
            }
        />
    </CardFluentUI>
};