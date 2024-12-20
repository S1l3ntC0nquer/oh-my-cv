import { reactive, useSSRContext, watch, defineComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, ref, computed, shallowRef } from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/vue@3.4.31_typescript@5.5.3/node_modules/vue/index.mjs';
import { k as defineStore, m as useState, a as useNuxtApp, n as useMagicKeys, w as watchThrottled, l as useRuntimeConfig, o as unrefElement, t as toValue } from './server.mjs';
import { toast } from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/vue-sonner@1.1.3/node_modules/vue-sonner/lib/vue-sonner.js';
import * as localForage from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/localforage@1.10.0/node_modules/localforage/dist/localforage.js';
import { useForwardPropsEmits, EditableSubmitTrigger, EditableCancelTrigger, EditableRoot, EditableArea, EditablePreview, EditableInput } from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/radix-vue@1.9.0_vue@3.4.31_typescript@5.5.3_/node_modules/radix-vue/dist/index.js';
import { c as cn, a as _sfc_main$g } from './Header-CVL2gF3u.mjs';
import { ssrRenderComponent, ssrRenderAttrs } from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/vue@3.4.31_typescript@5.5.3/node_modules/vue/server-renderer/index.mjs';
import MarkdownIt from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/markdown-it@14.1.0/node_modules/markdown-it/index.mjs';
import MarkdownItDeflist from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/markdown-it-deflist@3.0.0/node_modules/markdown-it-deflist/index.mjs';
import LinkAttributes from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js';
import Katex from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/katex@0.16.11/node_modules/katex/dist/katex.mjs';
import * as yamlParser from 'file://C:/Users/skalp/Website/oh-my-cv/node_modules/.pnpm/js-yaml@4.1.0/node_modules/js-yaml/dist/js-yaml.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var sheetsMap = /* @__PURE__ */ new Map();
var injectCss = (id, content) => {
  let style = sheetsMap.get(id);
  if (!style) {
    style = (void 0).createElement("style");
    style.setAttribute("type", "text/css");
    style.setAttribute("data-dynamic-css-id", id);
    style.textContent = content;
    (void 0).head.appendChild(style);
  } else {
    style.textContent = content;
  }
  sheetsMap.set(id, style);
};
const PRESET_COLORS = [
  "#000000",
  "#377bb5",
  "#ca3832",
  "#ee8732",
  "#9c5bde",
  "#43912b"
];
const PRINT_BOTTOM = 10;
const PREVIEW_ID = "preview";
const PREVIEW_SELECTOR = `#resume-${PREVIEW_ID}`;
const LOCAL_EN_FONTS = [
  {
    name: "Adobe Garamond Pro"
  },
  {
    name: "Arial"
  },
  {
    name: "Arial Black"
  },
  {
    name: "Arial Narrow"
  },
  {
    name: "CMU Sans Serif"
  },
  {
    name: "Courier New"
  },
  {
    name: "Euclid"
  },
  {
    name: "Georgia"
  },
  {
    name: "Minion Pro"
  },
  {
    name: "Palatino"
  },
  {
    name: "Tahoma"
  },
  {
    name: "Tex Gyre Pagella"
  },
  {
    name: "Times New Roman"
  },
  {
    name: "Times Newer Roman"
  },
  {
    name: "Trebuchet MS"
  },
  {
    name: "Verdana"
  }
];
const LOCAL_CJK_FONTS = [
  {
    name: "\u534E\u5EB7\u5B8B\u4F53",
    fontFamily: "HKST"
  },
  {
    name: "\u971E\u9E5C\u6587\u6977",
    fontFamily: "LXGW WenKai"
  }
];
const GF_CJK_SUBSETS = [
  "chinese-simplified",
  "chinese-traditional",
  "japanese",
  "korean"
];
const GF_CJK_FAMILY_TO_NAME = {
  "Noto Sans SC": "\u601D\u6E90\u9ED1\u4F53\uFF08\u7B80\uFF09",
  "Noto Sans TC": "\u601D\u6E90\u9ED1\u4F53\uFF08\u7E41\uFF09",
  "Noto Serif SC": "\u601D\u6E90\u5B8B\u4F53\uFF08\u7B80\uFF09",
  "Noto Serif TC": "\u601D\u6E90\u5B8B\u4F53\uFF08\u7E41\uFF09"
};
const GF_CJK_FIRST = [
  "\u601D\u6E90\u9ED1\u4F53\uFF08\u7B80\uFF09",
  "\u601D\u6E90\u9ED1\u4F53\uFF08\u7E41\uFF09",
  "\u601D\u6E90\u5B8B\u4F53\uFF08\u7B80\uFF09",
  "\u601D\u6E90\u5B8B\u4F53\uFF08\u7E41\uFF09"
];
const GF_IGNORE_FONTS = [
  "Baloo 2",
  "Baloo Bhai 2",
  "Baloo Bhaijaan 2",
  "Baloo Bhaina 2",
  "Baloo Chettan 2",
  "Baloo Da 2",
  "Baloo Paaji 2",
  "Baloo Tamma 2",
  "Baloo Tammudu 2",
  "Baloo Thambi 2",
  "Brygada 1918",
  "Exo 2",
  "M PLUS 1",
  "M PLUS 1 Code",
  "M PLUS 1p",
  "M PLUS 2",
  "M PLUS Rounded 1c",
  "Shippori Mincho",
  "Source Sans 3",
  "Source Serif 4"
];
const PAPER_SIZES = {
  A4: {
    h: 297 + 2,
    w: 210
  },
  letter: {
    h: 279.4 + 3,
    w: 215.9
  }
};
const MM_TO_PX = 3.78;
const DEFAULT_STYLES = {
  marginV: 50,
  marginH: 45,
  lineHeight: 1.3,
  paragraphSpace: 5,
  themeColor: "#377bb5",
  fontCJK: {
    name: "\u534E\u5EB7\u5B8B\u4F53",
    fontFamily: "HKST"
  },
  fontEN: {
    name: "Minion Pro"
  },
  fontSize: 15,
  paper: "A4"
};
const DEFAULT_MD_CONTENT = `---
name: Haha Ha
header:
  - text: |
      <span style="font-size: 1.2em; font-weight: bold;">Applying for: Cooking Engineer</span>
  - text: <span class="iconify" data-icon="tabler:phone"></span> (+1) 123-456-7890
    newLine: true
  - text: <span class="iconify" data-icon="tabler:mail"></span> icancook@email.com
    link: mailto:icancook@email.com
  - text: <span class="iconify" data-icon="tabler:brand-github"></span> Renovamen
    link: https://github.com/Renovamen
  - text: <span class="iconify" data-icon="charm:person"></span> zxh.me
    link: https://zxh.me
---

<!-- Important: Replace all template content, especially contact details, with your own information. -->

<!-- Important: When updating your email address, remember to change both the "text" (visible text) and the "link" (underlying hyperlink) fields. -->


## Education

**Harvest University**
  ~ Cambridge, MA

M.S. in Cooking Science
  ~ 09/2021 - 01/2023

**Huangdu Institute of Tofu**
  ~ Shanghai, China

B.Eng. in Salad Engineering
  ~ 09/2016 - 07/2020


## Publications

[~P1]: **Eating is All You Need**

    <u>Haha Ha</u>, San Zhang

    *Conference on Nutritional Ingredients Processing Systems (NIPS), 2099*

[~P2]: **You Only Cook Once: Unified, Real-Time Mapo Tofu Recipe**

    <u>Haha Ha</u>, San Zhang, Si Li, Wu Wang

    *Culinary Visualization and Potato Roasting Conference (CVPR), 2077 **(Best Paper Honorable Mention)***


## Experience

**Cooking Engineer Intern**
  ~ Microwavesoft
  ~ 07/2021 - Present

- Developed an innovative, versatile cooking methodology applicable across diverse ingredients, incorporating and improving upon recent culinary trends
- Created a streamlined cream of mushroom soup recipe, achieving results comparable to complex state-of-the-art techniques through a novel mushroom-cutting approach; published in NIPS 2099 (see [~P1])
- Designed a specialized cooking pan that enhanced research efficiency for team members


**Engineering Chef Intern**
  ~ University of California, Berkebake
  ~ 08/2020 - Present

- Developed a precise mapo tofu quality assessment technique using thermometer-based measurements
- Invented a rapid stir-frying algorithm for tofu cooking, replacing vague instructions like "add as much as you can" with specific hot sauce measurements; published in CVPR 2077 (see [~P2])
- Outperformed SOTA cooking methods in both efficiency and quality across experiments with popular tofu types


**Student Chef**
  ~ Cabbage Melon University
  ~ 03/2020 - 06/2020

- Developed an innovative mapo tofu consumption framework utilizing a spoon-chopstick combination
- Engineered a filtering method for tofu dataset creation, inspired by bean grinding techniques
- Established two new metrics for evaluating eating plan novelty and diversity
- Significantly surpassed existing methods and baselines in diversity, novelty, and coherence


**Research Chef Intern**
  ~ Snapchopstick
  ~ 07/2018 - 08/2018

- Designed two novel sandwiches by repurposing breads and meat from traditional bacon cheeseburgers, maximizing resource efficiency
- Leveraged structure duality to boost cooking speed for two complementary tasks based on shared ingredients
- Surpassed strong baselines on QWE'15 and ASDF'14 dataset


## Awards and Honors

**Gold**, International Collegiate Catching Fish Contest (ICCFC)
  ~ 2018

**First Prize**, China National Scholarship for Outstanding Dragon Killers
  ~ 2017, 2018


## Skills

**Programming Languages:** <span class="iconify" data-icon="vscode-icons:file-type-python"></span> Frython, <span class="iconify" data-icon="vscode-icons:file-type-js-official"></span> JavaSauce / <span class="iconify" data-icon="vscode-icons:file-type-typescript-official"></span> TypeSauce, <span class="iconify" data-icon="vscode-icons:file-type-cpp2"></span> Cheese++, <span class="iconify" data-icon="logos:java" data-inline="false"></span> Java Bean

**Tools and Frameworks:** GrillHub, PanFlow, TensorFork, SpiceNet, $\\LaTeX$

**Languages:** Chinese (native), English (proficient)
`;
const DEFAULT_CSS_CONTENT = `/* Backbone CSS for Resume Template 1 */

/* Basic */

${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
  background-color: white;
  color: black;
  text-align: justify;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

${PREVIEW_SELECTOR} p,
${PREVIEW_SELECTOR} li,
${PREVIEW_SELECTOR} dl {
  margin: 0;
}

/* Headings */

${PREVIEW_SELECTOR} h1,
${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  font-weight: bold;
}

${PREVIEW_SELECTOR} h1 {
  font-size: 2.13em;
}

${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  margin-bottom: 5px;
  font-size: 1.2em;
}

${PREVIEW_SELECTOR} h2 {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

/* Lists */

${PREVIEW_SELECTOR} ul,
${PREVIEW_SELECTOR} ol {
  padding-left: 1.5em;
  margin: 0.2em 0;
}

${PREVIEW_SELECTOR} ul {
  list-style-type: circle;
}

${PREVIEW_SELECTOR} ol {
  list-style-type: decimal;
}

/* Definition Lists */

${PREVIEW_SELECTOR} dl {
  display: flex;
}

${PREVIEW_SELECTOR} dl dt,
${PREVIEW_SELECTOR} dl dd:not(:last-child) {
  flex: 1;
}

/* Tex */

${PREVIEW_SELECTOR} :not(span.katex-display) > span.katex {
  font-size: 1em !important;
}

/* SVG & Images */

${PREVIEW_SELECTOR} svg.iconify {
  vertical-align: -0.2em;
}

${PREVIEW_SELECTOR} img {
  max-width: 100%;
}

/* Header */

${PREVIEW_SELECTOR} .resume-header {
  text-align: center;
}

${PREVIEW_SELECTOR} .resume-header h1 {
  text-align: center;
  line-height: 1;
  margin-bottom: 8px;
}

${PREVIEW_SELECTOR} .resume-header-item:not(.no-separator)::after {
  content: " | ";
}

/* Citations */

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="definitions"] {
  padding-left: 1.2em;
}

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="definition"] p {
  margin-left: 0.5em;
}

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="definition"]::marker {
  content: attr(data-label);
}

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="reference"] {
  font-size: 100%;
  top: 0;
}

/* Dark & print mode */
/* You might want to comment out the following lines if you change the background or text color. */

.dark ${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
  background-color: hsl(213, 12%, 15%);
  color: hsl(216, 12%, 84%);
}

@media print {
  .dark ${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
    background-color: white;
    color: black;
  }
}
`;
const REQUIRED_DATA_TYPES = {
  v0: [
    {
      fields: ["name", "markdown", "css", "styles.paper", "styles.themeColor"],
      types: "string"
    },
    {
      fields: ["update"],
      types: ["string", "undefined"]
    },
    {
      fields: [
        "styles.fontSize",
        "styles.lineHeight",
        "styles.marginH",
        "styles.marginV",
        "styles.paragraphSpace"
      ],
      types: "number"
    }
  ],
  v1: [
    {
      fields: [
        "name",
        "markdown",
        "css",
        "updated_at",
        "created_at",
        "styles.paper",
        "styles.themeColor"
      ],
      types: "string"
    },
    {
      fields: [
        "styles.fontSize",
        "styles.lineHeight",
        "styles.marginH",
        "styles.marginV",
        "styles.paragraphSpace"
      ],
      types: "number"
    }
  ]
};
const VALID_VERSIONS = Object.keys(REQUIRED_DATA_TYPES);
const CURRENT_VERSION = "v1";
const EMPTY_VERSION_FALLBACK = "v0";
const VERSION_STORAGE_KEY = "ohmycv_version";
const useConstant = () => {
  const FONT2 = {
    LOCAL: {
      EN: LOCAL_EN_FONTS,
      CJK: LOCAL_CJK_FONTS,
      includes: (font) => {
        const check = (list) => list.some(
          (item) => {
            var _a, _b;
            return ((_a = item.fontFamily) != null ? _a : item.name) === ((_b = font.fontFamily) != null ? _b : font.name);
          }
        );
        return check(LOCAL_EN_FONTS) || check(LOCAL_CJK_FONTS);
      }
    },
    GF: {
      CJK_SUBSETS: GF_CJK_SUBSETS,
      CJK_FAMILY_TO_NAME: GF_CJK_FAMILY_TO_NAME,
      CJK_FIRST: GF_CJK_FIRST,
      IGNORE: GF_IGNORE_FONTS
    }
  };
  const PAPER = {
    SIZES: PAPER_SIZES,
    MM_TO_PX,
    sizeToPx: (size, v) => ~~(PAPER_SIZES[size][v] * MM_TO_PX)
  };
  const RENDER2 = {
    PRINT_BOTTOM,
    PREVIEW_ID,
    PREVIEW_SELECTOR
  };
  const COLOR = {
    PRESET: PRESET_COLORS
  };
  const DEFAULT = {
    RESUME_NAME: "New Resume",
    STYLES: DEFAULT_STYLES,
    MD_CONTENT: DEFAULT_MD_CONTENT,
    CSS_CONTENT: DEFAULT_CSS_CONTENT
  };
  const VERSION = {
    CURRENT: CURRENT_VERSION,
    EMPTY_FALLBACK: EMPTY_VERSION_FALLBACK,
    VERSION_KEY: VERSION_STORAGE_KEY,
    REQUIRED_DATA_TYPES,
    VALID: VALID_VERSIONS,
    isVersionValid: (version) => VALID_VERSIONS.includes(version)
  };
  return {
    FONT: FONT2,
    PAPER,
    RENDER: RENDER2,
    COLOR,
    DEFAULT,
    VERSION
  };
};
const { RENDER } = useConstant();
class DynamicCssService {
  constructor() {
    __publicField(this, "_selector", (id) => {
      return `#resume-${id != null ? id : RENDER.PREVIEW_ID}`;
    });
    __publicField(this, "_injectedCssId", (type, id) => {
      return `ohmycv-${type}-${id != null ? id : RENDER.PREVIEW_ID}`;
    });
    __publicField(this, "themeColor", (selector, styles) => {
      return `${selector} :not(.resume-header-item) > a { color: ${styles.themeColor}; }${selector} h1, ${selector} h2, ${selector} h3 { color: ${styles.themeColor}; }${selector} h2 { border-bottom-color: ${styles.themeColor}; }`;
    });
    __publicField(this, "lineHeight", (selector, styles) => {
      const height = styles.lineHeight;
      return `${selector} p, ${selector} li { line-height: ${height.toFixed(2)}; }${selector} h2, ${selector} h3 { line-height: ${(height * 1.154).toFixed(2)}; }${selector} dl { line-height: ${(height * 1.038).toFixed(2)}; }`;
    });
    __publicField(this, "paragraphSpace", (selector, styles) => {
      return `${selector} h2 { margin-top: ${styles.paragraphSpace}px; }`;
    });
    __publicField(this, "fontFamily", (selector, styles) => {
      const fontEN = styles.fontEN.fontFamily || styles.fontEN.name;
      const fontCJK = styles.fontCJK.fontFamily || styles.fontCJK.name;
      return `${selector} { font-family: ${fontEN}, ${fontCJK}, Arial, Helvetica, sans-serif; }`;
    });
    __publicField(this, "fontSize", (selector, styles) => {
      return `${selector} { font-size: ${styles.fontSize}px; }`;
    });
    __publicField(this, "paperSize", (styles) => {
      return `@media print { @page { size: ${styles.paper}; } }`;
    });
  }
  /**
   * Inject CSS that controlled by the toolbar into the document.
   *
   * @param styles Resume styles
   * @param id Element ID of the corresponding resume element (dashboard). If not
   * provided, it will be set to "preview", which is the preview view in the editor.
   */
  injectToolbar(styles, id) {
    const selector = this._selector(id);
    const css = this.fontFamily(selector, styles) + this.fontSize(selector, styles) + this.themeColor(selector, styles) + this.paragraphSpace(selector, styles) + this.lineHeight(selector, styles) + // We only need to set paper size for the preview view in the editor
    (id === void 0 ? this.paperSize(styles) : "");
    injectCss(this._injectedCssId("toolbar", id), css);
  }
  /**
   * Inject CSS that controlled by the CSS editor into the document.
   *
   * @param css CSS string
   * @param id Element ID of the corresponding resume element (dashboard). If not
   * provided, it will be set to "preview", which is the preview view in the editor.
   */
  injectCssEditor(css, id) {
    if (id !== void 0) {
      css = css.replaceAll(RENDER.PREVIEW_SELECTOR, this._selector(id));
    }
    injectCss(this._injectedCssId("css-editor", id), css);
  }
}
const dynamicCssService = new DynamicCssService();
const useDataStore = defineStore("data", () => {
  const { DEFAULT } = useConstant();
  const data = reactive({
    markdown: "",
    css: "",
    resumeId: null,
    resumeName: DEFAULT.RESUME_NAME,
    loaded: false
  });
  const setData = (key, value) => {
    data[key] = value;
    if (key === "css")
      dynamicCssService.injectCssEditor(value);
  };
  const setAndSyncToMonaco = (key, value) => {
    setData(key, value);
    const { setContent } = useMonaco();
    setContent(key, value);
  };
  return {
    data,
    setData,
    setAndSyncToMonaco
  };
});
var _stylesheetId = (fontId) => `font-${fontId}`;
var hasStylesheet = (fontId) => (void 0).getElementById(_stylesheetId(fontId)) !== null;
var createStylesheet = (fontId, styles) => {
  const stylesheet = (void 0).createElement("style");
  stylesheet.id = _stylesheetId(fontId);
  stylesheet.textContent = styles;
  (void 0).head.appendChild(stylesheet);
};
var GOOGLE_FONTS_API = "https://www.googleapis.com/webfonts/v1/webfonts";
var GOOGLE_FONTS_CSS = "https://fonts.googleapis.com/css";
var get = (url) => new Promise((resolve, reject) => {
  const request = new (void 0)();
  request.overrideMimeType("application/json");
  request.open("GET", url, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status !== 200) {
        reject(new Error(`Response has status code ${request.status}`));
      } else {
        resolve(request.responseText);
      }
    }
  };
  request.send();
});
var getFontStylesheet = async (fonts, subsets, variants) => {
  const url = new URL(GOOGLE_FONTS_CSS);
  const variantsStr = variants.join(",");
  const familiesStr = fonts.map((font) => `${font.family}:${variantsStr}`);
  url.searchParams.append("family", familiesStr.join("|"));
  url.searchParams.append("subset", subsets.join(","));
  url.searchParams.append("font-display", "swap");
  return get(url.href);
};
var getFontId = (fontFamily) => fontFamily.replace(/\s+/g, "-").toLowerCase();
var fetchFontList = async (apiKey) => {
  const url = new URL(GOOGLE_FONTS_API);
  url.searchParams.append("sort", "popularity");
  url.searchParams.append("key", apiKey);
  const response = await get(url.href);
  const fonts = JSON.parse(response).items;
  return fonts.map((font) => ({
    ...font,
    id: getFontId(font.family)
  }));
};
var loadFontStylesheet = async (font, subsets, variants) => {
  if (!hasStylesheet(font.id)) {
    const fontStyle = await getFontStylesheet([font], subsets, variants);
    createStylesheet(font.id, fontStyle);
  }
};
var GoogleFontsLoader = class {
  // Map from font families to font objects
  constructor(apiKey, {
    families = [],
    categories = [],
    subsets = ["latin"],
    variants = ["regular"],
    filter = () => true,
    limit = -1,
    sort = "alphabet"
  } = {}, onChange = () => {
  }) {
    __publicField(this, "apiKey");
    __publicField(this, "options");
    __publicField(this, "activeFontFamily");
    __publicField(this, "onChange");
    __publicField(this, "fontMap", /* @__PURE__ */ new Map());
    this.apiKey = apiKey;
    this.options = {
      families,
      categories,
      subsets,
      variants,
      filter,
      limit,
      sort
    };
    this.onChange = onChange;
    this.activeFontFamily = "";
  }
  async init() {
    const fonts = await fetchFontList(this.apiKey);
    const isFontIncluded = (font) => (
      // Only keep fonts whose names are included in the provided array
      (this.options.families.length === 0 || this.options.families.includes(font.family)) && // Only keep fonts in categories from the provided array
      (this.options.categories.length === 0 || this.options.categories.includes(font.category)) && // Only keep fonts which are available in all specified subsets
      this.options.subsets.every((subset) => font.subsets.includes(subset)) && // Only keep fonts which contain all specified variants
      this.options.variants.every((variant) => font.variants.includes(variant)) && // Only keep fonts for which the `filter` function evaluates to `true`
      this.options.filter(font) === true
    );
    for (const font of fonts) {
      if (this.options.limit >= 0 && this.fontMap.size >= this.options.limit)
        break;
      if (isFontIncluded(font))
        this.fontMap.set(font.family, font);
    }
    if (this.options.sort === "alphabet") {
      this.fontMap = new Map(
        [...this.fontMap.entries()].sort(
          ([family1], [family2]) => family1.localeCompare(family2)
        )
      );
    }
    return this.fontMap;
  }
  getFontMap() {
    return this.fontMap;
  }
  getActiveFont() {
    const activeFont = this.fontMap.get(this.activeFontFamily);
    if (!activeFont) {
      throw Error(
        `Cannot get active font: "${this.activeFontFamily}" is not in the font list`
      );
    } else {
      return activeFont;
    }
  }
  /**
   * Set the specified font as the active font and download it
   */
  async setActiveFont(fontFamily) {
    const activeFont = this.fontMap.get(fontFamily);
    if (!activeFont) {
      throw Error(`Cannot update active font: "${fontFamily}" is not in the font list`);
    }
    this.activeFontFamily = fontFamily;
    await loadFontStylesheet(activeFont, this.options.subsets, this.options.variants);
    this.onChange(activeFont);
  }
  setOnChange(onChange) {
    this.onChange = onChange;
  }
};
var src_default$3 = GoogleFontsLoader;
const { FONT } = useConstant();
class GoogleFontsService {
  constructor() {
    __publicField(this, "_loader");
    __publicField(this, "includes", (font) => !FONT.LOCAL.includes(font));
    __publicField(this, "isCJK", (font) => FONT.GF.CJK_SUBSETS.some((subset) => font.subsets.includes(subset)));
    this._loader = null;
  }
  /**
   * Load Google Fonts, if not already loaded
   * @returns GoogleFontsLoader instance if successful, null otherwise
   */
  async loader() {
    const config = useRuntimeConfig();
    const key = config.public.googleFontsKey;
    if (!this._loader && key !== "") {
      this._loader = new src_default$3(key, {
        variants: ["regular", "700"],
        filter: (font) => !FONT.GF.IGNORE.includes(font.family)
      });
      await this._loader.init();
    }
    return this._loader;
  }
  /**
   * If the font is a Google Font, set it as active and download it
   */
  async resolve(font) {
    if (this.includes(font)) {
      const loader = await this.loader();
      if (loader) {
        await loader.setActiveFont(font.fontFamily || font.name);
      }
    }
  }
  /**
   * Get all available Google Fonts, separated by EN and CJK
   * @returns List of EN and CJK Google Fonts
   */
  async get() {
    const loader = await this.loader();
    const en = [];
    const cjk = [];
    if (loader) {
      const fonts = loader.getFontMap();
      fonts.forEach((font) => {
        this.isCJK(font) ? cjk.push(font) : en.push(font);
      });
    }
    return {
      en,
      cjk
    };
  }
  /**
   * Font monitor, it will notify when the font is loaded
   *
   * @param fonts Font or a list of fonts to monitor
   * @returns A promise, fulfilled when when all the fonts are loaded, or rejected if any
   * of the fonts fail to load
   */
  observer(fonts) {
    const observers = [];
    for (const font of typeof fonts === "string" ? [fonts] : fonts)
      observers.push((void 0).fonts.load(`12px ${font}`));
    return Promise.all(observers);
  }
  /**
   * Notify when the fonts used in the resume styles are loaded
   *
   * @param styles Resume styles
   * @see {@link observer}
   */
  presetObserver(styles) {
    return this.observer([
      styles.fontEN.fontFamily || styles.fontEN.name,
      styles.fontCJK.fontFamily || styles.fontCJK.name
    ]);
  }
}
const googleFontsService = new GoogleFontsService();
var fetchFile = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Request error: ${res.status} ${res.statusText}`);
    }
    return await res.text();
  } catch (error) {
    return Promise.reject(error instanceof Error ? error : new Error(String(error)));
  }
};
var useFileDialog = (accept) => {
  const open = () => {
    return;
  };
  const onChange = (cb) => {
  };
  return {
    open,
    onChange
  };
};
var readFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsText(file);
  });
};
var downloadFile = (filename, content) => {
  const element = (void 0).createElement("a");
  element.href = "data:text/plain;charset=utf-8," + encodeURIComponent(content);
  element.download = filename;
  element.style.display = "none";
  (void 0).body.appendChild(element);
  element.click();
  (void 0).body.removeChild(element);
};
var isObject = (v) => toString.call(v) === "[object Object]";
var isInteger = (v, { allowString = false } = {}) => {
  return typeof v === "number" ? Number.isInteger(v) : allowString && typeof v === "string" && Number.isInteger(Number(v));
};
var htmlEscape = (str) => {
  const escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  };
  return str.replace(/[&<>'"]/g, (char) => escapeMap[char]);
};
var copy = (obj) => {
  if (isObject(obj))
    return JSON.parse(JSON.stringify(obj));
  throw new Error("Input must be a non-null object.");
};
var now = () => Date.now();
var arrayify = (value) => Array.isArray(value) ? value : [value];
const useStyleStore = defineStore("style", () => {
  const { DEFAULT } = useConstant();
  const styles = reactive(copy(DEFAULT.STYLES));
  const setStyle = async (key, value) => {
    if (["fontCJK", "fontEN"].includes(key)) {
      await googleFontsService.resolve(value);
    }
    styles[key] = value;
    if (!["marginV", "marginH"].includes(key))
      dynamicCssService.injectToolbar(styles);
  };
  return {
    styles,
    setStyle
  };
});
const useMonacoState = () => useState("monacoStates", shallowRef);
const useMonaco = () => {
  const states = useMonacoState();
  const loading = useState("monacoLoading", () => false);
  const setup = async (container) => {
    return;
  };
  const dispose = () => {
    var _a, _b, _c;
    (_a = states.value) == null ? void 0 : _a.editor.dispose();
    (_b = states.value) == null ? void 0 : _b.markdown.dispose();
    (_c = states.value) == null ? void 0 : _c.css.dispose();
    states.value = void 0;
    loading.value = false;
  };
  const activateModel = (model) => {
    var _a;
    (_a = states.value) == null ? void 0 : _a.editor.setModel(states.value[model].get());
  };
  const setContent = (model, content) => {
    var _a;
    (_a = states.value) == null ? void 0 : _a[model].get().setValue(content);
  };
  return {
    setup,
    dispose,
    activateModel,
    setContent,
    loading
  };
};
const useToast = () => {
  const {
    $i18n: { t }
  } = useNuxtApp();
  const save = () => {
    toast.success(t("notification.save"));
  };
  const onSwitch = (msg) => {
    toast.info(t("notification.switch", { msg }));
  };
  const onDelete = (msg) => {
    toast.error(t("notification.delete", { msg }));
  };
  const onNew = () => {
    toast.success(t("notification.new"));
  };
  const duplicate = (msg) => {
    toast.success(
      t("notification.duplicate", {
        old: msg,
        new: msg + " Copy"
      })
    );
  };
  const correct = (msg) => {
    if (msg == null ? void 0 : msg.length) {
      const groups = msg.reduce((acc, { from, to }) => {
        var _a;
        const key = `${from} \u2192 ${to}`;
        acc[key] = ((_a = acc[key]) != null ? _a : 0) + 1;
        return acc;
      }, {});
      const description = Object.entries(groups).map(([key, count]) => `${key}${count > 1 ? ` (x${count})` : ""}`).join(", ");
      toast.success(t("notification.correct.yes", { num: msg.length }), {
        description
      });
    } else {
      toast.info(t("notification.correct.no"));
    }
  };
  const onImport = (msg) => {
    if (msg) {
      toast.success(t("notification.import.yes"));
    } else {
      toast.error(t("notification.import.no"));
    }
  };
  return {
    save,
    switch: onSwitch,
    delete: onDelete,
    new: onNew,
    duplicate,
    correct,
    import: onImport
  };
};
const setResumeStyles = async (styles) => {
  const { setStyle } = useStyleStore();
  for (const [key, value] of Object.entries(styles)) {
    await setStyle(key, value);
  }
};
const setResume = async (data) => {
  const { setData } = useDataStore();
  setData("resumeId", data.id);
  setData("resumeName", data.name);
  setData("markdown", data.markdown);
  setData("css", data.css);
  await setResumeStyles(data.styles);
};
const _checkType = (value, required) => {
  return arrayify(required).includes(typeof value);
};
const _getNestedValue = (object, path) => {
  return path.split(".").reduce((o, p) => o ? o[p] : void 0, object);
};
const _checkObject = (obj, fields) => {
  return fields.every(
    ({ fields: fields2, types }) => arrayify(fields2).every((field) => _checkType(_getNestedValue(obj, field), types))
  );
};
class IsValid {
  static importedJson(json) {
    const { VERSION } = useConstant();
    if (!isObject(json))
      return false;
    if (this.importedData(json.data, json.version)) {
      return json;
    } else if (this.importedData(json, VERSION.EMPTY_FALLBACK)) {
      return {
        data: json,
        version: VERSION.EMPTY_FALLBACK
      };
    }
    return false;
  }
}
__publicField(IsValid, "font", (font) => isObject(font) && typeof font.name === "string" && ["string", "undefined"].includes(typeof font.fontFamily));
__publicField(IsValid, "importedData", (data, version) => {
  const { VERSION } = useConstant();
  return (
    // Check version
    typeof version === "string" && VERSION.isVersionValid(version) && // Check data
    isObject(data) && Object.entries(data).every(
      ([id, item]) => isInteger(id, { allowString: true }) && _checkObject(item, VERSION.REQUIRED_DATA_TYPES[version])
    )
  );
});
class MigrateService {
  constructor(fromVersion) {
    __publicField(this, "_from");
    __publicField(this, "_to");
    __publicField(this, "_return", (data) => ({
      from: this._from,
      to: this._to,
      data
    }));
    const { VERSION } = useConstant();
    this._from = fromVersion != null ? fromVersion : VERSION.EMPTY_FALLBACK;
    this._to = VERSION.CURRENT;
  }
  async migrate(storage) {
    switch (this._from) {
      case this._to:
        return this._return(storage);
      case "v0":
        return this.fromV0(storage);
      default:
        throw new Error(`Migration from version ${this._from} is not supported`);
    }
  }
  async fromV0(storage) {
    const newStorage = {};
    const _migrateCss = (css) => css.replace(
      /#vue-smart-pages-preview\s+ul\.crossref-list\s*{/g,
      `#resume-preview [data-scope="cross-ref"][data-part="definitions"] {`
    ).replace(
      /#vue-smart-pages-preview\s+li\.crossref-item\s+p\s*{/g,
      `#resume-preview [data-scope="cross-ref"][data-part="definition"] p {`
    ).replace(
      /(#vue-smart-pages-preview\s+li\.crossref-item::marker\s*{[^}]*})/g,
      (match) => match.replace(
        /content:\s*attr\(\s*data-caption\s*\)\s*;/g,
        "content: attr(data-label);"
      )
    ).replace(
      /#vue-smart-pages-preview\s+li\.crossref-item::marker\s*{/g,
      `#resume-preview [data-scope="cross-ref"][data-part="definition"]::marker {`
    ).replace(
      /#vue-smart-pages-preview\s+sup\.crossref-ref\s*{/g,
      `#resume-preview [data-scope="cross-ref"][data-part="reference"] {`
    ).replace(
      /\.dark\s+#vue-smart-pages-preview\s*{\s*background-color:\s*#334155\s*;\s*color:\s*#e5e7eb\s*;\s*}/,
      `.dark #resume-preview [data-scope="vue-smart-pages"][data-part="page"] {
  background-color: hsl(213, 12%, 15%);
  color: hsl(216, 12%, 84%);
}`
    ).replace(/\s+\.dark\s+#vue-smart-pages-preview\s+a\s*{[^}]*}/g, "").replace(
      /#vue-smart-pages-preview\s*{/g,
      `#resume-preview [data-scope="vue-smart-pages"][data-part="page"] {`
    ).replace(/#vue-smart-pages-preview/g, "#resume-preview");
    Object.entries(storage).forEach(([id, data]) => {
      const { update, ...rest } = data;
      newStorage[id] = {
        ...rest,
        created_at: id,
        updated_at: update != null ? update : id
      };
      const newCss = _migrateCss(newStorage[id].css);
      if (newCss !== newStorage[id].css) {
        console.log(`Migration: CSS updated for resume ${id}.`);
        newStorage[id].css = newCss;
      }
    });
    return this._return(newStorage);
  }
}
class LocalForageDbService {
  constructor() {
    __publicField(this, "_key", "ohmycv_data");
    __publicField(this, "_storageError", () => ({
      data: null,
      error: {
        message: "Error occurred while accessing local storage."
      }
    }));
    __publicField(this, "_notFoundError", (id) => ({
      data: null,
      error: {
        message: `Resume ${id} not found.`
      }
    }));
    __publicField(this, "_success", (data) => ({
      data,
      error: null
    }));
  }
  /**
   * Get the storage object. Note that this method will return an empty object
   * instead of null if the storage is empty. While a null return value indicates
   * an error occurred while accessing the storage.
   *
   * @returns Storage object or null if an error occurred
   */
  async _storage() {
    return null;
  }
  async _setItems(storage) {
    await localForage.setItem(this._key, storage);
  }
  /**
   * Check if the resume exists in the storage
   *
   * @param id
   * @param allowNotExist If true, will not return error if the resume does not exist
   *
   * @returns Error if the storage is not available or the resume does not exist,
   *         otherwise the whole storage object
   */
  async _getStorageIfIdExists(id, allowNotExist = false) {
    const storage = await this._storage();
    if (!storage)
      return this._storageError();
    if (!storage[id])
      return allowNotExist ? this._success(null) : this._notFoundError(id);
    return this._success(storage);
  }
  async queryAll() {
    const storage = await this._storage();
    if (!storage)
      return this._storageError();
    const data = Object.entries(storage).map(([id, data2]) => ({ id: Number(id), ...data2 })).sort(
      (a, b) => b.updated_at.localeCompare(a.updated_at) || b.created_at.localeCompare(a.created_at)
    );
    return this._success(data);
  }
  async queryById(id) {
    const res = await this._getStorageIfIdExists(id, true);
    if (!res.data)
      return res;
    else
      return this._success({ id, ...res.data[id] });
  }
  async update(data, newUpdateTime) {
    const res = await this._getStorageIfIdExists(data.id);
    if (res.error)
      return res;
    const storage = res.data;
    const { id, ...updatedResume } = {
      ...storage[data.id],
      ...data,
      updated_at: newUpdateTime ? now().toString() : storage[data.id].updated_at
    };
    storage[id] = updatedResume;
    await this._setItems(storage);
    return this._success({ id, ...updatedResume });
  }
  async create(data) {
    const storage = await this._storage();
    if (!storage)
      return this._storageError();
    if ("id" in data && storage[data.id]) {
      return {
        data: null,
        error: {
          message: `Resume ${data.id} already exists.`
        }
      };
    }
    const _now = now();
    const createdData = {
      updated_at: _now.toString(),
      created_at: _now.toString(),
      id: _now,
      ...data
    };
    const { id, ...resume } = createdData;
    storage[id] = resume;
    await this._setItems(storage);
    return this._success(createdData);
  }
  async delete(id) {
    const res = await this._getStorageIfIdExists(id);
    if (res.error)
      return res;
    const storage = res.data;
    const deleted = copy(storage[id]);
    delete storage[id];
    await this._setItems(storage);
    return this._success({ id, ...deleted });
  }
}
const AVAILABLE_SERVICES = {
  localForage: new LocalForageDbService()
  // TODO: Support PGlite: https://github.com/electric-sql/pglite
};
class StorageService {
  constructor(service) {
    __publicField(this, "_db");
    __publicField(this, "_version");
    const { VERSION } = useConstant();
    this._version = VERSION.CURRENT;
    this._db = AVAILABLE_SERVICES[service];
  }
  _createEmptyResume() {
    const { DEFAULT } = useConstant();
    return {
      name: DEFAULT.RESUME_NAME,
      markdown: DEFAULT.MD_CONTENT,
      css: DEFAULT.CSS_CONTENT,
      styles: DEFAULT.STYLES
    };
  }
  async getResumes() {
    const { data, error } = await this._db.queryAll();
    if (error) {
      console.error("Get resumes error:", error.message);
    }
    return data != null ? data : [];
  }
  async updateResume(data, newUpdateTime = true) {
    const { data: updatedData, error } = await this._db.update(data, newUpdateTime);
    if (error) {
      console.error("Update error:", error.message);
    } else {
      const toast2 = useToast();
      toast2.save();
    }
    return updatedData;
  }
  async createResume() {
    const { data, error } = await this._db.create(this._createEmptyResume());
    if (error) {
      console.error("Create error:", error.message);
    } else {
      const toast2 = useToast();
      toast2.new();
    }
    return data;
  }
  async deleteResume(id) {
    const { data, error } = await this._db.delete(id);
    if (error) {
      console.error("Delete error:", error.message);
    } else {
      const toast2 = useToast();
      toast2.delete(data.name);
    }
    return data;
  }
  async switchToResume(id) {
    const { setData } = useDataStore();
    setData("loaded", false);
    const { data, error } = await this._db.queryById(id);
    if (error) {
      console.error("Switch error:", error.message);
    } else if (!data) {
      console.error(`Switch error: Resume ${id} not found.`);
    } else {
      await setResume(data);
      const toast2 = useToast();
      toast2.switch(data.name);
      setData("loaded", true);
    }
    return data;
  }
  async duplicateResume(id) {
    const { data, error } = await this._db.queryById(id);
    if (error) {
      console.error("Duplicate error:", error.message);
    } else if (!data) {
      console.error(`Switch error: Resume ${id} not found.`);
    } else {
      const { id: id2, updated_at, created_at, ...duplicated } = data;
      const { data: duplicatedData, error: createError2 } = await this._db.create({
        ...duplicated,
        name: duplicated.name + " Copy"
      });
      if (createError2) {
        console.error("Duplicate error:", createError2.message);
      } else {
        const toast2 = useToast();
        toast2.duplicate(duplicatedData.name);
      }
    }
  }
  async exportToJSON() {
    const data = (await this.getResumes()).reduce((acc, { id, ...resume }) => {
      acc[id] = resume;
      return acc;
    }, {});
    const json = {
      version: this._version,
      data
    };
    downloadFile("ohmycv_data.json", JSON.stringify(json));
  }
  /**
   * Check the validity of and import JSON data
   *
   * TODO: handle migration if needed
   *
   * @param content JSON string
   */
  async importFromJson(content) {
    const toast2 = useToast();
    const json = (() => {
      try {
        return JSON.parse(content);
      } catch (error) {
        return null;
      }
    })();
    const res = IsValid.importedJson(json);
    if (!res) {
      console.error("Import error: Invalid data.");
      toast2.import(false);
      return;
    }
    const migrateService = new MigrateService(res.version);
    const { data } = await migrateService.migrate(res.data);
    for (const [_id, resume] of Object.entries(data)) {
      const id = Number(_id);
      const { data: data2, error } = await this._db.queryById(id);
      if (error) {
        console.error("Import error: Storage error.");
        break;
      }
      if (data2) {
        await this._db.update({ id, ...resume }, false);
      } else {
        await this._db.create({ id, ...resume });
      }
    }
    toast2.import(true);
  }
}
const storageService = new StorageService("localForage");
var useShortcuts = (keys, cb) => {
  const adjustedKeys = keys.replace("ctrl", "ctrl").split("+");
  const magic = useMagicKeys({
    passive: false,
    onEventFired: (e) => {
      if (e.type !== "keydown")
        return;
      const isKeyActive = (key) => {
        switch (key) {
          case "ctrl":
            return e.ctrlKey;
          case "meta":
            return e.metaKey;
          case "shift":
            return e.shiftKey;
          default:
            return e.key === key;
        }
      };
      if (adjustedKeys.every(isKeyActive))
        e.preventDefault();
    }
  });
  const shortcuts = magic[adjustedKeys.join("+")];
  const { current } = magic;
  watch(shortcuts, (v) => {
    if (v && current.size === adjustedKeys.length)
      cb();
  });
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Editable",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    modelValue: {},
    placeholder: {},
    dir: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    activationMode: {},
    selectOnFocus: { type: Boolean },
    submitMode: {},
    startWithEditMode: { type: Boolean },
    maxLength: {},
    autoResize: { type: Boolean },
    id: {},
    name: {},
    required: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "submit", "update:state"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EditableRoot = EditableRoot;
      const _component_EditableArea = EditableArea;
      const _component_EditablePreview = EditablePreview;
      const _component_EditableInput = EditableInput;
      const _component_UiButton = _sfc_main$g;
      _push(ssrRenderComponent(_component_EditableRoot, mergeProps(unref(forwarded), _attrs), {
        default: withCtx(({ isEditing }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_EditableArea, { class: "w-full" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_EditablePreview, { class: "cursor-pointer" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_EditableInput, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_EditablePreview, { class: "cursor-pointer" }),
                    createVNode(_component_EditableInput)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            if (isEditing) {
              _push2(`<div class="flex gap-1 mt-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiButton, {
                as: unref(EditableSubmitTrigger),
                size: "xs",
                class: "flex-1 rounded hover:ring-none",
                "aria-label": "Submit"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span i-material-symbols-check-rounded size-4${_scopeId2}></span>`);
                  } else {
                    return [
                      createVNode("span", {
                        "i-material-symbols-check-rounded": "",
                        "size-4": ""
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiButton, {
                as: unref(EditableCancelTrigger),
                variant: "secondary",
                size: "xs",
                class: "flex-1 rounded",
                "aria-label": "Cancel"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span i-material-symbols-close-rounded size-4${_scopeId2}></span>`);
                  } else {
                    return [
                      createVNode("span", {
                        "i-material-symbols-close-rounded": "",
                        "size-4": ""
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_EditableArea, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_EditablePreview, { class: "cursor-pointer" }),
                  createVNode(_component_EditableInput)
                ]),
                _: 1
              }),
              isEditing ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex gap-1 mt-1"
              }, [
                createVNode(_component_UiButton, {
                  as: unref(EditableSubmitTrigger),
                  size: "xs",
                  class: "flex-1 rounded hover:ring-none",
                  "aria-label": "Submit"
                }, {
                  default: withCtx(() => [
                    createVNode("span", {
                      "i-material-symbols-check-rounded": "",
                      "size-4": ""
                    })
                  ]),
                  _: 1
                }, 8, ["as"]),
                createVNode(_component_UiButton, {
                  as: unref(EditableCancelTrigger),
                  variant: "secondary",
                  size: "xs",
                  class: "flex-1 rounded",
                  "aria-label": "Cancel"
                }, {
                  default: withCtx(() => [
                    createVNode("span", {
                      "i-material-symbols-close-rounded": "",
                      "size-4": ""
                    })
                  ]),
                  _: 1
                }, 8, ["as"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/ui/Editable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var isValidDelim = (state, pos) => {
  const prevChar = pos > 0 ? state.src.charCodeAt(pos - 1) : -1;
  const nextChar = pos + 1 <= state.posMax ? state.src.charCodeAt(pos + 1) : -1;
  const isWhitespace = (char) => char === 32 || char === 9;
  const isDigit = (char) => char >= 48 && char <= 57;
  const canOpen = !isWhitespace(nextChar);
  const canClose = !isWhitespace(prevChar) && !isDigit(nextChar);
  return { canOpen, canClose };
};
var mathInline = (state, silent) => {
  if (state.src[state.pos] !== "$")
    return false;
  const res = isValidDelim(state, state.pos);
  if (!res.canOpen) {
    if (!silent)
      state.pending += "$";
    state.pos += 1;
    return true;
  }
  const start = state.pos + 1;
  let match = start;
  while ((match = state.src.indexOf("$", match)) !== -1) {
    let pos = match - 1;
    while (state.src[pos] === "\\")
      pos -= 1;
    if ((match - pos) % 2 === 1)
      break;
    match += 1;
  }
  if (match === -1) {
    if (!silent)
      state.pending += "$";
    state.pos = start;
    return true;
  }
  if (match - start === 0) {
    if (!silent)
      state.pending += "$$";
    state.pos = start + 1;
    return true;
  }
  const closeDelim = isValidDelim(state, match);
  if (!closeDelim.canClose) {
    if (!silent)
      state.pending += "$";
    state.pos = start;
    return true;
  }
  if (!silent) {
    const token = state.push("mathInline", "math", 0);
    token.markup = "$";
    token.content = state.src.slice(start, match);
  }
  state.pos = match + 1;
  return true;
};
var mathBlock = (state, start, end, silent) => {
  let pos = state.bMarks[start] + state.tShift[start];
  const max = state.eMarks[start];
  if (pos + 2 > max || state.src.slice(pos, pos + 2) !== "$$")
    return false;
  pos += 2;
  let firstLine = state.src.slice(pos, max);
  if (silent)
    return true;
  let found = firstLine.trim().endsWith("$$");
  if (found)
    firstLine = firstLine.trim().slice(0, -2);
  let next = start;
  let lastLine = "";
  while (!found) {
    next += 1;
    if (next >= end)
      break;
    pos = state.bMarks[next] + state.tShift[next];
    const lineMax = state.eMarks[next];
    if (pos < lineMax && state.tShift[next] < state.blkIndent)
      break;
    const trimmedLine = state.src.slice(pos, lineMax).trim();
    if (trimmedLine.endsWith("$$")) {
      lastLine = trimmedLine.slice(0, -2);
      found = true;
    }
  }
  state.line = next + 1;
  const token = state.push("mathBlock", "math", 0);
  token.block = true;
  token.content = (firstLine.trim() ? `${firstLine}
` : "") + state.getLines(start + 1, next, state.tShift[start], true) + (lastLine.trim() ? lastLine : "");
  token.map = [start, state.line];
  token.markup = "$$";
  return true;
};
var MarkdownItKatex = (md, options = { throwOnError: false }) => {
  const renderKatex = (tex, options2, displayMode) => {
    options2.displayMode = displayMode;
    try {
      return displayMode ? `<p>${Katex.renderToString(tex, options2)}</p>
` : Katex.renderToString(tex, options2);
    } catch (error) {
      if (options2.throwOnError)
        console.warn(error);
      const errorMsg = htmlEscape(error.toString());
      const escapedTex = htmlEscape(tex);
      return displayMode ? `<p class='katex-error' title='${errorMsg}'>${escapedTex}</p>
` : `<span title='${errorMsg}'>${escapedTex}</span>`;
    }
  };
  md.inline.ruler.after("escape", "mathInline", mathInline);
  md.block.ruler.after("blockquote", "mathBlock", mathBlock, {
    alt: ["paragraph", "reference", "blockquote", "list"]
  });
  md.renderer.rules.mathInline = (tokens, idx) => renderKatex(tokens[idx].content, options, false);
  md.renderer.rules.mathBlock = (tokens, idx) => renderKatex(tokens[idx].content, options, true);
};
var src_default$2 = MarkdownItKatex;
var _anchorId = (tokens, idx) => Number(tokens[idx].meta.id + 1).toString();
var _anchorLabel = (tokens, idx) => tokens[idx].meta.label;
var _isOpen = (state, start) => {
  return state.src.charCodeAt(start) === 91 && state.src.charCodeAt(start + 1) === 126;
};
var _isClose = (state, pos) => {
  return state.src.charCodeAt(pos) === 93;
};
var _extractLabel = (state, start, end) => {
  return state.src.slice(start, end);
};
var render = (type) => (tokens, idx) => {
  const id = `cross-ref-${_anchorId(tokens, idx)}`;
  const label = _anchorLabel(tokens, idx);
  return type === "ref" ? `<sup data-scope="cross-ref" data-part="reference"><a data-scope="cross-ref" data-part="link" href="#${id}" id="${id}">${label}</a></sup>` : `<ul data-scope="cross-ref" data-part="definitions"><li id="${id}" data-scope="cross-ref" data-part="definition" data-label="${label}">`;
};
var _processDefToken = (state, startLine, endLine, pos, label) => {
  var _a2, _b2;
  var _a, _b;
  (_a2 = (_a = state.env).crossRef) != null ? _a2 : _a.crossRef = {};
  (_b2 = (_b = state.env.crossRef).labelToId) != null ? _b2 : _b.labelToId = {};
  state.env.crossRef.labelToId[label] = -1;
  const openToken = new state.Token("renderDefOpen", "", 1);
  openToken.meta = { label };
  openToken.level = state.level++;
  state.tokens.push(openToken);
  const bMarks = state.bMarks[startLine];
  const tShift = state.tShift[startLine];
  const sCount = state.sCount[startLine];
  const posAfterColon = pos;
  const initial = sCount + pos - (bMarks + tShift);
  let offset = initial;
  while (pos < state.eMarks[startLine]) {
    const ch = state.src.charCodeAt(pos);
    if (state.md.utils.isSpace(ch)) {
      offset += ch === 9 ? 4 - offset % 4 : 1;
    } else {
      break;
    }
    pos++;
  }
  state.tShift[startLine] = pos - posAfterColon;
  state.sCount[startLine] = offset - initial;
  state.bMarks[startLine] = posAfterColon;
  state.blkIndent += 4;
  if (state.sCount[startLine] < state.blkIndent)
    state.sCount[startLine] += state.blkIndent;
  state.md.block.tokenize(state, startLine, endLine);
  state.blkIndent -= 4;
  state.tShift[startLine] = tShift;
  state.sCount[startLine] = sCount;
  state.bMarks[startLine] = bMarks;
  const closeToken = new state.Token("renderDefClose", "", -1);
  closeToken.level = --state.level;
  state.tokens.push(closeToken);
};
var processDef = (state, startLine, endLine, silent) => {
  const start = state.bMarks[startLine] + state.tShift[startLine];
  const max = state.eMarks[startLine];
  if (start + 4 > max || !_isOpen(state, start))
    return false;
  let pos = start + 2;
  while (pos < max && !_isClose(state, pos))
    pos++;
  if (pos === start + 2)
    return false;
  if (pos + 1 >= max || state.src.charCodeAt(pos + 1) !== 58)
    return false;
  if (silent)
    return true;
  const label = _extractLabel(state, start + 2, pos);
  _processDefToken(state, startLine, endLine, pos + 2, label);
  return true;
};
var processRef = (state, silent) => {
  var _a2;
  var _a, _b;
  if (!((_a = state.env.crossRef) == null ? void 0 : _a.labelToId))
    return false;
  if (state.pos + 3 > state.posMax || !_isOpen(state, state.pos))
    return false;
  let pos = state.pos + 2;
  while (pos < state.posMax && !_isClose(state, pos))
    pos++;
  if (pos === state.pos + 2 || pos >= state.posMax)
    return false;
  const label = _extractLabel(state, state.pos + 2, pos);
  if (state.env.crossRef.labelToId[label] === void 0)
    return false;
  if (!silent) {
    (_a2 = (_b = state.env.crossRef).list) != null ? _a2 : _b.list = [];
    const id = state.env.crossRef.labelToId[label] === -1 ? state.env.crossRef.list.push(label) - 1 : state.env.crossRef.labelToId[label];
    state.env.crossRef.labelToId[label] = id;
    const token = state.push("renderRef", "", 0);
    token.meta = { id, label };
  }
  state.pos = pos + 1;
  return true;
};
var postProcessDef = (state) => {
  var _a2;
  var _a, _b;
  for (const token of state.tokens) {
    if (token.type === "renderDefOpen") {
      token.meta = {
        ...token.meta,
        id: (_a2 = (_b = (_a = state.env.crossRef) == null ? void 0 : _a.labelToId) == null ? void 0 : _b[token.meta.label]) != null ? _a2 : -1
      };
    }
  }
};
var MarkdownItCrossRef = (md) => {
  md.renderer.rules.renderRef = render("ref");
  md.renderer.rules.renderDefOpen = render("defOpen");
  md.renderer.rules.renderDefClose = () => "</li>\n</ul>\n";
  md.block.ruler.before("reference", "processDef", processDef, {
    alt: ["paragraph", "reference"]
  });
  md.inline.ruler.after("image", "processRef", processRef);
  md.core.ruler.after("inline", "postProcessDef", postProcessDef);
};
var src_default$1 = MarkdownItCrossRef;
var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
var renderNewPage = () => `<div class="md-it-newpage"></div>`;
var renderLineBreak = (tokens, idx) => `<div class="md-it-line-break" style="margin-top:${tokens[idx].meta.h};"></div>`;
var checkPattern = (state, start, pattern, options = {}) => {
  const { minLength = pattern.length, silent = false } = options;
  const pos = state.bMarks[start] + state.tShift[start];
  const max = state.eMarks[start];
  if (silent)
    return false;
  if (pos + minLength > max)
    return false;
  if (state.src.slice(pos, pos + pattern.length) !== pattern)
    return false;
  return {
    pos,
    max
  };
};
var newPage = (state, start, end, silent) => {
  if (!checkPattern(state, start, "\\newpage", { silent }))
    return false;
  state.line = start + 1;
  const token = state.push("renderNewPage", "", 0);
  token.block = true;
  token.map = [start, state.line];
  token.markup = "\\newpage";
  return true;
};
var lineBreak = (state, start, end, silent) => {
  const res = checkPattern(state, start, "\\\\[", {
    minLength: 5,
    // Should be at least "\\[x]"
    silent
  });
  if (!res)
    return false;
  const { pos, max } = res;
  let lastPos = pos + 4;
  while (lastPos < max && state.src[lastPos] !== "]")
    lastPos++;
  if (lastPos >= max)
    return false;
  const height = state.src.slice(pos + 3, lastPos);
  if (height.match(/(^|[^\\])(\\\\)*\s/))
    return false;
  state.line = start + 1;
  const token = state.push("renderLineBreak", "", 0);
  token.meta = { h: height.replace(UNESCAPE_RE, "$1") };
  token.block = true;
  token.map = [start, state.line];
  token.markup = "\\[]";
  return true;
};
var MarkdownItLatexCmds = (md) => {
  md.renderer.rules.renderNewPage = renderNewPage;
  md.renderer.rules.renderLineBreak = renderLineBreak;
  md.block.ruler.after("blockquote", "newPage", newPage);
  md.block.ruler.after("newPage", "lineBreak", lineBreak);
};
var src_default = MarkdownItLatexCmds;
var OPTIONAL_BYTE_ORDER_MARK = "\\ufeff?";
var PLATFORM = typeof process !== "undefined" ? process.platform : "";
var PATTERN = "^(" + OPTIONAL_BYTE_ORDER_MARK + "(= yaml =|---)$([\\s\\S]*?)^(?:\\2|\\.\\.\\.)\\s*$" + (PLATFORM === "win32" ? "\\r?" : "") + "(?:\\n)?)";
var FrontMatterParser = class {
  constructor(options = {}) {
    __publicField(this, "options");
    __publicField(this, "_lastFrontMatter", {});
    __publicField(this, "_emptyResults", (body) => ({
      frontMatter: {},
      body,
      bodyBegin: 1
    }));
    this.options = options;
    this.options.errorBehavior = options.errorBehavior || "error";
  }
  /**
   * Get the line number where the body begins.
   */
  _bodyBegin(match, content) {
    const offset = match.index + match[0].length;
    const lines = content.slice(0, offset).split("\n");
    return lines.length;
  }
  /**
   * Split the content into front matter and body.
   *
   * @param content Markdown content, including front matter and body.
   * @returns
   * - `false` if the content does not contain front matter
   * - `{ frontMatterString, body, bodyBegin }` if contains
   * @see {@link FrontMatterResults}
   */
  split(content) {
    const regex = new RegExp(PATTERN, "m");
    const match = regex.exec(content);
    if (!match)
      return false;
    const frontMatterString = match[match.length - 1].trim();
    const body = content.slice(match[0].length);
    const bodyBegin = this._bodyBegin(match, content);
    return {
      frontMatterString,
      body,
      bodyBegin
    };
  }
  _parse(content) {
    const split = this.split(content);
    if (!split)
      return this._emptyResults(content);
    try {
      const frontMatter = yamlParser.load(split.frontMatterString) || {};
      this._lastFrontMatter = frontMatter;
      return { ...split, frontMatter };
    } catch (e) {
      const frontMatter = this.options.errorBehavior === "error" ? (() => {
        throw e;
      })() : this.options.errorBehavior === "last" ? this._lastFrontMatter : {};
      return { ...split, frontMatter };
    }
  }
  /**
   * Extract and parse front matter from a markdown document. A front matter should look like:
   *
   * ```
   * ---
   * key: value
   * ---
   * ```
   *
   * @param content Markdown content, including front matter and body.
   * @returns `{ body, bodyBegin, frontMatter, frontMatterString }`
   * @see {@link FrontMatterResults}
   */
  parse(content) {
    const lines = content.split(/(\r?\n)/);
    if (lines[0] && /= yaml =|---/.test(lines[0])) {
      return this._parse(content);
    } else {
      return this._emptyResults(content);
    }
  }
};
class MarkdownService {
  constructor(opt = {}) {
    __publicField(this, "_md");
    __publicField(this, "_frontMatterParser");
    this._md = this._setupMarkdownIt(opt);
    this._frontMatterParser = new FrontMatterParser({
      errorBehavior: "last"
    });
  }
  _setupMarkdownIt({ plugins = [], options = {} }) {
    const md = new MarkdownIt(options);
    plugins.forEach((plugin) => {
      if (Array.isArray(plugin))
        md.use(...plugin);
      else
        md.use(plugin);
    });
    return md;
  }
  _renderMarkdown(md) {
    return this._md.render(md);
  }
  /**
   * Convert
   *
   *  <dt>...</dt>
   *  <dd>...</dd>
   *  <dt>...</dt>
   *  <dd>...</dd>
   *
   * (this would happen if two deflists are adjacent)
   *
   * to
   *
   * <dl>
   *   <dt>...</dt>
   *   <dd>...</dd>
   * </dl>
   * <dl>
   *   <dt>...</dt>
   *   <dd>...</dd>
   * </dl>
   *
   * @param html HTML string
   * @returns HTML string with resolved deflists
   */
  _resolveDeflist(html) {
    return html.replace(
      /<dl>([\s\S]*?)<\/dl>/g,
      (match) => match.replace(/<\/dd>\n<dt>/g, "</dd>\n</dl>\n<dl>\n<dt>")
    );
  }
  _renderHeaderItem(item, hasSeparator) {
    const content = item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.text}</a>` : item.text;
    const element = `<span class="resume-header-item ${hasSeparator ? "" : "no-separator"}">
      ${content}
    </span>`;
    return item.newLine ? `<br>
${element}` : element;
  }
  renderHeader(frontMatter) {
    var _a;
    const content = [
      frontMatter.name ? `<h1>${frontMatter.name}</h1>
` : "",
      ((_a = frontMatter.header) != null ? _a : []).map(
        (item, i, array) => this._renderHeaderItem(item, i !== array.length - 1 && !array[i + 1].newLine)
      ).join("\n")
    ].join("");
    return `<div class="resume-header">${content}</div>`;
  }
  renderResume(md) {
    const { body, frontMatter } = this._frontMatterParser.parse(md);
    const content = this._resolveDeflist(this._renderMarkdown(body));
    const header = this.renderHeader(frontMatter);
    return header + content;
  }
}
const markdownService = new MarkdownService({
  plugins: [
    MarkdownItDeflist,
    src_default$2,
    src_default$1,
    src_default,
    [
      LinkAttributes,
      {
        matcher: (link) => /^https?:\/\//.test(link),
        attrs: {
          target: "_blank",
          rel: "noopener"
        }
      }
    ]
  ],
  options: {
    html: true
  }
});
var NEW_PAGE_CLASS = "md-it-newpage";
var _elementHeight = (element) => {
  const style = (void 0).getComputedStyle(element);
  const marginTop = parseInt(style.marginTop) || 0;
  const marginBottom = parseInt(style.marginBottom) || 0;
  return element.clientHeight + marginTop + marginBottom;
};
var _createPage = (size, margins) => {
  const page = (void 0).createElement("div");
  page.dataset.scope = "vue-smart-pages";
  page.dataset.part = "page";
  page.style.height = `${size.height}px`;
  setWidthAndMargins(page, size, margins);
  return page;
};
var setWidthAndMargins = (element, size, margins) => {
  element.style.width = `${size.width}mm`;
  element.style.padding = `${margins.top}px ${margins.right}px ${margins.bottom}px ${margins.left}px`;
};
var breakPage = (target, size, margins) => {
  const maxHeight = size.height - margins.top - margins.bottom;
  const pages = (void 0).createElement("div");
  let accHeight = 0;
  let page = _createPage(size, margins);
  Array.from(target.children).forEach((child) => {
    const childHeight = _elementHeight(child);
    if (accHeight + childHeight > maxHeight || child.className === NEW_PAGE_CLASS) {
      pages.appendChild(page);
      accHeight = 0;
      page = _createPage(size, margins);
    }
    page.appendChild(child);
    accHeight += childHeight;
  });
  pages.appendChild(page);
  target.innerHTML = pages.innerHTML;
};
var useSmartPages = (target, html, size, margins = {}, options = {}) => {
  const render2 = async () => {
    const element = unrefElement(target);
    if (!element)
      return;
    const { width, height } = toValue(size);
    const { top = 0, bottom = 0, left = 0, right = 0 } = toValue(margins);
    const _size = { width, height };
    const _margins = { top, bottom, left, right };
    const copy2 = element.cloneNode(true);
    copy2.innerHTML = toValue(html);
    setWidthAndMargins(copy2, _size, _margins);
    (void 0).body.appendChild(copy2);
    if (options.beforeRender)
      await options.beforeRender();
    breakPage(copy2, _size, _margins);
    element.innerHTML = copy2.innerHTML;
    (void 0).body.removeChild(copy2);
    if (options.afterRender)
      await options.afterRender();
  };
  watchThrottled([size, margins, html], render2, options.watchThrottledOptions);
  return { render: render2 };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ResumeRender",
  __ssrInlineRender: true,
  props: {
    id: {},
    markdown: {},
    css: {},
    styles: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const constant = useConstant();
    const target = ref();
    const size = computed(() => ({
      height: constant.PAPER.sizeToPx(props.styles.paper, "h"),
      width: constant.PAPER.SIZES[props.styles.paper].w
    }));
    const margins = computed(() => ({
      top: props.styles.marginV,
      bottom: Math.max(props.styles.marginV - 10, constant.RENDER.PRINT_BOTTOM),
      left: props.styles.marginH,
      right: props.styles.marginH
    }));
    const html = computed(() => markdownService.renderResume(props.markdown));
    const { render: render2 } = useSmartPages(target, html, size, margins, {
      beforeRender: async () => {
        await googleFontsService.presetObserver(props.styles);
      },
      watchThrottledOptions: {
        throttle: 200
      }
    });
    watchThrottled(
      () => [
        props.styles.lineHeight,
        props.styles.paragraphSpace,
        props.styles.fontSize,
        props.css,
        props.styles.fontCJK,
        props.styles.fontEN
      ],
      render2,
      {
        throttle: 200,
        leading: false
      }
    );
    __expose({
      render: render2
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "resume-render",
        id: `resume-${_ctx.id}`,
        ref_key: "target",
        ref: target
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/ResumeRender.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Skeleton",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("animate-pulse rounded-md bg-muted", props.class)
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/skeleton/Skeleton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a, useFileDialog as b, _sfc_main$2 as c, useConstant as d, useDataStore as e, useMonaco as f, useStyleStore as g, useToast as h, isInteger as i, downloadFile as j, fetchFile as k, readFile as r, storageService as s, useShortcuts as u };
//# sourceMappingURL=Skeleton-DmysgnrS.mjs.map
