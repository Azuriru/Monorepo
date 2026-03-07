import { defineConfig } from 'eslint/config';
import azuriru from 'eslint-config-azuriru';

export default defineConfig([
    {
        files: ['**/*.js', '**/*.ts'],
        'extends': [
            azuriru
        ]
    }
]);