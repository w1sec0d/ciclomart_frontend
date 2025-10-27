#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read both JSON files
const enPath = path.join(__dirname, 'src/i18n/locales/en.json');
const esPath = path.join(__dirname, 'src/i18n/locales/es.json');

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const esData = JSON.parse(fs.readFileSync(esPath, 'utf8'));

// Function to reorder object keys to match reference
function reorderKeys(reference, target) {
    const result = {};

    for (const key in reference) {
        if (key in target) {
            if (typeof reference[key] === 'object' && reference[key] !== null && !Array.isArray(reference[key])) {
                result[key] = reorderKeys(reference[key], target[key]);
            } else {
                result[key] = target[key];
            }
        } else {
            console.warn(`⚠️  Key "${key}" exists in EN but not in ES`);
        }
    }

    // Check for keys in target that don't exist in reference
    for (const key in target) {
        if (!(key in reference)) {
            console.warn(`⚠️  Key "${key}" exists in ES but not in EN`);
            result[key] = target[key];
        }
    }

    return result;
}

console.log('🔧 Reordering ES translation keys to match EN...\n');

const reorderedEsData = reorderKeys(enData, esData);

// Write back to file with proper formatting
fs.writeFileSync(esPath, JSON.stringify(reorderedEsData, null, 2) + '\n', 'utf8');

console.log('✅ ES translation file has been reordered to match EN!');
console.log('📝 File saved:', esPath);

