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
                fontWeight: 'normal'
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

const colors = {
    brand: {
        primary: '#63b3ed',
        secondary: '#3182ce',
        black: '#11111B',
    },
    button: {
        100: '#68a3db',
        200: '#4c93d5',
        300: '#63b3ed',
        400: '#3f8ad1',
        500: '#3182ce',
        600: '#2e79c0',
        700: '#2a71b3',
        800: '#2768a5',
        900: '#245f97',
    }
}

const theme = extendTheme({
    colors,
    fonts,
    breakpoints,
    styles,

})

export default theme;
