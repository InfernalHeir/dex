import { extendTheme } from "@chakra-ui/react"

// 2. Extend the theme with new layer styles
const theme = extendTheme({
    fonts: {
        body: " 'Open Sans', sans-serif",
        heading: " 'Open Sans', sans-serif",
        mono: " 'Open Sans', sans-serif",
      },
})

export default theme;