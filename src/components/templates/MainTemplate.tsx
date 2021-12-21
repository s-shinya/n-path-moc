import React, { ReactNode, VFC } from "react";
import {
    Box,
} from "@chakra-ui/react";
import Header from "../organisms/Header";

type Props = {
    children: ReactNode
}
const MainTemplate:VFC<Props> = (props) => {
    const {children} = props;

    return (
        <>
            <Header />
            <Box pt={16}>
                {children}
            </Box>
        </>
    );
};

export default MainTemplate;
