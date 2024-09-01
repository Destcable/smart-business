import { Tree } from "@fluentui/react-components";
import { useStyles } from "../styles/sidebar.styles";
import { SidebarWrapperItemTypeLeaf } from "./SidebarWrapperItemTypeLeaf";
import { SidebarItemTypeBranch } from "./SidebarItemTypeBranch";
import { SidebarItemTypeBranchWrapper } from "./SidebarItemTypeBranchWrapper";

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
                if (item.type === "branch") return <SidebarItemTypeBranchWrapper name={item.name}>
                    {item.children?.map((childrenItem: any, index: number) =>
                        <SidebarItemTypeBranch key={index}
                            name={item.name} childrenLink={childrenItem.link}
                            styles={styles} childrenName={childrenItem.name}
                        />
                    )
                    }
                </SidebarItemTypeBranchWrapper>
            })}
        </Tree>
    </div>
}