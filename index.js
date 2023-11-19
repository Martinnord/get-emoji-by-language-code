const data = require("./data.json");

function getEmojiByLanguageCode(languageCode) {
  const emoji = data[languageCode];

  return emoji || "😞";
}

module.exports.default = getEmojiByLanguageCode;
