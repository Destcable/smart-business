import { FC } from 'react'
import { useStyles } from './styles/CardGrid.styles'

interface CardGridProps {
    children: any
}

export const CardGrid: FC<CardGridProps> = ({ 
    children 
}) => { 
    const classes = useStyles()

    return <div className={classes.cardGrid}>
        {children}
    </div>
}