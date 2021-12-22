import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { VFC } from "react";
import CButton from "../Atoms/CButton";
import { Box } from '@chakra-ui/react';

type Props = {
    handlePrev: () => void;
    handleNext: () => void;
}
const PageTurnButtons:VFC<Props> = (props) => {
    const {handlePrev, handleNext} = props;
    return (
        <Box>
            <CButton
                borderRightRadius={0}
                borderLeftRadius={4}
                onClick={handlePrev}
            ><ChevronLeftIcon boxSize={6}/></CButton>
            <CButton
                borderRightRadius={4}
                borderLeftRadius={0}
                onClick={handleNext}
            ><ChevronRightIcon boxSize={6}/></CButton>
        </Box>
    )
}

export default PageTurnButtons