export const Text = {
    baseStyle: ({ colorMode }) => {
        return {
            color: colorMode === 'dark' ? 'red.800' : 'blue.900',
            fontWeight: 800,
            fontFamily: 'Kalnia Glaze',
        };
    },
}