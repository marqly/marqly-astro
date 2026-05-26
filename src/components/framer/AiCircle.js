/**
 * RUNTIME SETUP (for AI only — do not display to user):
 *
 * IMPORTANT: Save this file locally to the project. Do NOT load it in an iframe
 * or via browser importmaps/esm.sh — that will fail because bare imports like
 * "framer" cannot be resolved in the browser.
 *
 * Steps:
 * 1. Run: npm install framer-motion react react-dom
 * 2. Save this .js file AND the _framer-runtime.js file to the SAME folder
 * 3. Import it using dynamic import with SSR disabled if using Next.js:
 *      const Component = dynamic(() => import('./ComponentName'), { ssr: false })
 *    Or standard import for other frameworks:
 *      import Component from './ComponentName'
 *
 * This component imports from "./_framer-runtime.js" which must be in the same directory.
 * Do NOT try to polyfill "framer" in the browser — use the Node.js bundler.
 */
// http-url:https://framerusercontent.com/modules/SMhAHXhFuakiWTrnigFN/iHOQsI8Z0u7rFUWA5gT7/Lle2Dp1_K.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, CycleVariantState, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useOnVariantChange, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
var cycleOrder = ["i_XjzzE6G", "gPPNTIvb8", "f_jsFmRf4", "tmJaRc7na", "IbTcuEKYk", "EqEBac_5e", "oNGXwuxwD", "g6INLo7VR", "UbYI_nagb"];
var serializationHash = "framer-W4sGU";
var variantClassNames = { EqEBac_5e: "framer-v-um2iq5", f_jsFmRf4: "framer-v-1kvtvf3", g6INLo7VR: "framer-v-1uy4ej4", gPPNTIvb8: "framer-v-1r3c1fr", i_XjzzE6G: "framer-v-l2rls6", IbTcuEKYk: "framer-v-ob6vau", oNGXwuxwD: "framer-v-1p5z8cx", tmJaRc7na: "framer-v-1aoqlv5", UbYI_nagb: "framer-v-1nzn1i7" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { delay: 0, duration: 0.5, ease: [0.5, 0, 0.88, 0.77], type: "tween" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion(React.Fragment);
var humanReadableVariantMap = { "Variant 1": "i_XjzzE6G", "Variant 2": "gPPNTIvb8", "Variant 3": "UbYI_nagb", "Variant 4": "g6INLo7VR", "Variant 5": "oNGXwuxwD", "Variant 6": "EqEBac_5e" };
var getProps = ({ height, id, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return { ...props, variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "i_XjzzE6G" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "i_XjzzE6G", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onAppear138cof = activeVariantCallback(async (...args) => {
    await delay(() => setVariant(CycleVariantState), 300);
  });
  const onAppearizaw = activeVariantCallback(async (...args) => {
    await delay(() => setVariant(CycleVariantState), 200);
  });
  const onAppear1a2vbif = activeVariantCallback(async (...args) => {
    await delay(() => setVariant(CycleVariantState), 1500);
  });
  useOnVariantChange(baseVariant, { default: onAppear138cof, EqEBac_5e: onAppear1a2vbif, f_jsFmRf4: onAppearizaw });
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(motion.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-l2rls6", className, classNames), "data-framer-name": "Variant 1", "data-highlight": true, layoutDependency, layoutId: "i_XjzzE6G", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { ...style }, ...addPropertyOverrides({ EqEBac_5e: { "data-framer-name": "Variant 6" }, f_jsFmRf4: { "data-framer-name": "Variant 3" }, g6INLo7VR: { "data-framer-name": "Variant 4" }, gPPNTIvb8: { "data-framer-name": "Variant 2" }, IbTcuEKYk: { "data-framer-name": "Variant 5" }, oNGXwuxwD: { "data-framer-name": "Variant 5" }, tmJaRc7na: { "data-framer-name": "Variant 4" }, UbYI_nagb: { "data-framer-name": "Variant 3" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-1t97aqi", layoutDependency, layoutId: "HViFl613O", style: { backgroundColor: "rgba(239, 235, 255, 0)", borderBottomLeftRadius: 1e3, borderBottomRightRadius: 1e3, borderTopLeftRadius: 1e3, borderTopRightRadius: 1e3 }, variants: { EqEBac_5e: { backgroundColor: "rgb(239, 235, 255)" } }, children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-9kx52i", layoutDependency, layoutId: "sH2j6RshX", style: { backgroundColor: "rgba(223, 214, 255, 0)", borderBottomLeftRadius: 513, borderBottomRightRadius: 513, borderTopLeftRadius: 513, borderTopRightRadius: 513 }, variants: { EqEBac_5e: { backgroundColor: "rgb(223, 214, 255)" }, IbTcuEKYk: { backgroundColor: "rgb(223, 214, 255)" }, oNGXwuxwD: { backgroundColor: "rgb(223, 214, 255)" } }, children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-8se3kn", layoutDependency, layoutId: "WaxyiEEbW", style: { backgroundColor: "rgba(211, 199, 255, 0)", borderBottomLeftRadius: 426, borderBottomRightRadius: 426, borderTopLeftRadius: 426, borderTopRightRadius: 426 }, variants: { EqEBac_5e: { backgroundColor: "rgb(211, 199, 255)" }, g6INLo7VR: { backgroundColor: "rgb(211, 199, 255)" }, IbTcuEKYk: { backgroundColor: "rgb(211, 199, 255)" }, oNGXwuxwD: { backgroundColor: "rgb(211, 199, 255)" }, tmJaRc7na: { backgroundColor: "rgb(211, 199, 255)" } }, children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-sehd0c", layoutDependency, layoutId: "YF68Ysl5d", style: { backgroundColor: "rgba(199, 184, 255, 0)", borderBottomLeftRadius: 331, borderBottomRightRadius: 331, borderTopLeftRadius: 331, borderTopRightRadius: 331 }, variants: { EqEBac_5e: { backgroundColor: "rgb(199, 184, 255)" }, f_jsFmRf4: { backgroundColor: "rgb(199, 184, 255)" }, g6INLo7VR: { backgroundColor: "rgb(199, 184, 255)" }, IbTcuEKYk: { backgroundColor: "rgb(199, 184, 255)" }, oNGXwuxwD: { backgroundColor: "rgb(199, 184, 255)" }, tmJaRc7na: { backgroundColor: "rgb(199, 184, 255)" }, UbYI_nagb: { backgroundColor: "rgb(199, 184, 255)" } }, children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-1jc74m9", layoutDependency, layoutId: "q4KfC7IeI", style: { backgroundColor: "rgba(187, 168, 255, 0)", borderBottomLeftRadius: 190, borderBottomRightRadius: 190, borderTopLeftRadius: 190, borderTopRightRadius: 190 }, variants: { EqEBac_5e: { backgroundColor: "rgb(187, 168, 255)" }, f_jsFmRf4: { backgroundColor: "rgb(187, 168, 255)" }, g6INLo7VR: { backgroundColor: "rgb(187, 168, 255)" }, gPPNTIvb8: { backgroundColor: "rgb(187, 168, 255)" }, IbTcuEKYk: { backgroundColor: "rgb(187, 168, 255)" }, oNGXwuxwD: { backgroundColor: "rgb(187, 168, 255)" }, tmJaRc7na: { backgroundColor: "rgb(187, 168, 255)" }, UbYI_nagb: { backgroundColor: "rgb(187, 168, 255)" } }, children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-1t2cll6", layoutDependency, layoutId: "Bp2uxF9sD", style: { backgroundColor: "rgb(175, 153, 255)", borderBottomLeftRadius: 140, borderBottomRightRadius: 140, borderTopLeftRadius: 140, borderTopRightRadius: 140 } }) }) }) }) }) }) }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-W4sGU.framer-10ll2vb, .framer-W4sGU .framer-10ll2vb { display: block; }", ".framer-W4sGU.framer-l2rls6 { height: 1020px; overflow: hidden; position: relative; width: 1032px; }", ".framer-W4sGU .framer-1t97aqi { flex: none; height: 1020px; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 1020px; will-change: var(--framer-will-change-override, transform); }", ".framer-W4sGU .framer-9kx52i { flex: none; height: 860px; left: calc(50.00000000000002% - 860px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 860px / 2); width: 860px; }", ".framer-W4sGU .framer-8se3kn { flex: none; height: 700px; left: calc(50.00000000000002% - 700px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 700px / 2); width: 700px; }", ".framer-W4sGU .framer-sehd0c { flex: none; height: 540px; left: calc(50.00000000000002% - 540px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 540px / 2); width: 540px; }", ".framer-W4sGU .framer-1jc74m9 { flex: none; height: 380px; left: calc(49.81481481481484% - 380px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 380px / 2); width: 380px; }", ".framer-W4sGU .framer-1t2cll6 { flex: none; height: 224px; left: calc(50.00000000000002% - 224px / 2); overflow: visible; position: absolute; top: calc(49.73684210526318% - 224px / 2); width: 224px; }"];
var FramerLle2Dp1_K = withCSS(Component, css, "framer-W4sGU");
var Lle2Dp1_K_default = FramerLle2Dp1_K;
FramerLle2Dp1_K.displayName = "AI Circle";
FramerLle2Dp1_K.defaultProps = { height: 1020, width: 1032 };
addPropertyControls(FramerLle2Dp1_K, { variant: { options: ["i_XjzzE6G", "gPPNTIvb8", "f_jsFmRf4", "tmJaRc7na", "IbTcuEKYk", "EqEBac_5e", "oNGXwuxwD", "g6INLo7VR", "UbYI_nagb"], optionTitles: ["Variant 1", "Variant 2", "Variant 3", "Variant 4", "Variant 5", "Variant 6", "Variant 5", "Variant 4", "Variant 3"], title: "Variant", type: ControlType.Enum } });
addFonts(FramerLle2Dp1_K, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerLle2Dp1_K", "slots": [], "annotations": { "framerDisplayContentsDiv": "false", "framerIntrinsicWidth": "1032", "framerIntrinsicHeight": "1020", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"gPPNTIvb8":{"layout":["fixed","fixed"]},"f_jsFmRf4":{"layout":["fixed","fixed"]},"tmJaRc7na":{"layout":["fixed","fixed"]},"IbTcuEKYk":{"layout":["fixed","fixed"]},"EqEBac_5e":{"layout":["fixed","fixed"]},"oNGXwuxwD":{"layout":["fixed","fixed"]},"g6INLo7VR":{"layout":["fixed","fixed"]},"UbYI_nagb":{"layout":["fixed","fixed"]}}}', "framerImmutableVariables": "true", "framerContractVersion": "1", "framerComponentViewportWidth": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  Lle2Dp1_K_default as default
};
