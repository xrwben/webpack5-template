module.exports = {
  "root": true,  // 停止继续向上一级查找
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [ // 扩展一些预定规则
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "plugins":[
    "vue"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@babel/eslint-parser",
    "requireConfigFile" : false,
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "globalReturn": false,
      "impliedStrict": false,
      "jsx": true
    }
  },
  // "globals": {  // 全局变量是否检验
  //     "Promise": "off"
  // },
  "rules": {
    // "semi": 2,
    "indent": ["error", 2],
    // "quotes": ["error", "single"],
  }
}