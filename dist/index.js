"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseKey = (...args) => {
    return (id) => `@BACKSTAGE:${args.map(t => t.replace(':', '')).join(':')}${id ? `:${id}` : ''}`;
};
//# sourceMappingURL=index.js.map