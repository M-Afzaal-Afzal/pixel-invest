import {extendTheme} from '@chakra-ui/react'
import {createBreakpoints} from '@chakra-ui/theme-tools'

const fonts = {
    heading: `'Inter', sans-serif`,
    text: 'Inter, sans-serif'
}
const styles = {
        global: {
            "html, body": {
                fontFamily: 'inter',
                color: "white",
            },
            a: {
                textDecoration: 'none',
            },
        },
    }

    const
breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
})

const theme = extendTheme({
    colors: {
        black: '#16161D',
    },
    fonts,
    breakpoints,
    styles
})

export default theme;
