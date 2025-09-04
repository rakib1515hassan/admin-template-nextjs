# Prettier Setup

To set up Prettier in your Next.js project, follow these steps:

## 🔹 Step 1: Prettier ইনস্টল করুন

```bash
npm install --save-dev prettier
```

or,

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```






## 🔹 Step 2: .prettierrc ফাইল তৈরি করুন: প্রোজেক্ট রুটে একটি ফাইল বানান: .prettierrc
```json
{
   "semi": true,
   "singleQuote": true,
   "tabWidth": 2,
   "trailingComma": "es5",
   "printWidth": 100,
   "endOfLine": "auto"
}
```

👉 চাইলে semi: false করে সেমিকোলন বাদ দিতে পারেন।







## 🔹 Step 3: .prettierignore ফাইল তৈরি করুন: প্রোজেক্ট রুটে একটি ফাইল বানান: .prettierignore
```
node_modules
.next
out
build
package-lock.json
yarn.lock
.DS_Store
```






## 🔹 Step 4: ESLint এর সাথে Prettier কানেক্ট করুন
আপনার প্রোজেক্টে .eslintrc.json (বা .eslintrc.js) ফাইল থাকবে।

👉 এতে extends সেকশনে এই দুটি লাইন যোগ করুন:

```json
{
   "extends": ["next/core-web-vitals", "plugin:prettier/recommended"]
}
```

নতুন Next.js 13+ (App Router সহ) প্রোজেক্টে .eslintrc.json বা .eslintrc.js ফাইল
তৈরি হয় না, বরং eslint.config.js নামে Flat Config ফাইল তৈরি হয়।

## যদি আপনার প্রোজেক্টে eslint.config.js ফাইল থাকে, তাহলে এতে এই লাইনগুলো যোগ করুন:

```js
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
   baseDirectory: __dirname,
});

const eslintConfig = [
   ...compat.extends('next/core-web-vitals'),
   {
      ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
   },
   {
      plugins: {
         prettier,
      },
      rules: {
         ...prettierConfig.rules,
         'prettier/prettier': 'warn', //? If Format Error then show warning
      },
   },
];

export default eslintConfig;
```






## 🔹 Step 5: package.json এ স্ক্রিপ্ট যোগ করুন
package.json → "scripts" এর মধ্যে যুক্ত করুন:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "prettier --write ."
}
```

👉 এখন আপনি চালাতে পারবেন:

```bash
npm run format
```

এতে সব ফাইল Prettier দিয়ে ফরম্যাট হবে।






## 🔹 Step 6: VS Code Auto Format (Optional but Recommended)
1. VS Code এ যান → Extensions → Prettier - Code formatter ইনস্টল করুন।

2. তারপর settings.json এ এই সেটিংস যোগ করুন (Ctrl+Shift+P → Preferences: Open Settings (JSON)):

```json
{
   "editor.defaultFormatter": "esbenp.prettier-vscode",
   "editor.formatOnSave": true
}
```

এখন ফাইল সেভ করার সাথে সাথে Prettier অটো-ফরম্যাট করবে। 🎉
