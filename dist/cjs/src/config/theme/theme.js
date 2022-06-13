'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@mui/material/styles');
var themeTypography = require('./themeTypography.js');
var themePalette = require('./themePalette.js');
var themeComponents = require('./themeComponents.js');

// Theme merger:
const extendDefaultTheme = (themeOptions) => {
    const baseTheme = styles.createTheme(Object.assign(Object.assign({}, themeOptions), { palette: themePalette.createPaletteTheme(themeOptions === null || themeOptions === void 0 ? void 0 : themeOptions.palette), typography: themeTypography.createTypographyTheme(typeof (themeOptions === null || themeOptions === void 0 ? void 0 : themeOptions.typography) === "function"
            ? themeOptions.typography(styles.createTheme({ palette: themeOptions === null || themeOptions === void 0 ? void 0 : themeOptions.palette }).palette)
            : themeOptions === null || themeOptions === void 0 ? void 0 : themeOptions.typography) }));
    return styles.createTheme({
        components: themeComponents.createComponentsTheme(baseTheme),
    }, baseTheme);
};
// Default Mojito themes:
const MOJITO_LIGHT_THEME = extendDefaultTheme();
const MOJITO_DARK_THEME = extendDefaultTheme({ palette: { mode: "dark" } });

exports.MOJITO_DARK_THEME = MOJITO_DARK_THEME;
exports.MOJITO_LIGHT_THEME = MOJITO_LIGHT_THEME;
exports.extendDefaultTheme = extendDefaultTheme;
//# sourceMappingURL=theme.js.map
