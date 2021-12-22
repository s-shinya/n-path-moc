import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { VFC } from "react";
import CButton from "../Atoms/CButton";
import { Box } from '@chakra-ui/react';

type Props = {
    onClickPrev: () => void;
    onClickNext: () => void;
}
const PageTurnButtons:VFC<Props> = (props) => {
    const {onClickPrev, onClickNext} = props;
    return (
        <Box>
            <CButton
                borderRightRadius={0}
                borderLeftRadius={4}
                onClick={onClickPrev}
            ><ChevronLeftIcon boxSize={6}/></CButton>
            <CButton
                borderRightRadius={4}
                borderLeftRadius={0}
                onClick={onClickNext}
            ><ChevronRightIcon boxSize={6}/></CButton>
        </Box>
    )
}

export default PageTurnButtons