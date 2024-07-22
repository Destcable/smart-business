import { TreeItemLayout } from "@fluentui/react-components";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface SidebarWrapperItemTypeLeafProps { 
    name: any,
    link: string,
    styles: any
}

export const SidebarWrapperItemTypeLeaf: FC<SidebarWrapperItemTypeLeafProps> = ({ 
    name,
    link,
    styles
}) => (
    <NavLink to={link} className={styles.link}>
        <TreeItemLayout>{name}</TreeItemLayout>
    </NavLink>
)