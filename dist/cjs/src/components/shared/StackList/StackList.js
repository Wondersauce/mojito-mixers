'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var material = require('@mui/material');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// eslint-disable-next-line @typescript-eslint/ban-types
function StackList({ data, additionalProps: additionalPropsFn, 
// placeholderData,
component: ItemComponent, itemKey: getItemKey, deps = [], }) {
    const renderedList = React.useMemo(() => {
        return (React__default["default"].createElement(material.Stack, { component: "ol", spacing: 2, sx: { m: 0, p: 0, listStyle: "none" } }, data.map((itemData, index) => {
            const key = `${getItemKey(itemData, index)}`;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: This expression is not callable
            const additionalProps = typeof additionalPropsFn === "function" ? additionalPropsFn(itemData, index) : additionalPropsFn;
            return (React__default["default"].createElement(ItemComponent, { key: key, 
                // TODO: Do we need to set the id attribute?
                id: key, index: index, component: "li", data: itemData, additionalProps: additionalProps }));
        })));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, ItemComponent, ...deps]);
    return renderedList;
}

exports.StackList = StackList;
//# sourceMappingURL=StackList.js.map
