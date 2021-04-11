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
        primary: '#5893d4',
        secondary: '#1f3c88',
        tertiary: '#070d59',
        background: '#dfe9f3',
        black: '#11111B'
    },
    button: {
        500: '#5893d4',
        600: '#4a8ad1',
        700: '#3d82cd',
    },
    buttonTwo: {
        // 50: '#9cbfe5',
        // 100: '#8eb6e2',
        // 200: '#81adde',
        // 300: '#73a4db',
        // 400: '#669cd7',
        500: '#0c1698',
        600: '#091278',
        700: '#070d59',
        // 800: '#3379c6',
        // 900: '#3071b9',
    },
}

const theme = extendTheme({
    colors,
    fonts,
    breakpoints,
    styles,

})

export default theme;
