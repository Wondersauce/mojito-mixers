'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('@emotion/styled');
require('../../../node_modules/@emotion/react/dist/emotion-react.esm.js');
require('../../../node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js');
require('../../../node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js');
require('../../../node_modules/@mui/system/esm/borders.js');
require('prop-types');
require('../../../node_modules/@mui/utils/esm/elementAcceptingRef.js');
require('../../../node_modules/@mui/utils/esm/elementTypeAcceptingRef.js');
require('react-is');
require('../../../node_modules/@mui/utils/esm/ponyfillGlobal.js');
require('../../../node_modules/@mui/utils/esm/refType.js');
require('../../../node_modules/@mui/utils/esm/integerPropType.js');
require('../../../node_modules/@mui/system/esm/display.js');
require('../../../node_modules/@mui/system/esm/flexbox.js');
require('../../../node_modules/@mui/system/esm/grid.js');
require('../../../node_modules/@mui/system/esm/palette.js');
require('../../../node_modules/@mui/system/esm/positions.js');
require('../../../node_modules/@mui/system/esm/shadows.js');
require('../../../node_modules/@mui/system/esm/sizing.js');
require('../../../node_modules/@mui/system/esm/spacing.js');
require('../../../node_modules/@mui/system/esm/responsivePropType.js');
require('../../../node_modules/@mui/system/esm/typography.js');
require('../../../node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js');
require('../../../node_modules/@mui/system/esm/getThemeValue.js');
require('../../../node_modules/@mui/system/esm/Box/Box.js');
require('../../../node_modules/@mui/system/esm/useTheme.js');
require('react/jsx-runtime');
require('../../../node_modules/@mui/system/esm/createStyled.js');
require('../../../node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js');
require('../../../node_modules/@mui/private-theming/useTheme/ThemeContext.js');
require('../../../node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js');
require('../../../node_modules/@mui/system/esm/Container/createContainer.js');
require('../../../node_modules/@mui/system/esm/Container/Container.js');
require('../../../node_modules/@mui/system/esm/Container/containerClasses.js');
require('../../../node_modules/@mui/base/BadgeUnstyled/BadgeUnstyled.js');
require('../../../node_modules/@mui/base/BadgeUnstyled/badgeUnstyledClasses.js');
require('../../../node_modules/@mui/base/ButtonUnstyled/ButtonUnstyled.js');
require('../../../node_modules/@mui/base/ButtonUnstyled/buttonUnstyledClasses.js');
require('../../../node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js');
require('../../../node_modules/@mui/base/FormControlUnstyled/FormControlUnstyled.js');
require('../../../node_modules/@mui/base/FormControlUnstyled/FormControlUnstyledContext.js');
require('../../../node_modules/@mui/base/FormControlUnstyled/formControlUnstyledClasses.js');
require('../../../node_modules/@mui/base/InputUnstyled/InputUnstyled.js');
require('../../../node_modules/@mui/base/InputUnstyled/inputUnstyledClasses.js');
require('../../../node_modules/@mui/base/ListboxUnstyled/useListbox.types.js');
require('../../../node_modules/@mui/base/MenuUnstyled/MenuUnstyled.js');
require('../../../node_modules/@mui/base/MenuUnstyled/MenuUnstyledContext.js');
require('../../../node_modules/@mui/base/MenuUnstyled/menuUnstyledClasses.js');
require('../../../node_modules/@mui/base/MenuItemUnstyled/MenuItemUnstyled.js');
require('../../../node_modules/@mui/base/MenuItemUnstyled/menuItemUnstyledClasses.js');
require('../../../node_modules/@mui/base/ModalUnstyled/ModalUnstyled.js');
require('../../../node_modules/@mui/base/ModalUnstyled/modalUnstyledClasses.js');
require('../../../node_modules/@mui/base/MultiSelectUnstyled/MultiSelectUnstyled.js');
require('../../../node_modules/@mui/base/NoSsr/NoSsr.js');
require('../../../node_modules/@mui/base/OptionGroupUnstyled/OptionGroupUnstyled.js');
require('../../../node_modules/@mui/base/OptionGroupUnstyled/optionGroupUnstyledClasses.js');
require('../../../node_modules/@mui/base/OptionUnstyled/OptionUnstyled.js');
require('../../../node_modules/@mui/base/OptionUnstyled/optionUnstyledClasses.js');
require('../../../node_modules/@mui/base/PopperUnstyled/PopperUnstyled.js');
require('../../../node_modules/@mui/base/Portal/Portal.js');
require('../../../node_modules/@mui/base/SelectUnstyled/SelectUnstyled.js');
require('../../../node_modules/@mui/base/SelectUnstyled/selectUnstyledClasses.js');
require('../../../node_modules/@mui/base/SliderUnstyled/SliderUnstyled.js');
require('../../../node_modules/@mui/base/SliderUnstyled/SliderValueLabelUnstyled.js');
require('../../../node_modules/@mui/base/SliderUnstyled/sliderUnstyledClasses.js');
require('../../../node_modules/@mui/base/SwitchUnstyled/SwitchUnstyled.js');
require('../../../node_modules/@mui/base/SwitchUnstyled/switchUnstyledClasses.js');
require('../../../node_modules/@mui/base/TabPanelUnstyled/TabPanelUnstyled.js');
require('../../../node_modules/@mui/base/TabPanelUnstyled/tabPanelUnstyledClasses.js');
require('../../../node_modules/@mui/base/TabsUnstyled/TabsUnstyled.js');
require('../../../node_modules/@mui/base/TabsUnstyled/TabsContext.js');
require('../../../node_modules/@mui/base/TabsUnstyled/tabsUnstyledClasses.js');
require('../../../node_modules/@mui/base/TabsListUnstyled/TabsListUnstyled.js');
require('../../../node_modules/@mui/base/TabsListUnstyled/tabsListUnstyledClasses.js');
require('../../../node_modules/@mui/base/TabUnstyled/TabUnstyled.js');
require('../../../node_modules/@mui/base/TabUnstyled/tabUnstyledClasses.js');
require('../../../node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js');
require('../../../node_modules/@mui/base/TrapFocus/TrapFocus.js');
require('../../../node_modules/@mui/material/styles/createPalette.js');
require('../../../node_modules/@mui/material/styles/shadows.js');
require('../../../node_modules/@mui/material/styles/defaultTheme.js');
require('../../../node_modules/@mui/material/styles/CssVarsProvider.js');
require('../../../node_modules/@mui/material/styles/experimental_extendTheme.js');
require('../../../node_modules/@mui/material/SvgIcon/SvgIcon.js');
require('../../../node_modules/@mui/material/SvgIcon/svgIconClasses.js');
require('../../../node_modules/@mui/material/Accordion/Accordion.js');
require('../../../node_modules/@mui/material/Accordion/accordionClasses.js');
require('../../../node_modules/@mui/material/AccordionActions/AccordionActions.js');
require('../../../node_modules/@mui/material/AccordionActions/accordionActionsClasses.js');
require('../../../node_modules/@mui/material/AccordionDetails/AccordionDetails.js');
require('../../../node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js');
require('../../../node_modules/@mui/material/AccordionSummary/AccordionSummary.js');
require('../../../node_modules/@mui/material/AccordionSummary/accordionSummaryClasses.js');
require('../../../node_modules/@mui/material/Alert/Alert.js');
require('../../../node_modules/@mui/material/Alert/alertClasses.js');
require('../../../node_modules/@mui/material/AlertTitle/AlertTitle.js');
require('../../../node_modules/@mui/material/AlertTitle/alertTitleClasses.js');
require('../../../node_modules/@mui/material/AppBar/AppBar.js');
require('../../../node_modules/@mui/material/AppBar/appBarClasses.js');
require('../../../node_modules/@mui/material/Autocomplete/Autocomplete.js');
require('../../../node_modules/@mui/material/Autocomplete/autocompleteClasses.js');
require('../../../node_modules/@mui/material/Avatar/Avatar.js');
require('../../../node_modules/@mui/material/Avatar/avatarClasses.js');
require('../../../node_modules/@mui/material/AvatarGroup/AvatarGroup.js');
require('../../../node_modules/@mui/material/AvatarGroup/avatarGroupClasses.js');
require('../../../node_modules/@mui/material/Backdrop/Backdrop.js');
require('../../../node_modules/@mui/material/Backdrop/backdropClasses.js');
require('../../../node_modules/@mui/material/Badge/Badge.js');
require('../../../node_modules/@mui/material/Badge/badgeClasses.js');
require('../../../node_modules/@mui/material/BottomNavigation/BottomNavigation.js');
require('../../../node_modules/@mui/material/BottomNavigation/bottomNavigationClasses.js');
require('../../../node_modules/@mui/material/BottomNavigationAction/BottomNavigationAction.js');
require('../../../node_modules/@mui/material/BottomNavigationAction/bottomNavigationActionClasses.js');
var Box = require('../../../node_modules/@mui/material/Box/Box.js');
require('../../../node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js');
require('../../../node_modules/@mui/material/Breadcrumbs/breadcrumbsClasses.js');
require('../../../node_modules/@mui/material/Button/Button.js');
require('../../../node_modules/@mui/material/Button/buttonClasses.js');
require('../../../node_modules/@mui/material/ButtonBase/ButtonBase.js');
require('../../../node_modules/@mui/material/ButtonBase/buttonBaseClasses.js');
require('../../../node_modules/@mui/material/ButtonBase/touchRippleClasses.js');
require('../../../node_modules/@mui/material/ButtonGroup/ButtonGroup.js');
require('../../../node_modules/@mui/material/ButtonGroup/buttonGroupClasses.js');
require('../../../node_modules/@mui/material/Card/Card.js');
require('../../../node_modules/@mui/material/Card/cardClasses.js');
require('../../../node_modules/@mui/material/CardActionArea/CardActionArea.js');
require('../../../node_modules/@mui/material/CardActionArea/cardActionAreaClasses.js');
require('../../../node_modules/@mui/material/CardActions/CardActions.js');
require('../../../node_modules/@mui/material/CardActions/cardActionsClasses.js');
require('../../../node_modules/@mui/material/CardContent/CardContent.js');
require('../../../node_modules/@mui/material/CardContent/cardContentClasses.js');
require('../../../node_modules/@mui/material/CardHeader/CardHeader.js');
require('../../../node_modules/@mui/material/CardHeader/cardHeaderClasses.js');
require('../../../node_modules/@mui/material/CardMedia/CardMedia.js');
require('../../../node_modules/@mui/material/CardMedia/cardMediaClasses.js');
require('../../../node_modules/@mui/material/Checkbox/Checkbox.js');
require('../../../node_modules/@mui/material/Checkbox/checkboxClasses.js');
require('../../../node_modules/@mui/material/Chip/Chip.js');
require('../../../node_modules/@mui/material/Chip/chipClasses.js');
require('../../../node_modules/@mui/material/CircularProgress/CircularProgress.js');
require('../../../node_modules/@mui/material/CircularProgress/circularProgressClasses.js');
require('../../../node_modules/@mui/material/Collapse/Collapse.js');
require('../../../node_modules/@mui/material/Collapse/collapseClasses.js');
require('../../../node_modules/@mui/material/Container/Container.js');
require('../../../node_modules/@mui/material/Container/containerClasses.js');
require('../../../node_modules/@mui/material/CssBaseline/CssBaseline.js');
require('../../../node_modules/@mui/material/Dialog/Dialog.js');
require('../../../node_modules/@mui/material/Dialog/dialogClasses.js');
require('../../../node_modules/@mui/material/DialogActions/DialogActions.js');
require('../../../node_modules/@mui/material/DialogActions/dialogActionsClasses.js');
require('../../../node_modules/@mui/material/DialogContent/DialogContent.js');
require('../../../node_modules/@mui/material/DialogContent/dialogContentClasses.js');
require('../../../node_modules/@mui/material/DialogContentText/DialogContentText.js');
require('../../../node_modules/@mui/material/DialogContentText/dialogContentTextClasses.js');
require('../../../node_modules/@mui/material/DialogTitle/DialogTitle.js');
require('../../../node_modules/@mui/material/DialogTitle/dialogTitleClasses.js');
require('../../../node_modules/@mui/material/Divider/Divider.js');
require('../../../node_modules/@mui/material/Divider/dividerClasses.js');
require('../../../node_modules/@mui/material/Drawer/Drawer.js');
require('../../../node_modules/@mui/material/Drawer/drawerClasses.js');
require('../../../node_modules/@mui/material/Fab/Fab.js');
require('../../../node_modules/@mui/material/Fab/fabClasses.js');
require('../../../node_modules/@mui/material/Fade/Fade.js');
require('../../../node_modules/@mui/material/FilledInput/FilledInput.js');
require('../../../node_modules/@mui/material/FilledInput/filledInputClasses.js');
require('../../../node_modules/@mui/material/FormControl/FormControl.js');
require('../../../node_modules/@mui/material/FormControl/FormControlContext.js');
require('../../../node_modules/@mui/material/FormControl/formControlClasses.js');
require('../../../node_modules/@mui/material/FormControlLabel/FormControlLabel.js');
require('../../../node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js');
require('../../../node_modules/@mui/material/FormGroup/FormGroup.js');
require('../../../node_modules/@mui/material/FormGroup/formGroupClasses.js');
require('../../../node_modules/@mui/material/FormHelperText/FormHelperText.js');
require('../../../node_modules/@mui/material/FormHelperText/formHelperTextClasses.js');
require('../../../node_modules/@mui/material/FormLabel/FormLabel.js');
require('../../../node_modules/@mui/material/FormLabel/formLabelClasses.js');
require('../../../node_modules/@mui/material/Grid/Grid.js');
require('../../../node_modules/@mui/material/Grid/gridClasses.js');
require('../../../node_modules/@mui/material/Grow/Grow.js');
require('../../../node_modules/@mui/material/Hidden/Hidden.js');
require('../../../node_modules/@mui/material/Icon/Icon.js');
require('../../../node_modules/@mui/material/Icon/iconClasses.js');
require('../../../node_modules/@mui/material/IconButton/IconButton.js');
require('../../../node_modules/@mui/material/IconButton/iconButtonClasses.js');
require('../../../node_modules/@mui/material/ImageList/ImageList.js');
require('../../../node_modules/@mui/material/ImageList/imageListClasses.js');
require('../../../node_modules/@mui/material/ImageListItem/ImageListItem.js');
require('../../../node_modules/@mui/material/ImageListItem/imageListItemClasses.js');
require('../../../node_modules/@mui/material/ImageListItemBar/ImageListItemBar.js');
require('../../../node_modules/@mui/material/ImageListItemBar/imageListItemBarClasses.js');
require('../../../node_modules/@mui/material/Input/Input.js');
require('../../../node_modules/@mui/material/Input/inputClasses.js');
require('../../../node_modules/@mui/material/InputAdornment/InputAdornment.js');
require('../../../node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js');
require('../../../node_modules/@mui/material/InputBase/InputBase.js');
require('../../../node_modules/@mui/material/InputBase/inputBaseClasses.js');
require('../../../node_modules/@mui/material/InputLabel/InputLabel.js');
require('../../../node_modules/@mui/material/InputLabel/inputLabelClasses.js');
require('../../../node_modules/@mui/material/LinearProgress/LinearProgress.js');
require('../../../node_modules/@mui/material/LinearProgress/linearProgressClasses.js');
require('../../../node_modules/@mui/material/Link/Link.js');
require('../../../node_modules/@mui/material/Link/linkClasses.js');
require('../../../node_modules/@mui/material/List/List.js');
require('../../../node_modules/@mui/material/List/listClasses.js');
require('../../../node_modules/@mui/material/ListItem/ListItem.js');
require('../../../node_modules/@mui/material/ListItem/listItemClasses.js');
require('../../../node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js');
require('../../../node_modules/@mui/material/ListItemAvatar/listItemAvatarClasses.js');
require('../../../node_modules/@mui/material/ListItemButton/ListItemButton.js');
require('../../../node_modules/@mui/material/ListItemButton/listItemButtonClasses.js');
require('../../../node_modules/@mui/material/ListItemIcon/ListItemIcon.js');
require('../../../node_modules/@mui/material/ListItemIcon/listItemIconClasses.js');
require('../../../node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js');
require('../../../node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.js');
require('../../../node_modules/@mui/material/ListItemText/ListItemText.js');
require('../../../node_modules/@mui/material/ListItemText/listItemTextClasses.js');
require('../../../node_modules/@mui/material/ListSubheader/ListSubheader.js');
require('../../../node_modules/@mui/material/ListSubheader/listSubheaderClasses.js');
require('../../../node_modules/@mui/material/Menu/Menu.js');
require('../../../node_modules/@mui/material/Menu/menuClasses.js');
require('../../../node_modules/@mui/material/MenuItem/MenuItem.js');
require('../../../node_modules/@mui/material/MenuItem/menuItemClasses.js');
require('../../../node_modules/@mui/material/MenuList/MenuList.js');
require('../../../node_modules/@mui/material/MobileStepper/MobileStepper.js');
require('../../../node_modules/@mui/material/MobileStepper/mobileStepperClasses.js');
require('../../../node_modules/@mui/material/Modal/Modal.js');
require('../../../node_modules/@mui/material/NativeSelect/NativeSelect.js');
require('../../../node_modules/@mui/material/NativeSelect/nativeSelectClasses.js');
require('../../../node_modules/@mui/material/OutlinedInput/OutlinedInput.js');
require('../../../node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js');
require('../../../node_modules/@mui/material/Pagination/Pagination.js');
require('../../../node_modules/@mui/material/Pagination/paginationClasses.js');
require('../../../node_modules/@mui/material/PaginationItem/PaginationItem.js');
require('../../../node_modules/@mui/material/PaginationItem/paginationItemClasses.js');
require('../../../node_modules/@mui/material/Paper/Paper.js');
require('../../../node_modules/@mui/material/Paper/paperClasses.js');
require('../../../node_modules/@mui/material/Popover/Popover.js');
require('../../../node_modules/@mui/material/Popover/popoverClasses.js');
require('../../../node_modules/@mui/material/Popper/Popper.js');
require('../../../node_modules/@mui/material/Radio/Radio.js');
require('../../../node_modules/@mui/material/Radio/radioClasses.js');
require('../../../node_modules/@mui/material/RadioGroup/RadioGroup.js');
require('../../../node_modules/@mui/material/RadioGroup/RadioGroupContext.js');
require('../../../node_modules/@mui/material/Rating/Rating.js');
require('../../../node_modules/@mui/material/Rating/ratingClasses.js');
require('../../../node_modules/@mui/material/ScopedCssBaseline/ScopedCssBaseline.js');
require('../../../node_modules/@mui/material/ScopedCssBaseline/scopedCssBaselineClasses.js');
require('../../../node_modules/@mui/material/Select/Select.js');
require('../../../node_modules/@mui/material/Select/selectClasses.js');
require('../../../node_modules/@mui/material/Skeleton/Skeleton.js');
require('../../../node_modules/@mui/material/Skeleton/skeletonClasses.js');
require('../../../node_modules/@mui/material/Slide/Slide.js');
require('../../../node_modules/@mui/material/Slider/Slider.js');
require('../../../node_modules/@mui/material/Snackbar/Snackbar.js');
require('../../../node_modules/@mui/material/Snackbar/snackbarClasses.js');
require('../../../node_modules/@mui/material/SnackbarContent/SnackbarContent.js');
require('../../../node_modules/@mui/material/SnackbarContent/snackbarContentClasses.js');
require('../../../node_modules/@mui/material/SpeedDial/SpeedDial.js');
require('../../../node_modules/@mui/material/SpeedDial/speedDialClasses.js');
require('../../../node_modules/@mui/material/SpeedDialAction/SpeedDialAction.js');
require('../../../node_modules/@mui/material/SpeedDialAction/speedDialActionClasses.js');
require('../../../node_modules/@mui/material/SpeedDialIcon/SpeedDialIcon.js');
require('../../../node_modules/@mui/material/SpeedDialIcon/speedDialIconClasses.js');
require('../../../node_modules/@mui/material/Stack/Stack.js');
require('../../../node_modules/@mui/material/Step/Step.js');
require('../../../node_modules/@mui/material/Step/stepClasses.js');
require('../../../node_modules/@mui/material/Step/StepContext.js');
require('../../../node_modules/@mui/material/StepButton/StepButton.js');
require('../../../node_modules/@mui/material/StepButton/stepButtonClasses.js');
require('../../../node_modules/@mui/material/StepConnector/StepConnector.js');
require('../../../node_modules/@mui/material/StepConnector/stepConnectorClasses.js');
require('../../../node_modules/@mui/material/StepContent/StepContent.js');
require('../../../node_modules/@mui/material/StepContent/stepContentClasses.js');
require('../../../node_modules/@mui/material/StepIcon/StepIcon.js');
require('../../../node_modules/@mui/material/StepIcon/stepIconClasses.js');
require('../../../node_modules/@mui/material/StepLabel/StepLabel.js');
require('../../../node_modules/@mui/material/StepLabel/stepLabelClasses.js');
require('../../../node_modules/@mui/material/Stepper/Stepper.js');
require('../../../node_modules/@mui/material/Stepper/stepperClasses.js');
require('../../../node_modules/@mui/material/Stepper/StepperContext.js');
require('../../../node_modules/@mui/material/SwipeableDrawer/SwipeableDrawer.js');
require('../../../node_modules/@mui/material/Switch/Switch.js');
require('../../../node_modules/@mui/material/Switch/switchClasses.js');
require('../../../node_modules/@mui/material/Tab/Tab.js');
require('../../../node_modules/@mui/material/Tab/tabClasses.js');
require('../../../node_modules/@mui/material/Table/Table.js');
require('../../../node_modules/@mui/material/Table/tableClasses.js');
require('../../../node_modules/@mui/material/TableBody/TableBody.js');
require('../../../node_modules/@mui/material/TableBody/tableBodyClasses.js');
require('../../../node_modules/@mui/material/TableCell/TableCell.js');
require('../../../node_modules/@mui/material/TableCell/tableCellClasses.js');
require('../../../node_modules/@mui/material/TableContainer/TableContainer.js');
require('../../../node_modules/@mui/material/TableContainer/tableContainerClasses.js');
require('../../../node_modules/@mui/material/TableFooter/TableFooter.js');
require('../../../node_modules/@mui/material/TableFooter/tableFooterClasses.js');
require('../../../node_modules/@mui/material/TableHead/TableHead.js');
require('../../../node_modules/@mui/material/TableHead/tableHeadClasses.js');
require('../../../node_modules/@mui/material/TablePagination/TablePagination.js');
require('../../../node_modules/@mui/material/TablePagination/tablePaginationClasses.js');
require('../../../node_modules/@mui/material/TableRow/TableRow.js');
require('../../../node_modules/@mui/material/TableRow/tableRowClasses.js');
require('../../../node_modules/@mui/material/TableSortLabel/TableSortLabel.js');
require('../../../node_modules/@mui/material/TableSortLabel/tableSortLabelClasses.js');
require('../../../node_modules/@mui/material/Tabs/Tabs.js');
require('../../../node_modules/@mui/material/Tabs/tabsClasses.js');
require('../../../node_modules/@mui/material/TabScrollButton/TabScrollButton.js');
require('../../../node_modules/@mui/material/TabScrollButton/tabScrollButtonClasses.js');
require('../../../node_modules/@mui/material/TextField/TextField.js');
require('../../../node_modules/@mui/material/TextField/textFieldClasses.js');
require('../../../node_modules/@mui/material/ToggleButton/ToggleButton.js');
require('../../../node_modules/@mui/material/ToggleButton/toggleButtonClasses.js');
require('../../../node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js');
require('../../../node_modules/@mui/material/ToggleButtonGroup/toggleButtonGroupClasses.js');
require('../../../node_modules/@mui/material/Toolbar/Toolbar.js');
require('../../../node_modules/@mui/material/Toolbar/toolbarClasses.js');
require('../../../node_modules/@mui/material/Tooltip/Tooltip.js');
require('../../../node_modules/@mui/material/Tooltip/tooltipClasses.js');
var Typography = require('../../../node_modules/@mui/material/Typography/Typography.js');
require('../../../node_modules/@mui/material/Typography/typographyClasses.js');
require('../../../node_modules/@mui/material/Zoom/Zoom.js');
require('../../../node_modules/@mui/material/GlobalStyles/GlobalStyles.js');
var interval_hook = require('../../../node_modules/@swyg/corre/dist/esm/interval/interval.hook.js');
var timeout_hook = require('../../../node_modules/@swyg/corre/dist/esm/timeout/timeout.hook.js');
var useFullPayment = require('../../hooks/useFullPayment.js');
var errors_constants = require('../../domain/errors/errors.constants.js');
var themeConstants = require('../../config/theme/themeConstants.js');
var StatusIcon = require('../../components/shared/StatusIcon/StatusIcon.js');
var graphqlGenerated = require('../../queries/graphqlGenerated.js');
var CheckoutOverlay_utils = require('../../components/public/CheckoutOverlay/CheckoutOverlay.utils.js');
var config = require('../../config/config.js');
var promoCodeUtils = require('../../utils/promoCodeUtils.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const PurchasingView = ({ threeDSEnabled, coinbaseSuccessURL, coinbaseErrorURL, purchasingImageSrc, purchasingMessages: customPurchasingMessages, orgID, invoiceID, invoiceCountdownStart, checkoutItems, savedPaymentMethods, selectedPaymentMethod, wallet, onPurchaseSuccess, onPurchaseError, onDialogBlocked, debug, }) => {
    var _a, _b, _c;
    const { setEditable, promoCode } = promoCodeUtils.usePromoCode();
    const { billingInfo, paymentInfo, cvv } = selectedPaymentMethod;
    const isCreditCardPayment = cvv || (paymentInfo !== null && typeof paymentInfo === "object" && paymentInfo.type === "CreditCard");
    // Minimum wait time:
    const [hasWaited, setHasWaited] = React.useState(false);
    React.useEffect(() => {
        setEditable(false);
    }, [setEditable]);
    timeout_hook.useTimeout(() => {
        setHasWaited(true);
    }, config.PURCHASING_MIN_WAIT_MS);
    // Actual payment mutation & state:
    const [fullPaymentState, fullPayment] = useFullPayment.useFullPayment({
        orgID,
        invoiceID,
        checkoutItems,
        savedPaymentMethods,
        selectedPaymentMethod,
        wallet,
        coinbaseSuccessURL,
        coinbaseErrorURL,
        debug,
    });
    // Load 3DS redirect URL when needed:
    const [redirectURL, setRedirectURL] = React.useState(threeDSEnabled && isCreditCardPayment ? "" : null);
    const skipPaymentNotificationRedirect = !threeDSEnabled ||
        !isCreditCardPayment ||
        !!redirectURL ||
        fullPaymentState.paymentStatus !== "processed";
    const paymentNotificationResult = graphqlGenerated.useGetPaymentNotificationQuery({
        skip: skipPaymentNotificationRedirect,
        pollInterval: config.PAYMENT_NOTIFICATION_INTERVAL_MS,
    });
    const receivedRedirectURL = ((_c = (_b = (_a = paymentNotificationResult.data) === null || _a === void 0 ? void 0 : _a.getPaymentNotification) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.redirectURL) || "";
    React.useEffect(() => {
        if (skipPaymentNotificationRedirect)
            return;
        setRedirectURL((prevRedirectURL) => {
            const nextRedirectURL = prevRedirectURL || receivedRedirectURL;
            if (debug)
                console.log("  👀 getPaymentNotificationQuery", { redirectURL: nextRedirectURL });
            return nextRedirectURL;
        });
    }, [skipPaymentNotificationRedirect, receivedRedirectURL, debug]);
    React.useEffect(() => {
        const { hostedURL } = fullPaymentState;
        if (hostedURL)
            setRedirectURL(hostedURL);
    }, [fullPaymentState]);
    // Triggers for payment mutation and onPurchaseSuccess/onPurchaseError callbacks:
    const fullPaymentCalledRef = React.useRef(false);
    const purchaseSuccessHandledRef = React.useRef(false);
    timeout_hook.useTimeout(() => {
        if (purchaseSuccessHandledRef.current)
            return;
        purchaseSuccessHandledRef.current = true;
        onPurchaseError(errors_constants.ERROR_PURCHASE_TIMEOUT());
    }, redirectURL === null ? null : config.PAYMENT_CREATION_TIMEOUT_MS, [onPurchaseError]);
    React.useEffect(() => {
        if (fullPaymentCalledRef.current)
            return;
        fullPaymentCalledRef.current = true;
        fullPayment(promoCode.id);
    }, [fullPayment, promoCode]);
    React.useEffect(() => {
        const { paymentStatus, paymentMethodID, processorPaymentID, paymentID, paymentError } = fullPaymentState;
        if (paymentStatus === "processing") {
            onDialogBlocked(true);
            return;
        }
        if (paymentStatus === "error" || paymentError) {
            onPurchaseError(paymentError);
            return;
        }
        if (!hasWaited || redirectURL === "" || purchaseSuccessHandledRef.current)
            return;
        purchaseSuccessHandledRef.current = true;
        const skipRedirect = config.DEV_SKIP_PAYMENT_REDIRECT_IN_LOCALHOST ;
        if (redirectURL && !skipRedirect) {
            CheckoutOverlay_utils.persistCheckoutModalInfo({
                orgID,
                invoiceID,
                invoiceCountdownStart,
                processorPaymentID,
                paymentID,
                billingInfo,
                paymentInfo: typeof paymentInfo === "string" ? paymentInfo : paymentMethodID,
                checkoutItems,
            });
        }
        onPurchaseSuccess(processorPaymentID, paymentID, (redirectURL || ""));
    }, [
        fullPaymentState,
        hasWaited,
        isCreditCardPayment,
        redirectURL,
        billingInfo,
        paymentInfo,
        onPurchaseError,
        onDialogBlocked,
        onPurchaseSuccess,
        orgID,
        invoiceID,
        invoiceCountdownStart,
        checkoutItems,
        debug,
    ]);
    // Purchasing Messages:
    const [purchasingMessageIndex, setPurchasingMessageIndex] = React.useState(0);
    interval_hook.useInterval(() => {
        setPurchasingMessageIndex(prevWaitMessageIndex => Math.min(prevWaitMessageIndex + 1, config.PURCHASING_MESSAGES_DEFAULT.length - 1));
    }, config.PURCHASING_MESSAGES_INTERVAL_MS);
    let purchasingMessages = customPurchasingMessages;
    if (purchasingMessages === false) {
        purchasingMessages = [];
    }
    else if (purchasingMessages === undefined || purchasingMessages.length === 0) {
        purchasingMessages = config.PURCHASING_MESSAGES_DEFAULT;
    }
    const purchasingMessage = purchasingMessages[purchasingMessageIndex];
    return (React__default["default"].createElement(Box["default"], null,
        React__default["default"].createElement(StatusIcon.StatusIcon, { variant: "loading", imgSrc: purchasingImageSrc, sx: { mt: 5 } }),
        purchasingMessage ? React__default["default"].createElement(Typography["default"], { variant: "body2", sx: { textAlign: "center", mt: 1.5 } }, purchasingMessage) : null,
        React__default["default"].createElement(Box["default"], { sx: { maxWidth: themeConstants.XS_MOBILE_MAX_WIDTH, mx: "auto", my: 5 } },
            React__default["default"].createElement(Typography["default"], { variant: "body2", sx: { textAlign: "center", mb: 1.5 } }, "Hang tight! We are currently processing your payment."),
            React__default["default"].createElement(Typography["default"], { variant: "body2", sx: { textAlign: "center" } }, "Please, don\u2019t close or reload the page..."))));
};

exports.PurchasingView = PurchasingView;
//# sourceMappingURL=PurchasingView.js.map
