import postcssScss from 'postcss-scss';

/** @type {import('stylelint').Config} */
export default {
    'extends': ['stylelint-config-standard', 'stylelint-config-standard-scss', '@stylistic/stylelint-config'],
    plugins: [
        '@stylistic/stylelint-plugin',
        'stylelint-scss'
    ],
    customSyntax: postcssScss,
    defaultSeverity: 'warning',
    overrides: [
        {
            files: ['*.svelte', '**/*.svelte'],
            customSyntax: 'postcss-html'
        }
    ],
    rules: {
        // Stylelint
        'at-rule-no-deprecated': true,
        'declaration-property-value-keyword-no-deprecated': true,
        'media-type-no-deprecated': true,
        'property-no-deprecated': true,
        'selector-no-deprecated': true,
        'color-function-notation': 'modern',
        'length-zero-no-unit': true,
        'declaration-block-no-redundant-longhand-properties': true,
        'comment-empty-line-before': null,
        'comment-whitespace-inside': 'always',

        'declaration-empty-line-before': 'never',
        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment']
            }
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            { ignorePseudoClasses: ['global'] }
        ],

        // Stylistic
        '@stylistic/indentation': [4, { baseIndentLevel: 1 }],
        '@stylistic/block-closing-brace-newline-after': ['always', {
            ignoreAtRules: ['if', 'else']
        }],
        '@stylistic/no-eol-whitespace': true,
        '@stylistic/no-extra-semicolons': true,
        '@stylistic/max-empty-lines': 1,

        // SCSS
        'scss/at-mixin-argumentless-call-parentheses': 'never',
        'scss/double-slash-comment-empty-line-before': ['always', {
            except: ['inside-block'],
            ignore: ['between-comments', 'stylelint-commands']
        }],
        'scss/no-global-function-names': true,
        'scss/at-rule-conditional-no-parentheses': true,
        'scss/at-if-closing-brace-space-after': 'always-intermediate',
        'scss/dollar-variable-empty-line-before': ['always', {
            except: ['first-nested', 'after-comment', 'after-dollar-variable'],
            ignore: ['after-comment', 'inside-single-line-block', 'after-dollar-variable']
        }]
    }
};