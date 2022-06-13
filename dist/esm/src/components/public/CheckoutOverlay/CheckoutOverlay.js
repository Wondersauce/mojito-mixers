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
import React__default, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
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
import Backdrop from '../../../../node_modules/@mui/material/Backdrop/Backdrop.js';
import '../../../../node_modules/@mui/material/Backdrop/backdropClasses.js';
import '../../../../node_modules/@mui/material/Badge/Badge.js';
import '../../../../node_modules/@mui/material/Badge/badgeClasses.js';
import '../../../../node_modules/@mui/material/BottomNavigation/BottomNavigation.js';
import '../../../../node_modules/@mui/material/BottomNavigation/bottomNavigationClasses.js';
import '../../../../node_modules/@mui/material/BottomNavigationAction/BottomNavigationAction.js';
import '../../../../node_modules/@mui/material/BottomNavigationAction/bottomNavigationActionClasses.js';
import '../../../../node_modules/@mui/material/Box/Box.js';
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
import '../../../../node_modules/@mui/material/Divider/Divider.js';
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
import '../../../../node_modules/@mui/material/Link/Link.js';
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
import '../../../../node_modules/@mui/material/Typography/Typography.js';
import '../../../../node_modules/@mui/material/Typography/typographyClasses.js';
import '../../../../node_modules/@mui/material/Zoom/Zoom.js';
import '../../../../node_modules/@mui/material/GlobalStyles/GlobalStyles.js';
import { transformRawSavedPaymentMethods, savedPaymentMethodToBillingInfo } from '../../../domain/circle/circle.utils.js';
import { useMeQuery, useGetPaymentMethodListQuery, useGetInvoiceDetailsQuery, useDeletePaymentMethodMutation, useReleaseReservationBuyNowLotMutation } from '../../../queries/graphqlGenerated.js';
import { AuthenticationView } from '../../../views/Authentication/AuthenticationView.js';
import { BillingView } from '../../../views/Billing/BillingView.js';
import { ConfirmationView } from '../../../views/Confirmation/ConfirmationView.js';
import { PaymentView } from '../../../views/Payment/PaymentView.js';
import { CheckoutModalHeader } from '../../payments/CheckoutModalHeader/CheckoutModalHeader.js';
import { PurchasingView } from '../../../views/Purchasing/PurchasingView.js';
import { ErrorView } from '../../../views/Error/ErrorView.js';
import { continuePlaidOAuthFlow, PlaidFlow } from '../../../hooks/usePlaid.js';
import { useCheckoutModalState, CheckoutModalStepIndex } from './CheckoutOverlay.hooks.js';
import { ERROR_LOADING_USER, ERROR_LOADING_INVOICE, ERROR_LOADING_PAYMENT_METHODS } from '../../../domain/errors/errors.constants.js';
import { FullScreenOverlay } from '../../shared/FullScreenOverlay/FullScreenOverlay.js';
import { withProviders } from '../../shared/ProvidersInjector/ProvidersInjector.js';
import { transformCheckoutItemsFromInvoice } from '../../../domain/product/product.utils.js';
import { useCreateInvoiceAndReservation } from '../../../hooks/useCreateInvoiceAndReservation.js';
import { useCheckoutItemsCostTotal } from '../../../hooks/useCheckoutItemCostTotal.js';
import { DictionaryProvider } from '../../../providers/DictionaryProvider.js';
import { DEV_DEBUG_ENABLED_KEY, THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY, THREEDS_FLOW_SEARCH_PARAM_ERROR_KEY, THREEDS_REDIRECT_DELAY_MS } from '../../../config/config.js';
import { NEW_WALLET_OPTION } from '../../../domain/wallet/wallet.constants.js';
import { StatusIcon } from '../../shared/StatusIcon/StatusIcon.js';
import { PUIStaticSuccessOverlay } from '../SuccessOverlay/StaticSuccessOverlay.js';
import { PUIStaticErrorOverlay } from '../ErrorOverlay/StaticErrorOverlay.js';
import { useCountdown } from '../../../hooks/useContdown.js';
import { getPathnameWithParams } from '../../../domain/url/url.utils.js';
import { IS_BROWSER } from '../../../domain/build/build.constants.js';
import { PromoCodeProvider } from '../../../utils/promoCodeUtils.js';
import { getLastPaymentMethodID } from '../../../hooks/useFullPayment.js';

