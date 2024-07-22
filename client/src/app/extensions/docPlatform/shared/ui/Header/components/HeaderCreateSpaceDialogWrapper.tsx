import {
    Button, 
    Dialog,
    DialogActions, 
    DialogBody, 
    DialogContent, 
    DialogSurface, 
    DialogTitle, 
    DialogTrigger
} from "@fluentui/react-components"
import { FC } from "react"

interface HeaderCreateSpaceDialogWrapperProps { 
    children: any
}

export const HeaderCreateSpaceDialogWrapper: FC<HeaderCreateSpaceDialogWrapperProps> = ({ 
    children 
}) => {
    return <Dialog>
        <DialogTrigger disableButtonEnhancement>
            {children}
        </DialogTrigger>
        <DialogSurface>
            <DialogBody>
                <DialogTitle>Настройки пространства</DialogTitle>
                <DialogContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    exercitationem cumque repellendus eaque est dolor eius expedita
                    nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates
                    in natus iure cumque eaque?
                </DialogContent>
                <DialogActions>
                    <Button appearance="primary">Создать</Button>
                </DialogActions>
            </DialogBody>
        </DialogSurface>
    </Dialog>

}