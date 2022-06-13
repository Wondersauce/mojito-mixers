import { __awaiter } from '../../../node_modules/tslib/tslib.es6.js';
import React__default, { useEffect, useRef, useMemo, useState, useCallback } from 'react';
import '@emotion/styled';
import '../../../node_modules/@emotion/react/dist/emotion-react.esm.js';
import '../../../node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js';
import '../../../node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js';
import '../../../node_modules/@mui/system/esm/borders.js';
import 'prop-types';
import '../../../node_modules/@mui/utils/esm/elementAcceptingRef.js';
import '../../../node_modules/@mui/utils/esm/elementTypeAcceptingRef.js';
import 'react-is';
import '../../../node_modules/@mui/utils/esm/ponyfillGlobal.js';
import '../../../node_modules/@mui/utils/esm/refType.js';
import '../../../node_modules/@mui/utils/esm/integerPropType.js';
import '../../../node_modules/@mui/system/esm/display.js';
import '../../../node_modules/@mui/system/esm/flexbox.js';
import '../../../node_modules/@mui/system/esm/grid.js';
import '../../../node_modules/@mui/system/esm/palette.js';
import '../../../node_modules/@mui/system/esm/positions.js';
import '../../../node_modules/@mui/system/esm/shadows.js';
import '../../../node_modules/@mui/system/esm/sizing.js';
import '../../../node_modules/@mui/system/esm/spacing.js';
import '../../../node_modules/@mui/system/esm/responsivePropType.js';
import '../../../node_modules/@mui/system/esm/typography.js';
import '../../../node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js';
import '../../../node_modules/@mui/system/esm/getThemeValue.js';
import '../../../node_modules/@mui/system/esm/Box/Box.js';
import '../../../node_modules/@mui/system/esm/useTheme.js';
import 'react/jsx-runtime';
import '../../../node_modules/@mui/system/esm/createStyled.js';
import '../../../node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js';
import '../../../node_modules/@mui/private-theming/useTheme/ThemeContext.js';
import '../../../node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js';
import '../../../node_modules/@mui/system/esm/Container/createContainer.js';
import '../../../node_modules/@mui/system/esm/Container/Container.js';
import '../../../node_modules/@mui/system/esm/Container/containerClasses.js';
import '../../../node_modules/@mui/base/BadgeUnstyled/BadgeUnstyled.js';
import '../../../node_modules/@mui/base/BadgeUnstyled/badgeUnstyledClasses.js';
import '../../../node_modules/@mui/base/ButtonUnstyled/ButtonUnstyled.js';
import '../../../node_modules/@mui/base/ButtonUnstyled/buttonUnstyledClasses.js';
import '../../../node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js';
import '../../../node_modules/@mui/base/FormControlUnstyled/FormControlUnstyled.js';
import '../../../node_modules/@mui/base/FormControlUnstyled/FormControlUnstyledContext.js';
import '../../../node_modules/@mui/base/FormControlUnstyled/formControlUnstyledClasses.js';
import '../../../node_modules/@mui/base/InputUnstyled/InputUnstyled.js';
import '../../../node_modules/@mui/base/InputUnstyled/inputUnstyledClasses.js';
import '../../../node_modules/@mui/base/ListboxUnstyled/useListbox.types.js';
import '../../../node_modules/@mui/base/MenuUnstyled/MenuUnstyled.js';
import '../../../node_modules/@mui/base/MenuUnstyled/MenuUnstyledContext.js';
import '../../../node_modules/@mui/base/MenuUnstyled/menuUnstyledClasses.js';
import '../../../node_modules/@mui/base/MenuItemUnstyled/MenuItemUnstyled.js';
import '../../../node_modules/@mui/base/MenuItemUnstyled/menuItemUnstyledClasses.js';
import '../../../node_modules/@mui/base/ModalUnstyled/ModalUnstyled.js';
import '../../../node_modules/@mui/base/ModalUnstyled/modalUnstyledClasses.js';
import '../../../node_modules/@mui/base/MultiSelectUnstyled/MultiSelectUnstyled.js';
import '../../../node_modules/@mui/base/NoSsr/NoSsr.js';
import '../../../node_modules/@mui/base/OptionGroupUnstyled/OptionGroupUnstyled.js';
import '../../../node_modules/@mui/base/OptionGroupUnstyled/optionGroupUnstyledClasses.js';
import '../../../node_modules/@mui/base/OptionUnstyled/OptionUnstyled.js';
import '../../../node_modules/@mui/base/OptionUnstyled/optionUnstyledClasses.js';
import '../../../node_modules/@mui/base/PopperUnstyled/PopperUnstyled.js';
import '../../../node_modules/@mui/base/Portal/Portal.js';
import '../../../node_modules/@mui/base/SelectUnstyled/SelectUnstyled.js';
import '../../../node_modules/@mui/base/SelectUnstyled/selectUnstyledClasses.js';
import '../../../node_modules/@mui/base/SliderUnstyled/SliderUnstyled.js';
import '../../../node_modules/@mui/base/SliderUnstyled/SliderValueLabelUnstyled.js';
import '../../../node_modules/@mui/base/SliderUnstyled/sliderUnstyledClasses.js';
import '../../../node_modules/@mui/base/SwitchUnstyled/SwitchUnstyled.js';
import '../../../node_modules/@mui/base/SwitchUnstyled/switchUnstyledClasses.js';
import '../../../node_modules/@mui/base/TabPanelUnstyled/TabPanelUnstyled.js';
import '../../../node_modules/@mui/base/TabPanelUnstyled/tabPanelUnstyledClasses.js';
import '../../../node_modules/@mui/base/TabsUnstyled/TabsUnstyled.js';
import '../../../node_modules/@mui/base/TabsUnstyled/TabsContext.js';
import '../../../node_modules/@mui/base/TabsUnstyled/tabsUnstyledClasses.js';
import '../../../node_modules/@mui/base/TabsListUnstyled/TabsListUnstyled.js';
import '../../../node_modules/@mui/base/TabsListUnstyled/tabsListUnstyledClasses.js';
import '../../../node_modules/@mui/base/TabUnstyled/TabUnstyled.js';
import '../../../node_modules/@mui/base/TabUnstyled/tabUnstyledClasses.js';
import '../../../node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js';
import '../../../node_modules/@mui/base/TrapFocus/TrapFocus.js';
import '../../../node_modules/@mui/material/styles/createPalette.js';
import '../../../node_modules/@mui/material/styles/shadows.js';
import '../../../node_modules/@mui/material/styles/defaultTheme.js';
import '../../../node_modules/@mui/material/styles/CssVarsProvider.js';
import '../../../node_modules/@mui/material/styles/experimental_extendTheme.js';
import '../../../node_modules/@mui/material/SvgIcon/SvgIcon.js';
import '../../../node_modules/@mui/material/SvgIcon/svgIconClasses.js';
import '../../../node_modules/@mui/material/Accordion/Accordion.js';
import '../../../node_modules/@mui/material/Accordion/accordionClasses.js';
import '../../../node_modules/@mui/material/AccordionActions/AccordionActions.js';
import '../../../node_modules/@mui/material/AccordionActions/accordionActionsClasses.js';
import '../../../node_modules/@mui/material/AccordionDetails/AccordionDetails.js';
import '../../../node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js';
import '../../../node_modules/@mui/material/AccordionSummary/AccordionSummary.js';
import '../../../node_modules/@mui/material/AccordionSummary/accordionSummaryClasses.js';
import '../../../node_modules/@mui/material/Alert/Alert.js';
import '../../../node_modules/@mui/material/Alert/alertClasses.js';
import '../../../node_modules/@mui/material/AlertTitle/AlertTitle.js';
import '../../../node_modules/@mui/material/AlertTitle/alertTitleClasses.js';
import '../../../node_modules/@mui/material/AppBar/AppBar.js';
import '../../../node_modules/@mui/material/AppBar/appBarClasses.js';
import '../../../node_modules/@mui/material/Autocomplete/Autocomplete.js';
import '../../../node_modules/@mui/material/Autocomplete/autocompleteClasses.js';
import '../../../node_modules/@mui/material/Avatar/Avatar.js';
import '../../../node_modules/@mui/material/Avatar/avatarClasses.js';
import '../../../node_modules/@mui/material/AvatarGroup/AvatarGroup.js';
import '../../../node_modules/@mui/material/AvatarGroup/avatarGroupClasses.js';
import '../../../node_modules/@mui/material/Backdrop/Backdrop.js';
import '../../../node_modules/@mui/material/Backdrop/backdropClasses.js';
import '../../../node_modules/@mui/material/Badge/Badge.js';
import '../../../node_modules/@mui/material/Badge/badgeClasses.js';
import '../../../node_modules/@mui/material/BottomNavigation/BottomNavigation.js';
import '../../../node_modules/@mui/material/BottomNavigation/bottomNavigationClasses.js';
import '../../../node_modules/@mui/material/BottomNavigationAction/BottomNavigationAction.js';
import '../../../node_modules/@mui/material/BottomNavigationAction/bottomNavigationActionClasses.js';
import '../../../node_modules/@mui/material/Box/Box.js';
import '../../../node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js';
import '../../../node_modules/@mui/material/Breadcrumbs/breadcrumbsClasses.js';
import '../../../node_modules/@mui/material/Button/Button.js';
import '../../../node_modules/@mui/material/Button/buttonClasses.js';
import '../../../node_modules/@mui/material/ButtonBase/ButtonBase.js';
import '../../../node_modules/@mui/material/ButtonBase/buttonBaseClasses.js';
import '../../../node_modules/@mui/material/ButtonBase/touchRippleClasses.js';
import '../../../node_modules/@mui/material/ButtonGroup/ButtonGroup.js';
import '../../../node_modules/@mui/material/ButtonGroup/buttonGroupClasses.js';
import '../../../node_modules/@mui/material/Card/Card.js';
import '../../../node_modules/@mui/material/Card/cardClasses.js';
import '../../../node_modules/@mui/material/CardActionArea/CardActionArea.js';
import '../../../node_modules/@mui/material/CardActionArea/cardActionAreaClasses.js';
import '../../../node_modules/@mui/material/CardActions/CardActions.js';
import '../../../node_modules/@mui/material/CardActions/cardActionsClasses.js';
import '../../../node_modules/@mui/material/CardContent/CardContent.js';
import '../../../node_modules/@mui/material/CardContent/cardContentClasses.js';
import '../../../node_modules/@mui/material/CardHeader/CardHeader.js';
import '../../../node_modules/@mui/material/CardHeader/cardHeaderClasses.js';
import '../../../node_modules/@mui/material/CardMedia/CardMedia.js';
import '../../../node_modules/@mui/material/CardMedia/cardMediaClasses.js';
import '../../../node_modules/@mui/material/Checkbox/Checkbox.js';
import '../../../node_modules/@mui/material/Checkbox/checkboxClasses.js';
import '../../../node_modules/@mui/material/Chip/Chip.js';
import '../../../node_modules/@mui/material/Chip/chipClasses.js';
import '../../../node_modules/@mui/material/CircularProgress/CircularProgress.js';
import '../../../node_modules/@mui/material/CircularProgress/circularProgressClasses.js';
import '../../../node_modules/@mui/material/Collapse/Collapse.js';
import '../../../node_modules/@mui/material/Collapse/collapseClasses.js';
import '../../../node_modules/@mui/material/Container/Container.js';
import '../../../node_modules/@mui/material/Container/containerClasses.js';
import '../../../node_modules/@mui/material/CssBaseline/CssBaseline.js';
import '../../../node_modules/@mui/material/Dialog/Dialog.js';
import '../../../node_modules/@mui/material/Dialog/dialogClasses.js';
import '../../../node_modules/@mui/material/DialogActions/DialogActions.js';
import '../../../node_modules/@mui/material/DialogActions/dialogActionsClasses.js';
import '../../../node_modules/@mui/material/DialogContent/DialogContent.js';
import '../../../node_modules/@mui/material/DialogContent/dialogContentClasses.js';
import '../../../node_modules/@mui/material/DialogContentText/DialogContentText.js';
import '../../../node_modules/@mui/material/DialogContentText/dialogContentTextClasses.js';
import '../../../node_modules/@mui/material/DialogTitle/DialogTitle.js';
import '../../../node_modules/@mui/material/DialogTitle/dialogTitleClasses.js';
import Divider from '../../../node_modules/@mui/material/Divider/Divider.js';
import '../../../node_modules/@mui/material/Divider/dividerClasses.js';
import '../../../node_modules/@mui/material/Drawer/Drawer.js';
import '../../../node_modules/@mui/material/Drawer/drawerClasses.js';
import '../../../node_modules/@mui/material/Fab/Fab.js';
import '../../../node_modules/@mui/material/Fab/fabClasses.js';
import '../../../node_modules/@mui/material/Fade/Fade.js';
import '../../../node_modules/@mui/material/FilledInput/FilledInput.js';
import '../../../node_modules/@mui/material/FilledInput/filledInputClasses.js';
import '../../../node_modules/@mui/material/FormControl/FormControl.js';
import '../../../node_modules/@mui/material/FormControl/FormControlContext.js';
import '../../../node_modules/@mui/material/FormControl/formControlClasses.js';
import '../../../node_modules/@mui/material/FormControlLabel/FormControlLabel.js';
import '../../../node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js';
import '../../../node_modules/@mui/material/FormGroup/FormGroup.js';
import '../../../node_modules/@mui/material/FormGroup/formGroupClasses.js';
import '../../../node_modules/@mui/material/FormHelperText/FormHelperText.js';
import '../../../node_modules/@mui/material/FormHelperText/formHelperTextClasses.js';
import '../../../node_modules/@mui/material/FormLabel/FormLabel.js';
import '../../../node_modules/@mui/material/FormLabel/formLabelClasses.js';
import '../../../node_modules/@mui/material/Grid/Grid.js';
import '../../../node_modules/@mui/material/Grid/gridClasses.js';
import '../../../node_modules/@mui/material/Grow/Grow.js';
import '../../../node_modules/@mui/material/Hidden/Hidden.js';
import '../../../node_modules/@mui/material/Icon/Icon.js';
import '../../../node_modules/@mui/material/Icon/iconClasses.js';
import '../../../node_modules/@mui/material/IconButton/IconButton.js';
import '../../../node_modules/@mui/material/IconButton/iconButtonClasses.js';
import '../../../node_modules/@mui/material/ImageList/ImageList.js';
import '../../../node_modules/@mui/material/ImageList/imageListClasses.js';
import '../../../node_modules/@mui/material/ImageListItem/ImageListItem.js';
import '../../../node_modules/@mui/material/ImageListItem/imageListItemClasses.js';
import '../../../node_modules/@mui/material/ImageListItemBar/ImageListItemBar.js';
import '../../../node_modules/@mui/material/ImageListItemBar/imageListItemBarClasses.js';
import '../../../node_modules/@mui/material/Input/Input.js';
import '../../../node_modules/@mui/material/Input/inputClasses.js';
import '../../../node_modules/@mui/material/InputAdornment/InputAdornment.js';
import '../../../node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js';
import '../../../node_modules/@mui/material/InputBase/InputBase.js';
import '../../../node_modules/@mui/material/InputBase/inputBaseClasses.js';
import '../../../node_modules/@mui/material/InputLabel/InputLabel.js';
import '../../../node_modules/@mui/material/InputLabel/inputLabelClasses.js';
import '../../../node_modules/@mui/material/LinearProgress/LinearProgress.js';
import '../../../node_modules/@mui/material/LinearProgress/linearProgressClasses.js';
import '../../../node_modules/@mui/material/Link/Link.js';
import '../../../node_modules/@mui/material/Link/linkClasses.js';
import '../../../node_modules/@mui/material/List/List.js';
import '../../../node_modules/@mui/material/List/listClasses.js';
import '../../../node_modules/@mui/material/ListItem/ListItem.js';
import '../../../node_modules/@mui/material/ListItem/listItemClasses.js';
import '../../../node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js';
import '../../../node_modules/@mui/material/ListItemAvatar/listItemAvatarClasses.js';
import '../../../node_modules/@mui/material/ListItemButton/ListItemButton.js';
import '../../../node_modules/@mui/material/ListItemButton/listItemButtonClasses.js';
import '../../../node_modules/@mui/material/ListItemIcon/ListItemIcon.js';
import '../../../node_modules/@mui/material/ListItemIcon/listItemIconClasses.js';
import '../../../node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js';
import '../../../node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.js';
import '../../../node_modules/@mui/material/ListItemText/ListItemText.js';
import '../../../node_modules/@mui/material/ListItemText/listItemTextClasses.js';
import '../../../node_modules/@mui/material/ListSubheader/ListSubheader.js';
import '../../../node_modules/@mui/material/ListSubheader/listSubheaderClasses.js';
import '../../../node_modules/@mui/material/Menu/Menu.js';
import '../../../node_modules/@mui/material/Menu/menuClasses.js';
import '../../../node_modules/@mui/material/MenuItem/MenuItem.js';
import '../../../node_modules/@mui/material/MenuItem/menuItemClasses.js';
import '../../../node_modules/@mui/material/MenuList/MenuList.js';
import '../../../node_modules/@mui/material/MobileStepper/MobileStepper.js';
import '../../../node_modules/@mui/material/MobileStepper/mobileStepperClasses.js';
import '../../../node_modules/@mui/material/Modal/Modal.js';
import '../../../node_modules/@mui/material/NativeSelect/NativeSelect.js';
import '../../../node_modules/@mui/material/NativeSelect/nativeSelectClasses.js';
import '../../../node_modules/@mui/material/OutlinedInput/OutlinedInput.js';
import '../../../node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js';
import '../../../node_modules/@mui/material/Pagination/Pagination.js';
import '../../../node_modules/@mui/material/Pagination/paginationClasses.js';
import '../../../node_modules/@mui/material/PaginationItem/PaginationItem.js';
import '../../../node_modules/@mui/material/PaginationItem/paginationItemClasses.js';
import '../../../node_modules/@mui/material/Paper/Paper.js';
import '../../../node_modules/@mui/material/Paper/paperClasses.js';
import '../../../node_modules/@mui/material/Popover/Popover.js';
import '../../../node_modules/@mui/material/Popover/popoverClasses.js';
import '../../../node_modules/@mui/material/Popper/Popper.js';
import '../../../node_modules/@mui/material/Radio/Radio.js';
import '../../../node_modules/@mui/material/Radio/radioClasses.js';
import '../../../node_modules/@mui/material/RadioGroup/RadioGroup.js';
import '../../../node_modules/@mui/material/RadioGroup/RadioGroupContext.js';
import '../../../node_modules/@mui/material/Rating/Rating.js';
import '../../../node_modules/@mui/material/Rating/ratingClasses.js';
import '../../../node_modules/@mui/material/ScopedCssBaseline/ScopedCssBaseline.js';
import '../../../node_modules/@mui/material/ScopedCssBaseline/scopedCssBaselineClasses.js';
import '../../../node_modules/@mui/material/Select/Select.js';
import '../../../node_modules/@mui/material/Select/selectClasses.js';
import '../../../node_modules/@mui/material/Skeleton/Skeleton.js';
import '../../../node_modules/@mui/material/Skeleton/skeletonClasses.js';
import '../../../node_modules/@mui/material/Slide/Slide.js';
import '../../../node_modules/@mui/material/Slider/Slider.js';
import '../../../node_modules/@mui/material/Snackbar/Snackbar.js';
import '../../../node_modules/@mui/material/Snackbar/snackbarClasses.js';
import '../../../node_modules/@mui/material/SnackbarContent/SnackbarContent.js';
import '../../../node_modules/@mui/material/SnackbarContent/snackbarContentClasses.js';
import '../../../node_modules/@mui/material/SpeedDial/SpeedDial.js';
import '../../../node_modules/@mui/material/SpeedDial/speedDialClasses.js';
import '../../../node_modules/@mui/material/SpeedDialAction/SpeedDialAction.js';
import '../../../node_modules/@mui/material/SpeedDialAction/speedDialActionClasses.js';
import '../../../node_modules/@mui/material/SpeedDialIcon/SpeedDialIcon.js';
import '../../../node_modules/@mui/material/SpeedDialIcon/speedDialIconClasses.js';
import Stack from '../../../node_modules/@mui/material/Stack/Stack.js';
import '../../../node_modules/@mui/material/Step/Step.js';
import '../../../node_modules/@mui/material/Step/stepClasses.js';
import '../../../node_modules/@mui/material/Step/StepContext.js';
import '../../../node_modules/@mui/material/StepButton/StepButton.js';
import '../../../node_modules/@mui/material/StepButton/stepButtonClasses.js';
import '../../../node_modules/@mui/material/StepConnector/StepConnector.js';
import '../../../node_modules/@mui/material/StepConnector/stepConnectorClasses.js';
import '../../../node_modules/@mui/material/StepContent/StepContent.js';
import '../../../node_modules/@mui/material/StepContent/stepContentClasses.js';
import '../../../node_modules/@mui/material/StepIcon/StepIcon.js';
import '../../../node_modules/@mui/material/StepIcon/stepIconClasses.js';
import '../../../node_modules/@mui/material/StepLabel/StepLabel.js';
import '../../../node_modules/@mui/material/StepLabel/stepLabelClasses.js';
import '../../../node_modules/@mui/material/Stepper/Stepper.js';
import '../../../node_modules/@mui/material/Stepper/stepperClasses.js';
import '../../../node_modules/@mui/material/Stepper/StepperContext.js';
import '../../../node_modules/@mui/material/SwipeableDrawer/SwipeableDrawer.js';
import '../../../node_modules/@mui/material/Switch/Switch.js';
import '../../../node_modules/@mui/material/Switch/switchClasses.js';
import '../../../node_modules/@mui/material/Tab/Tab.js';
import '../../../node_modules/@mui/material/Tab/tabClasses.js';
import '../../../node_modules/@mui/material/Table/Table.js';
import '../../../node_modules/@mui/material/Table/tableClasses.js';
import '../../../node_modules/@mui/material/TableBody/TableBody.js';
import '../../../node_modules/@mui/material/TableBody/tableBodyClasses.js';
import '../../../node_modules/@mui/material/TableCell/TableCell.js';
import '../../../node_modules/@mui/material/TableCell/tableCellClasses.js';
import '../../../node_modules/@mui/material/TableContainer/TableContainer.js';
import '../../../node_modules/@mui/material/TableContainer/tableContainerClasses.js';
import '../../../node_modules/@mui/material/TableFooter/TableFooter.js';
import '../../../node_modules/@mui/material/TableFooter/tableFooterClasses.js';
import '../../../node_modules/@mui/material/TableHead/TableHead.js';
import '../../../node_modules/@mui/material/TableHead/tableHeadClasses.js';
import '../../../node_modules/@mui/material/TablePagination/TablePagination.js';
import '../../../node_modules/@mui/material/TablePagination/tablePaginationClasses.js';
import '../../../node_modules/@mui/material/TableRow/TableRow.js';
import '../../../node_modules/@mui/material/TableRow/tableRowClasses.js';
import '../../../node_modules/@mui/material/TableSortLabel/TableSortLabel.js';
import '../../../node_modules/@mui/material/TableSortLabel/tableSortLabelClasses.js';
import '../../../node_modules/@mui/material/Tabs/Tabs.js';
import '../../../node_modules/@mui/material/Tabs/tabsClasses.js';
import '../../../node_modules/@mui/material/TabScrollButton/TabScrollButton.js';
import '../../../node_modules/@mui/material/TabScrollButton/tabScrollButtonClasses.js';
import '../../../node_modules/@mui/material/TextField/TextField.js';
import '../../../node_modules/@mui/material/TextField/textFieldClasses.js';
import '../../../node_modules/@mui/material/ToggleButton/ToggleButton.js';
import '../../../node_modules/@mui/material/ToggleButton/toggleButtonClasses.js';
import '../../../node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js';
import '../../../node_modules/@mui/material/ToggleButtonGroup/toggleButtonGroupClasses.js';
import '../../../node_modules/@mui/material/Toolbar/Toolbar.js';
import '../../../node_modules/@mui/material/Toolbar/toolbarClasses.js';
import '../../../node_modules/@mui/material/Tooltip/Tooltip.js';
import '../../../node_modules/@mui/material/Tooltip/tooltipClasses.js';
import '../../../node_modules/@mui/material/Typography/Typography.js';
import '../../../node_modules/@mui/material/Typography/typographyClasses.js';
import '../../../node_modules/@mui/material/Zoom/Zoom.js';
import '../../../node_modules/@mui/material/GlobalStyles/GlobalStyles.js';
import { useThrottledCallback } from '../../../node_modules/@swyg/corre/dist/esm/throttled-callback/throttled-callback.hook.js';
import { CheckoutDeliveryAndItemCostBreakdown } from '../../components/payments/CheckoutDeliveryAndItemCostBreakdown/CheckoutDeliveryAndItemCostBreakdown.js';
import { CheckoutStepper } from '../../components/payments/CheckoutStepper/CheckoutStepper.js';
import { SavedBillingDetailsSelector } from '../../components/shared/SavedBillingDetailsSelector/SavedBillingDetailsSelector.js';
import { savedPaymentMethodToBillingInfo, getSavedPaymentMethodAddressIdFromBillingInfo, EMPTY_ADDRESS_ID } from '../../domain/circle/circle.utils.js';
import { BillingInfoForm } from '../../forms/BillingInfoForm.js';
import { distinctBy } from '../../utils/arrayUtils.js';
import { checkNeedsGenericErrorMessage } from '../../hooks/useFormCheckoutError.js';
import { useGetTaxQuoteLazyQuery } from '../../queries/graphqlGenerated.js';
import { useCheckoutItemsCostTotal } from '../../hooks/useCheckoutItemCostTotal.js';
import { usePromoCode } from '../../utils/promoCodeUtils.js';

