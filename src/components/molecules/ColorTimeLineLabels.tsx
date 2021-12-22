import { VFC } from "react";
import { Flex, Text } from '@chakra-ui/react';
import ColorBox from "../Atoms/ColorBox";

type Props = {
}
const ColorTimeLineLabels:VFC<Props> = () => {
    return (
        <Flex>
            <Flex justifyContent='center' alignItems='center'>
                <ColorBox bg='blue'/>
                <Text ml={1}>工事受注案件</Text>
            </Flex>
            <Flex justifyContent='center' alignItems='center' ml={4}>
                <ColorBox bg='green'/>
                <Text ml={1}>工事受注活動案件</Text>
            </Flex>
            <Flex justifyContent='center' alignItems='center' ml={4}>
                <ColorBox bg='red'/>
                <Text ml={1}>工事完了案件</Text>
            </Flex>
        </Flex>
    )
}

export default ColorTimeLineLabels