module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    settings: {
        react: {
            version: '17.0'
        }
    },
    'extends': [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        '@stylistic',
        'react'
    ],
    rules: {
        '@stylistic/jsx-quotes': [
            'warn',
            'prefer-double'
        ],
        '@stylistic/jsx-child-element-spacing': [
            'warn'
        ],
        '@stylistic/jsx-closing-bracket-location': [
            1,
            {
                nonEmpty: 'tag-aligned',
                selfClosing: 'tag-aligned'
            }
        ],
        '@stylistic/jsx-closing-tag-location': [
            'warn'
        ],
        '@stylistic/jsx-curly-brace-presence': [
            1,
            {
                props: 'never',
                children: 'never',
                propElementValues: 'always'
            }
        ],
        '@stylistic/jsx-curly-newline': [
            'warn',
            {
                multiline: 'consistent',
                singleline: 'consistent'
            }
        ],
        '@stylistic/jsx-curly-spacing': [
            'warn',
            {
                when: 'never',
                attributes: {
                    allowMultiline: false
                },
                children: true
            }
        ],
        '@stylistic/jsx-equals-spacing': [
            'warn',
            'never'
        ],
        '@stylistic/jsx-first-prop-new-line': [
            'warn',
            'multiline'
        ],
        '@stylistic/jsx-function-call-newline': [
            'warn',
            'multiline'
        ],

        // I have regular stylistic indent on, but I might consider it if I find use for the fine grained options
        '@stylistic/jsx-indent': 'off',
        '@stylistic/jsx-indent-props': 'off',
        '@stylistic/jsx-max-props-per-line': [
            1,
            {
                maximum: {
                    single: 4,
                    multi: 1
                }
            }
        ],

        // I would like to enforce grouping on my own
        '@stylistic/jsx-newline': 'off',

        // My brain small
        '@stylistic/jsx-one-expression-per-line': 'off',
        '@stylistic/jsx-pascal-case': [
            'warn',
            {
                allowNamespace: true,
                allowLeadingUnderscore: true
            }
        ],
        '@stylistic/jsx-props-no-multi-spaces': 'warn',
        '@stylistic/jsx-self-closing-comp': [
            'warn',
            {
                component: true,
                html: true
            }
        ],
        '@stylistic/jsx-sort-props': [
            'warn',
            {
                callbacksLast: true,
                shorthandLast: true,
                noSortAlphabetically: true,
                reservedFirst: true
            }
        ],
        '@stylistic/jsx-tag-spacing': [
            'warn',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'never'
            }
        ],
        '@stylistic/jsx-wrap-multilines': [
            'warn',
            {
                'return': 'parens-new-line'
            }
        ],
        'react/no-unknown-property': [
            'error',
            {
                ignore: [
                    'class'
                ]
            }
        ],

        // I'm using the new JSX transform
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',

        // I want to be able to use apostrophes in my text
        'react/no-unescaped-entities': 'off'
    }
};