const DEV_DEBUG_ENABLED = IS_BROWSER && localStorage.getItem(DEV_DEBUG_ENABLED_KEY) === "true";
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
    const [debug, setDebug] = useState(!!parentDebug);
    // Initialization, just to prevent issues with Next.js' SSR:
    useEffect(() => {
        setDebug((prevDebug) => {
            const nextDebug = prevDebug || DEV_DEBUG_ENABLED;
            if (nextDebug)
                console.log("\n🐞 DEBUG MODE ENABLED!\n\n");
            return nextDebug;
        });
    }, []);
    // Actual changes triggered by users:
    const toggleDebug = useCallback(() => {
        setDebug((prevDebug) => {
            const nextDebug = !prevDebug;
            console.log(`\n🐞 DEBUG MODE ${nextDebug ? "ENABLED" : "DISABLED"}!\n\n`);
            if (nextDebug) {
                localStorage.setItem(DEV_DEBUG_ENABLED_KEY, "true");
            }
            else {
                localStorage.removeItem(DEV_DEBUG_ENABLED_KEY);
            }
            return nextDebug;
        });
    }, []);
    // First, get user data:
    const { data: meData, loading: meLoading, error: meError, refetch: meRefetch, } = useMeQuery({ skip: !isAuthenticated });
    const wallets = useMemo(() => {
        var _a;
        if (meLoading || !meData)
            return undefined;
        const userWallets = ((_a = meData.me) === null || _a === void 0 ? void 0 : _a.wallets) || [];
        return network
            ? userWallets.filter(wallet => { var _a; return ((_a = wallet === null || wallet === void 0 ? void 0 : wallet.network) === null || _a === void 0 ? void 0 : _a.id) === network.id; })
            : userWallets;
    }, [meLoading, meData, network]);
    // Get everything related to Payment UI routing, error and state handling, including resuming Plaid / 3DS flows:
    const paymentIdParamRef = useRef(paymentIdParam);
    const paymentErrorParamRef = useRef(paymentErrorParam);
    const { 
    // CheckoutModalState:
    startAt, checkoutStep, checkoutError, isDialogBlocked, setIsDialogBlocked, initModalState, goBack, goNext, goTo, setError, 
    // Data that can be persisted:
    orgID, checkoutItems: initialCheckoutItems, goToMarketplaceHref, 
    // SelectedPaymentMethod:
    selectedPaymentMethod, setSelectedPaymentMethod, 
    // PurchaseState:
    invoiceID, invoiceCountdownStart, setInvoiceID, taxes, setTaxes, wallet, setWalletAddress, paymentID, processorPaymentID, setPayments, } = useCheckoutModalState({
        orgID: parentOrgID,
        invoiceID: parentInvoiceID,
        paymentIdParam: paymentIdParamRef.current,
        productConfirmationEnabled,
        vertexEnabled,
        isAuthenticated,
        onError,
        debug,
    });
    const dictionary = useMemo(() => (Object.assign(Object.assign({}, parentDictionary), { goToMarketplaceHref })), [parentDictionary, goToMarketplaceHref]);
    // Get saved payment methods:
    const { data: paymentMethodsData, loading: paymentMethodsLoading, error: paymentMethodsError, refetch: refetchPaymentMethods, } = useGetPaymentMethodListQuery({
        skip: !isAuthenticated || !orgID || !open,
        variables: { orgID },
    });
    const handleSavedPaymentMethodsReloaded = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        yield refetchPaymentMethods({ orgID }).catch(() => { });
    }), [refetchPaymentMethods, orgID]);
    // Once we have an invoiceID, load the invoice:
    const { data: invoiceDetailsData, loading: invoiceDetailsLoading, error: invoiceDetailsError, refetch: refetchInvoiceDetails, } = useGetInvoiceDetailsQuery({
        skip: !invoiceID,
        variables: { invoiceID },
    });
    // Payment methods and checkout items / invoice items transforms:
    const rawSavedPaymentMethods = paymentMethodsData === null || paymentMethodsData === void 0 ? void 0 : paymentMethodsData.getPaymentMethodList;
    const savedPaymentMethods = useMemo(() => transformRawSavedPaymentMethods(rawSavedPaymentMethods), [rawSavedPaymentMethods]);
    const invoiceItems = invoiceDetailsData === null || invoiceDetailsData === void 0 ? void 0 : invoiceDetailsData.getInvoiceDetails.items;
    const destinationAddress = ((_b = (_a = (invoiceItems || [])) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.destinationAddress) || NEW_WALLET_OPTION.value;
    useEffect(() => {
        if (!destinationAddress)
            return;
        const nextWallet = (wallets || []).find(({ address }) => address === destinationAddress);
        setWalletAddress(nextWallet || destinationAddress);
    }, [wallets, destinationAddress, setWalletAddress]);
    // TODO: These should probably be combined.
    const checkoutItems = useMemo(() => {
        return transformCheckoutItemsFromInvoice(parentCheckoutItems, initialCheckoutItems, invoiceItems);
    }, [parentCheckoutItems, initialCheckoutItems, invoiceItems]);
    const { total: subtotal, fees, taxAmount } = useCheckoutItemsCostTotal(checkoutItems);
    // Modal loading state:
    const isAuthLoading = isAuthenticatedLoading || meLoading;
    const isDialogLoading = isAuthLoading || paymentMethodsLoading || !orgID || checkoutItems.length === 0;
    const isDialogInitializing = isDialogLoading || paymentMethodsLoading || invoiceDetailsLoading || !invoiceID || !invoiceCountdownStart;
    const isPlaidFlowLoading = continuePlaidOAuthFlow();
    const [loaderMode, setLoaderMode] = useState(initialLoaderMode);
    const showEspecialLoaders = open && isDialogInitializing && loaderMode !== "default" && checkoutStep !== "error";
    useEffect(() => {
        if (loaderMode === "default")
            return;
        if (!isDialogInitializing || !open) {
            // Once we have finished loading data OR if the modal is not opened (probably
            // because the stored data expired) or is closed, we reset the loader mode:
            setLoaderMode("default");
        }
    }, [loaderMode, isDialogInitializing, open]);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        params.delete(THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY);
        params.delete(THREEDS_FLOW_SEARCH_PARAM_ERROR_KEY);
        const cleanParams = params.toString();
        const cleanPathname = `${window.location.pathname}${cleanParams ? `?${cleanParams}` : ""}`;
        if (cleanPathname && cleanPathname !== getPathnameWithParams()) {
            // As soon as we find these params, we remove them from the URL (they are stored in a Ref to avoid losing them
            // before we get a change to use them):
            onGoTo(cleanPathname, { replace: true, shallow: true, reason: "Clean URL." });
        }
    }, [onGoTo]);
    // Invoice creation & buy now lot reservation:
    const createInvoiceAndReservationCalledRef = useRef(false);
    const { 
    // TODO: Instead of returning state, just pass setError and setInvoiceID or return it from createInvoiceAndReservation.
    invoiceAndReservationState, createInvoiceAndReservation, } = useCreateInvoiceAndReservation({ orgID, checkoutItems, debug });
    useEffect(() => {
        if (isDialogLoading || invoiceID === null || invoiceID || createInvoiceAndReservationCalledRef.current)
            return;
        createInvoiceAndReservationCalledRef.current = true;
        createInvoiceAndReservation();
    }, [isDialogLoading, invoiceID, createInvoiceAndReservation]);
    useEffect(() => {
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
    const { countdownElementRef } = useCountdown({
        invoiceCountdownStart: checkoutStep === "confirmation" || checkoutStep === "error" ? null : invoiceCountdownStart,
        setError,
    });
    // Init modal state once everything has been loaded:
    const hasBeenInitRef = useRef(false);
    useEffect(() => {
        if (hasBeenInitRef.current && (!open || isAuthLoading))
            hasBeenInitRef.current = false;
    }, [open, isAuthLoading, debug]);
    useEffect(() => {
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
    useEffect(() => {
        if (meError)
            setError(ERROR_LOADING_USER(meError));
        if (invoiceDetailsError)
            setError(ERROR_LOADING_INVOICE(invoiceDetailsError));
        // This one doesn't show the ErrorView. Instead, it's displayed inline in the BillingView > BillingInfoForm:
        if (paymentMethodsError)
            goTo(undefined, ERROR_LOADING_PAYMENT_METHODS(paymentMethodsError));
    }, [meError, invoiceDetailsError, paymentMethodsError, debug, goTo, setError]);
    // Analytics:
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const triggerAnalyticsEventRef = useRef((eventType) => { });
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
            step: CheckoutModalStepIndex[checkoutStep],
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
    useEffect(() => {
        // Original code (might this be causing the mismatch eventName / checkoutStep issue?):
        if (!isDialogInitializing)
            setTimeout(() => triggerAnalyticsEventRef.current(`navigate:${checkoutStep}`));
        // Possible fix (might this cause some other issues such as missing data):
        // if (!isDialogInitializing) triggerAnalyticsEventRef.current(`navigate:${ checkoutStep }`);
    }, [isDialogInitializing, checkoutStep]);
    // Saved payment method creation-reload-sync:
    useEffect(() => {
        if (savedPaymentMethods.length === 0)
            return;
        // When reloading the saved payment methods after an error, we might have form data that matches a payment method
        // that has just been created, so we want to update it to reference the existing one:
        setSelectedPaymentMethod((prevSelectedPaymentMethod) => {
            const { billingInfo, paymentInfo } = prevSelectedPaymentMethod;
            if (typeof billingInfo === "string" && typeof paymentInfo === "string")
                return Object.assign(Object.assign({}, prevSelectedPaymentMethod), { cvv: "" });
            // To find the saved payment method(s) that was/were last used (potentially also created):
            const lastPaymentMethodID = getLastPaymentMethodID();
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
    const handleBillingInfoSelected = useCallback((billingInfo) => {
        // If we go back to the billing info step to fix some validation errors or change some data, we preserve the data
        // in the payment info step (form) as long as it was not a saved payment method. In that case, the saved payment
        // method doesn't belong to the now updated billing info anymore, so we do reset it:
        setSelectedPaymentMethod(({ paymentInfo }) => ({ billingInfo, paymentInfo: typeof paymentInfo === "object" ? paymentInfo : "", paymentType: "", cvv: "" }));
    }, [setSelectedPaymentMethod]);
    const handlePaymentInfoSelected = useCallback((paymentInfo) => {
        var _a;
        const paymentType = typeof paymentInfo === "string"
            ? (((_a = savedPaymentMethods.find(({ id }) => id === paymentInfo)) === null || _a === void 0 ? void 0 : _a.type) || "")
            : paymentInfo.type;
        setSelectedPaymentMethod(({ billingInfo }) => ({ billingInfo, paymentInfo, paymentType, cvv: "" }));
    }, [savedPaymentMethods, setSelectedPaymentMethod]);
    const handleCvvSelected = useCallback((cvv) => {
        setSelectedPaymentMethod(({ billingInfo, paymentInfo }) => ({ billingInfo, paymentInfo, paymentType: "CreditCard", cvv }));
    }, [setSelectedPaymentMethod]);
    // Delete payment methods:
    const [deletePaymentMethod] = useDeletePaymentMethodMutation();
    const handleSavedPaymentMethodDeleted = useCallback((addressIdOrPaymentMethodId) => __awaiter(void 0, void 0, void 0, function* () {
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
                    billingInfo: savedPaymentMethodToBillingInfo(addressToDelete),
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
    const handlePurchaseSuccess = useCallback((nextCirclePaymentID, nextPaymentID, redirectURL) => __awaiter(void 0, void 0, void 0, function* () {
        setPayments(nextCirclePaymentID, nextPaymentID);
        setTimeout(() => triggerAnalyticsEventRef.current("event:paymentSuccess"));
        if (redirectURL) {
            setTimeout(() => {
                if (debug)
                    console.log(`Redirecting to payment success page = ${redirectURL}`);
                window.location.href = redirectURL;
            }, THREEDS_REDIRECT_DELAY_MS);
            return;
        }
        // After a successful purchase, a new payment method might have been created, so we reload them:
        yield handleSavedPaymentMethodsReloaded();
        goNext();
    }), [setPayments, debug, handleSavedPaymentMethodsReloaded, goNext]);
    const handlePurchaseError = useCallback((error) => __awaiter(void 0, void 0, void 0, function* () {
        setTimeout(() => triggerAnalyticsEventRef.current("event:paymentError"));
        // After a failed purchase, a new payment method might have been created anyway, so we reload them (createPaymentMethod
        // works but createPayment fails):
        yield handleSavedPaymentMethodsReloaded();
        setError(error);
    }), [handleSavedPaymentMethodsReloaded, setError]);
    // Release reservation:
    const lastReleasedReservationID = useRef("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleBeforeUnloadRef = useRef((e) => { });
    const [releaseReservationBuyNowLot] = useReleaseReservationBuyNowLotMutation({
        variables: {
            orgID,
            invoiceID,
        },
    });
    const handleBeforeUnload = handleBeforeUnloadRef.current = useCallback((e) => {
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
    useEffect(() => {
        if ((checkoutError === null || checkoutError === void 0 ? void 0 : checkoutError.at) === "reset")
            handleBeforeUnloadRef.current();
    }, [checkoutError]);
    useEffect(() => {
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [handleBeforeUnload]);
    const handleClose = useCallback(() => {
        if (!onClose)
            return;
        window.removeEventListener("beforeunload", handleBeforeUnload);
        handleBeforeUnload();
        createInvoiceAndReservationCalledRef.current = false;
        setInvoiceID(null, null);
        onClose();
    }, [handleBeforeUnload, setInvoiceID, onClose]);
    const handleGoTo = useCallback((pathnameOrUrlParam) => {
        const pathnameOrUrl = pathnameOrUrlParam || "/";
        if (pathnameOrUrl === window.location.href || pathnameOrUrl === window.location.pathname) {
            handleClose();
            return;
        }
        window.removeEventListener("beforeunload", handleBeforeUnload);
        handleBeforeUnload();
        onGoTo(pathnameOrUrl, { replace: true });
    }, [handleClose, handleBeforeUnload, onGoTo]);
    const handlePurchaseCompleted = useCallback(() => {
        handleGoTo(goToMarketplaceHref);
    }, [handleGoTo, goToMarketplaceHref]);
    // Error handling:
    const handleFixError = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
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
    const handlePlaidFlowCompleted = useCallback((paymentInfo) => {
        if (!paymentInfo) {
            initModalState();
            return;
        }
        handlePaymentInfoSelected(paymentInfo);
        goTo("purchasing");
    }, [initModalState, handlePaymentInfoSelected, goTo]);
    // Loading UI:
    if (showEspecialLoaders && loaderMode === "success") {
        return (React__default.createElement(PUIStaticSuccessOverlay
        // TODO: Add to dictionary:
        , { 
            // TODO: Add to dictionary:
            successImageSrc: successImageSrc, logoSrc: logoSrc, logoSx: logoSx }));
    }
    if (showEspecialLoaders && loaderMode === "error") {
        return (React__default.createElement(PUIStaticErrorOverlay, { checkoutError: { errorMessage: paymentErrorParamRef.current || "" }, 
            // TODO: Add to dictionary:
            errorImageSrc: errorImageSrc, logoSrc: logoSrc, logoSx: logoSx }));
    }
    if ((isDialogInitializing || isPlaidFlowLoading) && (checkoutStep !== "error")) {
        return (React__default.createElement(React__default.Fragment, null,
            isPlaidFlowLoading && React__default.createElement(PlaidFlow, { onSubmit: handlePlaidFlowCompleted }),
            React__default.createElement(Backdrop, { open: open, onClick: handleClose }, loaderImageSrc ? (React__default.createElement(StatusIcon, { variant: "loading", imgSrc: loaderImageSrc, sx: { mt: 5 } })) : (React__default.createElement(CircularProgress, { color: "primary" })))));
    }
    // Normal UI (steps / views):
    let headerVariant = isAuthenticated ? "loggedIn" : "guest";
    let checkoutStepElement = null;
    if (checkoutStep === "error" && checkoutError) {
        headerVariant = "error";
        checkoutStepElement = (React__default.createElement(ErrorView, { checkoutError: checkoutError, errorImageSrc: errorImageSrc, onFixError: handleFixError, onClose: handleClose, debug: debug }));
    }
    else if (checkoutStep === "authentication") {
        if (!isAuthenticated)
            headerVariant = "anonymous";
        checkoutStepElement = (React__default.createElement(AuthenticationView, { invoiceItemIDs: invoiceAndReservationState.invoiceItemIDs, checkoutItems: checkoutItems, taxes: taxes, isAuthenticated: isAuthenticated, guestCheckoutEnabled: guestCheckoutEnabled, onGuestClicked: goNext, onCloseClicked: handleClose }));
    }
    else if (checkoutStep === "billing") {
        checkoutStepElement = (React__default.createElement(BillingView, { invoiceItemIDs: invoiceAndReservationState.invoiceItemIDs, orgID: orgID, vertexEnabled: vertexEnabled, checkoutItems: checkoutItems, savedPaymentMethods: savedPaymentMethods, selectedBillingInfo: selectedPaymentMethod.billingInfo, wallet: wallet, wallets: wallets, checkoutError: checkoutError, onBillingInfoSelected: handleBillingInfoSelected, onTaxesChange: setTaxes, onReloadSavedPaymentMethods: handleSavedPaymentMethodsReloaded, onSavedPaymentMethodDeleted: handleSavedPaymentMethodDeleted, onWalletChange: setWalletAddress, onNext: goNext, onClose: handleClose, consentType: consentType, debug: debug }));
    }
    else if (checkoutStep === "payment" && invoiceID && invoiceCountdownStart) {
        checkoutStepElement = (React__default.createElement(PaymentView, { invoiceItemIDs: invoiceAndReservationState.invoiceItemIDs, orgID: orgID, invoiceID: invoiceID, invoiceCountdownStart: invoiceCountdownStart, checkoutItems: checkoutItems, taxes: taxes, savedPaymentMethods: savedPaymentMethods, selectedPaymentMethod: selectedPaymentMethod, wallet: wallet, wallets: wallets, checkoutError: checkoutError, onPaymentInfoSelected: handlePaymentInfoSelected, onCvvSelected: handleCvvSelected, onSavedPaymentMethodDeleted: handleSavedPaymentMethodDeleted, onWalletChange: setWalletAddress, onNext: goNext, onPrev: goBack, onClose: handleClose, acceptedPaymentTypes: acceptedPaymentTypes, acceptedCreditCardNetworks: acceptedCreditCardNetworks, consentType: consentType, debug: debug }));
    }
    else if (checkoutStep === "purchasing" && invoiceID && invoiceCountdownStart) {
        headerVariant = "purchasing";
        checkoutStepElement = (React__default.createElement(PurchasingView, { threeDSEnabled: threeDSEnabled, coinbaseSuccessURL: coinbaseSuccessURL, coinbaseErrorURL: coinbaseErrorURL, purchasingImageSrc: purchasingImageSrc, purchasingMessages: purchasingMessages, orgID: orgID, invoiceID: invoiceID, invoiceCountdownStart: invoiceCountdownStart, checkoutItems: checkoutItems, savedPaymentMethods: savedPaymentMethods, selectedPaymentMethod: selectedPaymentMethod, wallet: wallet, onPurchaseSuccess: handlePurchaseSuccess, onPurchaseError: handlePurchaseError, onDialogBlocked: setIsDialogBlocked, debug: debug }));
    }
    else if (checkoutStep === "confirmation") {
        headerVariant = "logoOnly";
        checkoutStepElement = (React__default.createElement(ConfirmationView, { checkoutItems: checkoutItems, savedPaymentMethods: savedPaymentMethods, selectedPaymentMethod: selectedPaymentMethod, processorPaymentID: processorPaymentID, wallet: wallet, onNext: handlePurchaseCompleted, onGoTo: handleGoTo }));
    }
    else {
        console.warn("Unknown checkoutStepElement!");
        // !checkoutStep or
        // checkoutStep === "error" && !checkoutError or
        // checkoutStep === "purchasing" && !invoiceID or
        // some other kind of indeterminate / incorrect state:
        return null;
    }
    const headerElement = (React__default.createElement(CheckoutModalHeader, { variant: headerVariant, countdownElementRef: countdownElementRef, logoSrc: logoSrc, logoSx: logoSx, user: (_c = meData === null || meData === void 0 ? void 0 : meData.me) === null || _c === void 0 ? void 0 : _c.user, userFormat: userFormat, onLogin: onLogin, onClose: checkoutStep === startAt ? handleClose : undefined, onPrev: checkoutStep === startAt ? undefined : goBack, toggleDebug: toggleDebug }));
    return (React__default.createElement(DictionaryProvider, { dictionary: dictionary },
        React__default.createElement(PromoCodeProvider, null,
            React__default.createElement(FullScreenOverlay, { centered: checkoutStep === "purchasing" || checkoutStep === "error", open: open, onClose: handleClose, isDialogBlocked: isDialogBlocked, contentKey: checkoutStep, header: headerElement }, checkoutStepElement))));
};
const PUICheckout = withProviders(PUICheckoutOverlay);

export { PUICheckout, PUICheckoutOverlay };
//# sourceMappingURL=CheckoutOverlay.js.map
