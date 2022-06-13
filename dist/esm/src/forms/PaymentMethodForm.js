import { __awaiter } from '../../node_modules/tslib/tslib.es6.js';
import { useForm } from '../../node_modules/react-hook-form/dist/index.esm.mjs.js';
import { yupResolver } from '@hookform/resolvers/yup';
import '../../node_modules/yup/es/schema.js';
import { create as create$2 } from '../../node_modules/yup/es/boolean.js';
import { create as create$1 } from '../../node_modules/yup/es/string.js';
import '../../node_modules/yup/es/locale.js';
import '../../node_modules/yup/es/date.js';
import { create } from '../../node_modules/yup/es/object.js';
import ValidationError from '../../node_modules/yup/es/ValidationError.js';
import '../../node_modules/yup/es/Reference.js';
import 'property-expr';
import '@emotion/styled';
import '../../node_modules/@emotion/react/dist/emotion-react.esm.js';
import '../../node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js';
import '../../node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js';
import '../../node_modules/@mui/system/esm/borders.js';
import 'prop-types';
import '../../node_modules/@mui/utils/esm/elementAcceptingRef.js';
import '../../node_modules/@mui/utils/esm/elementTypeAcceptingRef.js';
import 'react-is';
import '../../node_modules/@mui/utils/esm/ponyfillGlobal.js';
import '../../node_modules/@mui/utils/esm/refType.js';
import React__default, { useMemo, useCallback } from 'react';
import '../../node_modules/@mui/utils/esm/integerPropType.js';
import '../../node_modules/@mui/system/esm/display.js';
import '../../node_modules/@mui/system/esm/flexbox.js';
import '../../node_modules/@mui/system/esm/grid.js';
import '../../node_modules/@mui/system/esm/palette.js';
import '../../node_modules/@mui/system/esm/positions.js';
import '../../node_modules/@mui/system/esm/shadows.js';
import '../../node_modules/@mui/system/esm/sizing.js';
import '../../node_modules/@mui/system/esm/spacing.js';
import '../../node_modules/@mui/system/esm/responsivePropType.js';
import '../../node_modules/@mui/system/esm/typography.js';
import '../../node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js';
import '../../node_modules/@mui/system/esm/getThemeValue.js';
import '../../node_modules/@mui/system/esm/Box/Box.js';
import '../../node_modules/@mui/system/esm/useTheme.js';
import 'react/jsx-runtime';
import '../../node_modules/@mui/system/esm/createStyled.js';
import '../../node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js';
import '../../node_modules/@mui/private-theming/useTheme/ThemeContext.js';
import '../../node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js';
import '../../node_modules/@mui/system/esm/Container/createContainer.js';
import '../../node_modules/@mui/system/esm/Container/Container.js';
import '../../node_modules/@mui/system/esm/Container/containerClasses.js';
import '../../node_modules/@mui/base/BadgeUnstyled/BadgeUnstyled.js';
import '../../node_modules/@mui/base/BadgeUnstyled/badgeUnstyledClasses.js';
import '../../node_modules/@mui/base/ButtonUnstyled/ButtonUnstyled.js';
import '../../node_modules/@mui/base/ButtonUnstyled/buttonUnstyledClasses.js';
import '../../node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js';
import '../../node_modules/@mui/base/FormControlUnstyled/FormControlUnstyled.js';
import '../../node_modules/@mui/base/FormControlUnstyled/FormControlUnstyledContext.js';
import '../../node_modules/@mui/base/FormControlUnstyled/formControlUnstyledClasses.js';
import '../../node_modules/@mui/base/InputUnstyled/InputUnstyled.js';
import '../../node_modules/@mui/base/InputUnstyled/inputUnstyledClasses.js';
import '../../node_modules/@mui/base/ListboxUnstyled/useListbox.types.js';
import '../../node_modules/@mui/base/MenuUnstyled/MenuUnstyled.js';
import '../../node_modules/@mui/base/MenuUnstyled/MenuUnstyledContext.js';
import '../../node_modules/@mui/base/MenuUnstyled/menuUnstyledClasses.js';
import '../../node_modules/@mui/base/MenuItemUnstyled/MenuItemUnstyled.js';
import '../../node_modules/@mui/base/MenuItemUnstyled/menuItemUnstyledClasses.js';
import '../../node_modules/@mui/base/ModalUnstyled/ModalUnstyled.js';
import '../../node_modules/@mui/base/ModalUnstyled/modalUnstyledClasses.js';
import '../../node_modules/@mui/base/MultiSelectUnstyled/MultiSelectUnstyled.js';
import '../../node_modules/@mui/base/NoSsr/NoSsr.js';
import '../../node_modules/@mui/base/OptionGroupUnstyled/OptionGroupUnstyled.js';
import '../../node_modules/@mui/base/OptionGroupUnstyled/optionGroupUnstyledClasses.js';
import '../../node_modules/@mui/base/OptionUnstyled/OptionUnstyled.js';
import '../../node_modules/@mui/base/OptionUnstyled/optionUnstyledClasses.js';
import '../../node_modules/@mui/base/PopperUnstyled/PopperUnstyled.js';
import '../../node_modules/@mui/base/Portal/Portal.js';
import '../../node_modules/@mui/base/SelectUnstyled/SelectUnstyled.js';
import '../../node_modules/@mui/base/SelectUnstyled/selectUnstyledClasses.js';
import '../../node_modules/@mui/base/SliderUnstyled/SliderUnstyled.js';
import '../../node_modules/@mui/base/SliderUnstyled/SliderValueLabelUnstyled.js';
import '../../node_modules/@mui/base/SliderUnstyled/sliderUnstyledClasses.js';
import '../../node_modules/@mui/base/SwitchUnstyled/SwitchUnstyled.js';
import '../../node_modules/@mui/base/SwitchUnstyled/switchUnstyledClasses.js';
import '../../node_modules/@mui/base/TabPanelUnstyled/TabPanelUnstyled.js';
import '../../node_modules/@mui/base/TabPanelUnstyled/tabPanelUnstyledClasses.js';
import '../../node_modules/@mui/base/TabsUnstyled/TabsUnstyled.js';
import '../../node_modules/@mui/base/TabsUnstyled/TabsContext.js';
import '../../node_modules/@mui/base/TabsUnstyled/tabsUnstyledClasses.js';
import '../../node_modules/@mui/base/TabsListUnstyled/TabsListUnstyled.js';
import '../../node_modules/@mui/base/TabsListUnstyled/tabsListUnstyledClasses.js';
import '../../node_modules/@mui/base/TabUnstyled/TabUnstyled.js';
import '../../node_modules/@mui/base/TabUnstyled/tabUnstyledClasses.js';
import '../../node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js';
import '../../node_modules/@mui/base/TrapFocus/TrapFocus.js';
import '../../node_modules/@mui/material/styles/createPalette.js';
import '../../node_modules/@mui/material/styles/shadows.js';
import '../../node_modules/@mui/material/styles/defaultTheme.js';
import '../../node_modules/@mui/material/styles/CssVarsProvider.js';
import '../../node_modules/@mui/material/styles/experimental_extendTheme.js';
import '../../node_modules/@mui/material/SvgIcon/SvgIcon.js';
import '../../node_modules/@mui/material/SvgIcon/svgIconClasses.js';
import '../../node_modules/@mui/material/Accordion/Accordion.js';
import '../../node_modules/@mui/material/Accordion/accordionClasses.js';
import '../../node_modules/@mui/material/AccordionActions/AccordionActions.js';
import '../../node_modules/@mui/material/AccordionActions/accordionActionsClasses.js';
import '../../node_modules/@mui/material/AccordionDetails/AccordionDetails.js';
import '../../node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js';
import '../../node_modules/@mui/material/AccordionSummary/AccordionSummary.js';
import '../../node_modules/@mui/material/AccordionSummary/accordionSummaryClasses.js';
import '../../node_modules/@mui/material/Alert/Alert.js';
import '../../node_modules/@mui/material/Alert/alertClasses.js';
import '../../node_modules/@mui/material/AlertTitle/AlertTitle.js';
import '../../node_modules/@mui/material/AlertTitle/alertTitleClasses.js';
import '../../node_modules/@mui/material/AppBar/AppBar.js';
import '../../node_modules/@mui/material/AppBar/appBarClasses.js';
import '../../node_modules/@mui/material/Autocomplete/Autocomplete.js';
import '../../node_modules/@mui/material/Autocomplete/autocompleteClasses.js';
import '../../node_modules/@mui/material/Avatar/Avatar.js';
import '../../node_modules/@mui/material/Avatar/avatarClasses.js';
import '../../node_modules/@mui/material/AvatarGroup/AvatarGroup.js';
import '../../node_modules/@mui/material/AvatarGroup/avatarGroupClasses.js';
import '../../node_modules/@mui/material/Backdrop/Backdrop.js';
import '../../node_modules/@mui/material/Backdrop/backdropClasses.js';
import '../../node_modules/@mui/material/Badge/Badge.js';
import '../../node_modules/@mui/material/Badge/badgeClasses.js';
import '../../node_modules/@mui/material/BottomNavigation/BottomNavigation.js';
import '../../node_modules/@mui/material/BottomNavigation/bottomNavigationClasses.js';
import '../../node_modules/@mui/material/BottomNavigationAction/BottomNavigationAction.js';
import '../../node_modules/@mui/material/BottomNavigationAction/bottomNavigationActionClasses.js';
import Box from '../../node_modules/@mui/material/Box/Box.js';
import '../../node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js';
import '../../node_modules/@mui/material/Breadcrumbs/breadcrumbsClasses.js';
import '../../node_modules/@mui/material/Button/Button.js';
import '../../node_modules/@mui/material/Button/buttonClasses.js';
import '../../node_modules/@mui/material/ButtonBase/ButtonBase.js';
import '../../node_modules/@mui/material/ButtonBase/buttonBaseClasses.js';
import '../../node_modules/@mui/material/ButtonBase/touchRippleClasses.js';
import '../../node_modules/@mui/material/ButtonGroup/ButtonGroup.js';
import '../../node_modules/@mui/material/ButtonGroup/buttonGroupClasses.js';
import '../../node_modules/@mui/material/Card/Card.js';
import '../../node_modules/@mui/material/Card/cardClasses.js';
import '../../node_modules/@mui/material/CardActionArea/CardActionArea.js';
import '../../node_modules/@mui/material/CardActionArea/cardActionAreaClasses.js';
import '../../node_modules/@mui/material/CardActions/CardActions.js';
import '../../node_modules/@mui/material/CardActions/cardActionsClasses.js';
import '../../node_modules/@mui/material/CardContent/CardContent.js';
import '../../node_modules/@mui/material/CardContent/cardContentClasses.js';
import '../../node_modules/@mui/material/CardHeader/CardHeader.js';
import '../../node_modules/@mui/material/CardHeader/cardHeaderClasses.js';
import '../../node_modules/@mui/material/CardMedia/CardMedia.js';
import '../../node_modules/@mui/material/CardMedia/cardMediaClasses.js';
import '../../node_modules/@mui/material/Checkbox/Checkbox.js';
import '../../node_modules/@mui/material/Checkbox/checkboxClasses.js';
import '../../node_modules/@mui/material/Chip/Chip.js';
import '../../node_modules/@mui/material/Chip/chipClasses.js';
import '../../node_modules/@mui/material/CircularProgress/CircularProgress.js';
import '../../node_modules/@mui/material/CircularProgress/circularProgressClasses.js';
import '../../node_modules/@mui/material/Collapse/Collapse.js';
import '../../node_modules/@mui/material/Collapse/collapseClasses.js';
import '../../node_modules/@mui/material/Container/Container.js';
import '../../node_modules/@mui/material/Container/containerClasses.js';
import '../../node_modules/@mui/material/CssBaseline/CssBaseline.js';
import '../../node_modules/@mui/material/Dialog/Dialog.js';
import '../../node_modules/@mui/material/Dialog/dialogClasses.js';
import '../../node_modules/@mui/material/DialogActions/DialogActions.js';
import '../../node_modules/@mui/material/DialogActions/dialogActionsClasses.js';
import '../../node_modules/@mui/material/DialogContent/DialogContent.js';
import '../../node_modules/@mui/material/DialogContent/dialogContentClasses.js';
import '../../node_modules/@mui/material/DialogContentText/DialogContentText.js';
import '../../node_modules/@mui/material/DialogContentText/dialogContentTextClasses.js';
import '../../node_modules/@mui/material/DialogTitle/DialogTitle.js';
import '../../node_modules/@mui/material/DialogTitle/dialogTitleClasses.js';
import '../../node_modules/@mui/material/Divider/Divider.js';
import '../../node_modules/@mui/material/Divider/dividerClasses.js';
import '../../node_modules/@mui/material/Drawer/Drawer.js';
import '../../node_modules/@mui/material/Drawer/drawerClasses.js';
import '../../node_modules/@mui/material/Fab/Fab.js';
import '../../node_modules/@mui/material/Fab/fabClasses.js';
import '../../node_modules/@mui/material/Fade/Fade.js';
import '../../node_modules/@mui/material/FilledInput/FilledInput.js';
import '../../node_modules/@mui/material/FilledInput/filledInputClasses.js';
import '../../node_modules/@mui/material/FormControl/FormControl.js';
import '../../node_modules/@mui/material/FormControl/FormControlContext.js';
import '../../node_modules/@mui/material/FormControl/formControlClasses.js';
import '../../node_modules/@mui/material/FormControlLabel/FormControlLabel.js';
import '../../node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js';
import '../../node_modules/@mui/material/FormGroup/FormGroup.js';
import '../../node_modules/@mui/material/FormGroup/formGroupClasses.js';
import '../../node_modules/@mui/material/FormHelperText/FormHelperText.js';
import '../../node_modules/@mui/material/FormHelperText/formHelperTextClasses.js';
import '../../node_modules/@mui/material/FormLabel/FormLabel.js';
import '../../node_modules/@mui/material/FormLabel/formLabelClasses.js';
import Grid from '../../node_modules/@mui/material/Grid/Grid.js';
import '../../node_modules/@mui/material/Grid/gridClasses.js';
import '../../node_modules/@mui/material/Grow/Grow.js';
import '../../node_modules/@mui/material/Hidden/Hidden.js';
import '../../node_modules/@mui/material/Icon/Icon.js';
import '../../node_modules/@mui/material/Icon/iconClasses.js';
import '../../node_modules/@mui/material/IconButton/IconButton.js';
import '../../node_modules/@mui/material/IconButton/iconButtonClasses.js';
import '../../node_modules/@mui/material/ImageList/ImageList.js';
import '../../node_modules/@mui/material/ImageList/imageListClasses.js';
import '../../node_modules/@mui/material/ImageListItem/ImageListItem.js';
import '../../node_modules/@mui/material/ImageListItem/imageListItemClasses.js';
import '../../node_modules/@mui/material/ImageListItemBar/ImageListItemBar.js';
import '../../node_modules/@mui/material/ImageListItemBar/imageListItemBarClasses.js';
import '../../node_modules/@mui/material/Input/Input.js';
import '../../node_modules/@mui/material/Input/inputClasses.js';
import '../../node_modules/@mui/material/InputAdornment/InputAdornment.js';
import '../../node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js';
import '../../node_modules/@mui/material/InputBase/InputBase.js';
import '../../node_modules/@mui/material/InputBase/inputBaseClasses.js';
import '../../node_modules/@mui/material/InputLabel/InputLabel.js';
import '../../node_modules/@mui/material/InputLabel/inputLabelClasses.js';
import '../../node_modules/@mui/material/LinearProgress/LinearProgress.js';
import '../../node_modules/@mui/material/LinearProgress/linearProgressClasses.js';
import '../../node_modules/@mui/material/Link/Link.js';
import '../../node_modules/@mui/material/Link/linkClasses.js';
import '../../node_modules/@mui/material/List/List.js';
import '../../node_modules/@mui/material/List/listClasses.js';
import '../../node_modules/@mui/material/ListItem/ListItem.js';
import '../../node_modules/@mui/material/ListItem/listItemClasses.js';
import '../../node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js';
import '../../node_modules/@mui/material/ListItemAvatar/listItemAvatarClasses.js';
import '../../node_modules/@mui/material/ListItemButton/ListItemButton.js';
import '../../node_modules/@mui/material/ListItemButton/listItemButtonClasses.js';
import '../../node_modules/@mui/material/ListItemIcon/ListItemIcon.js';
import '../../node_modules/@mui/material/ListItemIcon/listItemIconClasses.js';
import '../../node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js';
import '../../node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.js';
import '../../node_modules/@mui/material/ListItemText/ListItemText.js';
import '../../node_modules/@mui/material/ListItemText/listItemTextClasses.js';
import '../../node_modules/@mui/material/ListSubheader/ListSubheader.js';
import '../../node_modules/@mui/material/ListSubheader/listSubheaderClasses.js';
import '../../node_modules/@mui/material/Menu/Menu.js';
import '../../node_modules/@mui/material/Menu/menuClasses.js';
import '../../node_modules/@mui/material/MenuItem/MenuItem.js';
import '../../node_modules/@mui/material/MenuItem/menuItemClasses.js';
import '../../node_modules/@mui/material/MenuList/MenuList.js';
import '../../node_modules/@mui/material/MobileStepper/MobileStepper.js';
import '../../node_modules/@mui/material/MobileStepper/mobileStepperClasses.js';
import '../../node_modules/@mui/material/Modal/Modal.js';
import '../../node_modules/@mui/material/NativeSelect/NativeSelect.js';
import '../../node_modules/@mui/material/NativeSelect/nativeSelectClasses.js';
import '../../node_modules/@mui/material/OutlinedInput/OutlinedInput.js';
import '../../node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js';
import '../../node_modules/@mui/material/Pagination/Pagination.js';
import '../../node_modules/@mui/material/Pagination/paginationClasses.js';
import '../../node_modules/@mui/material/PaginationItem/PaginationItem.js';
import '../../node_modules/@mui/material/PaginationItem/paginationItemClasses.js';
import '../../node_modules/@mui/material/Paper/Paper.js';
import '../../node_modules/@mui/material/Paper/paperClasses.js';
import '../../node_modules/@mui/material/Popover/Popover.js';
import '../../node_modules/@mui/material/Popover/popoverClasses.js';
import '../../node_modules/@mui/material/Popper/Popper.js';
import '../../node_modules/@mui/material/Radio/Radio.js';
import '../../node_modules/@mui/material/Radio/radioClasses.js';
import '../../node_modules/@mui/material/RadioGroup/RadioGroup.js';
import '../../node_modules/@mui/material/RadioGroup/RadioGroupContext.js';
import '../../node_modules/@mui/material/Rating/Rating.js';
import '../../node_modules/@mui/material/Rating/ratingClasses.js';
import '../../node_modules/@mui/material/ScopedCssBaseline/ScopedCssBaseline.js';
import '../../node_modules/@mui/material/ScopedCssBaseline/scopedCssBaselineClasses.js';
import '../../node_modules/@mui/material/Select/Select.js';
import '../../node_modules/@mui/material/Select/selectClasses.js';
import '../../node_modules/@mui/material/Skeleton/Skeleton.js';
import '../../node_modules/@mui/material/Skeleton/skeletonClasses.js';
import '../../node_modules/@mui/material/Slide/Slide.js';
import '../../node_modules/@mui/material/Slider/Slider.js';
import '../../node_modules/@mui/material/Snackbar/Snackbar.js';
import '../../node_modules/@mui/material/Snackbar/snackbarClasses.js';
import '../../node_modules/@mui/material/SnackbarContent/SnackbarContent.js';
import '../../node_modules/@mui/material/SnackbarContent/snackbarContentClasses.js';
import '../../node_modules/@mui/material/SpeedDial/SpeedDial.js';
import '../../node_modules/@mui/material/SpeedDial/speedDialClasses.js';
import '../../node_modules/@mui/material/SpeedDialAction/SpeedDialAction.js';
import '../../node_modules/@mui/material/SpeedDialAction/speedDialActionClasses.js';
import '../../node_modules/@mui/material/SpeedDialIcon/SpeedDialIcon.js';
import '../../node_modules/@mui/material/SpeedDialIcon/speedDialIconClasses.js';
import '../../node_modules/@mui/material/Stack/Stack.js';
import '../../node_modules/@mui/material/Step/Step.js';
import '../../node_modules/@mui/material/Step/stepClasses.js';
import '../../node_modules/@mui/material/Step/StepContext.js';
import '../../node_modules/@mui/material/StepButton/StepButton.js';
import '../../node_modules/@mui/material/StepButton/stepButtonClasses.js';
import '../../node_modules/@mui/material/StepConnector/StepConnector.js';
import '../../node_modules/@mui/material/StepConnector/stepConnectorClasses.js';
import '../../node_modules/@mui/material/StepContent/StepContent.js';
import '../../node_modules/@mui/material/StepContent/stepContentClasses.js';
import '../../node_modules/@mui/material/StepIcon/StepIcon.js';
import '../../node_modules/@mui/material/StepIcon/stepIconClasses.js';
import '../../node_modules/@mui/material/StepLabel/StepLabel.js';
import '../../node_modules/@mui/material/StepLabel/stepLabelClasses.js';
import '../../node_modules/@mui/material/Stepper/Stepper.js';
import '../../node_modules/@mui/material/Stepper/stepperClasses.js';
import '../../node_modules/@mui/material/Stepper/StepperContext.js';
import '../../node_modules/@mui/material/SwipeableDrawer/SwipeableDrawer.js';
import '../../node_modules/@mui/material/Switch/Switch.js';
import '../../node_modules/@mui/material/Switch/switchClasses.js';
import '../../node_modules/@mui/material/Tab/Tab.js';
import '../../node_modules/@mui/material/Tab/tabClasses.js';
import '../../node_modules/@mui/material/Table/Table.js';
import '../../node_modules/@mui/material/Table/tableClasses.js';
import '../../node_modules/@mui/material/TableBody/TableBody.js';
import '../../node_modules/@mui/material/TableBody/tableBodyClasses.js';
import '../../node_modules/@mui/material/TableCell/TableCell.js';
import '../../node_modules/@mui/material/TableCell/tableCellClasses.js';
import '../../node_modules/@mui/material/TableContainer/TableContainer.js';
import '../../node_modules/@mui/material/TableContainer/tableContainerClasses.js';
import '../../node_modules/@mui/material/TableFooter/TableFooter.js';
import '../../node_modules/@mui/material/TableFooter/tableFooterClasses.js';
import '../../node_modules/@mui/material/TableHead/TableHead.js';
import '../../node_modules/@mui/material/TableHead/tableHeadClasses.js';
import '../../node_modules/@mui/material/TablePagination/TablePagination.js';
import '../../node_modules/@mui/material/TablePagination/tablePaginationClasses.js';
import '../../node_modules/@mui/material/TableRow/TableRow.js';
import '../../node_modules/@mui/material/TableRow/tableRowClasses.js';
import '../../node_modules/@mui/material/TableSortLabel/TableSortLabel.js';
import '../../node_modules/@mui/material/TableSortLabel/tableSortLabelClasses.js';
import '../../node_modules/@mui/material/Tabs/Tabs.js';
import '../../node_modules/@mui/material/Tabs/tabsClasses.js';
import '../../node_modules/@mui/material/TabScrollButton/TabScrollButton.js';
import '../../node_modules/@mui/material/TabScrollButton/tabScrollButtonClasses.js';
import '../../node_modules/@mui/material/TextField/TextField.js';
import '../../node_modules/@mui/material/TextField/textFieldClasses.js';
import '../../node_modules/@mui/material/ToggleButton/ToggleButton.js';
import '../../node_modules/@mui/material/ToggleButton/toggleButtonClasses.js';
import '../../node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js';
import '../../node_modules/@mui/material/ToggleButtonGroup/toggleButtonGroupClasses.js';
import '../../node_modules/@mui/material/Toolbar/Toolbar.js';
import '../../node_modules/@mui/material/Toolbar/toolbarClasses.js';
import '../../node_modules/@mui/material/Tooltip/Tooltip.js';
import '../../node_modules/@mui/material/Tooltip/tooltipClasses.js';
import Typography from '../../node_modules/@mui/material/Typography/Typography.js';
import '../../node_modules/@mui/material/Typography/typographyClasses.js';
import '../../node_modules/@mui/material/Zoom/Zoom.js';
import '../../node_modules/@mui/material/GlobalStyles/GlobalStyles.js';
import BookIcon from '@mui/icons-material/Book';
import { o as getCardNumberError } from '../../node_modules/react-payment-inputs/es/utils/validator-0f41e23d.js';
import 'styled-components';
import '../../node_modules/react-payment-inputs/es/PaymentInputsWrapper.js';
import { CheckoutModalFooter } from '../components/payments/CheckoutModalFooter/CheckoutModalFooter.js';
import { ControlledTextField } from '../components/shared/TextField/TextField.js';
import { ControlledCardNumberField } from '../components/shared/CardNumberField/CardNumberField.js';
import { ControlledCardExpiryDateField } from '../components/shared/CardExpiryDateField/CardExpiryDateField.js';
import { ControlledCardSecureCodeField } from '../components/shared/CardSecureCodeField/CardSecureCodeField.js';
import { InputGroupLabel } from '../components/shared/InputGroupLabel/InputGroupLabel.js';
import { SecondaryButton } from '../components/shared/SecondaryButton/SecondaryButton.js';
import { PaymentMethodSelector } from '../components/shared/PaymentMethodSelector/PaymentMethodSelector.js';
import { withRequiredErrorMessage, CONSENT_ERROR_MESSAGE, withInvalidConnection, withInvalidCardNumber, withInvalidCreditCardNetwork, withInvalidErrorMessage, withInvalidCVV, requireSchemaWhenKeyIs } from '../utils/validationUtils.js';
import { getCreditCardNetworkFromNumber, getExpiryDateIsValid, getCvvIsValid } from '../domain/payment/payment.utils.js';
import { DisplayBox } from '../components/payments/DisplayBox/DisplayBox.js';
import { DebugBox } from '../components/payments/DebugBox/DebugBox.js';
import { ControlledCheckbox } from '../components/shared/Checkbox/Checkbox.js';
import { ConsentText } from '../components/shared/ConsentText/ConsentText.js';
import { FormErrorsBox } from '../components/shared/FormErrorsBox/FormErrorsBox.js';
import { useFormCheckoutError } from '../hooks/useFormCheckoutError.js';
import { useDictionary } from '../hooks/useDictionary.js';
import { getCardTypeByType } from '../domain/react-payment-inputs/react-payment-inputs.utils.js';
import { FormErrorsCaption } from '../components/shared/FormErrorCaption/FormErrorCaption.js';
import { useLimits } from '../hooks/useLimits.js';

