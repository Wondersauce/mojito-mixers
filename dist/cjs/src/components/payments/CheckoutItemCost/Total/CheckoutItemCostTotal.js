'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@emotion/styled');
require('../../../../../node_modules/@emotion/react/dist/emotion-react.esm.js');
require('../../../../../node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js');
require('../../../../../node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js');
require('../../../../../node_modules/@mui/system/esm/borders.js');
require('prop-types');
require('../../../../../node_modules/@mui/utils/esm/elementAcceptingRef.js');
require('../../../../../node_modules/@mui/utils/esm/elementTypeAcceptingRef.js');
require('react-is');
require('../../../../../node_modules/@mui/utils/esm/ponyfillGlobal.js');
require('../../../../../node_modules/@mui/utils/esm/refType.js');
var React = require('react');
require('../../../../../node_modules/@mui/utils/esm/integerPropType.js');
require('../../../../../node_modules/@mui/system/esm/display.js');
require('../../../../../node_modules/@mui/system/esm/flexbox.js');
require('../../../../../node_modules/@mui/system/esm/grid.js');
require('../../../../../node_modules/@mui/system/esm/palette.js');
require('../../../../../node_modules/@mui/system/esm/positions.js');
require('../../../../../node_modules/@mui/system/esm/shadows.js');
require('../../../../../node_modules/@mui/system/esm/sizing.js');
require('../../../../../node_modules/@mui/system/esm/spacing.js');
require('../../../../../node_modules/@mui/system/esm/responsivePropType.js');
require('../../../../../node_modules/@mui/system/esm/typography.js');
require('../../../../../node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js');
require('../../../../../node_modules/@mui/system/esm/getThemeValue.js');
require('../../../../../node_modules/@mui/system/esm/Box/Box.js');
require('../../../../../node_modules/@mui/system/esm/useTheme.js');
require('react/jsx-runtime');
require('../../../../../node_modules/@mui/system/esm/createStyled.js');
require('../../../../../node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js');
require('../../../../../node_modules/@mui/private-theming/useTheme/ThemeContext.js');
require('../../../../../node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js');
require('../../../../../node_modules/@mui/system/esm/Container/createContainer.js');
require('../../../../../node_modules/@mui/system/esm/Container/Container.js');
require('../../../../../node_modules/@mui/system/esm/Container/containerClasses.js');
require('../../../../../node_modules/@mui/base/BadgeUnstyled/BadgeUnstyled.js');
require('../../../../../node_modules/@mui/base/BadgeUnstyled/badgeUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/ButtonUnstyled/ButtonUnstyled.js');
require('../../../../../node_modules/@mui/base/ButtonUnstyled/buttonUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js');
require('../../../../../node_modules/@mui/base/FormControlUnstyled/FormControlUnstyled.js');
require('../../../../../node_modules/@mui/base/FormControlUnstyled/FormControlUnstyledContext.js');
require('../../../../../node_modules/@mui/base/FormControlUnstyled/formControlUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/InputUnstyled/InputUnstyled.js');
require('../../../../../node_modules/@mui/base/InputUnstyled/inputUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/ListboxUnstyled/useListbox.types.js');
require('../../../../../node_modules/@mui/base/MenuUnstyled/MenuUnstyled.js');
require('../../../../../node_modules/@mui/base/MenuUnstyled/MenuUnstyledContext.js');
require('../../../../../node_modules/@mui/base/MenuUnstyled/menuUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/MenuItemUnstyled/MenuItemUnstyled.js');
require('../../../../../node_modules/@mui/base/MenuItemUnstyled/menuItemUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/ModalUnstyled/ModalUnstyled.js');
require('../../../../../node_modules/@mui/base/ModalUnstyled/modalUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/MultiSelectUnstyled/MultiSelectUnstyled.js');
require('../../../../../node_modules/@mui/base/NoSsr/NoSsr.js');
require('../../../../../node_modules/@mui/base/OptionGroupUnstyled/OptionGroupUnstyled.js');
require('../../../../../node_modules/@mui/base/OptionGroupUnstyled/optionGroupUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/OptionUnstyled/OptionUnstyled.js');
require('../../../../../node_modules/@mui/base/OptionUnstyled/optionUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/PopperUnstyled/PopperUnstyled.js');
require('../../../../../node_modules/@mui/base/Portal/Portal.js');
require('../../../../../node_modules/@mui/base/SelectUnstyled/SelectUnstyled.js');
require('../../../../../node_modules/@mui/base/SelectUnstyled/selectUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/SliderUnstyled/SliderUnstyled.js');
require('../../../../../node_modules/@mui/base/SliderUnstyled/SliderValueLabelUnstyled.js');
require('../../../../../node_modules/@mui/base/SliderUnstyled/sliderUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/SwitchUnstyled/SwitchUnstyled.js');
require('../../../../../node_modules/@mui/base/SwitchUnstyled/switchUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/TabPanelUnstyled/TabPanelUnstyled.js');
require('../../../../../node_modules/@mui/base/TabPanelUnstyled/tabPanelUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/TabsUnstyled/TabsUnstyled.js');
require('../../../../../node_modules/@mui/base/TabsUnstyled/TabsContext.js');
require('../../../../../node_modules/@mui/base/TabsUnstyled/tabsUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/TabsListUnstyled/TabsListUnstyled.js');
require('../../../../../node_modules/@mui/base/TabsListUnstyled/tabsListUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/TabUnstyled/TabUnstyled.js');
require('../../../../../node_modules/@mui/base/TabUnstyled/tabUnstyledClasses.js');
require('../../../../../node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js');
require('../../../../../node_modules/@mui/base/TrapFocus/TrapFocus.js');
require('../../../../../node_modules/@mui/material/styles/createPalette.js');
require('../../../../../node_modules/@mui/material/styles/shadows.js');
require('../../../../../node_modules/@mui/material/styles/defaultTheme.js');
require('../../../../../node_modules/@mui/material/styles/CssVarsProvider.js');
require('../../../../../node_modules/@mui/material/styles/experimental_extendTheme.js');
require('../../../../../node_modules/@mui/material/SvgIcon/SvgIcon.js');
require('../../../../../node_modules/@mui/material/SvgIcon/svgIconClasses.js');
require('../../../../../node_modules/@mui/material/Accordion/Accordion.js');
require('../../../../../node_modules/@mui/material/Accordion/accordionClasses.js');
require('../../../../../node_modules/@mui/material/AccordionActions/AccordionActions.js');
require('../../../../../node_modules/@mui/material/AccordionActions/accordionActionsClasses.js');
require('../../../../../node_modules/@mui/material/AccordionDetails/AccordionDetails.js');
require('../../../../../node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js');
require('../../../../../node_modules/@mui/material/AccordionSummary/AccordionSummary.js');
require('../../../../../node_modules/@mui/material/AccordionSummary/accordionSummaryClasses.js');
require('../../../../../node_modules/@mui/material/Alert/Alert.js');
require('../../../../../node_modules/@mui/material/Alert/alertClasses.js');
require('../../../../../node_modules/@mui/material/AlertTitle/AlertTitle.js');
require('../../../../../node_modules/@mui/material/AlertTitle/alertTitleClasses.js');
require('../../../../../node_modules/@mui/material/AppBar/AppBar.js');
require('../../../../../node_modules/@mui/material/AppBar/appBarClasses.js');
require('../../../../../node_modules/@mui/material/Autocomplete/Autocomplete.js');
require('../../../../../node_modules/@mui/material/Autocomplete/autocompleteClasses.js');
require('../../../../../node_modules/@mui/material/Avatar/Avatar.js');
require('../../../../../node_modules/@mui/material/Avatar/avatarClasses.js');
require('../../../../../node_modules/@mui/material/AvatarGroup/AvatarGroup.js');
require('../../../../../node_modules/@mui/material/AvatarGroup/avatarGroupClasses.js');
require('../../../../../node_modules/@mui/material/Backdrop/Backdrop.js');
require('../../../../../node_modules/@mui/material/Backdrop/backdropClasses.js');
require('../../../../../node_modules/@mui/material/Badge/Badge.js');
require('../../../../../node_modules/@mui/material/Badge/badgeClasses.js');
require('../../../../../node_modules/@mui/material/BottomNavigation/BottomNavigation.js');
require('../../../../../node_modules/@mui/material/BottomNavigation/bottomNavigationClasses.js');
require('../../../../../node_modules/@mui/material/BottomNavigationAction/BottomNavigationAction.js');
require('../../../../../node_modules/@mui/material/BottomNavigationAction/bottomNavigationActionClasses.js');
var Box = require('../../../../../node_modules/@mui/material/Box/Box.js');
require('../../../../../node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js');
require('../../../../../node_modules/@mui/material/Breadcrumbs/breadcrumbsClasses.js');
var Button = require('../../../../../node_modules/@mui/material/Button/Button.js');
require('../../../../../node_modules/@mui/material/Button/buttonClasses.js');
require('../../../../../node_modules/@mui/material/ButtonBase/ButtonBase.js');
require('../../../../../node_modules/@mui/material/ButtonBase/buttonBaseClasses.js');
require('../../../../../node_modules/@mui/material/ButtonBase/touchRippleClasses.js');
require('../../../../../node_modules/@mui/material/ButtonGroup/ButtonGroup.js');
require('../../../../../node_modules/@mui/material/ButtonGroup/buttonGroupClasses.js');
require('../../../../../node_modules/@mui/material/Card/Card.js');
require('../../../../../node_modules/@mui/material/Card/cardClasses.js');
require('../../../../../node_modules/@mui/material/CardActionArea/CardActionArea.js');
require('../../../../../node_modules/@mui/material/CardActionArea/cardActionAreaClasses.js');
require('../../../../../node_modules/@mui/material/CardActions/CardActions.js');
require('../../../../../node_modules/@mui/material/CardActions/cardActionsClasses.js');
require('../../../../../node_modules/@mui/material/CardContent/CardContent.js');
require('../../../../../node_modules/@mui/material/CardContent/cardContentClasses.js');
require('../../../../../node_modules/@mui/material/CardHeader/CardHeader.js');
require('../../../../../node_modules/@mui/material/CardHeader/cardHeaderClasses.js');
require('../../../../../node_modules/@mui/material/CardMedia/CardMedia.js');
require('../../../../../node_modules/@mui/material/CardMedia/cardMediaClasses.js');
require('../../../../../node_modules/@mui/material/Checkbox/Checkbox.js');
require('../../../../../node_modules/@mui/material/Checkbox/checkboxClasses.js');
require('../../../../../node_modules/@mui/material/Chip/Chip.js');
require('../../../../../node_modules/@mui/material/Chip/chipClasses.js');
require('../../../../../node_modules/@mui/material/CircularProgress/CircularProgress.js');
require('../../../../../node_modules/@mui/material/CircularProgress/circularProgressClasses.js');
require('../../../../../node_modules/@mui/material/Collapse/Collapse.js');
require('../../../../../node_modules/@mui/material/Collapse/collapseClasses.js');
require('../../../../../node_modules/@mui/material/Container/Container.js');
require('../../../../../node_modules/@mui/material/Container/containerClasses.js');
require('../../../../../node_modules/@mui/material/CssBaseline/CssBaseline.js');
require('../../../../../node_modules/@mui/material/Dialog/Dialog.js');
require('../../../../../node_modules/@mui/material/Dialog/dialogClasses.js');
require('../../../../../node_modules/@mui/material/DialogActions/DialogActions.js');
require('../../../../../node_modules/@mui/material/DialogActions/dialogActionsClasses.js');
require('../../../../../node_modules/@mui/material/DialogContent/DialogContent.js');
require('../../../../../node_modules/@mui/material/DialogContent/dialogContentClasses.js');
require('../../../../../node_modules/@mui/material/DialogContentText/DialogContentText.js');
require('../../../../../node_modules/@mui/material/DialogContentText/dialogContentTextClasses.js');
require('../../../../../node_modules/@mui/material/DialogTitle/DialogTitle.js');
require('../../../../../node_modules/@mui/material/DialogTitle/dialogTitleClasses.js');
require('../../../../../node_modules/@mui/material/Divider/Divider.js');
require('../../../../../node_modules/@mui/material/Divider/dividerClasses.js');
require('../../../../../node_modules/@mui/material/Drawer/Drawer.js');
require('../../../../../node_modules/@mui/material/Drawer/drawerClasses.js');
require('../../../../../node_modules/@mui/material/Fab/Fab.js');
require('../../../../../node_modules/@mui/material/Fab/fabClasses.js');
require('../../../../../node_modules/@mui/material/Fade/Fade.js');
require('../../../../../node_modules/@mui/material/FilledInput/FilledInput.js');
require('../../../../../node_modules/@mui/material/FilledInput/filledInputClasses.js');
require('../../../../../node_modules/@mui/material/FormControl/FormControl.js');
require('../../../../../node_modules/@mui/material/FormControl/FormControlContext.js');
require('../../../../../node_modules/@mui/material/FormControl/formControlClasses.js');
require('../../../../../node_modules/@mui/material/FormControlLabel/FormControlLabel.js');
require('../../../../../node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js');
require('../../../../../node_modules/@mui/material/FormGroup/FormGroup.js');
require('../../../../../node_modules/@mui/material/FormGroup/formGroupClasses.js');
require('../../../../../node_modules/@mui/material/FormHelperText/FormHelperText.js');
require('../../../../../node_modules/@mui/material/FormHelperText/formHelperTextClasses.js');
require('../../../../../node_modules/@mui/material/FormLabel/FormLabel.js');
require('../../../../../node_modules/@mui/material/FormLabel/formLabelClasses.js');
require('../../../../../node_modules/@mui/material/Grid/Grid.js');
require('../../../../../node_modules/@mui/material/Grid/gridClasses.js');
require('../../../../../node_modules/@mui/material/Grow/Grow.js');
require('../../../../../node_modules/@mui/material/Hidden/Hidden.js');
require('../../../../../node_modules/@mui/material/Icon/Icon.js');
require('../../../../../node_modules/@mui/material/Icon/iconClasses.js');
require('../../../../../node_modules/@mui/material/IconButton/IconButton.js');
require('../../../../../node_modules/@mui/material/IconButton/iconButtonClasses.js');
require('../../../../../node_modules/@mui/material/ImageList/ImageList.js');
require('../../../../../node_modules/@mui/material/ImageList/imageListClasses.js');
require('../../../../../node_modules/@mui/material/ImageListItem/ImageListItem.js');
require('../../../../../node_modules/@mui/material/ImageListItem/imageListItemClasses.js');
require('../../../../../node_modules/@mui/material/ImageListItemBar/ImageListItemBar.js');
require('../../../../../node_modules/@mui/material/ImageListItemBar/imageListItemBarClasses.js');
require('../../../../../node_modules/@mui/material/Input/Input.js');
require('../../../../../node_modules/@mui/material/Input/inputClasses.js');
require('../../../../../node_modules/@mui/material/InputAdornment/InputAdornment.js');
require('../../../../../node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js');
require('../../../../../node_modules/@mui/material/InputBase/InputBase.js');
require('../../../../../node_modules/@mui/material/InputBase/inputBaseClasses.js');
require('../../../../../node_modules/@mui/material/InputLabel/InputLabel.js');
require('../../../../../node_modules/@mui/material/InputLabel/inputLabelClasses.js');
require('../../../../../node_modules/@mui/material/LinearProgress/LinearProgress.js');
require('../../../../../node_modules/@mui/material/LinearProgress/linearProgressClasses.js');
require('../../../../../node_modules/@mui/material/Link/Link.js');
require('../../../../../node_modules/@mui/material/Link/linkClasses.js');
require('../../../../../node_modules/@mui/material/List/List.js');
require('../../../../../node_modules/@mui/material/List/listClasses.js');
require('../../../../../node_modules/@mui/material/ListItem/ListItem.js');
require('../../../../../node_modules/@mui/material/ListItem/listItemClasses.js');
require('../../../../../node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js');
require('../../../../../node_modules/@mui/material/ListItemAvatar/listItemAvatarClasses.js');
require('../../../../../node_modules/@mui/material/ListItemButton/ListItemButton.js');
require('../../../../../node_modules/@mui/material/ListItemButton/listItemButtonClasses.js');
require('../../../../../node_modules/@mui/material/ListItemIcon/ListItemIcon.js');
require('../../../../../node_modules/@mui/material/ListItemIcon/listItemIconClasses.js');
require('../../../../../node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js');
require('../../../../../node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.js');
require('../../../../../node_modules/@mui/material/ListItemText/ListItemText.js');
require('../../../../../node_modules/@mui/material/ListItemText/listItemTextClasses.js');
require('../../../../../node_modules/@mui/material/ListSubheader/ListSubheader.js');
require('../../../../../node_modules/@mui/material/ListSubheader/listSubheaderClasses.js');
require('../../../../../node_modules/@mui/material/Menu/Menu.js');
require('../../../../../node_modules/@mui/material/Menu/menuClasses.js');
require('../../../../../node_modules/@mui/material/MenuItem/MenuItem.js');
require('../../../../../node_modules/@mui/material/MenuItem/menuItemClasses.js');
require('../../../../../node_modules/@mui/material/MenuList/MenuList.js');
require('../../../../../node_modules/@mui/material/MobileStepper/MobileStepper.js');
require('../../../../../node_modules/@mui/material/MobileStepper/mobileStepperClasses.js');
require('../../../../../node_modules/@mui/material/Modal/Modal.js');
require('../../../../../node_modules/@mui/material/NativeSelect/NativeSelect.js');
require('../../../../../node_modules/@mui/material/NativeSelect/nativeSelectClasses.js');
require('../../../../../node_modules/@mui/material/OutlinedInput/OutlinedInput.js');
require('../../../../../node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js');
require('../../../../../node_modules/@mui/material/Pagination/Pagination.js');
require('../../../../../node_modules/@mui/material/Pagination/paginationClasses.js');
require('../../../../../node_modules/@mui/material/PaginationItem/PaginationItem.js');
require('../../../../../node_modules/@mui/material/PaginationItem/paginationItemClasses.js');
require('../../../../../node_modules/@mui/material/Paper/Paper.js');
require('../../../../../node_modules/@mui/material/Paper/paperClasses.js');
require('../../../../../node_modules/@mui/material/Popover/Popover.js');
require('../../../../../node_modules/@mui/material/Popover/popoverClasses.js');
require('../../../../../node_modules/@mui/material/Popper/Popper.js');
require('../../../../../node_modules/@mui/material/Radio/Radio.js');
require('../../../../../node_modules/@mui/material/Radio/radioClasses.js');
require('../../../../../node_modules/@mui/material/RadioGroup/RadioGroup.js');
require('../../../../../node_modules/@mui/material/RadioGroup/RadioGroupContext.js');
require('../../../../../node_modules/@mui/material/Rating/Rating.js');
require('../../../../../node_modules/@mui/material/Rating/ratingClasses.js');
require('../../../../../node_modules/@mui/material/ScopedCssBaseline/ScopedCssBaseline.js');
require('../../../../../node_modules/@mui/material/ScopedCssBaseline/scopedCssBaselineClasses.js');
require('../../../../../node_modules/@mui/material/Select/Select.js');
require('../../../../../node_modules/@mui/material/Select/selectClasses.js');
require('../../../../../node_modules/@mui/material/Skeleton/Skeleton.js');
require('../../../../../node_modules/@mui/material/Skeleton/skeletonClasses.js');
require('../../../../../node_modules/@mui/material/Slide/Slide.js');
require('../../../../../node_modules/@mui/material/Slider/Slider.js');
require('../../../../../node_modules/@mui/material/Snackbar/Snackbar.js');
require('../../../../../node_modules/@mui/material/Snackbar/snackbarClasses.js');
require('../../../../../node_modules/@mui/material/SnackbarContent/SnackbarContent.js');
require('../../../../../node_modules/@mui/material/SnackbarContent/snackbarContentClasses.js');
require('../../../../../node_modules/@mui/material/SpeedDial/SpeedDial.js');
require('../../../../../node_modules/@mui/material/SpeedDial/speedDialClasses.js');
require('../../../../../node_modules/@mui/material/SpeedDialAction/SpeedDialAction.js');
require('../../../../../node_modules/@mui/material/SpeedDialAction/speedDialActionClasses.js');
require('../../../../../node_modules/@mui/material/SpeedDialIcon/SpeedDialIcon.js');
require('../../../../../node_modules/@mui/material/SpeedDialIcon/speedDialIconClasses.js');
require('../../../../../node_modules/@mui/material/Stack/Stack.js');
require('../../../../../node_modules/@mui/material/Step/Step.js');
require('../../../../../node_modules/@mui/material/Step/stepClasses.js');
require('../../../../../node_modules/@mui/material/Step/StepContext.js');
require('../../../../../node_modules/@mui/material/StepButton/StepButton.js');
require('../../../../../node_modules/@mui/material/StepButton/stepButtonClasses.js');
require('../../../../../node_modules/@mui/material/StepConnector/StepConnector.js');
require('../../../../../node_modules/@mui/material/StepConnector/stepConnectorClasses.js');
require('../../../../../node_modules/@mui/material/StepContent/StepContent.js');
require('../../../../../node_modules/@mui/material/StepContent/stepContentClasses.js');
require('../../../../../node_modules/@mui/material/StepIcon/StepIcon.js');
require('../../../../../node_modules/@mui/material/StepIcon/stepIconClasses.js');
require('../../../../../node_modules/@mui/material/StepLabel/StepLabel.js');
require('../../../../../node_modules/@mui/material/StepLabel/stepLabelClasses.js');
require('../../../../../node_modules/@mui/material/Stepper/Stepper.js');
require('../../../../../node_modules/@mui/material/Stepper/stepperClasses.js');
require('../../../../../node_modules/@mui/material/Stepper/StepperContext.js');
require('../../../../../node_modules/@mui/material/SwipeableDrawer/SwipeableDrawer.js');
require('../../../../../node_modules/@mui/material/Switch/Switch.js');
require('../../../../../node_modules/@mui/material/Switch/switchClasses.js');
require('../../../../../node_modules/@mui/material/Tab/Tab.js');
require('../../../../../node_modules/@mui/material/Tab/tabClasses.js');
require('../../../../../node_modules/@mui/material/Table/Table.js');
require('../../../../../node_modules/@mui/material/Table/tableClasses.js');
require('../../../../../node_modules/@mui/material/TableBody/TableBody.js');
require('../../../../../node_modules/@mui/material/TableBody/tableBodyClasses.js');
require('../../../../../node_modules/@mui/material/TableCell/TableCell.js');
require('../../../../../node_modules/@mui/material/TableCell/tableCellClasses.js');
require('../../../../../node_modules/@mui/material/TableContainer/TableContainer.js');
require('../../../../../node_modules/@mui/material/TableContainer/tableContainerClasses.js');
require('../../../../../node_modules/@mui/material/TableFooter/TableFooter.js');
require('../../../../../node_modules/@mui/material/TableFooter/tableFooterClasses.js');
require('../../../../../node_modules/@mui/material/TableHead/TableHead.js');
require('../../../../../node_modules/@mui/material/TableHead/tableHeadClasses.js');
require('../../../../../node_modules/@mui/material/TablePagination/TablePagination.js');
require('../../../../../node_modules/@mui/material/TablePagination/tablePaginationClasses.js');
require('../../../../../node_modules/@mui/material/TableRow/TableRow.js');
require('../../../../../node_modules/@mui/material/TableRow/tableRowClasses.js');
require('../../../../../node_modules/@mui/material/TableSortLabel/TableSortLabel.js');
require('../../../../../node_modules/@mui/material/TableSortLabel/tableSortLabelClasses.js');
require('../../../../../node_modules/@mui/material/Tabs/Tabs.js');
require('../../../../../node_modules/@mui/material/Tabs/tabsClasses.js');
require('../../../../../node_modules/@mui/material/TabScrollButton/TabScrollButton.js');
require('../../../../../node_modules/@mui/material/TabScrollButton/tabScrollButtonClasses.js');
require('../../../../../node_modules/@mui/material/TextField/TextField.js');
require('../../../../../node_modules/@mui/material/TextField/textFieldClasses.js');
require('../../../../../node_modules/@mui/material/ToggleButton/ToggleButton.js');
require('../../../../../node_modules/@mui/material/ToggleButton/toggleButtonClasses.js');
require('../../../../../node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js');
require('../../../../../node_modules/@mui/material/ToggleButtonGroup/toggleButtonGroupClasses.js');
require('../../../../../node_modules/@mui/material/Toolbar/Toolbar.js');
require('../../../../../node_modules/@mui/material/Toolbar/toolbarClasses.js');
var Tooltip = require('../../../../../node_modules/@mui/material/Tooltip/Tooltip.js');
require('../../../../../node_modules/@mui/material/Tooltip/tooltipClasses.js');
var Typography = require('../../../../../node_modules/@mui/material/Typography/Typography.js');
require('../../../../../node_modules/@mui/material/Typography/typographyClasses.js');
require('../../../../../node_modules/@mui/material/Zoom/Zoom.js');
require('../../../../../node_modules/@mui/material/GlobalStyles/GlobalStyles.js');
var formatUtils = require('../../../../utils/formatUtils.js');
var Number = require('../../../shared/Number/Number.js');
var TextField = require('../../../shared/TextField/TextField.js');
var promoCodeUtils = require('../../../../utils/promoCodeUtils.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const TAX_RATE_PLACEHOLDER_SX = {
    background: theme => theme.palette.grey[100],
    borderRadius: "128px",
    color: "transparent",
    fontSize: "10px",
    margin: "0 0 0 2px",
    userSelect: "none",
};
const TAX_AMOUNT_PLACEHOLDER_SX = Object.assign(Object.assign({}, TAX_RATE_PLACEHOLDER_SX), { margin: "0 2px 0 0" });
const TOTAL_PLACEHOLDER_SX = {
    background: theme => theme.palette.success.light,
    borderRadius: "128px",
    color: "transparent",
    fontFamily: theme => theme.typography.subtitle1.fontFamily,
    fontSize: "14px",
    margin: "0 4px 0 0",
    userSelect: "none",
};
const ROW_SX = {
    display: "flex",
    mb: 1,
    flex: 1,
    justifyContent: "space-between",
};
const CheckoutItemCostTotal = ({ total, fees, taxes, withDetails = false, }) => {
    const { promoCode, onChangePromoCode, onApply, editable, error, invoiceItemIDs } = promoCodeUtils.usePromoCode();
    const [discountTotal, setDiscountTotal] = React.useState(total);
    const [discount, setDiscount] = React.useState(null);
    React.useEffect(() => {
        if (promoCode.total) {
            setDiscountTotal(promoCode.total);
            setDiscount(total - promoCode.total);
        }
    }, [promoCode, setDiscountTotal, total]);
    const feesValue = fees || 0;
    let taxRowElement = null;
    let totalElement = (React__default["default"].createElement(Tooltip["default"], { title: "Enter a valid address to calculate the total" },
        React__default["default"].createElement("span", null,
            React__default["default"].createElement(Number.Number, { suffix: " USD" }, discountTotal + feesValue))));
    if (taxes) {
        const { status, taxAmount = 0, taxRate = 0, } = taxes;
        let taxRateElement = null;
        let taxAmountElement = null;
        if (status === "loading") {
            taxRateElement = React__default["default"].createElement(Tooltip["default"], { title: "Calculating taxes..." },
                React__default["default"].createElement("span", null,
                    "(",
                    React__default["default"].createElement(Box["default"], { component: "span", sx: TAX_RATE_PLACEHOLDER_SX }, "00.00"),
                    " %)"));
            taxAmountElement = React__default["default"].createElement(Tooltip["default"], { title: "Calculating taxes..." },
                React__default["default"].createElement("span", null,
                    React__default["default"].createElement(Box["default"], { component: "span", sx: TAX_AMOUNT_PLACEHOLDER_SX },
                        `${(discountTotal + feesValue) * 0.10 | 0}`.replace(/./, "0"),
                        ".00"),
                    " USD"));
            totalElement = React__default["default"].createElement(Tooltip["default"], { title: "Calculating total..." },
                React__default["default"].createElement("span", null,
                    React__default["default"].createElement(Box["default"], { component: "span", sx: TOTAL_PLACEHOLDER_SX },
                        `${(discountTotal + feesValue) * 1.10 | 0}`.replace(/./, "0"),
                        ".00"),
                    " USD"));
        }
        else if (status === "complete" && taxAmount !== undefined) {
            taxRateElement = `(${formatUtils.formatTaxRate(taxRate)})`;
            taxAmountElement = React__default["default"].createElement(Number.Number, { suffix: " USD" }, taxAmount);
            totalElement = React__default["default"].createElement(Number.Number, { suffix: " USD" }, discountTotal + feesValue + taxAmount);
        }
        else {
            taxRateElement = null;
            taxAmountElement = React__default["default"].createElement(Tooltip["default"], { title: "Enter a valid address to calculate the taxes" },
                React__default["default"].createElement("span", null,
                    React__default["default"].createElement(Number.Number, { suffix: " USD" }, 0)));
            totalElement = React__default["default"].createElement(Tooltip["default"], { title: "Enter a valid address to calculate the total" },
                React__default["default"].createElement("span", null,
                    React__default["default"].createElement(Number.Number, { suffix: " USD" }, discountTotal + feesValue)));
        }
        taxRowElement = (React__default["default"].createElement(Box["default"], { sx: ROW_SX },
            React__default["default"].createElement(Typography["default"], { sx: theme => ({ color: theme.palette.grey["500"] }) },
                "Taxes ",
                taxRateElement),
            React__default["default"].createElement(Typography["default"], null, taxAmountElement)));
    }
    const handlePromoCodeChange = (event) => {
        onChangePromoCode(event.target.value);
    };
    const handleApplyPromoCode = React.useCallback(() => {
        if (editable)
            onApply();
    }, [editable, onApply]);
    return (React__default["default"].createElement(Box["default"], { sx: { display: "flex", flexDirection: "column", mt: { xs: 3, sm: 0.5 } } },
        withDetails && (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(Box["default"], { sx: ROW_SX },
                React__default["default"].createElement(TextField.TextField, { label: "Discount code", value: promoCode.code, onChange: handlePromoCodeChange, error: !!error, helperText: error, InputProps: {
                        readOnly: !(editable && invoiceItemIDs.length > 0),
                        endAdornment: (React__default["default"].createElement(Button["default"], { sx: { color: "text.primary" }, onClick: handleApplyPromoCode, disabled: !(editable && invoiceItemIDs.length > 0) }, "Apply")),
                    } })),
            React__default["default"].createElement(Box["default"], { sx: ROW_SX },
                React__default["default"].createElement(Typography["default"], null, "Subtotal"),
                React__default["default"].createElement(Typography["default"], null,
                    React__default["default"].createElement(Number.Number, { suffix: " USD" }, total))),
            fees === null ? null : (React__default["default"].createElement(Box["default"], { sx: ROW_SX },
                React__default["default"].createElement(Typography["default"], { sx: theme => ({ color: theme.palette.grey["500"] }) }, "Fees"),
                React__default["default"].createElement(Typography["default"], null,
                    React__default["default"].createElement(Number.Number, { suffix: " USD" }, fees)))),
            discount !== null && (React__default["default"].createElement(Box["default"], { sx: ROW_SX },
                React__default["default"].createElement(Typography["default"], { sx: theme => ({ color: theme.palette.grey["500"] }) }, "Discount"),
                React__default["default"].createElement(Typography["default"], null,
                    React__default["default"].createElement(Number.Number, { suffix: " USD" }, discount)))),
            taxRowElement)),
        React__default["default"].createElement(Box["default"], { sx: {
                display: "flex",
                mt: 1,
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
            } },
            React__default["default"].createElement(Typography["default"], { sx: { fontWeight: "500" } }, withDetails ? "Total Amount (USD)" : "Total Amount Paid (USD)"),
            React__default["default"].createElement(Typography["default"], { variant: "subtitle1", sx: {
                    fontWeight: "500",
                    color: "success.main",
                } }, totalElement))));
};

exports.CheckoutItemCostTotal = CheckoutItemCostTotal;
//# sourceMappingURL=CheckoutItemCostTotal.js.map
