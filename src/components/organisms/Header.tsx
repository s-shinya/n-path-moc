import React, { VFC } from "react";
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header:VFC = () => {

    return (
        <Flex
            as="header"
            position="fixed" 
            zIndex={100000}
            w="100%"
            h={16}
            align="center"
            justify="space-between"
            px={4}
            bg="white"
            borderBottomWidth="1px"
            borderBottomColor="gray.300"
        >
            <Flex align="center" mr={4}>
                {/* <Box mr={4}>
                    <HamburgerIcon boxSize={8}/>
                </Box> */}
                <Heading as="h1" size="lg" fontWeight="bold" letterSpacing={"tighter"}>
                LOGO
                </Heading>
            </Flex>
        </Flex>
    );
};

export default Header;
