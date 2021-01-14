module.exports = {
    roots: ["<rootDir>/src"],
    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy",
    },
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
    transform: {
        ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
        "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$",
    ],
    setupFilesAfterEnv: ["<rootDir>/src/setUpTests.js"],
};
