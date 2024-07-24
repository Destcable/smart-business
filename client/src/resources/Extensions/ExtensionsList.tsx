import resolveAsset from "@entities/project/lib/resolveAsset";
import { Button, Caption1, Card, CardHeader, CardPreview, makeStyles, Text, tokens } from "@fluentui/react-components";
import { ArrowDownloadRegular } from "@fluentui/react-icons";

const useStyles = makeStyles({
    main: {
        gap: "36px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
    },

    card: {
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

const ExtensionsList = () => { 
    const styles = useStyles();

    return( 
        <Card className={styles.card} orientation="horizontal">
        <CardPreview className={styles.horizontalCardImage}>
            <img
                className={styles.horizontalCardImage}
                src={resolveAsset("app_logo.svg")}
                alt="App Name Document"
            />
        </CardPreview>

        <CardHeader
            header={<Text weight="semibold">Портал документации</Text>}
            description={
                <Caption1 className={styles.caption}>Destcable | Developer</Caption1>
            }
            action={
                <Button
                    appearance="primary"
                    icon={<ArrowDownloadRegular />}
                    aria-label="More options"
                >
                    Установить
                </Button>
            }
        />
    </Card>
    )
};

export default ExtensionsList;