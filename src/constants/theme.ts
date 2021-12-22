import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'


const styles = {
    global: (props:any) => ({
        body: {
            bg: mode('#E2E8F0', '#E2E8F0')(props),//backgroundColor
        }
    })
    }

    const theme = extendTheme({ styles })
    export default theme
