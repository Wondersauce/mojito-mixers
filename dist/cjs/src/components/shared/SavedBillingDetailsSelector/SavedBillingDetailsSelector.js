'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var InputGroupLabel = require('../InputGroupLabel/InputGroupLabel.js');
var Add = require('../../../../node_modules/@mui/icons-material/Add.js');
var StackList = require('../StackList/StackList.js');
var React = require('react');
var BillingInfoItem = require('../../payments/BillingInfo/Item/BillingInfoItem.js');
var SecondaryButton = require('../SecondaryButton/SecondaryButton.js');
var CheckoutModalFooter = require('../../payments/CheckoutModalFooter/CheckoutModalFooter.js');
var material = require('@mui/material');
var theme = require('../../../config/theme/theme.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const SavedBillingDetailsSelector = ({ showLoader, savedPaymentMethods, selectedPaymentMethodAddressId, onNew, onEdit, onDelete, onPick, onNext, onClose, }) => {
    const getPaymentMethodAddressId = React.useCallback((savedPaymentMethod) => savedPaymentMethod.addressId, []);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(material.Box, { sx: { position: "relative" } },
            showLoader ? (React__default["default"].createElement(material.Box, { sx: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: theme$1 => material.alpha(theme$1.palette.background.default, theme.OVERLAY_OPACITY),
                    zIndex: 100,
                } },
                React__default["default"].createElement(material.CircularProgress, { color: "secondary" }))) : null,
            React__default["default"].createElement(InputGroupLabel.InputGroupLabel, { sx: { mt: 2.5, mb: 1.5 } }, "Saved Billing Info"),
            React__default["default"].createElement(StackList.StackList, { data: savedPaymentMethods, additionalProps: (savedPaymentMethod) => ({
                    active: savedPaymentMethod.addressId === selectedPaymentMethodAddressId,
                    disabled: showLoader,
                    onDelete,
                    onPick,
                    onEdit,
                }), component: BillingInfoItem.BillingInfoItem, itemKey: getPaymentMethodAddressId, deps: [selectedPaymentMethodAddressId, showLoader, onDelete, onPick, onEdit] }),
            React__default["default"].createElement(SecondaryButton.SecondaryButton, { onClick: onNew, startIcon: React__default["default"].createElement(Add["default"], null), sx: { mt: 2.5 }, disabled: showLoader }, "Add New Billing Info")),
        React__default["default"].createElement(CheckoutModalFooter.CheckoutModalFooter, { variant: "toPayment", onSubmitClicked: onNext, onCloseClicked: onClose })));
};

exports.SavedBillingDetailsSelector = SavedBillingDetailsSelector;
//# sourceMappingURL=SavedBillingDetailsSelector.js.map