const BillingView = ({ orgID, vertexEnabled, checkoutItems, savedPaymentMethods: rawSavedPaymentMethods, selectedBillingInfo, wallets, wallet, checkoutError, onBillingInfoSelected, onTaxesChange, onReloadSavedPaymentMethods, onSavedPaymentMethodDeleted, onWalletChange, onNext, onClose, consentType, debug, invoiceItemIDs, }) => {
    const { setEditable, setInvoiceItemIDs } = usePromoCode();
    useEffect(() => {
        if (invoiceItemIDs.length > 0) {
            setInvoiceItemIDs(invoiceItemIDs);
        }
    }, [invoiceItemIDs, setInvoiceItemIDs]);
    useEffect(() => {
        setEditable(true);
    }, [setEditable]);
    const savedPaymentMethodAddressIdRef = useRef("");
    const savedPaymentMethods = useMemo(() => distinctBy(rawSavedPaymentMethods, "addressId"), [rawSavedPaymentMethods]);
    const { total } = useCheckoutItemsCostTotal(checkoutItems);
    const [{ isReloading, isDeleting, showSaved, taxes }, setViewState] = useState({
        isReloading: false,
        isDeleting: false,
        showSaved: savedPaymentMethods.length > 0 && typeof selectedBillingInfo === "string" && !checkNeedsGenericErrorMessage("billing", checkoutError),
        taxes: vertexEnabled ? { status: "incomplete" } : null,
    });
    const [formSubmitAttempted, setFormSubmitAttempted] = useState(false);
    const [getTaxQuote] = useGetTaxQuoteLazyQuery();
    const getTaxQuoteTimestampRef = useRef(0);
    useEffect(() => () => {
        // To discard the result below that might come after the component has been unmounted:
        getTaxQuoteTimestampRef.current = 0;
    }, []);
    const calculateTaxes = useCallback((taxInfo) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const calledAt = getTaxQuoteTimestampRef.current;
        let invalidZipCode = false;
        const result = yield getTaxQuote({
            variables: {
                input: {
                    orgID,
                    taxablePrice: total,
                    address: {
                        street1: taxInfo.street,
                        city: taxInfo.city,
                        postalCode: taxInfo.zipCode,
                        country: `${taxInfo.country.value}`,
                        state: `${taxInfo.state.value}`,
                    },
                },
            },
        }).catch((err) => {
            invalidZipCode = /invalid zipcode/i.test(err.message);
            return { data: null };
        });
        // Discard stale result:
        if (calledAt !== getTaxQuoteTimestampRef.current)
            return;
        const taxResult = ((_a = result.data) === null || _a === void 0 ? void 0 : _a.getTaxQuote) || {};
        const { verifiedAddress } = taxResult;
        const vertexSuggestions = {};
        if (!showSaved && verifiedAddress) {
            // Vertex returns 5+4 zip codes, so we remove the last 4 digits to get the "normal" one:
            const zipCode = ((verifiedAddress === null || verifiedAddress === void 0 ? void 0 : verifiedAddress.postalCode) || "").replace(/-\d{4}$/, "");
            if (taxInfo.street !== verifiedAddress.street1)
                vertexSuggestions.street = verifiedAddress.street1;
            if (taxInfo.city !== verifiedAddress.city)
                vertexSuggestions.city = verifiedAddress.city;
            if (taxInfo.zipCode !== zipCode)
                vertexSuggestions.zipCode = zipCode;
        }
        setViewState(prevViewState => (Object.assign(Object.assign({}, prevViewState), { taxes: verifiedAddress ? {
                status: "complete",
                taxRate: 100 * taxResult.totalTaxAmount / taxResult.taxablePrice,
                taxAmount: taxResult.totalTaxAmount,
                vertexSuggestions,
            } : {
                status: "error",
                invalidZipCode,
            } })));
    }), [getTaxQuote, orgID, total, showSaved]);
    const handleThrottledTaxInfoChange = useThrottledCallback((taxInfo) => {
        var _a, _b;
        if (!vertexEnabled)
            return;
        if (!taxInfo.street || !taxInfo.city || !taxInfo.zipCode || !((_a = taxInfo.country) === null || _a === void 0 ? void 0 : _a.value) || !((_b = taxInfo.state) === null || _b === void 0 ? void 0 : _b.value)) {
            setViewState(prevViewState => { var _a; return (((_a = prevViewState.taxes) === null || _a === void 0 ? void 0 : _a.status) === "incomplete" ? prevViewState : (Object.assign(Object.assign({}, prevViewState), { taxes: { status: "incomplete" } }))); });
            return;
        }
        calculateTaxes(taxInfo);
    }, 1000, [calculateTaxes, vertexEnabled]);
    const handleTaxInfoChange = useCallback((taxInfo) => {
        if (!vertexEnabled)
            return;
        setViewState(prevViewState => { var _a; return (((_a = prevViewState.taxes) === null || _a === void 0 ? void 0 : _a.status) === "loading" ? prevViewState : (Object.assign(Object.assign({}, prevViewState), { taxes: { status: "loading" } }))); });
        getTaxQuoteTimestampRef.current = Date.now();
        handleThrottledTaxInfoChange(taxInfo);
    }, [vertexEnabled, handleThrottledTaxInfoChange]);
    useEffect(() => {
        if (!vertexEnabled)
            return;
        if (selectedBillingInfo && showSaved) {
            const savedPaymentMethodData = typeof selectedBillingInfo === "string"
                ? savedPaymentMethods.find(({ addressId }) => addressId === selectedBillingInfo) : null;
            const billingInfo = savedPaymentMethodData
                ? savedPaymentMethodToBillingInfo(savedPaymentMethodData)
                : (typeof selectedBillingInfo === "string" ? null : selectedBillingInfo);
            setViewState(prevViewState => (Object.assign(Object.assign({}, prevViewState), { taxes: { status: billingInfo ? "loading" : "error" } })));
            if (billingInfo) {
                getTaxQuoteTimestampRef.current = Date.now();
                calculateTaxes(billingInfo);
            }
        }
        else {
            setViewState(prevViewState => (Object.assign(Object.assign({}, prevViewState), { taxes: { status: selectedBillingInfo ? "loading" : "incomplete" } })));
        }
    }, [vertexEnabled, selectedBillingInfo, savedPaymentMethods, showSaved, calculateTaxes]);
    useEffect(() => {
        if (taxes)
            onTaxesChange(taxes);
    }, [onTaxesChange, taxes]);
    const handleShowForm = useCallback((savedPaymentMethodAddressId) => {
        if (savedPaymentMethodAddressId && typeof savedPaymentMethodAddressId === "string") {
            savedPaymentMethodAddressIdRef.current = savedPaymentMethodAddressId;
            const data = savedPaymentMethods.find(({ addressId }) => addressId === savedPaymentMethodAddressId);
            if (data)
                onBillingInfoSelected(savedPaymentMethodToBillingInfo(data));
        }
        else {
            onBillingInfoSelected("");
        }
        setViewState({ isReloading: false, isDeleting: false, showSaved: false, taxes: vertexEnabled ? { status: "loading" } : null });
    }, [onBillingInfoSelected, savedPaymentMethods, vertexEnabled]);
    const handleShowSaved = useCallback(() => {
        const savedPaymentMethodAddressId = savedPaymentMethodAddressIdRef.current;
        if (savedPaymentMethodAddressId)
            onBillingInfoSelected(savedPaymentMethodAddressId);
        setViewState({ isReloading: false, isDeleting: false, showSaved: true, taxes: vertexEnabled ? { status: "loading" } : null });
    }, [onBillingInfoSelected, vertexEnabled]);
    const handleSubmit = useCallback((data) => {
        if (taxes && taxes.status !== "complete")
            return;
        const savedPaymentMethodAddressId = getSavedPaymentMethodAddressIdFromBillingInfo(data);
        const savedPaymentMethodData = savedPaymentMethods.find(({ addressId }) => addressId === savedPaymentMethodAddressId);
        onBillingInfoSelected(savedPaymentMethodData ? savedPaymentMethodAddressId : data);
        onNext();
    }, [savedPaymentMethods, onBillingInfoSelected, onNext, taxes]);
    const handleSavedPaymentMethodsReloaded = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        setViewState(prevViewState => (Object.assign(Object.assign({}, prevViewState), { isReloading: true })));
        yield onReloadSavedPaymentMethods();
        setViewState(prevViewState => (Object.assign(Object.assign({}, prevViewState), { isReloading: false })));
    }), [onReloadSavedPaymentMethods]);
    const handleSavedPaymentMethodDeleted = useCallback((savedPaymentMethodId) => __awaiter(void 0, void 0, void 0, function* () {
        setViewState(prevViewState => (Object.assign(Object.assign({}, prevViewState), { isDeleting: true, showSaved: true })));
        yield onSavedPaymentMethodDeleted(savedPaymentMethodId);
        const remainingPaymentMethods = savedPaymentMethods.length - savedPaymentMethods.filter(({ addressId }) => addressId === savedPaymentMethodId).length;
        setViewState(prevViewState => (Object.assign(Object.assign({}, prevViewState), { isDeleting: false, showSaved: remainingPaymentMethods > 0, taxes })));
    }), [onSavedPaymentMethodDeleted, savedPaymentMethods, taxes]);
    const handleFormAttemptSubmit = useCallback(() => setFormSubmitAttempted(true), []);
    useEffect(() => {
        const selectedPaymentInfoMatch = typeof selectedBillingInfo === "string" && savedPaymentMethods.some(({ addressId }) => addressId === selectedBillingInfo);
        const fistValidPaymentInfo = savedPaymentMethods.find(({ addressId }) => addressId !== EMPTY_ADDRESS_ID);
        if (showSaved && !selectedPaymentInfoMatch && fistValidPaymentInfo /* && !checkoutError */) {
            onBillingInfoSelected(fistValidPaymentInfo.addressId);
        }
    }, [showSaved, savedPaymentMethods, selectedBillingInfo, onBillingInfoSelected /* , checkoutError */]);
    return (React__default.createElement(Stack, { direction: { xs: "column", md: "row" }, spacing: { xs: 0, md: 3.75 } },
        React__default.createElement(Stack, { sx: { display: "flex", overflow: "hidden", width: theme => ({ xs: "100%", md: `calc(50% - ${theme.spacing(3.75 / 2)})` }) } },
            React__default.createElement(CheckoutStepper, { progress: 50 }),
            showSaved ? (React__default.createElement(SavedBillingDetailsSelector, { showLoader: isDeleting, savedPaymentMethods: savedPaymentMethods, selectedPaymentMethodAddressId: typeof selectedBillingInfo === "string" ? selectedBillingInfo : undefined, taxes: taxes, onNew: handleShowForm, onEdit: handleShowForm, onDelete: handleSavedPaymentMethodDeleted, onPick: onBillingInfoSelected, onNext: onNext, onClose: onClose, onAttemptSubmit: handleFormAttemptSubmit, consentType: consentType === "checkbox" ? undefined : consentType })) : (React__default.createElement(BillingInfoForm
            // variant="loggedIn"
            , { 
                // variant="loggedIn"
                showLoader: isReloading, defaultValues: typeof selectedBillingInfo === "string" ? undefined : selectedBillingInfo, checkoutError: checkoutError, taxes: taxes, onTaxInfoChange: handleTaxInfoChange, onReload: handleSavedPaymentMethodsReloaded, onSaved: savedPaymentMethods.length > 0 ? handleShowSaved : undefined, onClose: onClose, onSubmit: handleSubmit, onAttemptSubmit: handleFormAttemptSubmit, consentType: consentType === "checkbox" ? undefined : consentType, debug: debug }))),
        React__default.createElement(Divider, { sx: { display: { xs: "block", md: "none" } } }),
        React__default.createElement(CheckoutDeliveryAndItemCostBreakdown, { checkoutItems: checkoutItems, taxes: vertexEnabled ? taxes : null, validatePersonalDeliveryAddress: formSubmitAttempted, wallets: wallets, wallet: wallet, onWalletChange: onWalletChange })));
};

export { BillingView };
//# sourceMappingURL=BillingView.js.map
