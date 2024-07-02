import {
    makeStyles,
    Button,
    Caption1,
    Text,
    tokens,
    Card,
    CardPreview,
    CardHeader,
} from "@fluentui/react-components";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";

const resolveAsset = (asset: string) => {
    const ASSET_URL =
        "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

    return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
    main: {
        gap: "36px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
    },

    card: {
        width: "360px",
        maxWidth: "100%",
        height: "fit-content",
    },

    section: {
        width: "fit-content",
    },
    horizontalCardImage: {
        width: "64px",
        height: "64px",
    },

    headerImage: {
        borderRadius: "4px",
        maxWidth: "44px",
        maxHeight: "44px",
    },

    caption: {
        color: tokens.colorNeutralForeground3,
    },

    text: { margin: "0" },
});

const ProjectCard = () => {
    const styles = useStyles();
    
    return (
        <section className={styles.section}>
            <Card className={styles.card} orientation="horizontal">
                <CardPreview className={styles.horizontalCardImage}>
                    <img
                        className={styles.horizontalCardImage}
                        src={resolveAsset("app_logo.svg")}
                        alt="App Name Document"
                    />
                </CardPreview>

                <CardHeader
                    header={<Text weight="semibold">App Name</Text>}
                    description={
                        <Caption1 className={styles.caption}>Developer</Caption1>
                    }
                    action={
                        <Button
                            appearance="transparent"
                            icon={<MoreHorizontal20Regular />}
                            aria-label="More options"
                        />
                    }
                />
            </Card>
        </section>
    )
};

export default ProjectCard;