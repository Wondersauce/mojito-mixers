'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../../../../node_modules/@apollo/client/core/index.js');
require('../../../../node_modules/@apollo/client/utilities/globals/index.js');
require('../../../../node_modules/graphql/version.mjs.js');
require('../../../../node_modules/graphql/language/ast.mjs.js');
require('../../../../node_modules/graphql/language/directiveLocation.mjs.js');
require('../../../../node_modules/graphql/language/kinds.mjs.js');
require('../../../../node_modules/graphql/language/tokenKind.mjs.js');
require('../../../../node_modules/graphql/jsutils/instanceOf.mjs.js');
require('../../../../node_modules/graphql/language/visitor.mjs.js');
require('../../../../node_modules/graphql/type/directives.mjs.js');
require('../../../../node_modules/graphql/type/introspection.mjs.js');
require('../../../../node_modules/graphql/validation/specifiedRules.mjs.js');
require('../../../../node_modules/graphql/type/scalars.mjs.js');
require('../../../../node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs.js');
require('../../../../node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs.js');
require('../../../../node_modules/graphql/utilities/extendSchema.mjs.js');
require('../../../../node_modules/graphql/utilities/findBreakingChanges.mjs.js');
require('../../../../node_modules/@apollo/client/utilities/graphql/storeUtils.js');
require('../../../../node_modules/@apollo/client/utilities/graphql/transform.js');
require('../../../../node_modules/@apollo/client/utilities/common/mergeDeep.js');
require('../../../../node_modules/@apollo/client/utilities/observables/Observable.js');
require('../../../../node_modules/@apollo/client/utilities/observables/Concast.js');
require('../../../../node_modules/@apollo/client/utilities/common/canUse.js');
var ApolloProvider = require('../../../../node_modules/@apollo/client/react/context/ApolloProvider.js');
require('../../../../node_modules/@apollo/client/react/hooks/useQuery.js');
require('../../../../node_modules/@apollo/client/react/parser/index.js');
require('../../../../node_modules/@apollo/client/errors/index.js');
var auth0React_esm = require('../../../../node_modules/@auth0/auth0-react/dist/auth0-react.esm.js');
var context = require('@apollo/client/link/context');
var url_utils = require('../../../domain/url/url.utils.js');
var inMemoryCache = require('../../../../node_modules/@apollo/client/cache/inmemory/inMemoryCache.js');
var createHttpLink = require('../../../../node_modules/@apollo/client/link/http/createHttpLink.js');
var ApolloClient = require('../../../../node_modules/@apollo/client/core/ApolloClient.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const cache = new inMemoryCache.InMemoryCache();
const AuthorizedApolloProvider = ({ apolloClient: parentApolloClient, uri, getAuthenticationToken: parentGetAuthenticationToken, children, }) => {
    const { getIdTokenClaims } = auth0React_esm.useAuth0();
    const defaultGetAuthenticationToken = React.useCallback(() => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        const token = yield getIdTokenClaims();
        // eslint-disable-next-line no-underscore-dangle
        return token === null || token === void 0 ? void 0 : token.__raw;
    }), [getIdTokenClaims]);
    const getAuthenticationToken = parentGetAuthenticationToken || defaultGetAuthenticationToken;
    const apolloClient = React.useMemo(() => {
        if (parentApolloClient)
            return parentApolloClient;
        if (!uri)
            return null;
        const httpLink = createHttpLink.createHttpLink({ uri });
        const authLink = context.setContext((_, { headers }) => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
            const token = yield getAuthenticationToken();
            const context = {
                headers: Object.assign(Object.assign({}, headers), { authorization: token ? `Bearer ${token}` : "" }),
            };
            if (url_utils.isLocalhost())
                context.headers["origin-overwrite"] = "https://payments-staging.mojito.xyz/";
            return context;
        }));
        const link = authLink.concat(httpLink);
        return new ApolloClient.ApolloClient({ uri, link, cache });
    }, [parentApolloClient, uri, getAuthenticationToken]);
    return apolloClient ? React__default["default"].createElement(ApolloProvider.ApolloProvider, { client: apolloClient }, children) : React__default["default"].createElement(React__default["default"].Fragment, null, children);
};

exports.AuthorizedApolloProvider = AuthorizedApolloProvider;
//# sourceMappingURL=AuthorizedApolloProvider.js.map
