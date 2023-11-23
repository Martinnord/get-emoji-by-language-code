# Get Emoji By Language Code

Language Emoji Lookup is a simple npm package that allows you to easily retrieve emojis associated with language codes. It provides a straightforward JavaScript function for this purpose.

## Installation

You can install the package via npm or yarn:

```shell
npm install get-emoji-by-language-code
```

or

```shell
yarn add get-emoji-by-language-code
```

## Usage

To use this package, follow these steps:

1. Import the getEmojiByLanguageCode function from the package:

```javascript
const getEmojiByLanguageCode = require("get-emoji-by-language-code");
```

2. Call the function with a language code to get the associated emoji:

```javascript
const languageCode = "sv"; // Replace 'sv' with the desired language code
const emoji = getEmojiByLanguageCode(languageCode); // Returns 🇸🇪
console.log(`Emoji for language code "${languageCode}": ${emoji}`);
```

If the language code is found in the package's dataset, the corresponding emoji will be returned. If the language code is not found, a sad face emoji "😞" will be returned as a fallback.

## License

This package is licensed under the MIT License.
