#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/sisteransi/src/index.js
var require_src = __commonJS({
  "node_modules/sisteransi/src/index.js"(exports2, module2) {
    "use strict";
    var ESC = "\x1B";
    var CSI = `${ESC}[`;
    var beep = "\x07";
    var cursor = {
      to(x3, y3) {
        if (!y3)
          return `${CSI}${x3 + 1}G`;
        return `${CSI}${y3 + 1};${x3 + 1}H`;
      },
      move(x3, y3) {
        let ret = "";
        if (x3 < 0)
          ret += `${CSI}${-x3}D`;
        else if (x3 > 0)
          ret += `${CSI}${x3}C`;
        if (y3 < 0)
          ret += `${CSI}${-y3}A`;
        else if (y3 > 0)
          ret += `${CSI}${y3}B`;
        return ret;
      },
      up: (count = 1) => `${CSI}${count}A`,
      down: (count = 1) => `${CSI}${count}B`,
      forward: (count = 1) => `${CSI}${count}C`,
      backward: (count = 1) => `${CSI}${count}D`,
      nextLine: (count = 1) => `${CSI}E`.repeat(count),
      prevLine: (count = 1) => `${CSI}F`.repeat(count),
      left: `${CSI}G`,
      hide: `${CSI}?25l`,
      show: `${CSI}?25h`,
      save: `${ESC}7`,
      restore: `${ESC}8`
    };
    var scroll = {
      up: (count = 1) => `${CSI}S`.repeat(count),
      down: (count = 1) => `${CSI}T`.repeat(count)
    };
    var erase = {
      screen: `${CSI}2J`,
      up: (count = 1) => `${CSI}1J`.repeat(count),
      down: (count = 1) => `${CSI}J`.repeat(count),
      line: `${CSI}2K`,
      lineEnd: `${CSI}K`,
      lineStart: `${CSI}1K`,
      lines(count) {
        let clear = "";
        for (let i = 0; i < count; i++)
          clear += this.line + (i < count - 1 ? cursor.up() : "");
        if (count)
          clear += cursor.left;
        return clear;
      }
    };
    module2.exports = { cursor, scroll, erase, beep };
  }
});

// node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "node_modules/picocolors/picocolors.js"(exports2, module2) {
    var argv = process.argv || [];
    var env = process.env;
    var isColorSupported = !("NO_COLOR" in env || argv.includes("--no-color")) && ("FORCE_COLOR" in env || argv.includes("--color") || process.platform === "win32" || require != null && require("tty").isatty(1) && env.TERM !== "dumb" || "CI" in env);
    var formatter = (open, close, replace = open) => (input) => {
      let string = "" + input;
      let index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let result = "";
      let cursor = 0;
      do {
        result += string.substring(cursor, index) + replace;
        cursor = index + close.length;
        index = string.indexOf(close, cursor);
      } while (~index);
      return result + string.substring(cursor);
    };
    var createColors = (enabled = isColorSupported) => {
      let init = enabled ? formatter : () => String;
      return {
        isColorSupported: enabled,
        reset: init("\x1B[0m", "\x1B[0m"),
        bold: init("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
        dim: init("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
        italic: init("\x1B[3m", "\x1B[23m"),
        underline: init("\x1B[4m", "\x1B[24m"),
        inverse: init("\x1B[7m", "\x1B[27m"),
        hidden: init("\x1B[8m", "\x1B[28m"),
        strikethrough: init("\x1B[9m", "\x1B[29m"),
        black: init("\x1B[30m", "\x1B[39m"),
        red: init("\x1B[31m", "\x1B[39m"),
        green: init("\x1B[32m", "\x1B[39m"),
        yellow: init("\x1B[33m", "\x1B[39m"),
        blue: init("\x1B[34m", "\x1B[39m"),
        magenta: init("\x1B[35m", "\x1B[39m"),
        cyan: init("\x1B[36m", "\x1B[39m"),
        white: init("\x1B[37m", "\x1B[39m"),
        gray: init("\x1B[90m", "\x1B[39m"),
        bgBlack: init("\x1B[40m", "\x1B[49m"),
        bgRed: init("\x1B[41m", "\x1B[49m"),
        bgGreen: init("\x1B[42m", "\x1B[49m"),
        bgYellow: init("\x1B[43m", "\x1B[49m"),
        bgBlue: init("\x1B[44m", "\x1B[49m"),
        bgMagenta: init("\x1B[45m", "\x1B[49m"),
        bgCyan: init("\x1B[46m", "\x1B[49m"),
        bgWhite: init("\x1B[47m", "\x1B[49m"),
        blackBright: init("\x1B[90m", "\x1B[39m"),
        redBright: init("\x1B[91m", "\x1B[39m"),
        greenBright: init("\x1B[92m", "\x1B[39m"),
        yellowBright: init("\x1B[93m", "\x1B[39m"),
        blueBright: init("\x1B[94m", "\x1B[39m"),
        magentaBright: init("\x1B[95m", "\x1B[39m"),
        cyanBright: init("\x1B[96m", "\x1B[39m"),
        whiteBright: init("\x1B[97m", "\x1B[39m"),
        bgBlackBright: init("\x1B[100m", "\x1B[49m"),
        bgRedBright: init("\x1B[101m", "\x1B[49m"),
        bgGreenBright: init("\x1B[102m", "\x1B[49m"),
        bgYellowBright: init("\x1B[103m", "\x1B[49m"),
        bgBlueBright: init("\x1B[104m", "\x1B[49m"),
        bgMagentaBright: init("\x1B[105m", "\x1B[49m"),
        bgCyanBright: init("\x1B[106m", "\x1B[49m"),
        bgWhiteBright: init("\x1B[107m", "\x1B[49m")
      };
    };
    module2.exports = createColors();
    module2.exports.createColors = createColors;
  }
});

// src/cmd/utils/constant.ts
var BASE_URL = "https://kmdr.vercel.app";
var DATABASE = {
  sqlite: "sqlite",
  turso: "turso",
  supabase: "supabase"
};

// src/cmd/utils/index.ts
var import_path = __toESM(require("path"));
var import_fs = __toESM(require("fs"));
function getModuleAbsolutePath(moduleName) {
  const currentFileContent = getSetupConfig();
  const currentModulePath = currentFileContent[moduleName]["name"];
  const { aliasSource } = currentFileContent["aliases"];
  const removedStartAliasSource = aliasSource.replaceAll("*", "");
  return `${removedStartAliasSource}${currentModulePath}`;
}
function getModuleAliasPath(moduleName) {
  const setupConfig = getSetupConfig();
  const sourceAlias = setupConfig["aliases"]["path"].replaceAll("*", "");
  const moduleFolder = setupConfig[moduleName]["name"];
  return `${sourceAlias}${moduleFolder}`;
}
async function fetchFilesAsString(path5) {
  const res = await fetch(`${BASE_URL}/assets${path5}`);
  const content = await res.text();
  return content;
}
function mutateProjectFiles(filePath, readCallback) {
  const currentFilePath = import_path.default.join(process.cwd(), filePath);
  const currentFileContent = import_fs.default.readFileSync(currentFilePath, "utf-8");
  const mutateOutput = readCallback(currentFileContent);
  import_fs.default.writeFileSync(currentFilePath, mutateOutput, { flag: "w" });
}
async function fetchConfig() {
  const res = await fetch(`${BASE_URL}/assets/config.json`);
  const config2 = await res.json();
  return config2;
}
function getSetupConfig() {
  const setupPath = import_path.default.join(process.cwd(), "setup.json");
  if (!import_fs.default.existsSync(setupPath)) {
    console.error("setup.json not found. Please run the init command first.");
    process.exit(1);
  }
  return JSON.parse(import_fs.default.readFileSync(setupPath, "utf-8"));
}

