import { FC } from "react";

interface HeaderActionsWrapperProps { 
    classes: any,
    children: any
}
export const HeaderActionsWrapper: FC<HeaderActionsWrapperProps> = ({ 
    classes, 
    children 
}) => (
    <div className={classes.headerActions}>
        {children}
    </div>
);