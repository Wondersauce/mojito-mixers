'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
require('@emotion/styled');
require('../../../../node_modules/@emotion/react/dist/emotion-react.esm.js');
require('../../../../node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js');
require('../../../../node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js');
require('../../../../node_modules/@mui/system/esm/borders.js');
require('prop-types');
require('../../../../node_modules/@mui/utils/esm/elementAcceptingRef.js');
require('../../../../node_modules/@mui/utils/esm/elementTypeAcceptingRef.js');
require('react-is');
require('../../../../node_modules/@mui/utils/esm/ponyfillGlobal.js');
require('../../../../node_modules/@mui/utils/esm/refType.js');
var React = require('react');
require('../../../../node_modules/@mui/utils/esm/integerPropType.js');
require('../../../../node_modules/@mui/system/esm/display.js');
require('../../../../node_modules/@mui/system/esm/flexbox.js');
require('../../../../node_modules/@mui/system/esm/grid.js');
require('../../../../node_modules/@mui/system/esm/palette.js');
require('../../../../node_modules/@mui/system/esm/positions.js');
require('../../../../node_modules/@mui/system/esm/shadows.js');
require('../../../../node_modules/@mui/system/esm/sizing.js');
require('../../../../node_modules/@mui/system/esm/spacing.js');
require('../../../../node_modules/@mui/system/esm/responsivePropType.js');
require('../../../../node_modules/@mui/system/esm/typography.js');
require('../../../../node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js');
require('../../../../node_modules/@mui/system/esm/getThemeValue.js');
require('../../../../node_modules/@mui/system/esm/Box/Box.js');
require('../../../../node_modules/@mui/system/esm/useTheme.js');
require('react/jsx-runtime');
require('../../../../node_modules/@mui/system/esm/createStyled.js');
require('../../../../node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js');
require('../../../../node_modules/@mui/private-theming/useTheme/ThemeContext.js');
require('../../../../node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js');
require('../../../../node_modules/@mui/system/esm/Container/createContainer.js');
require('../../../../node_modules/@mui/system/esm/Container/Container.js');
require('../../../../node_modules/@mui/system/esm/Container/containerClasses.js');
require('../../../../node_modules/@mui/base/BadgeUnstyled/BadgeUnstyled.js');
require('../../../../node_modules/@mui/base/BadgeUnstyled/badgeUnstyledClasses.js');
require('../../../../node_modules/@mui/base/ButtonUnstyled/ButtonUnstyled.js');
require('../../../../node_modules/@mui/base/ButtonUnstyled/buttonUnstyledClasses.js');
require('../../../../node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js');
require('../../../../node_modules/@mui/base/FormControlUnstyled/FormControlUnstyled.js');
require('../../../../node_modules/@mui/base/FormControlUnstyled/FormControlUnstyledContext.js');
require('../../../../node_modules/@mui/base/FormControlUnstyled/formControlUnstyledClasses.js');
require('../../../../node_modules/@mui/base/InputUnstyled/InputUnstyled.js');
require('../../../../node_modules/@mui/base/InputUnstyled/inputUnstyledClasses.js');
require('../../../../node_modules/@mui/base/ListboxUnstyled/useListbox.types.js');
require('../../../../node_modules/@mui/base/MenuUnstyled/MenuUnstyled.js');
require('../../../../node_modules/@mui/base/MenuUnstyled/MenuUnstyledContext.js');
require('../../../../node_modules/@mui/base/MenuUnstyled/menuUnstyledClasses.js');
require('../../../../node_modules/@mui/base/MenuItemUnstyled/MenuItemUnstyled.js');
require('../../../../node_modules/@mui/base/MenuItemUnstyled/menuItemUnstyledClasses.js');
require('../../../../node_modules/@mui/base/ModalUnstyled/ModalUnstyled.js');
require('../../../../node_modules/@mui/base/ModalUnstyled/modalUnstyledClasses.js');
require('../../../../node_modules/@mui/base/MultiSelectUnstyled/MultiSelectUnstyled.js');
require('../../../../node_modules/@mui/base/NoSsr/NoSsr.js');
require('../../../../node_modules/@mui/base/OptionGroupUnstyled/OptionGroupUnstyled.js');
require('../../../../node_modules/@mui/base/OptionGroupUnstyled/optionGroupUnstyledClasses.js');
require('../../../../node_modules/@mui/base/OptionUnstyled/OptionUnstyled.js');
require('../../../../node_modules/@mui/base/OptionUnstyled/optionUnstyledClasses.js');
require('../../../../node_modules/@mui/base/PopperUnstyled/PopperUnstyled.js');
require('../../../../node_modules/@mui/base/Portal/Portal.js');
require('../../../../node_modules/@mui/base/SelectUnstyled/SelectUnstyled.js');
require('../../../../node_modules/@mui/base/SelectUnstyled/selectUnstyledClasses.js');
require('../../../../node_modules/@mui/base/SliderUnstyled/SliderUnstyled.js');
require('../../../../node_modules/@mui/base/SliderUnstyled/SliderValueLabelUnstyled.js');
require('../../../../node_modules/@mui/base/SliderUnstyled/sliderUnstyledClasses.js');
require('../../../../node_modules/@mui/base/SwitchUnstyled/SwitchUnstyled.js');
require('../../../../node_modules/@mui/base/SwitchUnstyled/switchUnstyledClasses.js');
require('../../../../node_modules/@mui/base/TabPanelUnstyled/TabPanelUnstyled.js');
require('../../../../node_modules/@mui/base/TabPanelUnstyled/tabPanelUnstyledClasses.js');
require('../../../../node_modules/@mui/base/TabsUnstyled/TabsUnstyled.js');
require('../../../../node_modules/@mui/base/TabsUnstyled/TabsContext.js');
require('../../../../node_modules/@mui/base/TabsUnstyled/tabsUnstyledClasses.js');
require('../../../../node_modules/@mui/base/TabsListUnstyled/TabsListUnstyled.js');
require('../../../../node_modules/@mui/base/TabsListUnstyled/tabsListUnstyledClasses.js');
require('../../../../node_modules/@mui/base/TabUnstyled/TabUnstyled.js');
require('../../../../node_modules/@mui/base/TabUnstyled/tabUnstyledClasses.js');
require('../../../../node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js');
require('../../../../node_modules/@mui/base/TrapFocus/TrapFocus.js');
require('../../../../node_modules/@mui/material/styles/createPalette.js');
require('../../../../node_modules/@mui/material/styles/shadows.js');
require('../../../../node_modules/@mui/material/styles/defaultTheme.js');
require('../../../../node_modules/@mui/material/styles/CssVarsProvider.js');
require('../../../../node_modules/@mui/material/styles/experimental_extendTheme.js');
require('../../../../node_modules/@mui/material/SvgIcon/SvgIcon.js');
require('../../../../node_modules/@mui/material/SvgIcon/svgIconClasses.js');
require('../../../../node_modules/@mui/material/Accordion/Accordion.js');
require('../../../../node_modules/@mui/material/Accordion/accordionClasses.js');
require('../../../../node_modules/@mui/material/AccordionActions/AccordionActions.js');
require('../../../../node_modules/@mui/material/AccordionActions/accordionActionsClasses.js');
require('../../../../node_modules/@mui/material/AccordionDetails/AccordionDetails.js');
require('../../../../node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js');
require('../../../../node_modules/@mui/material/AccordionSummary/AccordionSummary.js');
require('../../../../node_modules/@mui/material/AccordionSummary/accordionSummaryClasses.js');
require('../../../../node_modules/@mui/material/Alert/Alert.js');
require('../../../../node_modules/@mui/material/Alert/alertClasses.js');
require('../../../../node_modules/@mui/material/AlertTitle/AlertTitle.js');
require('../../../../node_modules/@mui/material/AlertTitle/alertTitleClasses.js');
require('../../../../node_modules/@mui/material/AppBar/AppBar.js');
require('../../../../node_modules/@mui/material/AppBar/appBarClasses.js');
require('../../../../node_modules/@mui/material/Autocomplete/Autocomplete.js');
require('../../../../node_modules/@mui/material/Autocomplete/autocompleteClasses.js');
require('../../../../node_modules/@mui/material/Avatar/Avatar.js');
require('../../../../node_modules/@mui/material/Avatar/avatarClasses.js');
require('../../../../node_modules/@mui/material/AvatarGroup/AvatarGroup.js');
require('../../../../node_modules/@mui/material/AvatarGroup/avatarGroupClasses.js');
var Backdrop = require('../../../../node_modules/@mui/material/Backdrop/Backdrop.js');
require('../../../../node_modules/@mui/material/Backdrop/backdropClasses.js');
require('../../../../node_modules/@mui/material/Badge/Badge.js');
require('../../../../node_modules/@mui/material/Badge/badgeClasses.js');
require('../../../../node_modules/@mui/material/BottomNavigation/BottomNavigation.js');
require('../../../../node_modules/@mui/material/BottomNavigation/bottomNavigationClasses.js');
require('../../../../node_modules/@mui/material/BottomNavigationAction/BottomNavigationAction.js');
require('../../../../node_modules/@mui/material/BottomNavigationAction/bottomNavigationActionClasses.js');
require('../../../../node_modules/@mui/material/Box/Box.js');
require('../../../../node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js');
require('../../../../node_modules/@mui/material/Breadcrumbs/breadcrumbsClasses.js');
require('../../../../node_modules/@mui/material/Button/Button.js');
require('../../../../node_modules/@mui/material/Button/buttonClasses.js');
require('../../../../node_modules/@mui/material/ButtonBase/ButtonBase.js');
require('../../../../node_modules/@mui/material/ButtonBase/buttonBaseClasses.js');
require('../../../../node_modules/@mui/material/ButtonBase/touchRippleClasses.js');
require('../../../../node_modules/@mui/material/ButtonGroup/ButtonGroup.js');
require('../../../../node_modules/@mui/material/ButtonGroup/buttonGroupClasses.js');
require('../../../../node_modules/@mui/material/Card/Card.js');
require('../../../../node_modules/@mui/material/Card/cardClasses.js');
require('../../../../node_modules/@mui/material/CardActionArea/CardActionArea.js');
require('../../../../node_modules/@mui/material/CardActionArea/cardActionAreaClasses.js');
require('../../../../node_modules/@mui/material/CardActions/CardActions.js');
require('../../../../node_modules/@mui/material/CardActions/cardActionsClasses.js');
require('../../../../node_modules/@mui/material/CardContent/CardContent.js');
require('../../../../node_modules/@mui/material/CardContent/cardContentClasses.js');
require('../../../../node_modules/@mui/material/CardHeader/CardHeader.js');
require('../../../../node_modules/@mui/material/CardHeader/cardHeaderClasses.js');
require('../../../../node_modules/@mui/material/CardMedia/CardMedia.js');
require('../../../../node_modules/@mui/material/CardMedia/cardMediaClasses.js');
require('../../../../node_modules/@mui/material/Checkbox/Checkbox.js');
require('../../../../node_modules/@mui/material/Checkbox/checkboxClasses.js');
require('../../../../node_modules/@mui/material/Chip/Chip.js');
require('../../../../node_modules/@mui/material/Chip/chipClasses.js');
var CircularProgress = require('../../../../node_modules/@mui/material/CircularProgress/CircularProgress.js');
require('../../../../node_modules/@mui/material/CircularProgress/circularProgressClasses.js');
require('../../../../node_modules/@mui/material/Collapse/Collapse.js');
require('../../../../node_modules/@mui/material/Collapse/collapseClasses.js');
require('../../../../node_modules/@mui/material/Container/Container.js');
require('../../../../node_modules/@mui/material/Container/containerClasses.js');
require('../../../../node_modules/@mui/material/CssBaseline/CssBaseline.js');
require('../../../../node_modules/@mui/material/Dialog/Dialog.js');
require('../../../../node_modules/@mui/material/Dialog/dialogClasses.js');
require('../../../../node_modules/@mui/material/DialogActions/DialogActions.js');
require('../../../../node_modules/@mui/material/DialogActions/dialogActionsClasses.js');
require('../../../../node_modules/@mui/material/DialogContent/DialogContent.js');
require('../../../../node_modules/@mui/material/DialogContent/dialogContentClasses.js');
require('../../../../node_modules/@mui/material/DialogContentText/DialogContentText.js');
require('../../../../node_modules/@mui/material/DialogContentText/dialogContentTextClasses.js');
require('../../../../node_modules/@mui/material/DialogTitle/DialogTitle.js');
require('../../../../node_modules/@mui/material/DialogTitle/dialogTitleClasses.js');
require('../../../../node_modules/@mui/material/Divider/Divider.js');
require('../../../../node_modules/@mui/material/Divider/dividerClasses.js');
require('../../../../node_modules/@mui/material/Drawer/Drawer.js');
require('../../../../node_modules/@mui/material/Drawer/drawerClasses.js');
require('../../../../node_modules/@mui/material/Fab/Fab.js');
require('../../../../node_modules/@mui/material/Fab/fabClasses.js');
require('../../../../node_modules/@mui/material/Fade/Fade.js');
require('../../../../node_modules/@mui/material/FilledInput/FilledInput.js');
require('../../../../node_modules/@mui/material/FilledInput/filledInputClasses.js');
require('../../../../node_modules/@mui/material/FormControl/FormControl.js');
require('../../../../node_modules/@mui/material/FormControl/FormControlContext.js');
require('../../../../node_modules/@mui/material/FormControl/formControlClasses.js');
require('../../../../node_modules/@mui/material/FormControlLabel/FormControlLabel.js');
require('../../../../node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js');
require('../../../../node_modules/@mui/material/FormGroup/FormGroup.js');
require('../../../../node_modules/@mui/material/FormGroup/formGroupClasses.js');
require('../../../../node_modules/@mui/material/FormHelperText/FormHelperText.js');
require('../../../../node_modules/@mui/material/FormHelperText/formHelperTextClasses.js');
require('../../../../node_modules/@mui/material/FormLabel/FormLabel.js');
require('../../../../node_modules/@mui/material/FormLabel/formLabelClasses.js');
require('../../../../node_modules/@mui/material/Grid/Grid.js');
require('../../../../node_modules/@mui/material/Grid/gridClasses.js');
require('../../../../node_modules/@mui/material/Grow/Grow.js');
require('../../../../node_modules/@mui/material/Hidden/Hidden.js');
require('../../../../node_modules/@mui/material/Icon/Icon.js');
require('../../../../node_modules/@mui/material/Icon/iconClasses.js');
require('../../../../node_modules/@mui/material/IconButton/IconButton.js');
require('../../../../node_modules/@mui/material/IconButton/iconButtonClasses.js');
require('../../../../node_modules/@mui/material/ImageList/ImageList.js');
require('../../../../node_modules/@mui/material/ImageList/imageListClasses.js');
require('../../../../node_modules/@mui/material/ImageListItem/ImageListItem.js');
require('../../../../node_modules/@mui/material/ImageListItem/imageListItemClasses.js');
require('../../../../node_modules/@mui/material/ImageListItemBar/ImageListItemBar.js');
require('../../../../node_modules/@mui/material/ImageListItemBar/imageListItemBarClasses.js');
require('../../../../node_modules/@mui/material/Input/Input.js');
require('../../../../node_modules/@mui/material/Input/inputClasses.js');
require('../../../../node_modules/@mui/material/InputAdornment/InputAdornment.js');
require('../../../../node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js');
require('../../../../node_modules/@mui/material/InputBase/InputBase.js');
require('../../../../node_modules/@mui/material/InputBase/inputBaseClasses.js');
require('../../../../node_modules/@mui/material/InputLabel/InputLabel.js');
require('../../../../node_modules/@mui/material/InputLabel/inputLabelClasses.js');
require('../../../../node_modules/@mui/material/LinearProgress/LinearProgress.js');
require('../../../../node_modules/@mui/material/LinearProgress/linearProgressClasses.js');
require('../../../../node_modules/@mui/material/Link/Link.js');
require('../../../../node_modules/@mui/material/Link/linkClasses.js');
require('../../../../node_modules/@mui/material/List/List.js');
require('../../../../node_modules/@mui/material/List/listClasses.js');
require('../../../../node_modules/@mui/material/ListItem/ListItem.js');
require('../../../../node_modules/@mui/material/ListItem/listItemClasses.js');
require('../../../../node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js');
require('../../../../node_modules/@mui/material/ListItemAvatar/listItemAvatarClasses.js');
require('../../../../node_modules/@mui/material/ListItemButton/ListItemButton.js');
require('../../../../node_modules/@mui/material/ListItemButton/listItemButtonClasses.js');
require('../../../../node_modules/@mui/material/ListItemIcon/ListItemIcon.js');
require('../../../../node_modules/@mui/material/ListItemIcon/listItemIconClasses.js');
require('../../../../node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js');
require('../../../../node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.js');
require('../../../../node_modules/@mui/material/ListItemText/ListItemText.js');
require('../../../../node_modules/@mui/material/ListItemText/listItemTextClasses.js');
require('../../../../node_modules/@mui/material/ListSubheader/ListSubheader.js');
require('../../../../node_modules/@mui/material/ListSubheader/listSubheaderClasses.js');
require('../../../../node_modules/@mui/material/Menu/Menu.js');
require('../../../../node_modules/@mui/material/Menu/menuClasses.js');
require('../../../../node_modules/@mui/material/MenuItem/MenuItem.js');
require('../../../../node_modules/@mui/material/MenuItem/menuItemClasses.js');
require('../../../../node_modules/@mui/material/MenuList/MenuList.js');
require('../../../../node_modules/@mui/material/MobileStepper/MobileStepper.js');
require('../../../../node_modules/@mui/material/MobileStepper/mobileStepperClasses.js');
require('../../../../node_modules/@mui/material/Modal/Modal.js');
require('../../../../node_modules/@mui/material/NativeSelect/NativeSelect.js');
require('../../../../node_modules/@mui/material/NativeSelect/nativeSelectClasses.js');
require('../../../../node_modules/@mui/material/OutlinedInput/OutlinedInput.js');
require('../../../../node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js');
require('../../../../node_modules/@mui/material/Pagination/Pagination.js');
require('../../../../node_modules/@mui/material/Pagination/paginationClasses.js');
require('../../../../node_modules/@mui/material/PaginationItem/PaginationItem.js');
require('../../../../node_modules/@mui/material/PaginationItem/paginationItemClasses.js');
require('../../../../node_modules/@mui/material/Paper/Paper.js');
require('../../../../node_modules/@mui/material/Paper/paperClasses.js');
require('../../../../node_modules/@mui/material/Popover/Popover.js');
require('../../../../node_modules/@mui/material/Popover/popoverClasses.js');
require('../../../../node_modules/@mui/material/Popper/Popper.js');
require('../../../../node_modules/@mui/material/Radio/Radio.js');
require('../../../../node_modules/@mui/material/Radio/radioClasses.js');
require('../../../../node_modules/@mui/material/RadioGroup/RadioGroup.js');
require('../../../../node_modules/@mui/material/RadioGroup/RadioGroupContext.js');
require('../../../../node_modules/@mui/material/Rating/Rating.js');
require('../../../../node_modules/@mui/material/Rating/ratingClasses.js');
require('../../../../node_modules/@mui/material/ScopedCssBaseline/ScopedCssBaseline.js');
require('../../../../node_modules/@mui/material/ScopedCssBaseline/scopedCssBaselineClasses.js');
require('../../../../node_modules/@mui/material/Select/Select.js');
require('../../../../node_modules/@mui/material/Select/selectClasses.js');
require('../../../../node_modules/@mui/material/Skeleton/Skeleton.js');
require('../../../../node_modules/@mui/material/Skeleton/skeletonClasses.js');
require('../../../../node_modules/@mui/material/Slide/Slide.js');
require('../../../../node_modules/@mui/material/Slider/Slider.js');
require('../../../../node_modules/@mui/material/Snackbar/Snackbar.js');
require('../../../../node_modules/@mui/material/Snackbar/snackbarClasses.js');
require('../../../../node_modules/@mui/material/SnackbarContent/SnackbarContent.js');
require('../../../../node_modules/@mui/material/SnackbarContent/snackbarContentClasses.js');
require('../../../../node_modules/@mui/material/SpeedDial/SpeedDial.js');
require('../../../../node_modules/@mui/material/SpeedDial/speedDialClasses.js');
require('../../../../node_modules/@mui/material/SpeedDialAction/SpeedDialAction.js');
require('../../../../node_modules/@mui/material/SpeedDialAction/speedDialActionClasses.js');
require('../../../../node_modules/@mui/material/SpeedDialIcon/SpeedDialIcon.js');
require('../../../../node_modules/@mui/material/SpeedDialIcon/speedDialIconClasses.js');
require('../../../../node_modules/@mui/material/Stack/Stack.js');
require('../../../../node_modules/@mui/material/Step/Step.js');
require('../../../../node_modules/@mui/material/Step/stepClasses.js');
require('../../../../node_modules/@mui/material/Step/StepContext.js');
require('../../../../node_modules/@mui/material/StepButton/StepButton.js');
require('../../../../node_modules/@mui/material/StepButton/stepButtonClasses.js');
require('../../../../node_modules/@mui/material/StepConnector/StepConnector.js');
require('../../../../node_modules/@mui/material/StepConnector/stepConnectorClasses.js');
require('../../../../node_modules/@mui/material/StepContent/StepContent.js');
require('../../../../node_modules/@mui/material/StepContent/stepContentClasses.js');
require('../../../../node_modules/@mui/material/StepIcon/StepIcon.js');
require('../../../../node_modules/@mui/material/StepIcon/stepIconClasses.js');
require('../../../../node_modules/@mui/material/StepLabel/StepLabel.js');
require('../../../../node_modules/@mui/material/StepLabel/stepLabelClasses.js');
require('../../../../node_modules/@mui/material/Stepper/Stepper.js');
require('../../../../node_modules/@mui/material/Stepper/stepperClasses.js');
require('../../../../node_modules/@mui/material/Stepper/StepperContext.js');
require('../../../../node_modules/@mui/material/SwipeableDrawer/SwipeableDrawer.js');
require('../../../../node_modules/@mui/material/Switch/Switch.js');
require('../../../../node_modules/@mui/material/Switch/switchClasses.js');
require('../../../../node_modules/@mui/material/Tab/Tab.js');
require('../../../../node_modules/@mui/material/Tab/tabClasses.js');
require('../../../../node_modules/@mui/material/Table/Table.js');
require('../../../../node_modules/@mui/material/Table/tableClasses.js');
require('../../../../node_modules/@mui/material/TableBody/TableBody.js');
require('../../../../node_modules/@mui/material/TableBody/tableBodyClasses.js');
require('../../../../node_modules/@mui/material/TableCell/TableCell.js');
require('../../../../node_modules/@mui/material/TableCell/tableCellClasses.js');
require('../../../../node_modules/@mui/material/TableContainer/TableContainer.js');
require('../../../../node_modules/@mui/material/TableContainer/tableContainerClasses.js');
require('../../../../node_modules/@mui/material/TableFooter/TableFooter.js');
require('../../../../node_modules/@mui/material/TableFooter/tableFooterClasses.js');
require('../../../../node_modules/@mui/material/TableHead/TableHead.js');
require('../../../../node_modules/@mui/material/TableHead/tableHeadClasses.js');
require('../../../../node_modules/@mui/material/TablePagination/TablePagination.js');
require('../../../../node_modules/@mui/material/TablePagination/tablePaginationClasses.js');
require('../../../../node_modules/@mui/material/TableRow/TableRow.js');
require('../../../../node_modules/@mui/material/TableRow/tableRowClasses.js');
require('../../../../node_modules/@mui/material/TableSortLabel/TableSortLabel.js');
require('../../../../node_modules/@mui/material/TableSortLabel/tableSortLabelClasses.js');
require('../../../../node_modules/@mui/material/Tabs/Tabs.js');
require('../../../../node_modules/@mui/material/Tabs/tabsClasses.js');
require('../../../../node_modules/@mui/material/TabScrollButton/TabScrollButton.js');
require('../../../../node_modules/@mui/material/TabScrollButton/tabScrollButtonClasses.js');
require('../../../../node_modules/@mui/material/TextField/TextField.js');
require('../../../../node_modules/@mui/material/TextField/textFieldClasses.js');
require('../../../../node_modules/@mui/material/ToggleButton/ToggleButton.js');
require('../../../../node_modules/@mui/material/ToggleButton/toggleButtonClasses.js');
require('../../../../node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js');
require('../../../../node_modules/@mui/material/ToggleButtonGroup/toggleButtonGroupClasses.js');
require('../../../../node_modules/@mui/material/Toolbar/Toolbar.js');
require('../../../../node_modules/@mui/material/Toolbar/toolbarClasses.js');
require('../../../../node_modules/@mui/material/Tooltip/Tooltip.js');
require('../../../../node_modules/@mui/material/Tooltip/tooltipClasses.js');
require('../../../../node_modules/@mui/material/Typography/Typography.js');
require('../../../../node_modules/@mui/material/Typography/typographyClasses.js');
require('../../../../node_modules/@mui/material/Zoom/Zoom.js');
require('../../../../node_modules/@mui/material/GlobalStyles/GlobalStyles.js');
var circle_utils = require('../../../domain/circle/circle.utils.js');
var graphqlGenerated = require('../../../queries/graphqlGenerated.js');
var AuthenticationView = require('../../../views/Authentication/AuthenticationView.js');
var BillingView = require('../../../views/Billing/BillingView.js');
var ConfirmationView = require('../../../views/Confirmation/ConfirmationView.js');
var PaymentView = require('../../../views/Payment/PaymentView.js');
var CheckoutModalHeader = require('../../payments/CheckoutModalHeader/CheckoutModalHeader.js');
var PurchasingView = require('../../../views/Purchasing/PurchasingView.js');
var ErrorView = require('../../../views/Error/ErrorView.js');
var usePlaid = require('../../../hooks/usePlaid.js');
var CheckoutOverlay_hooks = require('./CheckoutOverlay.hooks.js');
var errors_constants = require('../../../domain/errors/errors.constants.js');
var FullScreenOverlay = require('../../shared/FullScreenOverlay/FullScreenOverlay.js');
var ProvidersInjector = require('../../shared/ProvidersInjector/ProvidersInjector.js');
var product_utils = require('../../../domain/product/product.utils.js');
var useCreateInvoiceAndReservation = require('../../../hooks/useCreateInvoiceAndReservation.js');
var useCheckoutItemCostTotal = require('../../../hooks/useCheckoutItemCostTotal.js');
var DictionaryProvider = require('../../../providers/DictionaryProvider.js');
var config = require('../../../config/config.js');
var wallet_constants = require('../../../domain/wallet/wallet.constants.js');
var StatusIcon = require('../../shared/StatusIcon/StatusIcon.js');
var StaticSuccessOverlay = require('../SuccessOverlay/StaticSuccessOverlay.js');
var StaticErrorOverlay = require('../ErrorOverlay/StaticErrorOverlay.js');
var useContdown = require('../../../hooks/useContdown.js');
var url_utils = require('../../../domain/url/url.utils.js');
var build_constants = require('../../../domain/build/build.constants.js');
var promoCodeUtils = require('../../../utils/promoCodeUtils.js');
var useFullPayment = require('../../../hooks/useFullPayment.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const DEV_DEBUG_ENABLED = build_constants.IS_BROWSER && localStorage.getItem(config.DEV_DEBUG_ENABLED_KEY) === "true";
const PUICheckoutOverlay = ({ 
// Modal:
open, onClose, onGoTo, 
// Flow:
loaderMode: initialLoaderMode = "default", paymentIdParam, paymentErrorParam, guestCheckoutEnabled, productConfirmationEnabled, vertexEnabled = true, threeDSEnabled = true, coinbaseSuccessURL, coinbaseErrorURL, 
// Personalization:
logoSrc, logoSx, loaderImageSrc, purchasingImageSrc, purchasingMessages, successImageSrc, errorImageSrc, userFormat, acceptedPaymentTypes = ["CreditCard"], acceptedCreditCardNetworks, network, dictionary: parentDictionary, 
// Legal:
consentType, 
// Data:
orgID: parentOrgID, invoiceID: parentInvoiceID, checkoutItems: parentCheckoutItems, 
// Authentication:
onLogin, isAuthenticated, isAuthenticatedLoading, 
// Other Events:
debug: parentDebug, onEvent, onError, }) => {
    var _a, _b, _c;
    const [debug, setDebug] = React.useState(!!parentDebug);
    // Initialization, just to prevent issues with Next.js' SSR:
    React.useEffect(() => {
        setDebug((prevDebug) => {
            const nextDebug = prevDebug || DEV_DEBUG_ENABLED;
            if (nextDebug)
                console.log("\n🐞 DEBUG MODE ENABLED!\n\n");
            return nextDebug;
        });
    }, []);
    // Actual changes triggered by users:
    const toggleDebug = React.useCallback(() => {
        setDebug((prevDebug) => {
            const nextDebug = !prevDebug;
            console.log(`\n🐞 DEBUG MODE ${nextDebug ? "ENABLED" : "DISABLED"}!\n\n`);
            if (nextDebug) {
                localStorage.setItem(config.DEV_DEBUG_ENABLED_KEY, "true");
            }
            else {
                localStorage.removeItem(config.DEV_DEBUG_ENABLED_KEY);
            }
            return nextDebug;
        });
    }, []);
    // First, get user data:
    const { data: meData, loading: meLoading, error: meError, refetch: meRefetch, } = graphqlGenerated.useMeQuery({ skip: !isAuthenticated });
    const wallets = React.useMemo(() => {
        var _a;
        if (meLoading || !meData)
            return undefined;
        const userWallets = ((_a = meData.me) === null || _a === void 0 ? void 0 : _a.wallets) || [];
        return network
            ? userWallets.filter(wallet => { var _a; return ((_a = wallet === null || wallet === void 0 ? void 0 : wallet.network) === null || _a === void 0 ? void 0 : _a.id) === network.id; })
            : userWallets;
    }, [meLoading, meData, network]);
    // Get everything related to Payment UI routing, error and state handling, including resuming Plaid / 3DS flows:
    const paymentIdParamRef = React.useRef(paymentIdParam);
    const paymentErrorParamRef = React.useRef(paymentErrorParam);
    const { 
    // CheckoutModalState:
    startAt, checkoutStep, checkoutError, isDialogBlocked, setIsDialogBlocked, initModalState, goBack, goNext, goTo, setError, 
    // Data that can be persisted:
    orgID, checkoutItems: initialCheckoutItems, goToMarketplaceHref, 
    // SelectedPaymentMethod:
    selectedPaymentMethod, setSelectedPaymentMethod, 
    // PurchaseState:
    invoiceID, invoiceCountdownStart, setInvoiceID, taxes, setTaxes, wallet, setWalletAddress, paymentID, processorPaymentID, setPayments, } = CheckoutOverlay_hooks.useCheckoutModalState({
        orgID: parentOrgID,
        invoiceID: parentInvoiceID,
        paymentIdParam: paymentIdParamRef.current,
        productConfirmationEnabled,
        vertexEnabled,
        isAuthenticated,
        onError,
        debug,
    });
    const dictionary = React.useMemo(() => (Object.assign(Object.assign({}, parentDictionary), { goToMarketplaceHref })), [parentDictionary, goToMarketplaceHref]);
    // Get saved payment methods:
    const { data: paymentMethodsData, loading: paymentMethodsLoading, error: paymentMethodsError, refetch: refetchPaymentMethods, } = graphqlGenerated.useGetPaymentMethodListQuery({
        skip: !isAuthenticated || !orgID || !open,
        variables: { orgID },
    });
    const handleSavedPaymentMethodsReloaded = React.useCallback(() => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        yield refetchPaymentMethods({ orgID }).catch(() => { });
    }), [refetchPaymentMethods, orgID]);
    // Once we have an invoiceID, load the invoice:
    const { data: invoiceDetailsData, loading: invoiceDetailsLoading, error: invoiceDetailsError, refetch: refetchInvoiceDetails, } = graphqlGenerated.useGetInvoiceDetailsQuery({
        skip: !invoiceID,
        variables: { invoiceID },
    });
    // Payment methods and checkout items / invoice items transforms:
    const rawSavedPaymentMethods = paymentMethodsData === null || paymentMethodsData === void 0 ? void 0 : paymentMethodsData.getPaymentMethodList;
    const savedPaymentMethods = React.useMemo(() => circle_utils.transformRawSavedPaymentMethods(rawSavedPaymentMethods), [rawSavedPaymentMethods]);
    const invoiceItems = invoiceDetailsData === null || invoiceDetailsData === void 0 ? void 0 : invoiceDetailsData.getInvoiceDetails.items;
    const destinationAddress = ((_b = (_a = (invoiceItems || [])) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.destinationAddress) || wallet_constants.NEW_WALLET_OPTION.value;
    React.useEffect(() => {
        if (!destinationAddress)
            return;
        const nextWallet = (wallets || []).find(({ address }) => address === destinationAddress);
        setWalletAddress(nextWallet || destinationAddress);
    }, [wallets, destinationAddress, setWalletAddress]);
    // TODO: These should probably be combined.
    const checkoutItems = React.useMemo(() => {
        return product_utils.transformCheckoutItemsFromInvoice(parentCheckoutItems, initialCheckoutItems, invoiceItems);
    }, [parentCheckoutItems, initialCheckoutItems, invoiceItems]);
    const { total: subtotal, fees, taxAmount } = useCheckoutItemCostTotal.useCheckoutItemsCostTotal(checkoutItems);
    // Modal loading state:
    const isAuthLoading = isAuthenticatedLoading || meLoading;
    const isDialogLoading = isAuthLoading || paymentMethodsLoading || !orgID || checkoutItems.length === 0;
    const isDialogInitializing = isDialogLoading || paymentMethodsLoading || invoiceDetailsLoading || !invoiceID || !invoiceCountdownStart;
    const isPlaidFlowLoading = usePlaid.continuePlaidOAuthFlow();
    const [loaderMode, setLoaderMode] = React.useState(initialLoaderMode);
    const showEspecialLoaders = open && isDialogInitializing && loaderMode !== "default" && checkoutStep !== "error";
    React.useEffect(() => {
        if (loaderMode === "default")
            return;
        if (!isDialogInitializing || !open) {
            // Once we have finished loading data OR if the modal is not opened (probably
            // because the stored data expired) or is closed, we reset the loader mode:
            setLoaderMode("default");
        }
    }, [loaderMode, isDialogInitializing, open]);
    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        params.delete(config.THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY);
        params.delete(config.THREEDS_FLOW_SEARCH_PARAM_ERROR_KEY);
        const cleanParams = params.toString();
        const cleanPathname = `${window.location.pathname}${cleanParams ? `?${cleanParams}` : ""}`;
        if (cleanPathname && cleanPathname !== url_utils.getPathnameWithParams()) {
            // As soon as we find these params, we remove them from the URL (they are stored in a Ref to avoid losing them
            // before we get a change to use them):
            onGoTo(cleanPathname, { replace: true, shallow: true, reason: "Clean URL." });
        }
    }, [onGoTo]);
    // Invoice creation & buy now lot reservation:
    const createInvoiceAndReservationCalledRef = React.useRef(false);
    const { 
    // TODO: Instead of returning state, just pass setError and setInvoiceID or return it from createInvoiceAndReservation.
    invoiceAndReservationState, createInvoiceAndReservation, } = useCreateInvoiceAndReservation.useCreateInvoiceAndReservation({ orgID, checkoutItems, debug });
    React.useEffect(() => {
        if (isDialogLoading || invoiceID === null || invoiceID || createInvoiceAndReservationCalledRef.current)
            return;
        createInvoiceAndReservationCalledRef.current = true;
        createInvoiceAndReservation();
    }, [isDialogLoading, invoiceID, createInvoiceAndReservation]);
    React.useEffect(() => {
        const { invoiceID: nextInvoiceID, invoiceCountdownStart: nextInvoiceCountdownStart, error } = invoiceAndReservationState;
        if (error) {
            // TODO: It would be great if we can keep track of the reservation expiration without changing the displayed error
            // if there's already once, so when clicking the action button for that one, on top of calling its respective error
            // handling code, we re-create the reservation:
            setError(error);
            return;
        }
        if (nextInvoiceID && nextInvoiceCountdownStart)
            setInvoiceID(nextInvoiceID, nextInvoiceCountdownStart);
    }, [invoiceAndReservationState, setError, setInvoiceID]);
    // Reservation countdown:
    const { countdownElementRef } = useContdown.useCountdown({
        invoiceCountdownStart: checkoutStep === "confirmation" || checkoutStep === "error" ? null : invoiceCountdownStart,
        setError,
    });
    // Init modal state once everything has been loaded:
    const hasBeenInitRef = React.useRef(false);
    React.useEffect(() => {
        if (hasBeenInitRef.current && (!open || isAuthLoading))
            hasBeenInitRef.current = false;
    }, [open, isAuthLoading, debug]);
    React.useEffect(() => {
        if (!open || isAuthLoading || hasBeenInitRef.current)
            return;
        if ((loaderMode === "default" && !isDialogLoading) || (loaderMode !== "default" && isDialogLoading)) {
            hasBeenInitRef.current = true;
            const { flowType, url } = initModalState();
            if (flowType === "" && loaderMode !== "default") {
                onGoTo(url || "/", { replace: true, reason: "Invalid modal state." });
            }
        }
    }, [open, isAuthLoading, loaderMode, isDialogLoading, initModalState, onGoTo]);
    // Data loading error handling:
    React.useEffect(() => {
        if (meError)
            setError(errors_constants.ERROR_LOADING_USER(meError));
        if (invoiceDetailsError)
            setError(errors_constants.ERROR_LOADING_INVOICE(invoiceDetailsError));
        // This one doesn't show the ErrorView. Instead, it's displayed inline in the BillingView > BillingInfoForm:
        if (paymentMethodsError)
            goTo(undefined, errors_constants.ERROR_LOADING_PAYMENT_METHODS(paymentMethodsError));
    }, [meError, invoiceDetailsError, paymentMethodsError, debug, goTo, setError]);
    // Analytics:
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const triggerAnalyticsEventRef = React.useRef((eventType) => { });
    triggerAnalyticsEventRef.current = (eventType) => {
        if (!onEvent || !open)
            return;
        const { paymentInfo } = selectedPaymentMethod;
        let paymentType;
        if (typeof paymentInfo === "string") {
            const payment = savedPaymentMethods.find(({ id }) => id === paymentInfo);
            paymentType = payment === null || payment === void 0 ? void 0 : payment.type;
        }
        else if (paymentInfo) {
            paymentType = paymentInfo.type;
        }
        if (!eventType.startsWith("event:") && !eventType.includes(checkoutStep)) {
            if (debug)
                console.log(`⚠️ eventType / checkoutStep mismatch: ${eventType} / ${checkoutStep}`);
            return;
        }
        onEvent(eventType, {
            // Location:
            step: CheckoutOverlay_hooks.CheckoutModalStepIndex[checkoutStep],
            stepName: checkoutStep,
            // Purchase:
            departmentCategory: "NFT",
            paymentType,
            shippingMethod: typeof wallet === "object" ? "multisig wallet" : "custom wallet",
            checkoutItems,
            // Payment:
            currency: "USD",
            revenue: subtotal + fees,
            fees,
            tax: taxAmount,
            total: subtotal + fees + taxAmount,
            // Order:
            processorPaymentID,
            paymentID,
        });
    };
    React.useEffect(() => {
        // Original code (might this be causing the mismatch eventName / checkoutStep issue?):
        if (!isDialogInitializing)
            setTimeout(() => triggerAnalyticsEventRef.current(`navigate:${checkoutStep}`));
        // Possible fix (might this cause some other issues such as missing data):
        // if (!isDialogInitializing) triggerAnalyticsEventRef.current(`navigate:${ checkoutStep }`);
    }, [isDialogInitializing, checkoutStep]);
    // Saved payment method creation-reload-sync:
    React.useEffect(() => {
        if (savedPaymentMethods.length === 0)
            return;
        // When reloading the saved payment methods after an error, we might have form data that matches a payment method
        // that has just been created, so we want to update it to reference the existing one:
        setSelectedPaymentMethod((prevSelectedPaymentMethod) => {
            const { billingInfo, paymentInfo } = prevSelectedPaymentMethod;
            if (typeof billingInfo === "string" && typeof paymentInfo === "string")
                return Object.assign(Object.assign({}, prevSelectedPaymentMethod), { cvv: "" });
            // To find the saved payment method(s) that was/were last used (potentially also created):
            const lastPaymentMethodID = useFullPayment.getLastPaymentMethodID();
            const matchingPaymentMethod = savedPaymentMethods.find(paymentMethod => paymentMethod.id === lastPaymentMethodID);
            return {
                billingInfo: (matchingPaymentMethod === null || matchingPaymentMethod === void 0 ? void 0 : matchingPaymentMethod.addressId) || "",
                paymentInfo: (matchingPaymentMethod === null || matchingPaymentMethod === void 0 ? void 0 : matchingPaymentMethod.id) || "",
                paymentType: (matchingPaymentMethod === null || matchingPaymentMethod === void 0 ? void 0 : matchingPaymentMethod.type) || "",
                cvv: "",
            };
        });
    }, [savedPaymentMethods, setSelectedPaymentMethod]);
    // Form data / state:
    const handleBillingInfoSelected = React.useCallback((billingInfo) => {
        // If we go back to the billing info step to fix some validation errors or change some data, we preserve the data
        // in the payment info step (form) as long as it was not a saved payment method. In that case, the saved payment
        // method doesn't belong to the now updated billing info anymore, so we do reset it:
        setSelectedPaymentMethod(({ paymentInfo }) => ({ billingInfo, paymentInfo: typeof paymentInfo === "object" ? paymentInfo : "", paymentType: "", cvv: "" }));
    }, [setSelectedPaymentMethod]);
    const handlePaymentInfoSelected = React.useCallback((paymentInfo) => {
        var _a;
        const paymentType = typeof paymentInfo === "string"
            ? (((_a = savedPaymentMethods.find(({ id }) => id === paymentInfo)) === null || _a === void 0 ? void 0 : _a.type) || "")
            : paymentInfo.type;
        setSelectedPaymentMethod(({ billingInfo }) => ({ billingInfo, paymentInfo, paymentType, cvv: "" }));
    }, [savedPaymentMethods, setSelectedPaymentMethod]);
    const handleCvvSelected = React.useCallback((cvv) => {
        setSelectedPaymentMethod(({ billingInfo, paymentInfo }) => ({ billingInfo, paymentInfo, paymentType: "CreditCard", cvv }));
    }, [setSelectedPaymentMethod]);
    // Delete payment methods:
    const [deletePaymentMethod] = graphqlGenerated.useDeletePaymentMethodMutation();
    const handleSavedPaymentMethodDeleted = React.useCallback((addressIdOrPaymentMethodId) => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        const idsToDelete = (checkoutStep === "billing"
            ? savedPaymentMethods.filter(({ addressId }) => addressId === addressIdOrPaymentMethodId).map(({ id }) => id)
            : [addressIdOrPaymentMethodId]).filter(Boolean);
        if (idsToDelete.length === 0)
            return;
        // DELETE LOGIC:
        // We are in BILLING (logic handled in BillingView.tsx):
        // - Delete last payment method => Show form.
        // - Delete payment method, but there's more => Re-set selected address.
        // We are in PAYMENT (logic handled in PaymentView.tsx and below):
        // - Delete last payment method (or last payment method for the selected address) => Expand address and show form.
        // - Delete payment method, but there's more => Re-set selected payment.
        if (checkoutStep === "payment") {
            const addressToDelete = savedPaymentMethods.find(({ id }) => id === addressIdOrPaymentMethodId);
            const addressIdToDelete = addressToDelete === null || addressToDelete === void 0 ? void 0 : addressToDelete.addressId;
            const paymentMethodsWithSameAddress = savedPaymentMethods.filter(({ addressId }) => addressId === addressIdToDelete);
            if (addressToDelete && paymentMethodsWithSameAddress.length === 1) {
                setSelectedPaymentMethod({
                    // The payment method that had the selected address is being deleted, so we just copy its data as an object to
                    // re-create it with the new payment information:
                    billingInfo: circle_utils.savedPaymentMethodToBillingInfo(addressToDelete),
                    paymentInfo: "",
                    paymentType: "",
                    cvv: "",
                });
            }
        }
        const promises = idsToDelete.map((paymentMethodID) => {
            return deletePaymentMethod({
                variables: {
                    orgID,
                    paymentMethodID,
                },
            });
        });
        yield Promise.allSettled(promises);
        yield handleSavedPaymentMethodsReloaded();
    }), [checkoutStep, deletePaymentMethod, orgID, savedPaymentMethods, setSelectedPaymentMethod, handleSavedPaymentMethodsReloaded]);
    // Purchase:
    const handlePurchaseSuccess = React.useCallback((nextCirclePaymentID, nextPaymentID, redirectURL) => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        setPayments(nextCirclePaymentID, nextPaymentID);
        setTimeout(() => triggerAnalyticsEventRef.current("event:paymentSuccess"));
        if (redirectURL) {
            setTimeout(() => {
                if (debug)
                    console.log(`Redirecting to payment success page = ${redirectURL}`);
                window.location.href = redirectURL;
            }, config.THREEDS_REDIRECT_DELAY_MS);
            return;
        }
        // After a successful purchase, a new payment method might have been created, so we reload them:
        yield handleSavedPaymentMethodsReloaded();
        goNext();
    }), [setPayments, debug, handleSavedPaymentMethodsReloaded, goNext]);
    const handlePurchaseError = React.useCallback((error) => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        setTimeout(() => triggerAnalyticsEventRef.current("event:paymentError"));
        // After a failed purchase, a new payment method might have been created anyway, so we reload them (createPaymentMethod
        // works but createPayment fails):
        yield handleSavedPaymentMethodsReloaded();
        setError(error);
    }), [handleSavedPaymentMethodsReloaded, setError]);
    // Release reservation:
    const lastReleasedReservationID = React.useRef("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleBeforeUnloadRef = React.useRef((e) => { });
    const [releaseReservationBuyNowLot] = graphqlGenerated.useReleaseReservationBuyNowLotMutation({
        variables: {
            orgID,
            invoiceID,
        },
    });
    const handleBeforeUnload = handleBeforeUnloadRef.current = React.useCallback((e) => {
        if (paymentID || processorPaymentID || parentInvoiceID)
            return;
        if (orgID && invoiceID && invoiceID !== lastReleasedReservationID.current) {
            if (debug)
                console.log(`\n♻️ Releasing reservation invoice ${invoiceID} (orgID = ${orgID})...\n`);
            releaseReservationBuyNowLot().then((result) => {
                lastReleasedReservationID.current = invoiceID;
                if (debug)
                    console.log("  🟢 releaseReservationBuyNowLot result", result);
            }).catch((error) => {
                if (debug)
                    console.log("  🔴 releaseReservationBuyNowLot error", error);
            });
        }
        if (e) {
            // TODO: We might want to implement close tab confirmations at some point:
            // If you prevent default behavior in Mozilla Firefox prompt will always be shown:
            // e.preventDefault();
            // Chrome requires returnValue to be set:
            // e.returnValue = '';
            // The absence of a returnValue property on the event will guarantee the browser unload happens:
            // eslint-disable-next-line no-param-reassign
            delete e.returnValue;
        }
    }, [paymentID, processorPaymentID, parentInvoiceID, orgID, invoiceID, debug, releaseReservationBuyNowLot]);
    React.useEffect(() => {
        if ((checkoutError === null || checkoutError === void 0 ? void 0 : checkoutError.at) === "reset")
            handleBeforeUnloadRef.current();
    }, [checkoutError]);
    React.useEffect(() => {
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [handleBeforeUnload]);
    const handleClose = React.useCallback(() => {
        if (!onClose)
            return;
        window.removeEventListener("beforeunload", handleBeforeUnload);
        handleBeforeUnload();
        createInvoiceAndReservationCalledRef.current = false;
        setInvoiceID(null, null);
        onClose();
    }, [handleBeforeUnload, setInvoiceID, onClose]);
    const handleGoTo = React.useCallback((pathnameOrUrlParam) => {
        const pathnameOrUrl = pathnameOrUrlParam || "/";
        if (pathnameOrUrl === window.location.href || pathnameOrUrl === window.location.pathname) {
            handleClose();
            return;
        }
        window.removeEventListener("beforeunload", handleBeforeUnload);
        handleBeforeUnload();
        onGoTo(pathnameOrUrl, { replace: true });
    }, [handleClose, handleBeforeUnload, onGoTo]);
    const handlePurchaseCompleted = React.useCallback(() => {
        handleGoTo(goToMarketplaceHref);
    }, [handleGoTo, goToMarketplaceHref]);
    // Error handling:
    const handleFixError = React.useCallback(() => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        const at = checkoutError === null || checkoutError === void 0 ? void 0 : checkoutError.at;
        if (at === "close") {
            handleClose();
        }
        else if (at === "reset") {
            yield Promise.allSettled([
                meRefetch(),
                handleSavedPaymentMethodsReloaded(),
                createInvoiceAndReservation(),
            ]);
            // TODO: Cancel previous reservation?
            goTo();
        }
        else {
            // After an error, all data is reloaded in case the issue was caused by stale/cached data or in case a new payment
            // method has been created despite the error:
            yield Promise.allSettled([
                meRefetch(),
                handleSavedPaymentMethodsReloaded(),
                refetchInvoiceDetails(),
            ]);
            if (at !== "purchasing") {
                // If we are redirecting users to the PurchasingView again, we keep the CVV to be able to re-try the purchase:
                setSelectedPaymentMethod(prevSelectedPaymentMethod => (Object.assign(Object.assign({}, prevSelectedPaymentMethod), { cvv: "" })));
            }
            goTo(at, checkoutError);
        }
        // This function is used as a CheckoutModalFooter's onSubmitClicked, so we want that to show a loader on the submit
        // button when clicked but do not remove it once the Promise is resolved, as we are moving to another view and
        // CheckoutModalFooter will unmount (so doing this prevents a memory leak issue):
        return false;
    }), [
        checkoutError,
        handleClose,
        meRefetch,
        handleSavedPaymentMethodsReloaded,
        createInvoiceAndReservation,
        goTo,
        refetchInvoiceDetails,
        setSelectedPaymentMethod,
    ]);
    // Plaid integration (resume Plaid flow):
    const handlePlaidFlowCompleted = React.useCallback((paymentInfo) => {
        if (!paymentInfo) {
            initModalState();
            return;
        }
        handlePaymentInfoSelected(paymentInfo);
        goTo("purchasing");
    }, [initModalState, handlePaymentInfoSelected, goTo]);
    // Loading UI:
    if (showEspecialLoaders && loaderMode === "success") {
        return (React__default["default"].createElement(StaticSuccessOverlay.PUIStaticSuccessOverlay
        // TODO: Add to dictionary:
        , { 
            // TODO: Add to dictionary:
            successImageSrc: successImageSrc, logoSrc: logoSrc, logoSx: logoSx }));
    }
    if (showEspecialLoaders && loaderMode === "error") {
        return (React__default["default"].createElement(StaticErrorOverlay.PUIStaticErrorOverlay, { checkoutError: { errorMessage: paymentErrorParamRef.current || "" }, 
            // TODO: Add to dictionary:
            errorImageSrc: errorImageSrc, logoSrc: logoSrc, logoSx: logoSx }));
    }
    if ((isDialogInitializing || isPlaidFlowLoading) && (checkoutStep !== "error")) {
        return (React__default["default"].createElement(React__default["default"].Fragment, null,
            isPlaidFlowLoading && React__default["default"].createElement(usePlaid.PlaidFlow, { onSubmit: handlePlaidFlowCompleted }),
            React__default["default"].createElement(Backdrop["default"], { open: open, onClick: handleClose }, loaderImageSrc ? (React__default["default"].createElement(StatusIcon.StatusIcon, { variant: "loading", imgSrc: loaderImageSrc, sx: { mt: 5 } })) : (React__default["default"].createElement(CircularProgress["default"], { color: "primary" })))));
    }
    // Normal UI (steps / views):
    let headerVariant = isAuthenticated ? "loggedIn" : "guest";
    let checkoutStepElement = null;
    if (checkoutStep === "error" && checkoutError) {
        headerVariant = "error";
        checkoutStepElement = (React__default["default"].createElement(ErrorView.ErrorView, { checkoutError: checkoutError, errorImageSrc: errorImageSrc, onFixError: handleFixError, onClose: handleClose, debug: debug }));
    }
    else if (checkoutStep === "authentication") {
        if (!isAuthenticated)
            headerVariant = "anonymous";
        checkoutStepElement = (React__default["default"].createElement(AuthenticationView.AuthenticationView, { invoiceItemIDs: invoiceAndReservationState.invoiceItemIDs, checkoutItems: checkoutItems, taxes: taxes, isAuthenticated: isAuthenticated, guestCheckoutEnabled: guestCheckoutEnabled, onGuestClicked: goNext, onCloseClicked: handleClose }));
    }
    else if (checkoutStep === "billing") {
        checkoutStepElement = (React__default["default"].createElement(BillingView.BillingView, { invoiceItemIDs: invoiceAndReservationState.invoiceItemIDs, orgID: orgID, vertexEnabled: vertexEnabled, checkoutItems: checkoutItems, savedPaymentMethods: savedPaymentMethods, selectedBillingInfo: selectedPaymentMethod.billingInfo, wallet: wallet, wallets: wallets, checkoutError: checkoutError, onBillingInfoSelected: handleBillingInfoSelected, onTaxesChange: setTaxes, onReloadSavedPaymentMethods: handleSavedPaymentMethodsReloaded, onSavedPaymentMethodDeleted: handleSavedPaymentMethodDeleted, onWalletChange: setWalletAddress, onNext: goNext, onClose: handleClose, consentType: consentType, debug: debug }));
    }
    else if (checkoutStep === "payment" && invoiceID && invoiceCountdownStart) {
        checkoutStepElement = (React__default["default"].createElement(PaymentView.PaymentView, { invoiceItemIDs: invoiceAndReservationState.invoiceItemIDs, orgID: orgID, invoiceID: invoiceID, invoiceCountdownStart: invoiceCountdownStart, checkoutItems: checkoutItems, taxes: taxes, savedPaymentMethods: savedPaymentMethods, selectedPaymentMethod: selectedPaymentMethod, wallet: wallet, wallets: wallets, checkoutError: checkoutError, onPaymentInfoSelected: handlePaymentInfoSelected, onCvvSelected: handleCvvSelected, onSavedPaymentMethodDeleted: handleSavedPaymentMethodDeleted, onWalletChange: setWalletAddress, onNext: goNext, onPrev: goBack, onClose: handleClose, acceptedPaymentTypes: acceptedPaymentTypes, acceptedCreditCardNetworks: acceptedCreditCardNetworks, consentType: consentType, debug: debug }));
    }
    else if (checkoutStep === "purchasing" && invoiceID && invoiceCountdownStart) {
        headerVariant = "purchasing";
        checkoutStepElement = (React__default["default"].createElement(PurchasingView.PurchasingView, { threeDSEnabled: threeDSEnabled, coinbaseSuccessURL: coinbaseSuccessURL, coinbaseErrorURL: coinbaseErrorURL, purchasingImageSrc: purchasingImageSrc, purchasingMessages: purchasingMessages, orgID: orgID, invoiceID: invoiceID, invoiceCountdownStart: invoiceCountdownStart, checkoutItems: checkoutItems, savedPaymentMethods: savedPaymentMethods, selectedPaymentMethod: selectedPaymentMethod, wallet: wallet, onPurchaseSuccess: handlePurchaseSuccess, onPurchaseError: handlePurchaseError, onDialogBlocked: setIsDialogBlocked, debug: debug }));
    }
    else if (checkoutStep === "confirmation") {
        headerVariant = "logoOnly";
        checkoutStepElement = (React__default["default"].createElement(ConfirmationView.ConfirmationView, { checkoutItems: checkoutItems, savedPaymentMethods: savedPaymentMethods, selectedPaymentMethod: selectedPaymentMethod, processorPaymentID: processorPaymentID, wallet: wallet, onNext: handlePurchaseCompleted, onGoTo: handleGoTo }));
    }
    else {
        console.warn("Unknown checkoutStepElement!");
        // !checkoutStep or
        // checkoutStep === "error" && !checkoutError or
        // checkoutStep === "purchasing" && !invoiceID or
        // some other kind of indeterminate / incorrect state:
        return null;
    }
    const headerElement = (React__default["default"].createElement(CheckoutModalHeader.CheckoutModalHeader, { variant: headerVariant, countdownElementRef: countdownElementRef, logoSrc: logoSrc, logoSx: logoSx, user: (_c = meData === null || meData === void 0 ? void 0 : meData.me) === null || _c === void 0 ? void 0 : _c.user, userFormat: userFormat, onLogin: onLogin, onClose: checkoutStep === startAt ? handleClose : undefined, onPrev: checkoutStep === startAt ? undefined : goBack, toggleDebug: toggleDebug }));
    return (React__default["default"].createElement(DictionaryProvider.DictionaryProvider, { dictionary: dictionary },
        React__default["default"].createElement(promoCodeUtils.PromoCodeProvider, null,
            React__default["default"].createElement(FullScreenOverlay.FullScreenOverlay, { centered: checkoutStep === "purchasing" || checkoutStep === "error", open: open, onClose: handleClose, isDialogBlocked: isDialogBlocked, contentKey: checkoutStep, header: headerElement }, checkoutStepElement))));
};
const PUICheckout = ProvidersInjector.withProviders(PUICheckoutOverlay);

exports.PUICheckout = PUICheckout;
exports.PUICheckoutOverlay = PUICheckoutOverlay;
//# sourceMappingURL=CheckoutOverlay.js.map
