"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseKey = (...args) => {
    return `@BACKSTAGE:${args.map(t => t.replace(':', '')).join(':')}`;
};
//# sourceMappingURL=index.js.map