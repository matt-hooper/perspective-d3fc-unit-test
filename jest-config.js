module.exports = {
    'rootDir': './',
    'verbose': true,
    'collectCoverage': false,
    'collectCoverageFrom': ['./**/*.js'],
    'coverageDirectory': '<rootDir>/coverage',
    'moduleFileExtensions': [
        'js'
    ],
    'transform': {
        '^.+\\.js$': './transform.js'
    },
    'coverageThreshold': {
        'global': {
            'branches': 70,
            'functions': 85,
            'lines': 85,
            'statements': 85
        }
    }
};