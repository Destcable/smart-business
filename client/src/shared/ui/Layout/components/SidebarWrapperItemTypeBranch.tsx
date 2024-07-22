import { TreeItem, TreeItemLayout } from "@fluentui/react-components";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface SidebarWrapperItemTypeBranchProps {
    name: string,
    childrenLink: string,
    childrenName: string,
    styles: any
}

export const SidebarWrapperItemTypeBranch: FC<SidebarWrapperItemTypeBranchProps> = ({
    childrenLink,
    childrenName,
    styles
}) => (
    <TreeItem itemType="leaf">
        <NavLink to={childrenLink} className={styles.link}>
            <TreeItemLayout>{childrenName}</TreeItemLayout>
        </NavLink>
    </TreeItem>
)