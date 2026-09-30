(function() {
  "use strict";
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const _sfc_main$7 = {
    props: {
      value: String,
      icon: String,
      layout: String,
      // the block type: a button to its design in the Project Wizard
      design: String
    },
    methods: {
      go(event) {
        if (!this.design) return;
        event.stopPropagation();
        this.$go("projectwizard/block/" + this.design);
      }
    }
  };
  var _sfc_render$7 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "blockinfo" }, [_c("div", { class: { "is-link": _vm.design }, attrs: { "title": _vm.design ? _vm.$t("pw.blockinfo.design") : null, "role": _vm.design ? "link" : null }, on: { "click": _vm.go } }, [_c("svg", { staticClass: "k-icon", attrs: { "aria-hidden": "true" } }, [_c("use", { attrs: { "xlink:href": "#icon-" + _vm.icon } })]), _vm._v(" " + _vm._s(_vm.value) + " "), _vm.layout ? _c("span", [_vm._v("(" + _vm._s(_vm.layout) + ")")]) : _vm._e()])]);
  };
  var _sfc_staticRenderFns$7 = [];
  _sfc_render$7._withStripped = true;
  var __component__$7 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$7,
    _sfc_render$7,
    _sfc_staticRenderFns$7,
    false,
    null,
    "26526d24"
  );
  __component__$7.options.__file = "/Users/christian/Projects/pluginsources/kirby-pagewizard/src/components/blockinfo.vue";
  const pwBlockinfo = __component__$7.exports;
  const _sfc_main$6 = {
    props: {
      value: String,
      content: {
        type: Object,
        default: () => ({})
      },
      alignDefault: { type: String, default: "left" }
    },
    computed: {
      parsedData() {
        var _a;
        const val = ((_a = this.content) == null ? void 0 : _a.tagline) || this.value;
        if (!val) return { text: "", align: this.alignDefault };
        try {
          return typeof val === "string" ? JSON.parse(val) : val;
        } catch (e) {
          return { text: val, align: this.alignDefault };
        }
      },
      text() {
        const { text = "" } = this.parsedData;
        return text;
      },
      align() {
        const { align = this.alignDefault } = this.parsedData;
        return align;
      }
    }
  };
  var _sfc_render$6 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwTagline", attrs: { "data-align": _vm.align } }, [_vm.text ? _c("div", { domProps: { "innerHTML": _vm._s(_vm.text) } }) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.tagline.placeholder")) + " ")])]);
  };
  var _sfc_staticRenderFns$6 = [];
  _sfc_render$6._withStripped = true;
  var __component__$6 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$6,
    _sfc_render$6,
    _sfc_staticRenderFns$6,
    false,
    null,
    "2287a490"
  );
  __component__$6.options.__file = "/Users/christian/Projects/pluginsources/kirby-pagewizard/src/components/tagline.vue";
  const pwTagline = __component__$6.exports;
  const _sfc_main$5 = {
    props: {
      value: String,
      content: {
        type: Object,
        default: () => ({})
      },
      alignDefault: { type: String, default: null },
      sizeDefault: { type: String, default: null },
      textbackgroundDefault: { type: String, default: null },
      multilineDefault: { type: String, default: null },
      flourishDefault: { type: String, default: null }
    },
    computed: {
      parsedData() {
        var _a;
        const val = ((_a = this.content) == null ? void 0 : _a.heading) || this.value;
        if (!val) return { text: "", align: this.alignDefault };
        try {
          return typeof val === "string" ? JSON.parse(val) : val;
        } catch (e) {
          return { text: val, align: this.alignDefault };
        }
      },
      text() {
        const { text = "" } = this.parsedData;
        return text;
      },
      align() {
        const { align = this.alignDefault } = this.parsedData;
        return align;
      },
      size() {
        const { size = this.sizeDefault } = this.parsedData;
        return size;
      },
      textbackground() {
        const { textbackground = this.textbackgroundDefault } = this.parsedData;
        return textbackground;
      },
      multiline() {
        const { multiline = this.multilineDefault } = this.parsedData;
        return multiline;
      },
      flourish() {
        const { flourish = this.flourishDefault } = this.parsedData;
        return flourish;
      },
      textLines() {
        return this.text.split(/\r\n|\r|\n/).filter((l) => l !== "");
      }
    }
  };
  var _sfc_render$5 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwHeading", attrs: { "data-align": _vm.align, "data-size": _vm.size } }, [_vm.text ? _c("div", [_vm.multiline === "enabled" ? [_vm._l(_vm.textLines, function(line, i) {
      return [i > 0 ? _c("br", { key: "br-" + i }) : _vm._e(), _vm.textbackground === "enabled" ? _c("span", { key: i, attrs: { "data-textbackground": "" }, domProps: { "innerHTML": _vm._s(line) } }) : _c("span", { key: i, domProps: { "innerHTML": _vm._s(line) } })];
    })] : [_vm.textbackground === "enabled" ? _c("span", { attrs: { "data-textbackground": "" }, domProps: { "innerHTML": _vm._s(_vm.text) } }) : _c("span", { domProps: { "innerHTML": _vm._s(_vm.text) } })], _vm.flourish === "enabled" ? _c("div", { attrs: { "data-flourish": "", "data-align": _vm.align } }) : _vm._e()], 2) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.heading.placeholder")) + " ")])]);
  };
  var _sfc_staticRenderFns$5 = [];
  _sfc_render$5._withStripped = true;
  var __component__$5 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$5,
    _sfc_render$5,
    _sfc_staticRenderFns$5,
    false,
    null,
    "ad832d63"
  );
  __component__$5.options.__file = "/Users/christian/Projects/pluginsources/kirby-pagewizard/src/components/heading.vue";
  const pwHeading = __component__$5.exports;
  const _sfc_main$4 = {
    props: {
      value: String,
      align: { type: String, default: "left" },
      size: { type: String, default: null }
    },
    computed: {
      text() {
        return this.value || "";
      }
    },
    methods: {
      nl2br(text) {
        if (!text) return "";
        return text.replace(/\n/g, "<br>");
      }
    }
  };
  var _sfc_render$4 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwtext", attrs: { "data-align": _vm.align, "data-size": _vm.size } }, [_vm.text ? _c("div", { domProps: { "innerHTML": _vm._s(_vm.nl2br(_vm.text)) } }) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.text-textarea.placeholder")) + " ")])]);
  };
  var _sfc_staticRenderFns$4 = [];
  _sfc_render$4._withStripped = true;
  var __component__$4 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$4,
    _sfc_render$4,
    _sfc_staticRenderFns$4,
    false,
    null,
    "05c2d6ed"
  );
  __component__$4.options.__file = "/Users/christian/Projects/pluginsources/kirby-pagewizard/src/components/textarea.vue";
  const PwTextarea = __component__$4.exports;
  const _sfc_main$3 = {
    props: {
      value: String,
      align: { type: String, default: "left" },
      size: { type: String, default: null }
    }
  };
  var _sfc_render$3 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwtext", attrs: { "data-align": _vm.align, "data-size": _vm.size } }, [_vm.value ? _c("div", { domProps: { "innerHTML": _vm._s(_vm.value) } }) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.text-writer.placeholder")) + " ")])]);
  };
  var _sfc_staticRenderFns$3 = [];
  _sfc_render$3._withStripped = true;
  var __component__$3 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$3,
    _sfc_render$3,
    _sfc_staticRenderFns$3,
    false,
    null,
    "fa3feda4"
  );
  __component__$3.options.__file = "/Users/christian/Projects/pluginsources/kirby-pagewizard/src/components/writer.vue";
  const PwWriter = __component__$3.exports;
  const _sfc_main$2 = {
    components: { PwTextarea, PwWriter },
    props: {
      content: {
        type: Object,
        default: () => ({})
      },
      alignDefault: { type: String, default: "left" }
    },
    computed: {
      parsed() {
        var _a;
        const val = (_a = this.content) == null ? void 0 : _a.editor;
        if (!val) return { mode: "textarea", text: "", align: this.alignDefault };
        try {
          const data = typeof val === "string" ? JSON.parse(val) : val;
          const mode = data.mode || "textarea";
          return { mode, text: data[mode] || "", align: data.align || this.alignDefault, size: data.size || null };
        } catch (e) {
          return { mode: "textarea", text: "", align: this.alignDefault };
        }
      },
      mode() {
        return this.parsed.mode;
      },
      text() {
        return this.parsed.text;
      },
      align() {
        return this.parsed.align || this.alignDefault;
      },
      size() {
        return this.parsed.size || null;
      }
    }
  };
  var _sfc_render$2 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwEditor" }, [_vm.mode === "textarea" ? _c("pw-textarea", { attrs: { "value": _vm.text, "align": _vm.align, "size": _vm.size } }) : _vm.mode === "writer" ? _c("pw-writer", { attrs: { "value": _vm.text, "align": _vm.align, "size": _vm.size } }) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.text-textarea.placeholder")) + " ")])], 1);
  };
  var _sfc_staticRenderFns$2 = [];
  _sfc_render$2._withStripped = true;
  var __component__$2 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$2,
    _sfc_render$2,
    _sfc_staticRenderFns$2,
    false,
    null,
    null
  );
  __component__$2.options.__file = "/Users/christian/Projects/pluginsources/kirby-pagewizard/src/components/editor.vue";
  const pwEditor = __component__$2.exports;
  const pwGridStyle = {
    computed: {
      gridVars() {
        const offset = (val) => {
          const n = Number(val);
          return n === 0 ? "auto" : n + 1;
        };
        return {
          "--grid-start-sm": offset(this.content.gridoffsetsm),
          "--grid-span-sm": Number(this.content.gridsizesm),
          "--grid-start-md": offset(this.content.gridoffsetmd),
          "--grid-span-md": Number(this.content.gridsizemd),
          "--grid-start-lg": offset(this.content.gridoffsetlg),
          "--grid-span-lg": Number(this.content.gridsizelg),
          "--grid-start-xl": offset(this.content.gridoffsetxl),
          "--grid-span-xl": Number(this.content.gridsizexl)
        };
      }
    }
  };
  const pwColorStyle = {
    data() {
      return {
        colors: null
      };
    },
    async created() {
      try {
        this.colors = await this.$api.get("pagewizard/colors");
      } catch (e) {
        this.colors = null;
      }
    },
    computed: {
      colorVars() {
        if (!this.colors) return {};
        const style = this.content.theme || "default";
        const vars = {};
        if (style === "custom") {
          for (const [key, value] of Object.entries(this.colors.default)) {
            vars["--" + key] = value;
          }
          if (this.content.textcolor) {
            vars["--pw-color-text"] = this.content.textcolor;
            vars["--pw-color-heading"] = this.content.textcolor;
            vars["--pw-color-tagline"] = this.content.textcolor;
            vars["--pw-color-link"] = this.content.textcolor;
            vars["--pw-color-quote"] = this.content.textcolor;
            vars["--pw-color-cite"] = this.content.textcolor;
          }
          if (this.content.backgroundcolor) {
            vars["--pw-color-block-background"] = this.content.backgroundcolor;
          }
          const btnStyle = this.content.buttonstyle || "default";
          if (btnStyle !== "default" && this.colors[btnStyle]) {
            const btnKeys = Object.keys(this.colors[btnStyle]).filter((k) => k.startsWith("pw-color-button"));
            for (const key of btnKeys) {
              vars["--" + key] = this.colors[btnStyle][key];
            }
          }
        } else {
          const themePalette = this.colors[style];
          const palette = themePalette ? { ...this.colors.default, ...themePalette } : this.colors.default;
          for (const [key, value] of Object.entries(palette)) {
            vars["--" + key] = value;
          }
        }
        return vars;
      }
    }
  };
  const _sfc_main$1 = {
    components: {
      pwBlockinfo,
      pwTagline,
      pwHeading,
      pwEditor
    },
    mixins: [pwGridStyle, pwColorStyle],
    data() {
      return {
        settings: {},
        fieldDefaults: {},
        defaults: {},
        blockValues: null
      };
    },
    computed: {
      blockItems() {
        try {
          const raw = this.content.blocks;
          if (!raw) return [];
          return typeof raw === "string" ? JSON.parse(raw) : raw;
        } catch (e) {
          return [];
        }
      },
      sectionLayout() {
        return this.content.sectionlayout || this.defaults["section-layout"] || "stacked";
      },
      // Icon colour and (for the tile style) tile colour/radius from the Project Wizard
      iconStyle() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
        const theme = this.content.theme || "default";
        const colors = ((_c = (_b = (_a = this.blockValues) == null ? void 0 : _a.defaults) == null ? void 0 : _b.items) == null ? void 0 : _c.colors) || {};
        const themeOv = (((_d = this.blockValues) == null ? void 0 : _d.overrides) || {})[theme] || {};
        const pick = (name) => {
          var _a2;
          return themeOv[name] || ((_a2 = colors[name]) == null ? void 0 : _a2[theme]) || null;
        };
        const style = {};
        const fill = pick("item-icon-fill");
        if (fill) style["--pwfeaturelist-preview-icon-fill"] = fill;
        if ((this.defaults["item-icon-style"] || "plain") === "tile") {
          const vars = ((_g = (_f = (_e = this.blockValues) == null ? void 0 : _e.defaults) == null ? void 0 : _f.items) == null ? void 0 : _g.vars) || {};
          const ov = ((_h = this.blockValues) == null ? void 0 : _h.overrides) || {};
          style.backgroundColor = pick("item-icon-tile-background");
          const shape = this.defaults["item-shape"] || "custom";
          const radius = Array.isArray(ov["item-radius"]) ? ov["item-radius"] : ((_i = vars["item-radius"]) == null ? void 0 : _i.value) || [];
          style.borderRadius = shape === "round" ? "50%" : shape === "square" ? "0" : [radius[0], radius[1], radius[3], radius[2]].map((r) => r || "0").join(" ");
          style.padding = "0.4rem";
        }
        return style;
      }
    },
    async created() {
      try {
        const response = await this.$api.get("pagewizard/settings/pwfeaturelist");
        this.settings = response.settings;
        this.fieldDefaults = response.fields || {};
        this.defaults = response.defaults || {};
        this.blockValues = await this.$api.get("projectwizard/values/pwfeaturelist");
      } catch (e) {
        this.settings = {};
      }
    },
    methods: {
      // Run-in title: the description without block tags, so title and text share a line
      plainText(html) {
        return (html || "").replace(/<\/?(p|ul|ol|li)[^>]*>/g, " ").trim();
      }
    }
  };
  var _sfc_render$1 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwPreview", style: _vm.colorVars, attrs: { "data-kirbyblock": "featurelist", "data-margintop": _vm.content.margintop === true ? "true" : null, "data-marginbottom": _vm.content.marginbottom === true ? "true" : null }, on: { "dblclick": _vm.open } }, [_c("pwBlockinfo", { attrs: { "value": _vm.$t("kirbyblock-featurelist.name"), "icon": "featurelist" } }), _c("div", { staticClass: "pwGrid" }, [_c("div", { staticClass: "pwGridItem", style: _vm.gridVars, attrs: { "data-paddingtop": _vm.content.paddingtop || _vm.defaults["padding-top"] || null, "data-paddingright": (_vm.content.paddingright !== void 0 ? _vm.content.paddingright : _vm.defaults["padding-right"]) === true ? "true" : null, "data-paddingbottom": _vm.content.paddingbottom || _vm.defaults["padding-bottom"] || null, "data-paddingleft": (_vm.content.paddingleft !== void 0 ? _vm.content.paddingleft : _vm.defaults["padding-left"]) === true ? "true" : null } }, [_c("div", { staticClass: "contents pwLayout", attrs: { "data-layout": _vm.sectionLayout } }, [_c("div", { staticClass: "pwIntro" }, [_vm.settings.tagline ? _c("pwTagline", { attrs: { "value": _vm.content.tagline, "alignDefault": _vm.fieldDefaults["align-tagline"] } }) : _vm._e(), _vm.settings.heading ? _c("pwHeading", { attrs: { "value": _vm.content.heading, "data-level": _vm.content.level, "alignDefault": _vm.fieldDefaults["align-heading"], "sizeDefault": _vm.fieldDefaults["size-heading"], "textbackgroundDefault": _vm.fieldDefaults["textbackground-heading"], "multilineDefault": _vm.fieldDefaults["multiline-heading"], "flourishDefault": _vm.fieldDefaults["flourish-heading"] } }) : _vm._e(), _vm.settings.editor ? _c("pwEditor", { attrs: { "content": _vm.content, "alignDefault": _vm.fieldDefaults["align-editor"] } }) : _vm._e()], 1), _vm.blockItems.length ? _c("div", { staticClass: "pwFeatures", attrs: { "data-align": _vm.content.blocksalignment || _vm.fieldDefaults["align-blocks"], "data-icon-position": _vm.defaults["item-icon-position"] || "left", "data-title-style": _vm.defaults["item-title-style"] || "above" } }, _vm._l(_vm.blockItems, function(item) {
      return _c("div", { key: item.id, staticClass: "pwFeature", class: { "ishidden": item.isHidden } }, [item.content.icon && _vm.defaults["item-icon-position"] !== "none" ? _c("div", { staticClass: "pwIcon", style: _vm.iconStyle, domProps: { "innerHTML": _vm._s(item.content.icon) } }) : _vm._e(), _c("div", { staticClass: "pwContent" }, [(_vm.defaults["item-title-style"] || "above") === "inline" ? [_c("div", { staticClass: "pwText" }, [item.content.heading ? _c("strong", [_vm._v(_vm._s(item.content.heading) + ". ")]) : _vm._e(), _c("span", { domProps: { "innerHTML": _vm._s(_vm.plainText(item.content.description)) } })])] : [item.content.heading ? _c("div", { staticClass: "pwHeading" }, [_vm._v(_vm._s(item.content.heading))]) : _vm._e(), item.content.description ? _c("div", { staticClass: "pwText", domProps: { "innerHTML": _vm._s(item.content.description) } }) : _vm._e()]], 2)]);
    }), 0) : _vm._e()])])])], 1);
  };
  var _sfc_staticRenderFns$1 = [];
  _sfc_render$1._withStripped = true;
  var __component__$1 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$1,
    _sfc_render$1,
    _sfc_staticRenderFns$1,
    false,
    null,
    "823ce87b"
  );
  __component__$1.options.__file = "/Users/christian/Projects/pluginsources/kirbyblock-featurelist/src/blocks/index.vue";
  const pwfeaturelist = __component__$1.exports;
  const _sfc_main = {};
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwPreview", on: { "dblclick": _vm.open } }, [_c("div", { staticClass: "item", on: { "dblclick": _vm.open } }, [_vm.content.icon ? _c("div", { staticClass: "pwIcon" }, [_c("div", { domProps: { "innerHTML": _vm._s(_vm.content.icon) } })]) : _vm._e(), _c("div", [_c("div", { staticClass: "pwHeading" }, [_vm.content.heading.length ? _c("div", { on: { "blur": function($event) {
      return _vm.update({ heading: $event.target.innerText });
    } } }, [_vm._v(" " + _vm._s(_vm.content.heading) + " ")]) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("kirbyblock-featurelist.item.heading.placeholder")) + " ")])]), _c("div", { staticClass: "pwText" }, [_vm.content.description ? _c("div", { domProps: { "innerHTML": _vm._s(_vm.content.description) } }) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("kirbyblock-featurelist.item.description.placeholder")) + " ")])])])])]);
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns,
    false,
    null,
    "1e428e0a"
  );
  __component__.options.__file = "/Users/christian/Projects/pluginsources/kirbyblock-featurelist/src/blocks/item.vue";
  const pwfeaturelistitem = __component__.exports;
  panel.plugin("kirbydesk/kirbyblock-featurelist", {
    blocks: {
      pwfeaturelist,
      pwfeaturelistitem
    }
  });
})();
