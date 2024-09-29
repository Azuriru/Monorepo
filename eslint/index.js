module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        '@stylistic',
        'antfu'
    ],
    rules: {
        'antfu/consistent-list-newline': 'warn',

        // Shared JS/TS config
        '@stylistic/array-bracket-newline': [
            'warn',
            'consistent'
        ],
        '@stylistic/array-bracket-spacing': [
            'warn',
            'never',
            {
                singleValue: false,
                objectsInArrays: false,
                arraysInArrays: false
            }
        ],
        '@stylistic/array-element-newline': [
            'warn',
            'consistent'
        ],
        '@stylistic/arrow-parens': [
            'warn',
            'always'
        ],
        '@stylistic/arrow-spacing': [
            'warn',
            {
                before: true,
                after: true
            }
        ],
        '@stylistic/block-spacing': [
            'warn',
            'always'
        ],
        '@stylistic/brace-style': [
            'warn',
            '1tbs',
            {
                allowSingleLine: true
            }
        ],
        '@stylistic/comma-dangle': [
            'warn',
            {
                arrays: 'never',
                objects: 'never',
                imports: 'never',
                exports: 'never',
                functions: 'never'
            }
        ],
        '@stylistic/comma-spacing': [
            'warn',
            {
                before: false,
                after: true
            }
        ],
        '@stylistic/comma-style': [
            'warn',
            'last'
        ],
        '@stylistic/computed-property-spacing': [
            'warn',
            'never',
            {
                enforceForClassMembers: true
            }
        ],
        '@stylistic/dot-location': [
            'warn',
            'property'
        ],
        '@stylistic/eol-last': [
            'warn',
            'never'
        ],
        '@stylistic/function-call-argument-newline': [
            'warn',
            'consistent'
        ],
        '@stylistic/function-call-spacing': [
            'warn',
            'never'
        ],
        '@stylistic/function-paren-newline': [
            'warn',
            'consistent'
        ],
        '@stylistic/generator-star-spacing': [
            'warn',
            {
                before: false,
                after: true,
                anonymous: 'both',
                method: 'both'
            }
        ],
        '@stylistic/implicit-arrow-linebreak': [
            'warn',
            'beside'
        ],
        '@stylistic/indent': [
            'warn',
            4,
            {
                SwitchCase: 1
            }
        ],
        '@stylistic/indent-binary-ops': [
            'warn',
            4
        ],
        '@stylistic/key-spacing': [
            'warn',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict'
            }
        ],
        '@stylistic/keyword-spacing': [
            'warn',
            {
                before: true,
                after: true,
                overrides: {
                    'switch': {
                        after: false
                    }
                }
            }
        ],
        '@stylistic/linebreak-style': [
            'warn',
            'windows'
        ],
        '@stylistic/lines-around-comment': 'off',
        '@stylistic/lines-between-class-members': [
            'warn',
            'always',
            {
                exceptAfterOverload: false,
                exceptAfterSingleLine: true
            }
        ],
        '@stylistic/max-len': [
            'off'
        ],
        '@stylistic/max-statements-per-line': [
            'warn',
            {
                max: 1
            }
        ],
        '@stylistic/member-delimiter-style': [
            'warn',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false
                },
                multilineDetection: 'brackets'
            }
        ],
        '@stylistic/multiline-ternary': [
            'warn',
            'always-multiline'
        ],
        '@stylistic/new-parens': [
            'warn',
            'always'
        ],
        '@stylistic/newline-per-chained-call': [
            'warn',
            {
                ignoreChainWithDepth: 4
            }
        ],
        '@stylistic/no-confusing-arrow': [
            'warn',
            {
                onlyOneSimpleParam: true
            }
        ],
        '@stylistic/no-extra-parens': [
            'warn',
            'all'
        ],
        '@stylistic/no-extra-semi': [
            'warn'
        ],
        '@stylistic/no-floating-decimal': [
            'off'
        ],
        '@stylistic/no-mixed-operators': [
            'off'
        ],
        '@stylistic/no-mixed-spaces-and-tabs': [
            'warn',
            'smart-tabs'
        ],
        '@stylistic/no-multi-spaces': [
            'warn',
            {
                includeTabs: true
            }
        ],
        '@stylistic/no-multiple-empty-lines': [
            'warn',
            {
                max: 2
            }
        ],
        '@stylistic/no-tabs': [
            'warn',
            {
                allowIndentationTabs: true
            }
        ],
        '@stylistic/no-trailing-spaces': [
            'warn',
            {
                skipBlankLines: false,
                ignoreComments: false
            }
        ],
        '@stylistic/no-whitespace-before-property': [
            'warn'
        ],
        '@stylistic/nonblock-statement-body-position': [
            'warn',
            'beside'
        ],
        '@stylistic/object-curly-newline': [
            'warn',
            {
                ObjectExpression: {
                    multiline: true,
                    consistent: true
                },
                ObjectPattern: {
                    consistent: true
                },
                ImportDeclaration: {
                    multiline: true
                },
                ExportDeclaration: {
                    multiline: true,
                    consistent: true
                }
            }
        ],
        '@stylistic/object-curly-spacing': [
            'warn',
            'always',
            {
                objectsInObjects: true,
                arraysInObjects: true
            }
        ],
        '@stylistic/object-property-newline': [
            'warn',
            {
                allowAllPropertiesOnSameLine: true
            }
        ],
        '@stylistic/one-var-declaration-per-line': [
            'warn',
            'always'
        ],
        '@stylistic/operator-linebreak': [
            'warn',
            'before'
        ],
        '@stylistic/padded-blocks': [
            'warn',
            'never'
        ],
        '@stylistic/padding-line-between-statements': [
            'warn',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return'
            }
        ],
        '@stylistic/quote-props': [
            'warn',
            'as-needed',
            {
                keywords: true,
                unnecessary: true,
                numbers: true
            }
        ],
        '@stylistic/quotes': [
            'warn',
            'single'
        ],
        '@stylistic/rest-spread-spacing': [
            'warn',
            'never'
        ],
        '@stylistic/semi': [
            'warn',
            'always',
            {
                omitLastInOneLineBlock: true,
                omitLastInOneLineClassBody: false
            }
        ],
        '@stylistic/semi-spacing': [
            'warn',
            {
                before: false,
                after: true
            }
        ],
        '@stylistic/semi-style': [
            'off'
        ],
        '@stylistic/space-before-blocks': [
            'warn',
            'always'
        ],
        '@stylistic/space-before-function-paren': [
            'warn',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        '@stylistic/space-in-parens': [
            'warn',
            'never'
        ],
        '@stylistic/space-infix-ops': [
            'warn',
            {
                int32Hint: false
            }
        ],
        '@stylistic/spaced-comment': [
            'warn',
            'always'
        ],
        '@stylistic/switch-colon-spacing': [
            'warn',
            {
                before: false,
                after: true
            }
        ],
        '@stylistic/template-curly-spacing': [
            'warn',
            'never'
        ],
        '@stylistic/template-tag-spacing': [
            'warn',
            'always'
        ],
        '@stylistic/type-annotation-spacing': [
            'warn',
            {
                before: false,
                after: true,
                overrides: {
                    arrow: {
                        before: true,
                        after: true
                    }
                }
            }
        ],
        '@stylistic/type-generic-spacing': [
            'warn'
        ],
        '@stylistic/type-named-tuple-spacing': [
            'warn'
        ],
        '@stylistic/wrap-regex': [
            'warn'
        ],
        '@stylistic/yield-star-spacing': [
            'warn',
            {
                before: true,
                after: true
            }
        ],

        // Typescript exclusive
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_'
            }
        ],

        // Typing component return values is a chore
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // I have enough self control to know when `any` is a good choice
        '@typescript-eslint/no-explicit-any': 'off',

        // Same thing here.
        '@typescript-eslint/no-non-null-assertion': 'off',

        // I want to use hasOwnProperty
        '@typescript-eslint/no-explicit-any': 'off'
    },
    ignorePatterns: [
        'node_modules/',
        'build/',
        'dist/'
    ]
};