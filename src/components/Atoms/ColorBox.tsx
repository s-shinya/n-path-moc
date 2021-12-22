import { VFC } from "react";
import { Box } from '@chakra-ui/react';

type Props = {
    bg: 'blue' | 'green' | 'red';
}
const ColorBox:VFC<Props> = (props) => {
    const {bg} = props;

    let bgColor:string = '';
    switch(bg){
        case 'blue':
            bgColor = 'cyan.400'
            break;
        case 'green':
            bgColor = 'green.400'
            break;
        case 'red':
            bgColor = 'red.400'
            break;
    }

    return (
        <Box 
            boxSize={4} 
            borderRadius={2}
            bg={bgColor}
        ></Box>
    )
}

export default ColorBox