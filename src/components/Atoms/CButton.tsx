import { ReactNode, VFC } from "react";
import {
    Button
} from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    color?: string;
    size?: "xs" | "sm" | "md" | "lg";
    onClick: () => void;
}
const CButton:VFC<Props> = (props) => {
    const {children, color, size, onClick} = props;
    return (
        <Button
            colorScheme={(color) ? color : "blue"}
            size={(size) ? size : "md"}
            _focus={{focus:"none"}}
            onClick={onClick}
        >{children}</Button>
    )
}

export default CButton