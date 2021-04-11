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
        100: '#BEE3F8',
        200: '#90CDF4',
        300: '#63B3ED',
        400: '#4299E1',
        500: '#3182CE',
        600: '#2B6CB0',
        700: '#2C5282',
        800: '#2A4365',
        900: '#1A365D',
    }
}

const theme = extendTheme({
    colors,
    fonts,
    breakpoints,
    styles,

})

export default theme;
