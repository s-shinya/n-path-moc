import { ReactNode, VFC } from "react";
import {
    Button
} from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    color?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    borderLeftRadius?: number; 
    borderRightRadius?: number; 
    onClick: () => void;
}
const CButton:VFC<Props> = (props) => {
    const {children, color, size, borderLeftRadius, borderRightRadius, onClick} = props;
    return (
        <Button
            colorScheme={(color) ? color : "blue"}
            size={(size) ? size : "md"}
            borderLeftRadius={(borderLeftRadius) && borderLeftRadius}
            borderRightRadius={(borderRightRadius) && borderRightRadius}
            _focus={{focus:"none"}}
            onClick={onClick}
        >{children}</Button>
    )
}

export default CButton