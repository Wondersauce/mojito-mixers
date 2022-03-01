'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        // Define a state variable to track whether is an error or not
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        // You can use your own error logging service here
        console.log({ error, errorInfo });
    }
    render() {
        // Check if the error is thrown
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (React__default["default"].createElement("div", null,
                React__default["default"].createElement("h2", null, "Oops, there is an error!"),
                React__default["default"].createElement("button", { type: "button", onClick: () => this.setState({ hasError: false }) }, "Try again?")));
        }
        // Return children components in case of no error
        return this.props.children;
    }
}

exports["default"] = ErrorBoundary;
//# sourceMappingURL=ErrorBoundery.js.map