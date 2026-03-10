import svelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import parser from 'svelte-eslint-parser';
import tslint from 'typescript-eslint';

export default (svelteConfig) => {
    return defineConfig(
        {
            plugins: {
                svelte
            },
            files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
            ignores: [], // ['svelte.config.js'],
            languageOptions: {
                parser,
                parserOptions: {
                    projectService: true,
                    extraFileExtensions: ['.svelte'],
                    parser: tslint.parser,
                    svelteConfig
                }
            },
            rules: {
                // Possible errors
                'svelte/infinite-reactive-loop': 'warn',
                'svelte/no-dom-manipulating': 'warn',
                'svelte/no-dupe-else-if-blocks': 'warn',
                'svelte/no-dupe-on-directives': 'warn',
                'svelte/no-dupe-style-properties': 'warn',
                'svelte/no-dupe-use-directives': 'warn',
                'svelte/no-not-function-handler': 'warn',
                'svelte/no-object-in-text-mustaches': 'warn',
                'svelte/no-raw-special-elements': 'warn',
                'svelte/no-reactive-reassign': 'warn',
                'svelte/no-shorthand-style-property-overrides': 'warn',
                'svelte/no-store-async': 'warn',
                'svelte/no-top-level-browser-globals': 'warn',
                'svelte/no-unknown-style-directive-property': 'warn',
                'svelte/prefer-svelte-reactivity': 'warn',
                'svelte/require-store-callbacks-use-set-param': 'warn',
                'svelte/require-store-reactive-access': 'warn',
                'svelte/valid-compile': [
                    'off',
                    {
                        ignoreWarnings: false
                    }
                ],
                'svelte/valid-style-parse': 'warn',

                // Security vulnerabilities
                'svelte/no-at-html-tags': 'off',
                'svelte/no-target-blank': 'off', // Reconsider later

                // Best practices
                'svelte/block-lang': [
                    'warn',
                    {
                        enforceScriptPresent: false,
                        enforceStylePresent: false,
                        script: 'ts',
                        style: 'scss'
                    }
                ],
                'svelte/button-has-type': [
                    'warn',
                    {
                        button: true,
                        submit: true,
                        reset: true
                    }
                ],
                'svelte/no-add-event-listener': 'warn',
                'svelte/no-at-debug-tags': 'off',
                'svelte/no-ignored-unsubscribe': 'warn',
                'svelte/no-immutable-reactive-statements': 'warn',
                'svelte/no-inline-styles': [
                    'off',
                    {
                        allowTransitions: false
                    }
                ],
                'svelte/no-inspect': 'off',
                'svelte/no-reactive-functions': 'warn',
                'svelte/no-reactive-literals': 'warn',
                'svelte/no-svelte-internal': 'warn',
                'svelte/no-unnecessary-state-wrap': ['warn', {
                    additionalReactiveClasses: [],
                    allowReassign: true
                }],
                'svelte/no-unused-class-name': 'off',
                'svelte/no-unused-props': ['error', {
                    checkImportedTypes: true,
                    ignoreTypePatterns: [],
                    ignorePropertyPatterns: [],
                    allowUnusedNestedProperties: false
                }],
                'svelte/no-unused-svelte-ignore': 'warn',
                'svelte/no-useless-children-snippet': 'warn',
                'svelte/no-useless-mustaches': [
                    'warn',
                    {
                        ignoreIncludesComment: false,
                        ignoreStringEscape: true
                    }
                ],
                'svelte/prefer-const': 'warn',
                'svelte/prefer-destructured-store-props': 'off',
                'svelte/require-each-key': 'warn',
                'svelte/require-event-dispatcher-types': 'warn',
                'svelte/require-optimized-style-attribute': 'off',
                'svelte/require-stores-init': 'warn',
                'svelte/valid-each-key': 'warn',

                // Stylistic issues
                'svelte/consistent-selector-style': 'off', // lmao I'm good bro
                'svelte/derived-has-same-inputs-outputs': 'off', // No other way
                'svelte/first-attribute-linebreak': [
                    'warn',
                    {
                        multiline: 'below',
                        singleline: 'beside'
                    }
                ],
                'svelte/html-closing-bracket-new-line': [
                    'warn',
                    {
                        singleline: 'never',
                        multiline: 'always',
                        selfClosingTag: {
                            singleline: 'never',
                            multiline: 'always'
                        }
                    }
                ],
                'svelte/html-closing-bracket-spacing': [
                    'warn',
                    {
                        startTag: 'never',
                        endTag: 'never',
                        selfClosingTag: 'always'
                    }
                ],
                'svelte/html-quotes': [
                    'warn',
                    {
                        prefer: 'double',
                        dynamic: {
                            quoted: false,
                            avoidInvalidUnquotedInHTML: false
                        }
                    }
                ],
                'svelte/html-self-closing': [
                    'warn',
                    'all'
                ],
                'svelte/indent': [
                    'warn',
                    {
                        indent: 4,
                        ignoredNodes: [],
                        switchCase: 1,
                        alignAttributesVertically: false
                    }
                ],
                'svelte/max-attributes-per-line': [
                    'warn',
                    {
                        multiline: 1,
                        singleline: 4
                    }
                ],
                'svelte/mustache-spacing': [
                    'warn',
                    {
                        textExpressions: 'never',
                        attributesAndProps: 'never',
                        directiveExpressions: 'never',
                        tags: {
                            openingBrace: 'never',
                            closingBrace: 'never'
                        }
                    }
                ],
                'svelte/no-extra-reactive-curlies': 'warn',
                'svelte/no-restricted-html-elements': 'off',
                'svelte/no-spaces-around-equal-signs-in-attribute': 'warn',

                // Doru might prefer otherwise, though
                'svelte/prefer-class-directive': 'off',
                'svelte/prefer-style-directive': 'off',
                'svelte/shorthand-attribute': 'warn',
                'svelte/shorthand-directive': 'warn',
                'svelte/sort-attributes': 'off',
                'svelte/spaced-html-comment': [
                    'warn',
                    'always'
                ],

                // Extension rules
                'svelte/no-inner-declarations': 'off', // Unnnecessary, but useful
                'svelte/no-trailing-spaces': 'warn',

                // SvelteKit
                'svelte/no-export-load-in-svelte-module-in-kit-pages': 'warn',
                'svelte/no-navigation-without-resolve': 'warn', // Disgusting. But fine.
                'svelte/valid-prop-names-in-kit-pages': 'warn',

                // System
                'svelte/comment-directive': [
                    'off',
                    {
                        reportUnusedDisableDirectives: true
                    }
                ],
                'svelte/system': 'warn' // Wtf does this even DO
            }
        }
    );
};