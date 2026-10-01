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
  const _sfc_main$2 = {
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
  var _sfc_render$2 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "blockinfo" }, [_c("div", { class: { "is-link": _vm.design }, attrs: { "title": _vm.design ? _vm.$t("pw.blockinfo.design") : null, "role": _vm.design ? "link" : null }, on: { "click": _vm.go } }, [_c("svg", { staticClass: "k-icon", attrs: { "aria-hidden": "true" } }, [_c("use", { attrs: { "xlink:href": "#icon-" + _vm.icon } })]), _vm._v(" " + _vm._s(_vm.value) + " "), _vm.layout ? _c("span", [_vm._v("(" + _vm._s(_vm.layout) + ")")]) : _vm._e()])]);
  };
  var _sfc_staticRenderFns$2 = [];
  _sfc_render$2._withStripped = true;
  var __component__$2 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$2,
    _sfc_render$2,
    _sfc_staticRenderFns$2,
    false,
    null,
    "26526d24"
  );
  __component__$2.options.__file = "/Users/christian/Projects/pluginsources/kirby-pagewizard/src/components/blockinfo.vue";
  const pwBlockinfo = __component__$2.exports;
  const _sfc_main$1 = {
    components: {
      pwBlockinfo
    }
  };
  var _sfc_render$1 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwPreview", attrs: { "data-kirbyblock": "featurelist" }, on: { "dblclick": _vm.open } }, [_c("pwBlockinfo", { attrs: { "value": _vm.$t("kirbyblock-featurelist.name"), "design": "pwfeaturelist", "icon": "featurelist" } }), _c("pw-block-panel-preview", { attrs: { "type": "pwfeaturelist", "content": _vm.content } })], 1);
  };
  var _sfc_staticRenderFns$1 = [];
  _sfc_render$1._withStripped = true;
  var __component__$1 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$1,
    _sfc_render$1,
    _sfc_staticRenderFns$1,
    false,
    null,
    null
  );
  __component__$1.options.__file = "/Users/christian/Projects/pluginsources/kirbyblock-featurelist/src/blocks/index.vue";
  const pwfeaturelist = __component__$1.exports;
  const _sfc_main = {};
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwPreview", on: { "dblclick": _vm.open } }, [_c("div", { staticClass: "item", on: { "dblclick": _vm.open } }, [_vm.content.icon ? _c("div", { staticClass: "pwIcon" }, [_c("div", { domProps: { "innerHTML": _vm._s(_vm.content.icon) } })]) : _vm._e(), _c("div", [_vm.content.heading ? _c("div", { staticClass: "pwHeading" }, [_vm._v(_vm._s(_vm.content.heading))]) : _vm._e(), _vm.content.description ? _c("div", { staticClass: "pwText" }, [_c("div", { domProps: { "innerHTML": _vm._s(_vm.content.description) } })]) : _vm._e()])])]);
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
