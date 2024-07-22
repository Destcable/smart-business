import { Tree, TreeItem, TreeItemLayout } from "@fluentui/react-components";
import { useStyles } from "../styles/sidebar.styles";
import { SidebarWrapperItemTypeLeaf } from "./SidebarWrapperItemTypeLeaf";
import { SidebarWrapperItemTypeBranch } from "./SidebarWrapperItemTypeBranch";


interface SidebarProps {
    sidebarData: any
}

export const Sidebar: React.FC<SidebarProps> = ({
    sidebarData,
}) => {
    const styles = useStyles();

    return <div className={styles.sidebar}>
        <Tree aria-label="Default">
            {sidebarData.map((item: any, index: number) => {
                if (item.type === "leaf") return <SidebarWrapperItemTypeLeaf
                    key={index} name={item.name}
                    link={item.link} styles={styles}
                />
                if (item.type === "branch") return <TreeItem itemType="branch">
                    <TreeItemLayout>{item.name}</TreeItemLayout>
                    <Tree>
                        {item.children?.map((childrenItem: any) =>
                            <SidebarWrapperItemTypeBranch
                                name={item.name} childrenLink={childrenItem.link}
                                styles={styles} childrenName={childrenItem.name}
                            />
                        )
                        }
                    </Tree>
                </TreeItem>
            })}
        </Tree>
    </div>
}