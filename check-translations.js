#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read both JSON files
const enPath = path.join(__dirname, 'src/i18n/locales/en.json');
const esPath = path.join(__dirname, 'src/i18n/locales/es.json');

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const esData = JSON.parse(fs.readFileSync(esPath, 'utf8'));

// Function to get all keys in order (nested)
function getKeysInOrder(obj, prefix = '') {
    const keys = [];
    for (const key in obj) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        keys.push(fullKey);
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            keys.push(...getKeysInOrder(obj[key], fullKey));
        }
    }
    return keys;
}

// Get keys from both files
const enKeys = getKeysInOrder(enData);
const esKeys = getKeysInOrder(esData);

console.log('🔍 Checking translation files...\n');
console.log(`📄 EN keys: ${enKeys.length}`);
console.log(`📄 ES keys: ${esKeys.length}\n`);

// Check if lengths match
if (enKeys.length !== esKeys.length) {
    console.log('❌ Key count mismatch!\n');
}

// Find missing keys
const enSet = new Set(enKeys);
const esSet = new Set(esKeys);

const missingInEs = enKeys.filter(key => !esSet.has(key));
const missingInEn = esKeys.filter(key => !enSet.has(key));

let hasIssues = false;

if (missingInEs.length > 0) {
    hasIssues = true;
    console.log('❌ Keys in EN but missing in ES:');
    missingInEs.forEach(key => console.log(`   - ${key}`));
    console.log('');
}

if (missingInEn.length > 0) {
    hasIssues = true;
    console.log('❌ Keys in ES but missing in EN:');
    missingInEn.forEach(key => console.log(`   - ${key}`));
    console.log('');
}

// Check order
let orderIssues = [];
for (let i = 0; i < Math.min(enKeys.length, esKeys.length); i++) {
    if (enKeys[i] !== esKeys[i]) {
        orderIssues.push({ index: i, en: enKeys[i], es: esKeys[i] });
    }
}

if (orderIssues.length > 0) {
    hasIssues = true;
    console.log('⚠️  Key order mismatch:');
    orderIssues.slice(0, 10).forEach(issue => {
        console.log(`   [${issue.index}] EN: ${issue.en} | ES: ${issue.es}`);
    });
    if (orderIssues.length > 10) {
        console.log(`   ... and ${orderIssues.length - 10} more order issues`);
    }
    console.log('');
}

if (!hasIssues) {
    console.log('✅ All keys match and are in the same order!');
    console.log('✅ Translation files are synchronized!');
    process.exit(0);
} else {
    console.log('💡 Tip: Make sure to add/remove keys in both files simultaneously');
    process.exit(1);
}

