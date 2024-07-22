import { Button } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";

export const HeaderCreateSpaceButton = ({ ...props }) => (
    <Button 
        appearance="subtle" 
        icon={<AddRegular />} 
        {...props}
    >
        Добавить пространство
    </Button>
)