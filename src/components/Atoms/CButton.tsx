import { ReactNode, VFC } from "react";
import {
    Button, CSSObject, 
} from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    colorScheme?: string;
    color?: string;
    backgroundColor?: string;
    _hover?: CSSObject;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    borderLeftRadius?: number; 
    borderRightRadius?: number; 
    onClick: () => void;
}
const CButton:VFC<Props> = (props) => {
    const {children, colorScheme, backgroundColor, color, _hover ,size, borderLeftRadius, borderRightRadius, onClick} = props;
    return (
        <Button
            colorScheme={(colorScheme) ? colorScheme : "blue"}
            backgroundColor={(backgroundColor)}
            color={color}
            _hover={_hover}
            size={(size) ? size : "md"}
            borderLeftRadius={(borderLeftRadius) && borderLeftRadius}
            borderRightRadius={(borderRightRadius) && borderRightRadius}
            _focus={{focus:"none"}}
            onClick={onClick}
        >{children}</Button>
    )
}

export default CButton