import React, { VFC } from "react";
import {Input} from "@chakra-ui/react";

type Props = {
    type?: 'text' | 'number' | 'password' | 'date' ;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    placeholder?:string
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
}
const CInput:VFC<Props> = (props) => {
    const {type, size, placeholder, onChange} = props;
    return (
        <Input
            type={(type) ? type : 'text'}
            size={(size) ? size : 'md'}
            placeholder={(placeholder) ? placeholder : ''}
            onChange={(e)=> {if(onChange)onChange(e)}}
        />
    )
}

export default CInput