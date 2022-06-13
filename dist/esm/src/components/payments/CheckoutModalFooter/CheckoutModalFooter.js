import { __awaiter } from '../../../../node_modules/tslib/tslib.es6.js';
import '@emotion/styled';
import '../../../../node_modules/@emotion/react/dist/emotion-react.esm.js';
import '../../../../node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js';
import '../../../../node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js';
import '../../../../node_modules/@mui/system/esm/borders.js';
import 'prop-types';
import '../../../../node_modules/@mui/utils/esm/elementAcceptingRef.js';
import '../../../../node_modules/@mui/utils/esm/elementTypeAcceptingRef.js';
import 'react-is';
import '../../../../node_modules/@mui/utils/esm/ponyfillGlobal.js';
import '../../../../node_modules/@mui/utils/esm/refType.js';
import React__default, { useState, useCallback } from 'react';
import '../../../../node_modules/@mui/utils/esm/integerPropType.js';
import '../../../../node_modules/@mui/system/esm/display.js';
import '../../../../node_modules/@mui/system/esm/flexbox.js';
import '../../../../node_modules/@mui/system/esm/grid.js';
import '../../../../node_modules/@mui/system/esm/palette.js';
import '../../../../node_modules/@mui/system/esm/positions.js';
import '../../../../node_modules/@mui/system/esm/shadows.js';
import '../../../../node_modules/@mui/system/esm/sizing.js';
import '../../../../node_modules/@mui/system/esm/spacing.js';
import '../../../../node_modules/@mui/system/esm/responsivePropType.js';
import '../../../../node_modules/@mui/system/esm/typography.js';
import '../../../../node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js';
import '../../../../node_modules/@mui/system/esm/getThemeValue.js';
import '../../../../node_modules/@mui/system/esm/Box/Box.js';
import '../../../../node_modules/@mui/system/esm/useTheme.js';
import 'react/jsx-runtime';
import '../../../../node_modules/@mui/system/esm/createStyled.js';
import '../../../../node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js';
import '../../../../node_modules/@mui/private-theming/useTheme/ThemeContext.js';
import '../../../../node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js';
import '../../../../node_modules/@mui/system/esm/Container/createContainer.js';
import '../../../../node_modules/@mui/system/esm/Container/Container.js';
import '../../../../node_modules/@mui/system/esm/Container/containerClasses.js';
import '../../../../node_modules/@mui/base/BadgeUnstyled/BadgeUnstyled.js';
import '../../../../node_modules/@mui/base/BadgeUnstyled/badgeUnstyledClasses.js';
import '../../../../node_modules/@mui/base/ButtonUnstyled/ButtonUnstyled.js';
import '../../../../node_modules/@mui/base/ButtonUnstyled/buttonUnstyledClasses.js';
import '../../../../node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js';
import '../../../../node_modules/@mui/base/FormControlUnstyled/FormControlUnstyled.js';
import '../../../../node_modules/@mui/base/FormControlUnstyled/FormControlUnstyledContext.js';
import '../../../../node_modules/@mui/base/FormControlUnstyled/formControlUnstyledClasses.js';
import '../../../../node_modules/@mui/base/InputUnstyled/InputUnstyled.js';
import '../../../../node_modules/@mui/base/InputUnstyled/inputUnstyledClasses.js';
import '../../../../node_modules/@mui/base/ListboxUnstyled/useListbox.types.js';
import '../../../../node_modules/@mui/base/MenuUnstyled/MenuUnstyled.js';
import '../../../../node_modules/@mui/base/MenuUnstyled/MenuUnstyledContext.js';
import '../../../../node_modules/@mui/base/MenuUnstyled/menuUnstyledClasses.js';
import '../../../../node_modules/@mui/base/MenuItemUnstyled/MenuItemUnstyled.js';
import '../../../../node_modules/@mui/base/MenuItemUnstyled/menuItemUnstyledClasses.js';
import '../../../../node_modules/@mui/base/ModalUnstyled/ModalUnstyled.js';
import '../../../../node_modules/@mui/base/ModalUnstyled/modalUnstyledClasses.js';
import '../../../../node_modules/@mui/base/MultiSelectUnstyled/MultiSelectUnstyled.js';
import '../../../../node_modules/@mui/base/NoSsr/NoSsr.js';
import '../../../../node_modules/@mui/base/OptionGroupUnstyled/OptionGroupUnstyled.js';
import '../../../../node_modules/@mui/base/OptionGroupUnstyled/optionGroupUnstyledClasses.js';
import '../../../../node_modules/@mui/base/OptionUnstyled/OptionUnstyled.js';
import '../../../../node_modules/@mui/base/OptionUnstyled/optionUnstyledClasses.js';
import '../../../../node_modules/@mui/base/PopperUnstyled/PopperUnstyled.js';
import '../../../../node_modules/@mui/base/Portal/Portal.js';
import '../../../../node_modules/@mui/base/SelectUnstyled/SelectUnstyled.js';
import '../../../../node_modules/@mui/base/SelectUnstyled/selectUnstyledClasses.js';
import '../../../../node_modules/@mui/base/SliderUnstyled/SliderUnstyled.js';
import '../../../../node_modules/@mui/base/SliderUnstyled/SliderValueLabelUnstyled.js';
import '../../../../node_modules/@mui/base/SliderUnstyled/sliderUnstyledClasses.js';
import '../../../../node_modules/@mui/base/SwitchUnstyled/SwitchUnstyled.js';
import '../../../../node_modules/@mui/base/SwitchUnstyled/switchUnstyledClasses.js';
import '../../../../node_modules/@mui/base/TabPanelUnstyled/TabPanelUnstyled.js';
import '../../../../node_modules/@mui/base/TabPanelUnstyled/tabPanelUnstyledClasses.js';
import '../../../../node_modules/@mui/base/TabsUnstyled/TabsUnstyled.js';
import '../../../../node_modules/@mui/base/TabsUnstyled/TabsContext.js';
import '../../../../node_modules/@mui/base/TabsUnstyled/tabsUnstyledClasses.js';
import '../../../../node_modules/@mui/base/TabsListUnstyled/TabsListUnstyled.js';
import '../../../../node_modules/@mui/base/TabsListUnstyled/tabsListUnstyledClasses.js';
import '../../../../node_modules/@mui/base/TabUnstyled/TabUnstyled.js';
import '../../../../node_modules/@mui/base/TabUnstyled/tabUnstyledClasses.js';
import '../../../../node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js';
import '../../../../node_modules/@mui/base/TrapFocus/TrapFocus.js';
import '../../../../node_modules/@mui/material/styles/createPalette.js';
import '../../../../node_modules/@mui/material/styles/shadows.js';
import '../../../../node_modules/@mui/material/styles/defaultTheme.js';
import '../../../../node_modules/@mui/material/styles/CssVarsProvider.js';
import '../../../../node_modules/@mui/material/styles/experimental_extendTheme.js';
import '../../../../node_modules/@mui/material/SvgIcon/SvgIcon.js';
import '../../../../node_modules/@mui/material/SvgIcon/svgIconClasses.js';
import '../../../../node_modules/@mui/material/Accordion/Accordion.js';
import '../../../../node_modules/@mui/material/Accordion/accordionClasses.js';
import '../../../../node_modules/@mui/material/AccordionActions/AccordionActions.js';
import '../../../../node_modules/@mui/material/AccordionActions/accordionActionsClasses.js';
import '../../../../node_modules/@mui/material/AccordionDetails/AccordionDetails.js';
import '../../../../node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js';
import '../../../../node_modules/@mui/material/AccordionSummary/AccordionSummary.js';
import '../../../../node_modules/@mui/material/AccordionSummary/accordionSummaryClasses.js';
import '../../../../node_modules/@mui/material/Alert/Alert.js';
import '../../../../node_modules/@mui/material/Alert/alertClasses.js';
import '../../../../node_modules/@mui/material/AlertTitle/AlertTitle.js';
import '../../../../node_modules/@mui/material/AlertTitle/alertTitleClasses.js';
import '../../../../node_modules/@mui/material/AppBar/AppBar.js';
import '../../../../node_modules/@mui/material/AppBar/appBarClasses.js';
import '../../../../node_modules/@mui/material/Autocomplete/Autocomplete.js';
import '../../../../node_modules/@mui/material/Autocomplete/autocompleteClasses.js';
import '../../../../node_modules/@mui/material/Avatar/Avatar.js';
import '../../../../node_modules/@mui/material/Avatar/avatarClasses.js';
import '../../../../node_modules/@mui/material/AvatarGroup/AvatarGroup.js';
import '../../../../node_modules/@mui/material/AvatarGroup/avatarGroupClasses.js';
import '../../../../node_modules/@mui/material/Backdrop/Backdrop.js';
import '../../../../node_modules/@mui/material/Backdrop/backdropClasses.js';
import '../../../../node_modules/@mui/material/Badge/Badge.js';
import '../../../../node_modules/@mui/material/Badge/badgeClasses.js';
import '../../../../node_modules/@mui/material/BottomNavigation/BottomNavigation.js';
import '../../../../node_modules/@mui/material/BottomNavigation/bottomNavigationClasses.js';
import '../../../../node_modules/@mui/material/BottomNavigationAction/BottomNavigationAction.js';
import '../../../../node_modules/@mui/material/BottomNavigationAction/bottomNavigationActionClasses.js';
import Box from '../../../../node_modules/@mui/material/Box/Box.js';
import '../../../../node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js';
import '../../../../node_modules/@mui/material/Breadcrumbs/breadcrumbsClasses.js';
import '../../../../node_modules/@mui/material/Button/Button.js';
import '../../../../node_modules/@mui/material/Button/buttonClasses.js';
import '../../../../node_modules/@mui/material/ButtonBase/ButtonBase.js';
import '../../../../node_modules/@mui/material/ButtonBase/buttonBaseClasses.js';
import '../../../../node_modules/@mui/material/ButtonBase/touchRippleClasses.js';
import '../../../../node_modules/@mui/material/ButtonGroup/ButtonGroup.js';
import '../../../../node_modules/@mui/material/ButtonGroup/buttonGroupClasses.js';
import '../../../../node_modules/@mui/material/Card/Card.js';
import '../../../../node_modules/@mui/material/Card/cardClasses.js';
import '../../../../node_modules/@mui/material/CardActionArea/CardActionArea.js';
import '../../../../node_modules/@mui/material/CardActionArea/cardActionAreaClasses.js';
import '../../../../node_modules/@mui/material/CardActions/CardActions.js';
import '../../../../node_modules/@mui/material/CardActions/cardActionsClasses.js';
import '../../../../node_modules/@mui/material/CardContent/CardContent.js';
import '../../../../node_modules/@mui/material/CardContent/cardContentClasses.js';
import '../../../../node_modules/@mui/material/CardHeader/CardHeader.js';
import '../../../../node_modules/@mui/material/CardHeader/cardHeaderClasses.js';
import '../../../../node_modules/@mui/material/CardMedia/CardMedia.js';
import '../../../../node_modules/@mui/material/CardMedia/cardMediaClasses.js';
import '../../../../node_modules/@mui/material/Checkbox/Checkbox.js';
import '../../../../node_modules/@mui/material/Checkbox/checkboxClasses.js';
import '../../../../node_modules/@mui/material/Chip/Chip.js';
import '../../../../node_modules/@mui/material/Chip/chipClasses.js';
import CircularProgress from '../../../../node_modules/@mui/material/CircularProgress/CircularProgress.js';
import '../../../../node_modules/@mui/material/CircularProgress/circularProgressClasses.js';
import '../../../../node_modules/@mui/material/Collapse/Collapse.js';
import '../../../../node_modules/@mui/material/Collapse/collapseClasses.js';
import '../../../../node_modules/@mui/material/Container/Container.js';
import '../../../../node_modules/@mui/material/Container/containerClasses.js';
import '../../../../node_modules/@mui/material/CssBaseline/CssBaseline.js';
import '../../../../node_modules/@mui/material/Dialog/Dialog.js';
import '../../../../node_modules/@mui/material/Dialog/dialogClasses.js';
import '../../../../node_modules/@mui/material/DialogActions/DialogActions.js';
import '../../../../node_modules/@mui/material/DialogActions/dialogActionsClasses.js';
import '../../../../node_modules/@mui/material/DialogContent/DialogContent.js';
import '../../../../node_modules/@mui/material/DialogContent/dialogContentClasses.js';
import '../../../../node_modules/@mui/material/DialogContentText/DialogContentText.js';
import '../../../../node_modules/@mui/material/DialogContentText/dialogContentTextClasses.js';
import '../../../../node_modules/@mui/material/DialogTitle/DialogTitle.js';
import '../../../../node_modules/@mui/material/DialogTitle/dialogTitleClasses.js';
import Divider from '../../../../node_modules/@mui/material/Divider/Divider.js';
import '../../../../node_modules/@mui/material/Divider/dividerClasses.js';
import '../../../../node_modules/@mui/material/Drawer/Drawer.js';
import '../../../../node_modules/@mui/material/Drawer/drawerClasses.js';
import '../../../../node_modules/@mui/material/Fab/Fab.js';
import '../../../../node_modules/@mui/material/Fab/fabClasses.js';
import '../../../../node_modules/@mui/material/Fade/Fade.js';
import '../../../../node_modules/@mui/material/FilledInput/FilledInput.js';
import '../../../../node_modules/@mui/material/FilledInput/filledInputClasses.js';
import '../../../../node_modules/@mui/material/FormControl/FormControl.js';
import '../../../../node_modules/@mui/material/FormControl/FormControlContext.js';
import '../../../../node_modules/@mui/material/FormControl/formControlClasses.js';
import '../../../../node_modules/@mui/material/FormControlLabel/FormControlLabel.js';
import '../../../../node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js';
import '../../../../node_modules/@mui/material/FormGroup/FormGroup.js';
import '../../../../node_modules/@mui/material/FormGroup/formGroupClasses.js';
import '../../../../node_modules/@mui/material/FormHelperText/FormHelperText.js';
import '../../../../node_modules/@mui/material/FormHelperText/formHelperTextClasses.js';
import '../../../../node_modules/@mui/material/FormLabel/FormLabel.js';
import '../../../../node_modules/@mui/material/FormLabel/formLabelClasses.js';
import '../../../../node_modules/@mui/material/Grid/Grid.js';
import '../../../../node_modules/@mui/material/Grid/gridClasses.js';
import '../../../../node_modules/@mui/material/Grow/Grow.js';
import '../../../../node_modules/@mui/material/Hidden/Hidden.js';
import '../../../../node_modules/@mui/material/Icon/Icon.js';
import '../../../../node_modules/@mui/material/Icon/iconClasses.js';
import '../../../../node_modules/@mui/material/IconButton/IconButton.js';
import '../../../../node_modules/@mui/material/IconButton/iconButtonClasses.js';
import '../../../../node_modules/@mui/material/ImageList/ImageList.js';
import '../../../../node_modules/@mui/material/ImageList/imageListClasses.js';
import '../../../../node_modules/@mui/material/ImageListItem/ImageListItem.js';
import '../../../../node_modules/@mui/material/ImageListItem/imageListItemClasses.js';
import '../../../../node_modules/@mui/material/ImageListItemBar/ImageListItemBar.js';
import '../../../../node_modules/@mui/material/ImageListItemBar/imageListItemBarClasses.js';
import '../../../../node_modules/@mui/material/Input/Input.js';
import '../../../../node_modules/@mui/material/Input/inputClasses.js';
import '../../../../node_modules/@mui/material/InputAdornment/InputAdornment.js';
import '../../../../node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js';
import '../../../../node_modules/@mui/material/InputBase/InputBase.js';
import '../../../../node_modules/@mui/material/InputBase/inputBaseClasses.js';
import '../../../../node_modules/@mui/material/InputLabel/InputLabel.js';
import '../../../../node_modules/@mui/material/InputLabel/inputLabelClasses.js';
import '../../../../node_modules/@mui/material/LinearProgress/LinearProgress.js';
import '../../../../node_modules/@mui/material/LinearProgress/linearProgressClasses.js';
import Link from '../../../../node_modules/@mui/material/Link/Link.js';
import '../../../../node_modules/@mui/material/Link/linkClasses.js';
import '../../../../node_modules/@mui/material/List/List.js';
import '../../../../node_modules/@mui/material/List/listClasses.js';
import '../../../../node_modules/@mui/material/ListItem/ListItem.js';
import '../../../../node_modules/@mui/material/ListItem/listItemClasses.js';
import '../../../../node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js';
import '../../../../node_modules/@mui/material/ListItemAvatar/listItemAvatarClasses.js';
import '../../../../node_modules/@mui/material/ListItemButton/ListItemButton.js';
import '../../../../node_modules/@mui/material/ListItemButton/listItemButtonClasses.js';
import '../../../../node_modules/@mui/material/ListItemIcon/ListItemIcon.js';
import '../../../../node_modules/@mui/material/ListItemIcon/listItemIconClasses.js';
import '../../../../node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js';
import '../../../../node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.js';
import '../../../../node_modules/@mui/material/ListItemText/ListItemText.js';
import '../../../../node_modules/@mui/material/ListItemText/listItemTextClasses.js';
import '../../../../node_modules/@mui/material/ListSubheader/ListSubheader.js';
import '../../../../node_modules/@mui/material/ListSubheader/listSubheaderClasses.js';
import '../../../../node_modules/@mui/material/Menu/Menu.js';
import '../../../../node_modules/@mui/material/Menu/menuClasses.js';
import '../../../../node_modules/@mui/material/MenuItem/MenuItem.js';
import '../../../../node_modules/@mui/material/MenuItem/menuItemClasses.js';
import '../../../../node_modules/@mui/material/MenuList/MenuList.js';
import '../../../../node_modules/@mui/material/MobileStepper/MobileStepper.js';
import '../../../../node_modules/@mui/material/MobileStepper/mobileStepperClasses.js';
import '../../../../node_modules/@mui/material/Modal/Modal.js';
import '../../../../node_modules/@mui/material/NativeSelect/NativeSelect.js';
import '../../../../node_modules/@mui/material/NativeSelect/nativeSelectClasses.js';
import '../../../../node_modules/@mui/material/OutlinedInput/OutlinedInput.js';
import '../../../../node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js';
import '../../../../node_modules/@mui/material/Pagination/Pagination.js';
import '../../../../node_modules/@mui/material/Pagination/paginationClasses.js';
import '../../../../node_modules/@mui/material/PaginationItem/PaginationItem.js';
import '../../../../node_modules/@mui/material/PaginationItem/paginationItemClasses.js';
import '../../../../node_modules/@mui/material/Paper/Paper.js';
import '../../../../node_modules/@mui/material/Paper/paperClasses.js';
import '../../../../node_modules/@mui/material/Popover/Popover.js';
import '../../../../node_modules/@mui/material/Popover/popoverClasses.js';
import '../../../../node_modules/@mui/material/Popper/Popper.js';
import '../../../../node_modules/@mui/material/Radio/Radio.js';
import '../../../../node_modules/@mui/material/Radio/radioClasses.js';
import '../../../../node_modules/@mui/material/RadioGroup/RadioGroup.js';
import '../../../../node_modules/@mui/material/RadioGroup/RadioGroupContext.js';
import '../../../../node_modules/@mui/material/Rating/Rating.js';
import '../../../../node_modules/@mui/material/Rating/ratingClasses.js';
import '../../../../node_modules/@mui/material/ScopedCssBaseline/ScopedCssBaseline.js';
import '../../../../node_modules/@mui/material/ScopedCssBaseline/scopedCssBaselineClasses.js';
import '../../../../node_modules/@mui/material/Select/Select.js';
import '../../../../node_modules/@mui/material/Select/selectClasses.js';
import '../../../../node_modules/@mui/material/Skeleton/Skeleton.js';
import '../../../../node_modules/@mui/material/Skeleton/skeletonClasses.js';
import '../../../../node_modules/@mui/material/Slide/Slide.js';
import '../../../../node_modules/@mui/material/Slider/Slider.js';
import '../../../../node_modules/@mui/material/Snackbar/Snackbar.js';
import '../../../../node_modules/@mui/material/Snackbar/snackbarClasses.js';
import '../../../../node_modules/@mui/material/SnackbarContent/SnackbarContent.js';
import '../../../../node_modules/@mui/material/SnackbarContent/snackbarContentClasses.js';
import '../../../../node_modules/@mui/material/SpeedDial/SpeedDial.js';
import '../../../../node_modules/@mui/material/SpeedDial/speedDialClasses.js';
import '../../../../node_modules/@mui/material/SpeedDialAction/SpeedDialAction.js';
import '../../../../node_modules/@mui/material/SpeedDialAction/speedDialActionClasses.js';
import '../../../../node_modules/@mui/material/SpeedDialIcon/SpeedDialIcon.js';
import '../../../../node_modules/@mui/material/SpeedDialIcon/speedDialIconClasses.js';
import '../../../../node_modules/@mui/material/Stack/Stack.js';
import '../../../../node_modules/@mui/material/Step/Step.js';
import '../../../../node_modules/@mui/material/Step/stepClasses.js';
import '../../../../node_modules/@mui/material/Step/StepContext.js';
import '../../../../node_modules/@mui/material/StepButton/StepButton.js';
import '../../../../node_modules/@mui/material/StepButton/stepButtonClasses.js';
import '../../../../node_modules/@mui/material/StepConnector/StepConnector.js';
import '../../../../node_modules/@mui/material/StepConnector/stepConnectorClasses.js';
import '../../../../node_modules/@mui/material/StepContent/StepContent.js';
import '../../../../node_modules/@mui/material/StepContent/stepContentClasses.js';
import '../../../../node_modules/@mui/material/StepIcon/StepIcon.js';
import '../../../../node_modules/@mui/material/StepIcon/stepIconClasses.js';
import '../../../../node_modules/@mui/material/StepLabel/StepLabel.js';
import '../../../../node_modules/@mui/material/StepLabel/stepLabelClasses.js';
import '../../../../node_modules/@mui/material/Stepper/Stepper.js';
import '../../../../node_modules/@mui/material/Stepper/stepperClasses.js';
import '../../../../node_modules/@mui/material/Stepper/StepperContext.js';
import '../../../../node_modules/@mui/material/SwipeableDrawer/SwipeableDrawer.js';
import '../../../../node_modules/@mui/material/Switch/Switch.js';
import '../../../../node_modules/@mui/material/Switch/switchClasses.js';
import '../../../../node_modules/@mui/material/Tab/Tab.js';
import '../../../../node_modules/@mui/material/Tab/tabClasses.js';
import '../../../../node_modules/@mui/material/Table/Table.js';
import '../../../../node_modules/@mui/material/Table/tableClasses.js';
import '../../../../node_modules/@mui/material/TableBody/TableBody.js';
import '../../../../node_modules/@mui/material/TableBody/tableBodyClasses.js';
import '../../../../node_modules/@mui/material/TableCell/TableCell.js';
import '../../../../node_modules/@mui/material/TableCell/tableCellClasses.js';
import '../../../../node_modules/@mui/material/TableContainer/TableContainer.js';
import '../../../../node_modules/@mui/material/TableContainer/tableContainerClasses.js';
import '../../../../node_modules/@mui/material/TableFooter/TableFooter.js';
import '../../../../node_modules/@mui/material/TableFooter/tableFooterClasses.js';
import '../../../../node_modules/@mui/material/TableHead/TableHead.js';
import '../../../../node_modules/@mui/material/TableHead/tableHeadClasses.js';
import '../../../../node_modules/@mui/material/TablePagination/TablePagination.js';
import '../../../../node_modules/@mui/material/TablePagination/tablePaginationClasses.js';
import '../../../../node_modules/@mui/material/TableRow/TableRow.js';
import '../../../../node_modules/@mui/material/TableRow/tableRowClasses.js';
import '../../../../node_modules/@mui/material/TableSortLabel/TableSortLabel.js';
import '../../../../node_modules/@mui/material/TableSortLabel/tableSortLabelClasses.js';
import '../../../../node_modules/@mui/material/Tabs/Tabs.js';
import '../../../../node_modules/@mui/material/Tabs/tabsClasses.js';
import '../../../../node_modules/@mui/material/TabScrollButton/TabScrollButton.js';
import '../../../../node_modules/@mui/material/TabScrollButton/tabScrollButtonClasses.js';
import '../../../../node_modules/@mui/material/TextField/TextField.js';
import '../../../../node_modules/@mui/material/TextField/textFieldClasses.js';
import '../../../../node_modules/@mui/material/ToggleButton/ToggleButton.js';
import '../../../../node_modules/@mui/material/ToggleButton/toggleButtonClasses.js';
import '../../../../node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js';
import '../../../../node_modules/@mui/material/ToggleButtonGroup/toggleButtonGroupClasses.js';
import '../../../../node_modules/@mui/material/Toolbar/Toolbar.js';
import '../../../../node_modules/@mui/material/Toolbar/toolbarClasses.js';
import '../../../../node_modules/@mui/material/Tooltip/Tooltip.js';
import '../../../../node_modules/@mui/material/Tooltip/tooltipClasses.js';
import Typography from '../../../../node_modules/@mui/material/Typography/Typography.js';
import '../../../../node_modules/@mui/material/Typography/typographyClasses.js';
import '../../../../node_modules/@mui/material/Zoom/Zoom.js';
import '../../../../node_modules/@mui/material/GlobalStyles/GlobalStyles.js';
import { SM_MOBILE_MAX_WIDTH, CIRCLE_LOGO_IMAGE_SRC } from '../../../config/theme/themeConstants.js';
import { isPromise } from '../../../utils/promiseUtils.js';
import { Checkbox } from '../../shared/Checkbox/Checkbox.js';
import { ConsentText } from '../../shared/ConsentText/ConsentText.js';
import { PrimaryButton } from '../../shared/PrimaryButton/PrimaryButton.js';
import { LABELS_BY_VARIANT, ICONS_BY_VARIANT } from './CheckoutModalFooter.constants.js';
import { Img } from '../../shared/Img/Img.js';
import { CONSENT_ERROR_MESSAGE } from '../../../utils/validationUtils.js';