const FIELD_LABELS = {
    cardNumber: "Card Number",
    expiryDate: "Expiry Date",
    secureCode: "Secure Code",
    nameOnCard: "Name on Card",
    accountNumber: "Account Number",
    routingNumber: "Routing Number (ABA)",
};
const FIELD_NAMES = Object.keys(FIELD_LABELS);
const isCreditCardThenRequireSchema = requireSchemaWhenKeyIs("CreditCard");
const isWireThenRequireSchema = requireSchemaWhenKeyIs("Wire");
const PAYMENT_TYPE_FORM_DATA = {
    CreditCard: {
        defaultValues: consentType => ({
            type: "CreditCard",
            cardNumber: "",
            expiryDate: "",
            secureCode: "",
            nameOnCard: "",
            consent: consentType !== "checkbox",
        }),
        schemaShape: acceptedCreditCardNetworks => ({
            cardNumber: create$1()
                .label(FIELD_LABELS.cardNumber)
                .when("type", {
                is: "CreditCard",
                then: (schema) => {
                    return schema.required(withRequiredErrorMessage).test({
                        name: "is-valid-card-number",
                        test: (cardNumber, context) => {
                            const creditCardNumberError = getCardNumberError(cardNumber);
                            if (creditCardNumberError) {
                                return new ValidationError(withInvalidCardNumber({ label: FIELD_LABELS.cardNumber }), cardNumber, context.path);
                            }
                            if (acceptedCreditCardNetworks && acceptedCreditCardNetworks.length > 0) {
                                const creditCardNetwork = getCreditCardNetworkFromNumber(cardNumber || "");
                                if (creditCardNetwork === "" || !acceptedCreditCardNetworks.includes(creditCardNetwork)) {
                                    return new ValidationError(withInvalidCreditCardNetwork({ acceptedCreditCardNetworks }), cardNumber, context.path);
                                }
                            }
                            return true;
                        },
                    });
                },
            }),
            expiryDate: create$1()
                .label(FIELD_LABELS.expiryDate)
                .when("type", {
                is: "CreditCard",
                then: (schema) => {
                    return schema.required(withRequiredErrorMessage).test({
                        name: "is-valid-expiry-date",
                        test: getExpiryDateIsValid,
                        message: withInvalidErrorMessage,
                    });
                },
            }),
            secureCode: create$1()
                // .label(FIELD_LABELS.secureCode)
                .when("type", {
                is: "CreditCard",
                then: (schema) => {
                    return schema.test({
                        name: "is-valid-cvv",
                        test: (cvv, context) => {
                            const creditCardNetwork = getCreditCardNetworkFromNumber(context.parent.cardNumber || "");
                            const cvvLabel = getCardTypeByType(creditCardNetwork).code.name;
                            if (!cvv) {
                                return new ValidationError(withRequiredErrorMessage({ label: cvvLabel }), cvv, context.path);
                            }
                            const { cvvExpectedLength, isCvvValid } = getCvvIsValid(cvv, creditCardNetwork, acceptedCreditCardNetworks, true);
                            if (!isCvvValid) {
                                return new ValidationError(withInvalidCVV({ cvvLabel, cvvExpectedLength }), cvv, context.path);
                            }
                            return true;
                        },
                    });
                },
            }),
            nameOnCard: create$1()
                .label(FIELD_LABELS.nameOnCard)
                .when("type", isCreditCardThenRequireSchema),
        }),
        fields: ({ control, cvvLabel, consentType }) => (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(ControlledCardNumberField, { name: "cardNumber", control: control, label: FIELD_LABELS.cardNumber }),
            React__default.createElement(Grid, { container: true, columnSpacing: 2, direction: {
                    xs: "column",
                    sm: "row",
                } },
                React__default.createElement(Grid, { item: true, sm: 6, zeroMinWidth: true },
                    React__default.createElement(ControlledCardExpiryDateField, { name: "expiryDate", control: control, label: FIELD_LABELS.expiryDate })),
                React__default.createElement(Grid, { item: true, sm: 6 },
                    React__default.createElement(ControlledCardSecureCodeField, { name: "secureCode", control: control, label: cvvLabel }))),
            React__default.createElement(ControlledTextField, { name: "nameOnCard", control: control, label: FIELD_LABELS.nameOnCard }),
            consentType === "checkbox" && (React__default.createElement(ControlledCheckbox, { name: "consent", control: control, label: React__default.createElement(React__default.Fragment, null,
                    "I ",
                    React__default.createElement(ConsentText, null)) })))),
    },
    ACH: {
        defaultValues: consentType => ({
            type: "ACH",
            accountId: "",
            publicToken: "",
            consent: consentType !== "checkbox",
        }),
        schemaShape: () => ({}),
        fields: ({ control, consentType }) => (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(DisplayBox, { sx: { mt: 1.5, mb: consentType === "checkbox" ? 1 : 0 } },
                React__default.createElement(Typography, { variant: "body1" }, "We use Plaid to connect to your account.")),
            consentType === "checkbox" && (React__default.createElement(ControlledCheckbox, { name: "consent", control: control, label: React__default.createElement(React__default.Fragment, null,
                    "I ",
                    React__default.createElement(ConsentText, null)) })))),
    },
    Wire: {
        defaultValues: consentType => ({
            type: "Wire",
            accountNumber: "",
            routingNumber: "",
            consent: consentType !== "checkbox",
        }),
        schemaShape: () => ({
            accountNumber: create$1()
                .label(FIELD_LABELS.accountNumber)
                .when("type", isWireThenRequireSchema),
            routingNumber: create$1()
                .label(FIELD_LABELS.routingNumber)
                .when("type", isWireThenRequireSchema),
        }),
        fields: ({ control, consentType, dictionary }) => (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(ControlledTextField, { name: "accountNumber", control: control, label: FIELD_LABELS.accountNumber }),
            React__default.createElement(ControlledTextField, { name: "routingNumber", control: control, label: FIELD_LABELS.routingNumber }),
            consentType === "checkbox" && (React__default.createElement(ControlledCheckbox, { name: "consent", control: control, label: React__default.createElement(React__default.Fragment, null,
                    "I ",
                    React__default.createElement(ConsentText, null)) })),
            React__default.createElement(DisplayBox, { sx: { mt: 1.5 } }, dictionary.wirePaymentsDisclaimer.map((line, i) => (
            // eslint-disable-next-line react/no-array-index-key
            React__default.createElement(Typography, { key: i, variant: "body1", sx: i === 0 ? undefined : { mt: 1.5 } }, line)))))),
    },
    Crypto: {
        defaultValues: consentType => ({
            type: "Crypto",
            consent: consentType !== "checkbox",
        }),
        schemaShape: () => ({}),
        fields: ({ control, consentType }) => (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(DisplayBox, { sx: { mt: 1.5, mb: consentType === "checkbox" ? 1 : 0 } },
                React__default.createElement(Typography, { variant: "body1" }, "We use Coinbase to connect to your wallet.")),
            consentType === "checkbox" && (React__default.createElement(ControlledCheckbox, { name: "consent", control: control, label: React__default.createElement(React__default.Fragment, null,
                    "I ",
                    React__default.createElement(ConsentText, null)) })))),
    },
};
const PaymentMethodForm = ({ acceptedPaymentTypes, acceptedCreditCardNetworks, defaultValues: parentDefaultValues, checkoutError, plaidLoading, plaidError, onPlaidLinkClicked, refetchPlaidLink, onSaved, onClose, onSubmit, onAttemptSubmit, consentType, checkoutItems, debug = false, }) => {
    const defaultPaymentType = acceptedPaymentTypes[0] || "CreditCard";
    const defaultPaymentTypeFormData = PAYMENT_TYPE_FORM_DATA[defaultPaymentType];
    const defaultPaymentTypeDefaultValues = defaultPaymentTypeFormData.defaultValues(consentType);
    const schema = useMemo(() => {
        return create().shape(Object.assign({ type: create$1().required(withRequiredErrorMessage), consent: create$2().oneOf([true], CONSENT_ERROR_MESSAGE) }, Object.values(PAYMENT_TYPE_FORM_DATA).reduce((objectShape, { schemaShape }) => {
            return (Object.assign(Object.assign({}, objectShape), schemaShape(acceptedCreditCardNetworks)));
        }, {})));
    }, [acceptedCreditCardNetworks]);
    const dictionary = useDictionary();
    const { control, handleSubmit, watch, reset, trigger, setError, formState, } = useForm({
        defaultValues: Object.assign(Object.assign({}, defaultPaymentTypeDefaultValues), parentDefaultValues),
        reValidateMode: "onChange",
        resolver: yupResolver(schema),
    });
    const firstCheckoutItem = checkoutItems[0];
    // Item Limits:
    const selectedPaymentMethod = watch("type");
    const { limits, loading: loadingItemLimits, limitExceededMessage, } = useLimits(firstCheckoutItem, acceptedPaymentTypes, selectedPaymentMethod);
    const handleSelectedPaymentMethodChange = useCallback((paymentType) => {
        reset(Object.assign({}, PAYMENT_TYPE_FORM_DATA[paymentType].defaultValues(consentType)));
        if (paymentType === "ACH" && !!plaidError)
            refetchPlaidLink();
    }, [reset, consentType, plaidError, refetchPlaidLink]);
    const Fields = PAYMENT_TYPE_FORM_DATA[selectedPaymentMethod].fields;
    const submitForm = handleSubmit(onSubmit);
    const checkoutErrorMessage = useFormCheckoutError({ formKey: "payment", checkoutError, fields: FIELD_NAMES, setError, deps: [selectedPaymentMethod] });
    const acceptsManyPaymentMethods = acceptedPaymentTypes.length > 1;
    const creditCardNumber = watch("cardNumber");
    const creditCardNetwork = getCreditCardNetworkFromNumber(creditCardNumber || "");
    const cvvLabel = getCardTypeByType(creditCardNetwork).code.name;
    const handleFormSubmit = useCallback((e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        onAttemptSubmit();
        if (selectedPaymentMethod === "ACH") {
            const isFormValid = yield trigger();
            if (!isFormValid) {
                submitForm(e);
                return;
            }
            onPlaidLinkClicked();
        }
        else {
            submitForm(e);
        }
    }), [onAttemptSubmit, selectedPaymentMethod, onPlaidLinkClicked, submitForm, trigger]);
    const addSpacing = !onSaved && acceptedPaymentTypes.length <= 1;
    const showPlaidError = selectedPaymentMethod === "ACH" && !!plaidError;
    return (React__default.createElement("form", { onSubmit: handleFormSubmit },
        onSaved && (React__default.createElement(Box, { sx: { my: 2.5 } },
            React__default.createElement(SecondaryButton, { onClick: onSaved, startIcon: React__default.createElement(BookIcon, null) }, "Use Saved Payment Method"))),
        acceptsManyPaymentMethods && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(InputGroupLabel, { sx: { m: 0, pt: 2, pb: 1.5 } }, "Payment Method"),
            React__default.createElement(PaymentMethodSelector, { selectedPaymentMethod: selectedPaymentMethod, onPaymentMethodChange: handleSelectedPaymentMethodChange, paymentMethods: acceptedPaymentTypes }))),
        addSpacing && !limitExceededMessage ? (React__default.createElement(Box, { sx: { mt: 1 } })) : null,
        limitExceededMessage ? (React__default.createElement(DisplayBox, { sx: { mt: addSpacing ? 1 : 0, mb: 2.5 } },
            React__default.createElement(Typography, { sx: { fontWeight: "500" } }, limitExceededMessage))) : null,
        React__default.createElement(Fields, { control: control, cvvLabel: cvvLabel, consentType: consentType, dictionary: dictionary }),
        checkoutErrorMessage && React__default.createElement(FormErrorsBox, { error: checkoutErrorMessage, sx: { mt: 5 } }),
        showPlaidError && (React__default.createElement(FormErrorsCaption, { sx: { mt: 2 } }, withInvalidConnection({ label: "Plaid" }))),
        debug && (React__default.createElement(DebugBox, { sx: { mt: 5 } },
            JSON.stringify(watch(), null, 2),
            "\n\n",
            JSON.stringify(formState.errors, null, 2),
            "\n\n",
            JSON.stringify(limits, null, 2))),
        React__default.createElement(CheckoutModalFooter, { variant: selectedPaymentMethod === "ACH" ? "toPlaid" : "toConfirmation", consentType: consentType === "checkbox" ? undefined : consentType, submitLabel: loadingItemLimits ? "Verifying purchase..." : undefined, submitDisabled: showPlaidError || loadingItemLimits || !!limitExceededMessage, submitLoading: plaidLoading || loadingItemLimits, onCloseClicked: onClose })));
};

export { PaymentMethodForm };
//# sourceMappingURL=PaymentMethodForm.js.map