// node_modules/@clack/core/dist/index.mjs
var import_sisteransi = __toESM(require_src(), 1);
var import_node_process = require("node:process");
var f = __toESM(require("node:readline"), 1);
var import_node_readline = __toESM(require("node:readline"), 1);
var import_node_tty = require("node:tty");
var import_picocolors = __toESM(require_picocolors(), 1);
function q({ onlyFirst: t = false } = {}) {
  const u = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
  return new RegExp(u, t ? void 0 : "g");
}
function S(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a \`string\`, got \`${typeof t}\``);
  return t.replace(q(), "");
}
function j(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var M = { exports: {} };
(function(t) {
  var u = {};
  t.exports = u, u.eastAsianWidth = function(e2) {
    var s = e2.charCodeAt(0), C2 = e2.length == 2 ? e2.charCodeAt(1) : 0, D = s;
    return 55296 <= s && s <= 56319 && 56320 <= C2 && C2 <= 57343 && (s &= 1023, C2 &= 1023, D = s << 10 | C2, D += 65536), D == 12288 || 65281 <= D && D <= 65376 || 65504 <= D && D <= 65510 ? "F" : D == 8361 || 65377 <= D && D <= 65470 || 65474 <= D && D <= 65479 || 65482 <= D && D <= 65487 || 65490 <= D && D <= 65495 || 65498 <= D && D <= 65500 || 65512 <= D && D <= 65518 ? "H" : 4352 <= D && D <= 4447 || 4515 <= D && D <= 4519 || 4602 <= D && D <= 4607 || 9001 <= D && D <= 9002 || 11904 <= D && D <= 11929 || 11931 <= D && D <= 12019 || 12032 <= D && D <= 12245 || 12272 <= D && D <= 12283 || 12289 <= D && D <= 12350 || 12353 <= D && D <= 12438 || 12441 <= D && D <= 12543 || 12549 <= D && D <= 12589 || 12593 <= D && D <= 12686 || 12688 <= D && D <= 12730 || 12736 <= D && D <= 12771 || 12784 <= D && D <= 12830 || 12832 <= D && D <= 12871 || 12880 <= D && D <= 13054 || 13056 <= D && D <= 19903 || 19968 <= D && D <= 42124 || 42128 <= D && D <= 42182 || 43360 <= D && D <= 43388 || 44032 <= D && D <= 55203 || 55216 <= D && D <= 55238 || 55243 <= D && D <= 55291 || 63744 <= D && D <= 64255 || 65040 <= D && D <= 65049 || 65072 <= D && D <= 65106 || 65108 <= D && D <= 65126 || 65128 <= D && D <= 65131 || 110592 <= D && D <= 110593 || 127488 <= D && D <= 127490 || 127504 <= D && D <= 127546 || 127552 <= D && D <= 127560 || 127568 <= D && D <= 127569 || 131072 <= D && D <= 194367 || 177984 <= D && D <= 196605 || 196608 <= D && D <= 262141 ? "W" : 32 <= D && D <= 126 || 162 <= D && D <= 163 || 165 <= D && D <= 166 || D == 172 || D == 175 || 10214 <= D && D <= 10221 || 10629 <= D && D <= 10630 ? "Na" : D == 161 || D == 164 || 167 <= D && D <= 168 || D == 170 || 173 <= D && D <= 174 || 176 <= D && D <= 180 || 182 <= D && D <= 186 || 188 <= D && D <= 191 || D == 198 || D == 208 || 215 <= D && D <= 216 || 222 <= D && D <= 225 || D == 230 || 232 <= D && D <= 234 || 236 <= D && D <= 237 || D == 240 || 242 <= D && D <= 243 || 247 <= D && D <= 250 || D == 252 || D == 254 || D == 257 || D == 273 || D == 275 || D == 283 || 294 <= D && D <= 295 || D == 299 || 305 <= D && D <= 307 || D == 312 || 319 <= D && D <= 322 || D == 324 || 328 <= D && D <= 331 || D == 333 || 338 <= D && D <= 339 || 358 <= D && D <= 359 || D == 363 || D == 462 || D == 464 || D == 466 || D == 468 || D == 470 || D == 472 || D == 474 || D == 476 || D == 593 || D == 609 || D == 708 || D == 711 || 713 <= D && D <= 715 || D == 717 || D == 720 || 728 <= D && D <= 731 || D == 733 || D == 735 || 768 <= D && D <= 879 || 913 <= D && D <= 929 || 931 <= D && D <= 937 || 945 <= D && D <= 961 || 963 <= D && D <= 969 || D == 1025 || 1040 <= D && D <= 1103 || D == 1105 || D == 8208 || 8211 <= D && D <= 8214 || 8216 <= D && D <= 8217 || 8220 <= D && D <= 8221 || 8224 <= D && D <= 8226 || 8228 <= D && D <= 8231 || D == 8240 || 8242 <= D && D <= 8243 || D == 8245 || D == 8251 || D == 8254 || D == 8308 || D == 8319 || 8321 <= D && D <= 8324 || D == 8364 || D == 8451 || D == 8453 || D == 8457 || D == 8467 || D == 8470 || 8481 <= D && D <= 8482 || D == 8486 || D == 8491 || 8531 <= D && D <= 8532 || 8539 <= D && D <= 8542 || 8544 <= D && D <= 8555 || 8560 <= D && D <= 8569 || D == 8585 || 8592 <= D && D <= 8601 || 8632 <= D && D <= 8633 || D == 8658 || D == 8660 || D == 8679 || D == 8704 || 8706 <= D && D <= 8707 || 8711 <= D && D <= 8712 || D == 8715 || D == 8719 || D == 8721 || D == 8725 || D == 8730 || 8733 <= D && D <= 8736 || D == 8739 || D == 8741 || 8743 <= D && D <= 8748 || D == 8750 || 8756 <= D && D <= 8759 || 8764 <= D && D <= 8765 || D == 8776 || D == 8780 || D == 8786 || 8800 <= D && D <= 8801 || 8804 <= D && D <= 8807 || 8810 <= D && D <= 8811 || 8814 <= D && D <= 8815 || 8834 <= D && D <= 8835 || 8838 <= D && D <= 8839 || D == 8853 || D == 8857 || D == 8869 || D == 8895 || D == 8978 || 9312 <= D && D <= 9449 || 9451 <= D && D <= 9547 || 9552 <= D && D <= 9587 || 9600 <= D && D <= 9615 || 9618 <= D && D <= 9621 || 9632 <= D && D <= 9633 || 9635 <= D && D <= 9641 || 9650 <= D && D <= 9651 || 9654 <= D && D <= 9655 || 9660 <= D && D <= 9661 || 9664 <= D && D <= 9665 || 9670 <= D && D <= 9672 || D == 9675 || 9678 <= D && D <= 9681 || 9698 <= D && D <= 9701 || D == 9711 || 9733 <= D && D <= 9734 || D == 9737 || 9742 <= D && D <= 9743 || 9748 <= D && D <= 9749 || D == 9756 || D == 9758 || D == 9792 || D == 9794 || 9824 <= D && D <= 9825 || 9827 <= D && D <= 9829 || 9831 <= D && D <= 9834 || 9836 <= D && D <= 9837 || D == 9839 || 9886 <= D && D <= 9887 || 9918 <= D && D <= 9919 || 9924 <= D && D <= 9933 || 9935 <= D && D <= 9953 || D == 9955 || 9960 <= D && D <= 9983 || D == 10045 || D == 10071 || 10102 <= D && D <= 10111 || 11093 <= D && D <= 11097 || 12872 <= D && D <= 12879 || 57344 <= D && D <= 63743 || 65024 <= D && D <= 65039 || D == 65533 || 127232 <= D && D <= 127242 || 127248 <= D && D <= 127277 || 127280 <= D && D <= 127337 || 127344 <= D && D <= 127386 || 917760 <= D && D <= 917999 || 983040 <= D && D <= 1048573 || 1048576 <= D && D <= 1114109 ? "A" : "N";
  }, u.characterLength = function(e2) {
    var s = this.eastAsianWidth(e2);
    return s == "F" || s == "W" || s == "A" ? 2 : 1;
  };
  function F(e2) {
    return e2.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
  }
  u.length = function(e2) {
    for (var s = F(e2), C2 = 0, D = 0; D < s.length; D++)
      C2 = C2 + this.characterLength(s[D]);
    return C2;
  }, u.slice = function(e2, s, C2) {
    textLen = u.length(e2), s = s || 0, C2 = C2 || 1, s < 0 && (s = textLen + s), C2 < 0 && (C2 = textLen + C2);
    for (var D = "", i = 0, n = F(e2), E2 = 0; E2 < n.length; E2++) {
      var h2 = n[E2], o2 = u.length(h2);
      if (i >= s - (o2 == 2 ? 1 : 0))
        if (i + o2 <= C2)
          D += h2;
        else
          break;
      i += o2;
    }
    return D;
  };
})(M);
var J = M.exports;
var Q = j(J);
var X = function() {
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};
var DD = j(X);
function A(t, u = {}) {
  if (typeof t != "string" || t.length === 0 || (u = { ambiguousIsNarrow: true, ...u }, t = S(t), t.length === 0))
    return 0;
  t = t.replace(DD(), "  ");
  const F = u.ambiguousIsNarrow ? 1 : 2;
  let e2 = 0;
  for (const s of t) {
    const C2 = s.codePointAt(0);
    if (C2 <= 31 || C2 >= 127 && C2 <= 159 || C2 >= 768 && C2 <= 879)
      continue;
    switch (Q.eastAsianWidth(s)) {
      case "F":
      case "W":
        e2 += 2;
        break;
      case "A":
        e2 += F;
        break;
      default:
        e2 += 1;
    }
  }
  return e2;
}
var m = 10;
var T = (t = 0) => (u) => `\x1B[${u + t}m`;
var P = (t = 0) => (u) => `\x1B[${38 + t};5;${u}m`;
var W = (t = 0) => (u, F, e2) => `\x1B[${38 + t};2;${u};${F};${e2}m`;
var r = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], gray: [90, 39], grey: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgGray: [100, 49], bgGrey: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
Object.keys(r.modifier);
var uD = Object.keys(r.color);
var FD = Object.keys(r.bgColor);
[...uD, ...FD];
function tD() {
  const t = /* @__PURE__ */ new Map();
  for (const [u, F] of Object.entries(r)) {
    for (const [e2, s] of Object.entries(F))
      r[e2] = { open: `\x1B[${s[0]}m`, close: `\x1B[${s[1]}m` }, F[e2] = r[e2], t.set(s[0], s[1]);
    Object.defineProperty(r, u, { value: F, enumerable: false });
  }
  return Object.defineProperty(r, "codes", { value: t, enumerable: false }), r.color.close = "\x1B[39m", r.bgColor.close = "\x1B[49m", r.color.ansi = T(), r.color.ansi256 = P(), r.color.ansi16m = W(), r.bgColor.ansi = T(m), r.bgColor.ansi256 = P(m), r.bgColor.ansi16m = W(m), Object.defineProperties(r, { rgbToAnsi256: { value: (u, F, e2) => u === F && F === e2 ? u < 8 ? 16 : u > 248 ? 231 : Math.round((u - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(u / 255 * 5) + 6 * Math.round(F / 255 * 5) + Math.round(e2 / 255 * 5), enumerable: false }, hexToRgb: { value: (u) => {
    const F = /[a-f\d]{6}|[a-f\d]{3}/i.exec(u.toString(16));
    if (!F)
      return [0, 0, 0];
    let [e2] = F;
    e2.length === 3 && (e2 = [...e2].map((C2) => C2 + C2).join(""));
    const s = Number.parseInt(e2, 16);
    return [s >> 16 & 255, s >> 8 & 255, s & 255];
  }, enumerable: false }, hexToAnsi256: { value: (u) => r.rgbToAnsi256(...r.hexToRgb(u)), enumerable: false }, ansi256ToAnsi: { value: (u) => {
    if (u < 8)
      return 30 + u;
    if (u < 16)
      return 90 + (u - 8);
    let F, e2, s;
    if (u >= 232)
      F = ((u - 232) * 10 + 8) / 255, e2 = F, s = F;
    else {
      u -= 16;
      const i = u % 36;
      F = Math.floor(u / 36) / 5, e2 = Math.floor(i / 6) / 5, s = i % 6 / 5;
    }
    const C2 = Math.max(F, e2, s) * 2;
    if (C2 === 0)
      return 30;
    let D = 30 + (Math.round(s) << 2 | Math.round(e2) << 1 | Math.round(F));
    return C2 === 2 && (D += 60), D;
  }, enumerable: false }, rgbToAnsi: { value: (u, F, e2) => r.ansi256ToAnsi(r.rgbToAnsi256(u, F, e2)), enumerable: false }, hexToAnsi: { value: (u) => r.ansi256ToAnsi(r.hexToAnsi256(u)), enumerable: false } }), r;
}
var eD = tD();
var g = /* @__PURE__ */ new Set(["\x1B", "\x9B"]);
var sD = 39;
var b = "\x07";
var O = "[";
var CD = "]";
var I = "m";
var w = `${CD}8;;`;
var N = (t) => `${g.values().next().value}${O}${t}${I}`;
var L = (t) => `${g.values().next().value}${w}${t}${b}`;
var iD = (t) => t.split(" ").map((u) => A(u));
var y = (t, u, F) => {
  const e2 = [...u];
  let s = false, C2 = false, D = A(S(t[t.length - 1]));
  for (const [i, n] of e2.entries()) {
    const E2 = A(n);
    if (D + E2 <= F ? t[t.length - 1] += n : (t.push(n), D = 0), g.has(n) && (s = true, C2 = e2.slice(i + 1).join("").startsWith(w)), s) {
      C2 ? n === b && (s = false, C2 = false) : n === I && (s = false);
      continue;
    }
    D += E2, D === F && i < e2.length - 1 && (t.push(""), D = 0);
  }
  !D && t[t.length - 1].length > 0 && t.length > 1 && (t[t.length - 2] += t.pop());
};
var rD = (t) => {
  const u = t.split(" ");
  let F = u.length;
  for (; F > 0 && !(A(u[F - 1]) > 0); )
    F--;
  return F === u.length ? t : u.slice(0, F).join(" ") + u.slice(F).join("");
};
var ED = (t, u, F = {}) => {
  if (F.trim !== false && t.trim() === "")
    return "";
  let e2 = "", s, C2;
  const D = iD(t);
  let i = [""];
  for (const [E2, h2] of t.split(" ").entries()) {
    F.trim !== false && (i[i.length - 1] = i[i.length - 1].trimStart());
    let o2 = A(i[i.length - 1]);
    if (E2 !== 0 && (o2 >= u && (F.wordWrap === false || F.trim === false) && (i.push(""), o2 = 0), (o2 > 0 || F.trim === false) && (i[i.length - 1] += " ", o2++)), F.hard && D[E2] > u) {
      const B2 = u - o2, p = 1 + Math.floor((D[E2] - B2 - 1) / u);
      Math.floor((D[E2] - 1) / u) < p && i.push(""), y(i, h2, u);
      continue;
    }
    if (o2 + D[E2] > u && o2 > 0 && D[E2] > 0) {
      if (F.wordWrap === false && o2 < u) {
        y(i, h2, u);
        continue;
      }
      i.push("");
    }
    if (o2 + D[E2] > u && F.wordWrap === false) {
      y(i, h2, u);
      continue;
    }
    i[i.length - 1] += h2;
  }
  F.trim !== false && (i = i.map((E2) => rD(E2)));
  const n = [...i.join(`
`)];
  for (const [E2, h2] of n.entries()) {
    if (e2 += h2, g.has(h2)) {
      const { groups: B2 } = new RegExp(`(?:\\${O}(?<code>\\d+)m|\\${w}(?<uri>.*)${b})`).exec(n.slice(E2).join("")) || { groups: {} };
      if (B2.code !== void 0) {
        const p = Number.parseFloat(B2.code);
        s = p === sD ? void 0 : p;
      } else
        B2.uri !== void 0 && (C2 = B2.uri.length === 0 ? void 0 : B2.uri);
    }
    const o2 = eD.codes.get(Number(s));
    n[E2 + 1] === `
` ? (C2 && (e2 += L("")), s && o2 && (e2 += N(o2))) : h2 === `
` && (s && o2 && (e2 += N(s)), C2 && (e2 += L(C2)));
  }
  return e2;
};
function R(t, u, F) {
  return String(t).normalize().replace(/\r\n/g, `
`).split(`
`).map((e2) => ED(e2, u, F)).join(`
`);
}
var oD = Object.defineProperty;
var nD = (t, u, F) => u in t ? oD(t, u, { enumerable: true, configurable: true, writable: true, value: F }) : t[u] = F;
var a = (t, u, F) => (nD(t, typeof u != "symbol" ? u + "" : u, F), F);
function aD(t, u) {
  if (t === u)
    return;
  const F = t.split(`
`), e2 = u.split(`
`), s = [];
  for (let C2 = 0; C2 < Math.max(F.length, e2.length); C2++)
    F[C2] !== e2[C2] && s.push(C2);
  return s;
}
var V = Symbol("clack:cancel");
function v(t, u) {
  t.isTTY && t.setRawMode(u);
}
var z = /* @__PURE__ */ new Map([["k", "up"], ["j", "down"], ["h", "left"], ["l", "right"]]);
var lD = /* @__PURE__ */ new Set(["up", "down", "left", "right", "space", "enter"]);
var x = class {
  constructor({ render: u, input: F = import_node_process.stdin, output: e2 = import_node_process.stdout, ...s }, C2 = true) {
    a(this, "input"), a(this, "output"), a(this, "rl"), a(this, "opts"), a(this, "_track", false), a(this, "_render"), a(this, "_cursor", 0), a(this, "state", "initial"), a(this, "value"), a(this, "error", ""), a(this, "subscribers", /* @__PURE__ */ new Map()), a(this, "_prevFrame", ""), this.opts = s, this.onKeypress = this.onKeypress.bind(this), this.close = this.close.bind(this), this.render = this.render.bind(this), this._render = u.bind(this), this._track = C2, this.input = F, this.output = e2;
  }
  prompt() {
    const u = new import_node_tty.WriteStream(0);
    return u._write = (F, e2, s) => {
      this._track && (this.value = this.rl.line.replace(/\t/g, ""), this._cursor = this.rl.cursor, this.emit("value", this.value)), s();
    }, this.input.pipe(u), this.rl = import_node_readline.default.createInterface({ input: this.input, output: u, tabSize: 2, prompt: "", escapeCodeTimeout: 50 }), import_node_readline.default.emitKeypressEvents(this.input, this.rl), this.rl.prompt(), this.opts.initialValue !== void 0 && this._track && this.rl.write(this.opts.initialValue), this.input.on("keypress", this.onKeypress), v(this.input, true), this.output.on("resize", this.render), this.render(), new Promise((F, e2) => {
      this.once("submit", () => {
        this.output.write(import_sisteransi.cursor.show), this.output.off("resize", this.render), v(this.input, false), F(this.value);
      }), this.once("cancel", () => {
        this.output.write(import_sisteransi.cursor.show), this.output.off("resize", this.render), v(this.input, false), F(V);
      });
    });
  }
  on(u, F) {
    const e2 = this.subscribers.get(u) ?? [];
    e2.push({ cb: F }), this.subscribers.set(u, e2);
  }
  once(u, F) {
    const e2 = this.subscribers.get(u) ?? [];
    e2.push({ cb: F, once: true }), this.subscribers.set(u, e2);
  }
  emit(u, ...F) {
    const e2 = this.subscribers.get(u) ?? [], s = [];
    for (const C2 of e2)
      C2.cb(...F), C2.once && s.push(() => e2.splice(e2.indexOf(C2), 1));
    for (const C2 of s)
      C2();
  }
  unsubscribe() {
    this.subscribers.clear();
  }
  onKeypress(u, F) {
    if (this.state === "error" && (this.state = "active"), F?.name && !this._track && z.has(F.name) && this.emit("cursor", z.get(F.name)), F?.name && lD.has(F.name) && this.emit("cursor", F.name), u && (u.toLowerCase() === "y" || u.toLowerCase() === "n") && this.emit("confirm", u.toLowerCase() === "y"), u === "	" && this.opts.placeholder && (this.value || (this.rl.write(this.opts.placeholder), this.emit("value", this.opts.placeholder))), u && this.emit("key", u.toLowerCase()), F?.name === "return") {
      if (this.opts.validate) {
        const e2 = this.opts.validate(this.value);
        e2 && (this.error = e2, this.state = "error", this.rl.write(this.value));
      }
      this.state !== "error" && (this.state = "submit");
    }
    u === "" && (this.state = "cancel"), (this.state === "submit" || this.state === "cancel") && this.emit("finalize"), this.render(), (this.state === "submit" || this.state === "cancel") && this.close();
  }
  close() {
    this.input.unpipe(), this.input.removeListener("keypress", this.onKeypress), this.output.write(`
`), v(this.input, false), this.rl.close(), this.emit(`${this.state}`, this.value), this.unsubscribe();
  }
  restoreCursor() {
    const u = R(this._prevFrame, process.stdout.columns, { hard: true }).split(`
`).length - 1;
    this.output.write(import_sisteransi.cursor.move(-999, u * -1));
  }
  render() {
    const u = R(this._render(this) ?? "", process.stdout.columns, { hard: true });
    if (u !== this._prevFrame) {
      if (this.state === "initial")
        this.output.write(import_sisteransi.cursor.hide);
      else {
        const F = aD(this._prevFrame, u);
        if (this.restoreCursor(), F && F?.length === 1) {
          const e2 = F[0];
          this.output.write(import_sisteransi.cursor.move(0, e2)), this.output.write(import_sisteransi.erase.lines(1));
          const s = u.split(`
`);
          this.output.write(s[e2]), this._prevFrame = u, this.output.write(import_sisteransi.cursor.move(0, s.length - e2 - 1));
          return;
        } else if (F && F?.length > 1) {
          const e2 = F[0];
          this.output.write(import_sisteransi.cursor.move(0, e2)), this.output.write(import_sisteransi.erase.down());
          const s = u.split(`
`).slice(e2);
          this.output.write(s.join(`
`)), this._prevFrame = u;
          return;
        }
        this.output.write(import_sisteransi.erase.down());
      }
      this.output.write(u), this.state === "initial" && (this.state = "active"), this._prevFrame = u;
    }
  }
};
var pD = Object.defineProperty;
var fD = (t, u, F) => u in t ? pD(t, u, { enumerable: true, configurable: true, writable: true, value: F }) : t[u] = F;
var K = (t, u, F) => (fD(t, typeof u != "symbol" ? u + "" : u, F), F);
var gD = class extends x {
  constructor(u) {
    super(u, false), K(this, "options"), K(this, "cursor", 0), this.options = u.options, this.value = [...u.initialValues ?? []], this.cursor = Math.max(this.options.findIndex(({ value: F }) => F === u.cursorAt), 0), this.on("key", (F) => {
      F === "a" && this.toggleAll();
    }), this.on("cursor", (F) => {
      switch (F) {
        case "left":
        case "up":
          this.cursor = this.cursor === 0 ? this.options.length - 1 : this.cursor - 1;
          break;
        case "down":
        case "right":
          this.cursor = this.cursor === this.options.length - 1 ? 0 : this.cursor + 1;
          break;
        case "space":
          this.toggleValue();
          break;
      }
    });
  }
  get _value() {
    return this.options[this.cursor].value;
  }
  toggleAll() {
    const u = this.value.length === this.options.length;
    this.value = u ? [] : this.options.map((F) => F.value);
  }
  toggleValue() {
    const u = this.value.includes(this._value);
    this.value = u ? this.value.filter((F) => F !== this._value) : [...this.value, this._value];
  }
};
var bD = Object.defineProperty;
var wD = (t, u, F) => u in t ? bD(t, u, { enumerable: true, configurable: true, writable: true, value: F }) : t[u] = F;
var Z = (t, u, F) => (wD(t, typeof u != "symbol" ? u + "" : u, F), F);
var yD = class extends x {
  constructor(u) {
    super(u, false), Z(this, "options"), Z(this, "cursor", 0), this.options = u.options, this.cursor = this.options.findIndex(({ value: F }) => F === u.initialValue), this.cursor === -1 && (this.cursor = 0), this.changeValue(), this.on("cursor", (F) => {
      switch (F) {
        case "left":
        case "up":
          this.cursor = this.cursor === 0 ? this.options.length - 1 : this.cursor - 1;
          break;
        case "down":
        case "right":
          this.cursor = this.cursor === this.options.length - 1 ? 0 : this.cursor + 1;
          break;
      }
      this.changeValue();
    });
  }
  get _value() {
    return this.options[this.cursor];
  }
  changeValue() {
    this.value = this._value.value;
  }
};
var SD = Object.defineProperty;
var jD = (t, u, F) => u in t ? SD(t, u, { enumerable: true, configurable: true, writable: true, value: F }) : t[u] = F;
var MD = (t, u, F) => (jD(t, typeof u != "symbol" ? u + "" : u, F), F);
var TD = class extends x {
  constructor(u) {
    super(u), MD(this, "valueWithCursor", ""), this.on("finalize", () => {
      this.value || (this.value = u.defaultValue), this.valueWithCursor = this.value;
    }), this.on("value", () => {
      if (this.cursor >= this.value.length)
        this.valueWithCursor = `${this.value}${import_picocolors.default.inverse(import_picocolors.default.hidden("_"))}`;
      else {
        const F = this.value.slice(0, this.cursor), e2 = this.value.slice(this.cursor);
        this.valueWithCursor = `${F}${import_picocolors.default.inverse(e2[0])}${e2.slice(1)}`;
      }
    });
  }
  get cursor() {
    return this._cursor;
  }
};
var PD = globalThis.process.platform.startsWith("win");
function WD({ input: t = import_node_process.stdin, output: u = import_node_process.stdout, overwrite: F = true, hideCursor: e2 = true } = {}) {
  const s = f.createInterface({ input: t, output: u, prompt: "", tabSize: 1 });
  f.emitKeypressEvents(t, s), t.isTTY && t.setRawMode(true);
  const C2 = (D, { name: i }) => {
    if (String(D) === "" && process.exit(0), !F)
      return;
    let n = i === "return" ? 0 : -1, E2 = i === "return" ? -1 : 0;
    f.moveCursor(u, n, E2, () => {
      f.clearLine(u, 1, () => {
        t.once("keypress", C2);
      });
    });
  };
  return e2 && process.stdout.write(import_sisteransi.cursor.hide), t.once("keypress", C2), () => {
    t.off("keypress", C2), e2 && process.stdout.write(import_sisteransi.cursor.show), t.isTTY && !PD && t.setRawMode(false), s.terminal = false, s.close();
  };
}

// node_modules/@clack/prompts/dist/index.mjs
var import_node_process2 = __toESM(require("node:process"), 1);
var import_picocolors2 = __toESM(require_picocolors(), 1);
var import_sisteransi2 = __toESM(require_src(), 1);
function q2() {
  return import_node_process2.default.platform !== "win32" ? import_node_process2.default.env.TERM !== "linux" : Boolean(import_node_process2.default.env.CI) || Boolean(import_node_process2.default.env.WT_SESSION) || Boolean(import_node_process2.default.env.TERMINUS_SUBLIME) || import_node_process2.default.env.ConEmuTask === "{cmd::Cmder}" || import_node_process2.default.env.TERM_PROGRAM === "Terminus-Sublime" || import_node_process2.default.env.TERM_PROGRAM === "vscode" || import_node_process2.default.env.TERM === "xterm-256color" || import_node_process2.default.env.TERM === "alacritty" || import_node_process2.default.env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
var _2 = q2();
var o = (r2, n) => _2 ? r2 : n;
var H = o("\u25C6", "*");
var I2 = o("\u25A0", "x");
var x2 = o("\u25B2", "x");
var S2 = o("\u25C7", "o");
var K2 = o("\u250C", "T");
var a2 = o("\u2502", "|");
var d2 = o("\u2514", "\u2014");
var b2 = o("\u25CF", ">");
var E = o("\u25CB", " ");
var C = o("\u25FB", "[\u2022]");
var w2 = o("\u25FC", "[+]");
var M2 = o("\u25FB", "[ ]");
var U2 = o("\u25AA", "\u2022");
var B = o("\u2500", "-");
var Z2 = o("\u256E", "+");
var z2 = o("\u251C", "+");
var X2 = o("\u256F", "+");
var J2 = o("\u25CF", "\u2022");
var Y = o("\u25C6", "*");
var Q2 = o("\u25B2", "!");
var ee = o("\u25A0", "x");
var y2 = (r2) => {
  switch (r2) {
    case "initial":
    case "active":
      return import_picocolors2.default.cyan(H);
    case "cancel":
      return import_picocolors2.default.red(I2);
    case "error":
      return import_picocolors2.default.yellow(x2);
    case "submit":
      return import_picocolors2.default.green(S2);
  }
};
var te = (r2) => new TD({ validate: r2.validate, placeholder: r2.placeholder, defaultValue: r2.defaultValue, initialValue: r2.initialValue, render() {
  const n = `${import_picocolors2.default.gray(a2)}
${y2(this.state)}  ${r2.message}
`, i = r2.placeholder ? import_picocolors2.default.inverse(r2.placeholder[0]) + import_picocolors2.default.dim(r2.placeholder.slice(1)) : import_picocolors2.default.inverse(import_picocolors2.default.hidden("_")), t = this.value ? this.valueWithCursor : i;
  switch (this.state) {
    case "error":
      return `${n.trim()}
${import_picocolors2.default.yellow(a2)}  ${t}
${import_picocolors2.default.yellow(d2)}  ${import_picocolors2.default.yellow(this.error)}
`;
    case "submit":
      return `${n}${import_picocolors2.default.gray(a2)}  ${import_picocolors2.default.dim(this.value || r2.placeholder)}`;
    case "cancel":
      return `${n}${import_picocolors2.default.gray(a2)}  ${import_picocolors2.default.strikethrough(import_picocolors2.default.dim(this.value ?? ""))}${this.value?.trim() ? `
` + import_picocolors2.default.gray(a2) : ""}`;
    default:
      return `${n}${import_picocolors2.default.cyan(a2)}  ${t}
${import_picocolors2.default.cyan(d2)}
`;
  }
} }).prompt();
var ie = (r2) => {
  const n = (t, s) => {
    const c2 = t.label ?? String(t.value);
    return s === "active" ? `${import_picocolors2.default.green(b2)} ${c2} ${t.hint ? import_picocolors2.default.dim(`(${t.hint})`) : ""}` : s === "selected" ? `${import_picocolors2.default.dim(c2)}` : s === "cancelled" ? `${import_picocolors2.default.strikethrough(import_picocolors2.default.dim(c2))}` : `${import_picocolors2.default.dim(E)} ${import_picocolors2.default.dim(c2)}`;
  };
  let i = 0;
  return new yD({ options: r2.options, initialValue: r2.initialValue, render() {
    const t = `${import_picocolors2.default.gray(a2)}
${y2(this.state)}  ${r2.message}
`;
    switch (this.state) {
      case "submit":
        return `${t}${import_picocolors2.default.gray(a2)}  ${n(this.options[this.cursor], "selected")}`;
      case "cancel":
        return `${t}${import_picocolors2.default.gray(a2)}  ${n(this.options[this.cursor], "cancelled")}
${import_picocolors2.default.gray(a2)}`;
      default: {
        const s = r2.maxItems === void 0 ? 1 / 0 : Math.max(r2.maxItems, 5);
        this.cursor >= i + s - 3 ? i = Math.max(Math.min(this.cursor - s + 3, this.options.length - s), 0) : this.cursor < i + 2 && (i = Math.max(this.cursor - 2, 0));
        const c2 = s < this.options.length && i > 0, l2 = s < this.options.length && i + s < this.options.length;
        return `${t}${import_picocolors2.default.cyan(a2)}  ${this.options.slice(i, i + s).map((u, m2, $2) => m2 === 0 && c2 ? import_picocolors2.default.dim("...") : m2 === $2.length - 1 && l2 ? import_picocolors2.default.dim("...") : n(u, m2 + i === this.cursor ? "active" : "inactive")).join(`
${import_picocolors2.default.cyan(a2)}  `)}
${import_picocolors2.default.cyan(d2)}
`;
      }
    }
  } }).prompt();
};
var ae = (r2) => {
  const n = (i, t) => {
    const s = i.label ?? String(i.value);
    return t === "active" ? `${import_picocolors2.default.cyan(C)} ${s} ${i.hint ? import_picocolors2.default.dim(`(${i.hint})`) : ""}` : t === "selected" ? `${import_picocolors2.default.green(w2)} ${import_picocolors2.default.dim(s)}` : t === "cancelled" ? `${import_picocolors2.default.strikethrough(import_picocolors2.default.dim(s))}` : t === "active-selected" ? `${import_picocolors2.default.green(w2)} ${s} ${i.hint ? import_picocolors2.default.dim(`(${i.hint})`) : ""}` : t === "submitted" ? `${import_picocolors2.default.dim(s)}` : `${import_picocolors2.default.dim(M2)} ${import_picocolors2.default.dim(s)}`;
  };
  return new gD({ options: r2.options, initialValues: r2.initialValues, required: r2.required ?? true, cursorAt: r2.cursorAt, validate(i) {
    if (this.required && i.length === 0)
      return `Please select at least one option.
${import_picocolors2.default.reset(import_picocolors2.default.dim(`Press ${import_picocolors2.default.gray(import_picocolors2.default.bgWhite(import_picocolors2.default.inverse(" space ")))} to select, ${import_picocolors2.default.gray(import_picocolors2.default.bgWhite(import_picocolors2.default.inverse(" enter ")))} to submit`))}`;
  }, render() {
    let i = `${import_picocolors2.default.gray(a2)}
${y2(this.state)}  ${r2.message}
`;
    switch (this.state) {
      case "submit":
        return `${i}${import_picocolors2.default.gray(a2)}  ${this.options.filter(({ value: t }) => this.value.includes(t)).map((t) => n(t, "submitted")).join(import_picocolors2.default.dim(", ")) || import_picocolors2.default.dim("none")}`;
      case "cancel": {
        const t = this.options.filter(({ value: s }) => this.value.includes(s)).map((s) => n(s, "cancelled")).join(import_picocolors2.default.dim(", "));
        return `${i}${import_picocolors2.default.gray(a2)}  ${t.trim() ? `${t}
${import_picocolors2.default.gray(a2)}` : ""}`;
      }
      case "error": {
        const t = this.error.split(`
`).map((s, c2) => c2 === 0 ? `${import_picocolors2.default.yellow(d2)}  ${import_picocolors2.default.yellow(s)}` : `   ${s}`).join(`
`);
        return i + import_picocolors2.default.yellow(a2) + "  " + this.options.map((s, c2) => {
          const l2 = this.value.includes(s.value), u = c2 === this.cursor;
          return u && l2 ? n(s, "active-selected") : l2 ? n(s, "selected") : n(s, u ? "active" : "inactive");
        }).join(`
${import_picocolors2.default.yellow(a2)}  `) + `
` + t + `
`;
      }
      default:
        return `${i}${import_picocolors2.default.cyan(a2)}  ${this.options.map((t, s) => {
          const c2 = this.value.includes(t.value), l2 = s === this.cursor;
          return l2 && c2 ? n(t, "active-selected") : c2 ? n(t, "selected") : n(t, l2 ? "active" : "inactive");
        }).join(`
${import_picocolors2.default.cyan(a2)}  `)}
${import_picocolors2.default.cyan(d2)}
`;
    }
  } }).prompt();
};
var oe = (r2 = "") => {
  process.stdout.write(`${import_picocolors2.default.gray(K2)}  ${r2}
`);
};
var de = () => {
  const r2 = _2 ? ["\u25D2", "\u25D0", "\u25D3", "\u25D1"] : ["\u2022", "o", "O", "0"], n = _2 ? 80 : 120;
  let i, t, s = false, c2 = "";
  const l2 = (v2 = "") => {
    s = true, i = WD(), c2 = v2.replace(/\.+$/, ""), process.stdout.write(`${import_picocolors2.default.gray(a2)}
`);
    let g2 = 0, p = 0;
    t = setInterval(() => {
      const O2 = import_picocolors2.default.magenta(r2[g2]), P2 = ".".repeat(Math.floor(p)).slice(0, 3);
      process.stdout.write(import_sisteransi2.cursor.move(-999, 0)), process.stdout.write(import_sisteransi2.erase.down(1)), process.stdout.write(`${O2}  ${c2}${P2}`), g2 = g2 + 1 < r2.length ? g2 + 1 : 0, p = p < r2.length ? p + 0.125 : 0;
    }, n);
  }, u = (v2 = "", g2 = 0) => {
    c2 = v2 ?? c2, s = false, clearInterval(t);
    const p = g2 === 0 ? import_picocolors2.default.green(S2) : g2 === 1 ? import_picocolors2.default.red(I2) : import_picocolors2.default.red(x2);
    process.stdout.write(import_sisteransi2.cursor.move(-999, 0)), process.stdout.write(import_sisteransi2.erase.down(1)), process.stdout.write(`${p}  ${c2}
`), i();
  }, m2 = (v2 = "") => {
    c2 = v2 ?? c2;
  }, $2 = (v2) => {
    const g2 = v2 > 1 ? "Something went wrong" : "Canceled";
    s && u(g2, v2);
  };
  return process.on("uncaughtExceptionMonitor", () => $2(2)), process.on("unhandledRejection", () => $2(2)), process.on("SIGINT", () => $2(1)), process.on("SIGTERM", () => $2(1)), process.on("exit", $2), { start: l2, stop: u, message: m2 };
};

// src/cmd/db.ts
var import_child_process = require("child_process");
var import_path2 = __toESM(require("path"));
var import_fs2 = __toESM(require("fs"));
var drizzle_init = async () => {
  oe("\u26A1\uFE0F Drizzle & Drizzle Kit initializer");
  getSetupConfig();
  const appName = await te({
    message: "Enter the folder name for database",
    placeholder: "db",
    validate(value) {
      if (value.length === 0)
        return `Name cannot be empty.`;
      return ``;
    }
  });
  const dbType = await ie({
    message: "Select your database type",
    options: [
      { value: DATABASE.sqlite, label: "Local (SQLite)" },
      { value: DATABASE.turso, label: "Turso (SQLite)" },
      { value: DATABASE.supabase, label: "Supabase (PostgresQL)" }
    ]
  });
  mutateProjectFiles("setup.json", (rawContent) => {
    const setupJSON = JSON.parse(rawContent);
    setupJSON["db"] = {};
    setupJSON["db"]["type"] = dbType?.toString();
    setupJSON["db"]["name"] = appName;
    return JSON.stringify(setupJSON, null, 2);
  });
  if (!dbType)
    process.exit(1);
  const config2 = await fetchConfig();
  const { dependencies, devDependencies, init, drizzleKit, schema } = config2["db"][dbType];
  const initContent = await fetchFilesAsString(init);
  const drizzleKitContent = await fetchFilesAsString(drizzleKit);
  const schemaContent = await fetchFilesAsString(schema);
  const projectDir = getModuleAbsolutePath("db");
  const s = de();
  s.start(`Creating your drizzle config...`);
  try {
    if (!import_fs2.default.existsSync(projectDir))
      import_fs2.default.mkdirSync(projectDir, { recursive: true });
    const dbFilePath = import_path2.default.join(projectDir, "index.ts");
    import_fs2.default.writeFileSync(dbFilePath, initContent, { flag: "w" });
    const schemaFilePath = import_path2.default.join(projectDir, "schema.ts");
    import_fs2.default.writeFileSync(schemaFilePath, schemaContent, { flag: "w" });
    const drizzleConfigPath = import_path2.default.resolve(process.cwd(), "drizzle.config.ts");
    import_fs2.default.writeFileSync(drizzleConfigPath, drizzleKitContent?.replaceAll("${databasePath}", projectDir), { flag: "w" });
    mutateProjectFiles("package.json", (rawContent) => {
      const packageJSONContent = JSON.parse(rawContent);
      packageJSONContent["scripts"]["db:generate"] = "drizzle-kit generate";
      packageJSONContent["scripts"]["db:migrate"] = "drizzle-kit migrate";
      packageJSONContent["scripts"]["db:push"] = "drizzle-kit push";
      return JSON.stringify(packageJSONContent, null, 2);
    });
    s.message("Installing dependencies...");
    (0, import_child_process.execSync)(
      `npm install ${dependencies?.join(" ")}`,
      { cwd: projectDir, stdio: "inherit" }
    );
    s.message("Installing dev dependencies...");
    (0, import_child_process.execSync)(
      `npm install -D ${devDependencies?.join(" ")}`,
      { cwd: projectDir, stdio: "inherit" }
    );
    s.stop("Drizzle has been setup! \u{1F389}");
  } catch (err) {
    s.stop("Error occurred while setting up the project.");
    console.error(err);
  }
};

// src/cmd/auth.ts
var import_child_process2 = require("child_process");
var import_path3 = __toESM(require("path"));
var import_fs3 = __toESM(require("fs"));
var authInit = async () => {
  oe("\u26A1\uFE0F Lucia Auth initializer");
  const setupConfig = getSetupConfig();
  if (!setupConfig?.db?.type) {
    console.error("Please setup Drizzle before setting up Lucia Auth.");
    process.exit(1);
  }
  const appName = await te({
    message: "Enter the folder name for authentication",
    placeholder: "auth",
    validate(value) {
      if (value.length === 0)
        return `Name cannot be empty.`;
      return ``;
    }
  });
  mutateProjectFiles("setup.json", (rawContent) => {
    const setupJSON = JSON.parse(rawContent);
    setupJSON["auth"] = {};
    setupJSON["auth"]["name"] = appName;
    return JSON.stringify(setupJSON, null, 2);
  });
  const projectDir = getModuleAbsolutePath("auth");
  const shouldSetupOAuth = await ie({
    message: "Do you want to setup OAuth ?",
    options: [
      { value: true, label: "Yes" },
      { value: false, label: "No" }
    ]
  });
  const dbType = {
    [DATABASE.sqlite]: "sqlite",
    [DATABASE.supabase]: "postgres",
    [DATABASE.turso]: "sqlite"
  }[setupConfig?.db?.type];
  const config2 = await fetchConfig();
  const authDBConfig = config2["auth"]["db"][dbType];
  const s = de();
  s.start(`Creating your auth config...`);
  try {
    if (!import_fs3.default.existsSync(projectDir))
      import_fs3.default.mkdirSync(projectDir, { recursive: true });
    const authFilePath = import_path3.default.join(projectDir, "index.ts");
    const lucia = await fetchFilesAsString(config2["auth"]["index"]);
    import_fs3.default.writeFileSync(authFilePath, lucia, { flag: "w" });
    const adapterFilePath = import_path3.default.join(projectDir, "adapter.ts");
    const adapterContent = await fetchFilesAsString(authDBConfig["adapter"]);
    const adapterFile = adapterContent.replaceAll("$databasePath", getModuleAliasPath("db"));
    import_fs3.default.writeFileSync(adapterFilePath, adapterFile, { flag: "w" });
    const authSchemaFilePath = import_path3.default.join(projectDir, "auth-schema.ts");
    const authSchemaContent = await fetchFilesAsString(authDBConfig["auth-schema"]);
    import_fs3.default.writeFileSync(authSchemaFilePath, authSchemaContent, { flag: "w" });
    const dbProjectDir = getModuleAbsolutePath("db");
    mutateProjectFiles(`${dbProjectDir}/schema.ts`, (fileContent) => {
      const exportAuth = `export * from "${getModuleAliasPath("auth")}/auth-schema"`;
      let initial = fileContent;
      if (!initial.includes(exportAuth))
        initial = `${initial}
${exportAuth}`;
      return initial;
    });
    if (shouldSetupOAuth)
      await setupOAuth({ authDBConfig });
    s.message("Installing dependencies...");
    (0, import_child_process2.execSync)(
      `npm install ${config2?.auth?.dependencies?.join(" ")}`,
      { cwd: projectDir, stdio: "inherit" }
    );
    s.stop("Auth has been setup! \u{1F389}");
  } catch (err) {
    s.stop("Error occurred while setting up the project.");
    console.error(err);
  }
};
var add = async () => {
  const projectDir = getModuleAbsolutePath("auth");
  oe("\u26A1\uFE0F Add new auth initializer");
  const config2 = await fetchConfig();
  const item = await ae({
    message: "Select the authentication you would like to add.",
    options: [{
      value: "password",
      label: "Email & Password"
    }]
  });
  const s = de();
  s.start(`Adding auth method...`);
  try {
    const authModuleAbsolutePath = getModuleAbsolutePath("auth");
    const optionsIndexPath = import_path3.default.join(`${authModuleAbsolutePath}/options`, "index.ts");
    if (!import_fs3.default.existsSync(optionsIndexPath)) {
      import_fs3.default.mkdirSync(`${authModuleAbsolutePath}/options`, { recursive: true });
      import_fs3.default.writeFileSync(optionsIndexPath, `// Export all authentication options here`, { flag: "w" });
      import_fs3.default.writeFileSync(import_path3.default.join(authModuleAbsolutePath, "index.ts"), `
export * from "./options"`, { flag: "a" });
    }
    const { dependencies, file } = config2.auth.options[item.toString()];
    const fileContent = await fetchFilesAsString(file);
    const optionsFilePath = import_path3.default.join(`${authModuleAbsolutePath}/options`, `${item?.toString()}.ts`);
    import_fs3.default.writeFileSync(optionsFilePath, fileContent.replaceAll("$databasePath", getModuleAliasPath("db")).replaceAll("$authPath", getModuleAliasPath("auth")), { flag: "w" });
    import_fs3.default.writeFileSync(optionsIndexPath, `
export * from "./${item?.toString()}"`, { flag: "a" });
    s.message("Installing dependencies...");
    (0, import_child_process2.execSync)(
      `npm install ${dependencies?.join(" ")}`,
      { cwd: projectDir, stdio: "inherit" }
    );
    s.stop("Added auth options");
  } catch (err) {
    s.stop("Error occurred while setting up the project.");
    console.error(err);
  }
};
async function setupOAuth({ authDBConfig }) {
  const authProjectDir = getModuleAbsolutePath("auth");
  const dbProjectDir = getModuleAbsolutePath("db");
  const result = await fetchFilesAsString(authDBConfig["oauth-schema"]);
  const oauthSchemaFilePath = import_path3.default.join(authProjectDir, "oauth-schema.ts");
  import_fs3.default.writeFileSync(oauthSchemaFilePath, result, { flag: "w" });
  const luciaIndexFilePath = import_path3.default.join(authProjectDir, "index.ts");
  import_fs3.default.writeFileSync(luciaIndexFilePath, '\nexport * from "./oauth-schema"', { flag: "a" });
  mutateProjectFiles(`${dbProjectDir}/schema.ts`, (fileContent) => {
    const exportAuth = `export * from "${getModuleAliasPath("auth")}/oauth-schema"`;
    let initial = fileContent;
    if (!initial.includes(exportAuth))
      initial = `${initial}
${exportAuth}`;
    return initial;
  });
}

// src/cmd/init.ts
var import_path4 = __toESM(require("path"));
var import_fs4 = __toESM(require("fs"));
var config = {
  "aliases": {
    "path": "~/*",
    "aliasSource": "./src/*"
  }
};
var cmdInit = async () => {
  oe("\u26A1\uFE0F Cmd initialiser");
  const aliasTo = await te({
    message: "Where is your source directory ?",
    placeholder: "./src/*",
    validate(value) {
      if (value.length === 0)
        return `Source directory cannot be empty.`;
      return ``;
    }
  });
  const alias = await te({
    message: "Which alias would you like to use to the source directory ?",
    placeholder: "~/*",
    validate(value) {
      if (value.length === 0)
        return `Alias cannot be empty.`;
      return ``;
    }
  });
  const s = de();
  s.start(`Setting up your config...`);
  try {
    mutateProjectFiles("package.json", (rawContent) => {
      const packageJSONContent = JSON.parse(rawContent);
      packageJSONContent["imports"] = {};
      packageJSONContent["imports"][alias.toString()] = aliasTo.toString();
      return JSON.stringify(packageJSONContent, null, 2);
    });
    mutateProjectFiles("tsconfig.json", (rawContent) => {
      const tsConfigContent = JSON.parse(rawContent);
      tsConfigContent["compilerOptions"]["paths"] = {};
      tsConfigContent["compilerOptions"]["paths"][alias.toString()] = [aliasTo.toString()];
      return JSON.stringify(tsConfigContent, null, 2);
    });
    config.aliases.path = alias.toString();
    config.aliases.aliasSource = aliasTo.toString();
    const projectDir = import_path4.default.resolve(process.cwd(), "");
    const setupPath = import_path4.default.join(projectDir, "setup.json");
    import_fs4.default.writeFileSync(setupPath, JSON.stringify(config, null, 2), { flag: "w" });
    s.stop("Cmd has been setup! \u{1F389}");
  } catch (err) {
    s.stop("Error occurred while setting up the project.");
    console.error(err);
  }
};

// src/index.ts
var args = process.argv;
var APPS = {
  INIT: "init",
  AUTH: "auth",
  DB: "db"
};
switch (args[2]) {
  case APPS.INIT:
    cmdInit();
    break;
  case APPS.DB:
    drizzle_init();
    break;
  case APPS.AUTH:
    if (args[3] === "add")
      add();
    else
      authInit();
    break;
  default:
    console.log(`Please select a params ${Object.values(APPS).join(",")}`);
}
