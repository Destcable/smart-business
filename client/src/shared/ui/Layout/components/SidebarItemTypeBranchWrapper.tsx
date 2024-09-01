import { Tree, TreeItem, TreeItemLayout } from "@fluentui/react-components";
import { FC } from "react";

interface SidebarItemTypeBranchWrapperProps { 
    name: string
    children: any
}

export const SidebarItemTypeBranchWrapper: FC<SidebarItemTypeBranchWrapperProps> = ({
    name,
    children
}) =>  <TreeItem itemType="branch">
    <TreeItemLayout>{name}</TreeItemLayout>
    <Tree>
        {children}
    </Tree>
</TreeItem> 