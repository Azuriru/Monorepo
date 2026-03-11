import globals from 'globals';
import antfu from 'eslint-plugin-antfu';
import imports from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';
import ts, { plugin as tslint, parser } from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export { default as svelte } from './svelte.js';

export default defineConfig(
    // Shared JS/TS config
    {
        'extends': [
            ts.configs.base,
            {
                files: ['**/*.ts', '**/*.js']
            }
        ],
        languageOptions: {
            parser,
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        plugins: {
            'antfu': antfu,
            'import': imports,
            '@stylistic': stylistic,
            '@typescript-eslint': tslint
        },
        rules: {
            'antfu/consistent-chaining': ['warn', {
                allowLeadingPropertyAccess: true
            }],
            'antfu/consistent-list-newline': 'warn',
            'antfu/import-dedupe': 'warn',

            // Helpful warnings
            'import/export': 'warn',
            'import/no-deprecated': 'warn',
            'import/no-empty-named-blocks': 'warn',
            'import/no-extraneous-dependencies': ['warn', {
                devDependencies: true,
                optionalDependencies: true,
                peerDependencies: true,
                bundledDependencies: true,
                includeInternal: false,
                includeTypes: true
            }],

            // I know what I am doing
            'import/no-mutable-exports': 'off',
            'import/no-named-as-default': 'off',

            // Let's see if this gets annoying fast
            'import/no-named-as-default-member': 'warn',

            // This shit is actually plagued with issues lol
            // https://github.com/import-js/eslint-plugin-import/issues?q=is%3Aissue%20state%3Aopen%20no-unused-modules.md
            'import/no-unused-modules': ['off', {
                missingExports: true,
                unusedExports: false, // Hey, we'll find a use for them
                ignoreUnusedTypeExports: false,
                ignoreExports: ['src/utils']
            }],

            // Module systems
            'import/no-amd': 'off', // I wasn't here for the war
            'import/no-commonjs': 'off',
            'import/no-import-module-exports': 'off',
            'import/no-nodejs-modules': 'warn', // Sure?
            'import/unambiguous': 'off',

            // Static analysis
            'import/default': 'warn',
            'import/enforce-node-protocol-usage': ['warn', 'never'],
            'import/named': 'warn',
            'import/namespace': 'warn',
            'import/no-absolute-path': 'warn',
            'import/no-cycle': 'warn', // me and my circular dependencies beg your finest pardon
            'import/no-dynamic-require': 'off', // with great power [..]
            'import/no-internal-modules': 'off', // nah it's probably fine
            'import/no-relative-packages': 'off', // seems useful
            'import/no-relative-parent-imports': 'off',
            'import/no-restricted-paths': 'off',
            'import/no-self-import': 'warn',
            'import/no-unresolved': 'off', // I think ts already does this but sure // stupid shit doesn't even work with eslint/config
            'import/no-useless-path-segments': 'warn',
            'import/no-webpack-loader-syntax': 'warn',

            // Style guide
            'import/consistent-type-specifier-style': 'off', // I should configure this later
            'import/dynamic-import-chunkname': 'warn',
            'import/exports-last': 'off',
            'import/extensions': 'off', // Generally, you don't need to // .config.js exception but meh
            'import/first': 'warn',
            'import/group-exports': 'off', // No way

            // I am of sound mind.
            'import/max-dependencies': ['warn', {
                max: 20, // ..who occasionally needs a slap in the face
                ignoreTypeImports: true
            }],
            'import/newline-after-import': 'warn',

            // Wdym? It's sexy af
            'import/no-anonymous-default-export': ['off', {
                allowArray: false,
                allowArrowFunction: false,
                allowAnonymousClass: false,
                allowAnonymousFunction: false,
                allowCallExpression: false,
                allowNew: false,
                allowLiteral: false,
                allowObject: false
            }],
            'import/no-default-export': 'off', // What even?
            'import/no-duplicates': ['warn', {
                'prefer-inline': true
            }],

            'import/no-named-default': 'off', // It's pretty subjective
            'import/no-named-export': 'off',
            'import/no-namespace': 'off', // It's useful come on
            'import/no-unassigned-import': 'off',
            'import/order': 'off', // My order is subjective af
            'import/prefer-default-export': 'off',

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
            '@stylistic/curly-newline': ['warn', {
                IfStatementConsequent: {
                    consistent: true
                },
                IfStatementAlternative: {
                    consistent: true
                },
                ForStatement: 'always',
                ForInStatement: 'always',
                ForOfStatement: 'always',
                WhileStatement: {
                    consistent: true
                },
                DoWhileStatement: {
                    consistent: true
                },
                SwitchStatement: 'always',
                SwitchCase: {
                    consistent: true
                },
                TryStatementBlock: {
                    consistent: true
                },
                TryStatementHandler: {
                    consistent: true
                },
                TryStatementFinalizer: {
                    consistent: true
                },
                BlockStatement: 'always',
                ArrowFunctionExpression: {
                    consistent: true
                },
                FunctionDeclaration: {
                    consistent: true
                },
                FunctionExpression: {
                    consistent: true
                },
                Property: {
                    consistent: true
                },
                ClassBody: 'always',
                StaticBlock: {
                    consistent: true
                },
                WithStatement: {
                    consistent: true
                },
                TSModuleBlock: {
                    consistent: true
                }
            }],
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
            '@stylistic/line-comment-position': 'off', // Subjective.
            '@stylistic/linebreak-style': [
                'warn',
                'unix'
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
            '@stylistic/multiline-comment-style': 'off',
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
            '@stylistic/no-mixed-operators': 'off',
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
                    after: true
                }
            ],
            '@stylistic/type-generic-spacing': [
                'warn'
            ],
            '@stylistic/type-named-tuple-spacing': [
                'warn'
            ],
            '@stylistic/wrap-iife': ['warn', 'inside', {
                functionPrototypeMethods: true
            }],
            '@stylistic/wrap-regex': [
                'warn'
            ],
            '@stylistic/yield-star-spacing': [
                'warn',
                {
                    before: true,
                    after: true
                }
            ]
        }
    }
);