const VARIANTS_WITH_DISCLAIMER = ["toPayment", "toPlaid", "toConfirmation"];
const CheckoutModalFooter = ({ 
// Configuration:
variant, guestCheckoutEnabled, consentType, 
// Submit button:
submitHref, submitLabel, submitDisabled, submitLoading, onSubmitClicked, 
// Close link:
closeHref = "", closeLabel, closeDisabled, onCloseClicked, 
// Secondary button:
goToHref, goToLabel, onGoTo, }) => {
    // CONSENT:
    const showConsent = consentType && VARIANTS_WITH_DISCLAIMER.includes(variant);
    const consentTextElement = showConsent ? React__default.createElement(ConsentText, null) : null;
    const [{ isFormSubmitted, isFormLoading, isConsentChecked, }, setConsentState] = useState({
        isFormSubmitted: false,
        isFormLoading: false,
        isConsentChecked: !(showConsent && consentType === "checkbox"),
    });
    const showConsentError = isFormSubmitted && !isConsentChecked;
    const handleConsentClicked = useCallback((_, checked) => {
        setConsentState(prevConsentState => ({
            isFormSubmitted: prevConsentState.isFormSubmitted,
            isFormLoading: prevConsentState.isFormLoading,
            isConsentChecked: checked,
        }));
    }, []);
    // SECONDARY BUTTON (ConfirmationView-specific):
    const handleGoToClicked = useCallback((e) => {
        // We want to display the link (href) if the user hovers the button or if they click with the wheel or
        // Ctrl/Command + Click, but we don't know what type of routing the parent app is using (Next.js, React Router, etc.)
        // so we just prevent default here and let the parent app handle the routing:
        if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (onGoTo)
            onGoTo(e.currentTarget.href || "");
    }, [onGoTo]);
    // SUBMIT BUTTON:
    const primaryButtonVisible = variant !== "toGuestCheckout" || guestCheckoutEnabled;
    const primaryButtonLabel = submitLabel || LABELS_BY_VARIANT[variant];
    const isPrimaryButtonDisabled = submitDisabled || isFormLoading;
    const PrimaryButtonIcon = ICONS_BY_VARIANT[variant];
    const handleSubmitClicked = useCallback((e) => __awaiter(void 0, void 0, void 0, function* () {
        if ((!e.ctrlKey && !e.metaKey) || isPrimaryButtonDisabled) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (!onSubmitClicked || isPrimaryButtonDisabled)
            return;
        setConsentState({
            isFormSubmitted: true,
            isFormLoading: true,
            isConsentChecked,
        });
        const promiseOrResult = onSubmitClicked(isConsentChecked);
        const result = isPromise(promiseOrResult) ? yield promiseOrResult : promiseOrResult;
        // This means the parent component will make this one unmount, so there's no need to update the state anymore:
        if (result === false)
            return;
        setConsentState({
            isFormSubmitted: true,
            isFormLoading: false,
            isConsentChecked,
        });
    }), [isPrimaryButtonDisabled, isConsentChecked, onSubmitClicked]);
    // CANCEL LINK:
    const cancelLinkLabel = closeLabel || "Cancel and Return to Marketplace";
    const isCancelLinkDisabled = closeDisabled || isFormLoading;
    const cancelLinkColor = isCancelLinkDisabled ? "text.disabled" : "text.primary"; // TODO: Create custom Link component with this functionality.
    const handleCancelClicked = useCallback((e) => {
        if ((!e.ctrlKey && !e.metaKey) || isCancelLinkDisabled) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (!onCloseClicked || isCancelLinkDisabled)
            return;
        onCloseClicked();
    }, [isCancelLinkDisabled, onCloseClicked]);
    return (React__default.createElement(Box, { sx: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            pt: consentType === "checkbox" ? 0 : 5,
            pb: 5,
        } },
        showConsent && consentType === "checkbox" && (React__default.createElement(Checkbox, { label: React__default.createElement(React__default.Fragment, null,
                "I ",
                consentTextElement), checked: isConsentChecked, onChange: handleConsentClicked, error: showConsentError, helperText: showConsentError ? CONSENT_ERROR_MESSAGE : undefined, sx: { alignSelf: "flex-start", mb: 5 } })),
        goToLabel && onGoTo && (React__default.createElement(PrimaryButton, { onClickCapture: handleGoToClicked, disabled: isPrimaryButtonDisabled, href: goToHref || undefined, sx: { mb: 2 } }, goToLabel)),
        primaryButtonVisible && (React__default.createElement(PrimaryButton, { onClickCapture: onSubmitClicked ? handleSubmitClicked : undefined, disabled: isPrimaryButtonDisabled, href: submitHref || undefined, type: onSubmitClicked ? "button" : "submit", endIcon: isFormLoading || submitLoading ? React__default.createElement(CircularProgress, { color: "inherit", size: "1em" }) : (PrimaryButtonIcon && React__default.createElement(PrimaryButtonIcon, null)) }, primaryButtonLabel)),
        variant !== "toMarketplace" && (onCloseClicked || closeDisabled) && (React__default.createElement(Typography, { sx: { color: cancelLinkColor, pt: primaryButtonVisible ? 2 : 0 } },
            primaryButtonVisible ? "or " : null,
            React__default.createElement(Link, { sx: { color: cancelLinkColor, cursor: isCancelLinkDisabled ? "not-allowed" : "pointer" }, href: closeHref, onClickCapture: handleCancelClicked }, cancelLinkLabel))),
        showConsent && consentType === "disclaimer" && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(Divider, { sx: { my: 5, width: "100%" } }),
            React__default.createElement(Typography, { sx: { maxWidth: SM_MOBILE_MAX_WIDTH }, align: "center" },
                "By placing an order you affirm that you ",
                consentTextElement))),
        showConsent && consentType === "circle" && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(Divider, { sx: { my: 5, width: "100%" } }),
            React__default.createElement(Box, { display: "flex" },
                React__default.createElement(Typography, { sx: { maxWidth: SM_MOBILE_MAX_WIDTH, marginRight: 1 }, align: "center" }, "Payments powered by"),
                React__default.createElement(Link, { href: "https://www.circle.com/en/", target: "_blank", rel: "noopener noreferrer" },
                    React__default.createElement(Img, { src: CIRCLE_LOGO_IMAGE_SRC, height: 20 })))))));
};

export { CheckoutModalFooter };
//# sourceMappingURL=CheckoutModalFooter.js.map
