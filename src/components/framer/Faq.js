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
// http-url:https://framerusercontent.com/modules/WKy1lL5fMTalfycOSQt8/OJKoHhjCXPJ2qX2F0Vxi/P9eSCksOK.js
import { jsx as _jsx2, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType2, cx as cx2, getFonts, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React2 from "react";

// http-url:https://framerusercontent.com/modules/3nDFrYBqoFsvjZJag6Fp/1mbwHJjtzOaP6FF8vW7Y/Qj1b_xHTI.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, RichText, SVG, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
var cycleOrder = ["CPd50ET_n", "HPPbqSTFE"];
var serializationHash = "framer-SoEdv";
var variantClassNames = { CPd50ET_n: "framer-v-1d02fxy", HPPbqSTFE: "framer-v-sl3qt5" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 400, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion(React.Fragment);
var humanReadableVariantMap = { "Light / Closed": "CPd50ET_n", "Light / Open": "HPPbqSTFE" };
var getProps = ({ answer, height, id, question, tap, width, ...props }) => {
  var _ref, _ref1, _humanReadableVariantMap_props_variant, _ref2;
  return { ...props, G6Kvxv2qU: tap !== null && tap !== void 0 ? tap : props.G6Kvxv2qU, NHVB7thE7: (_ref = answer !== null && answer !== void 0 ? answer : props.NHVB7thE7) !== null && _ref !== void 0 ? _ref : "Pro Plan allows you to add unlimited number of bookmarks, priority support service also being the first to try and test future features", QTbCNlaDR: (_ref1 = question !== null && question !== void 0 ? question : props.QTbCNlaDR) !== null && _ref1 !== void 0 ? _ref1 : "Can I use Marqly for free?", variant: (_ref2 = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref2 !== void 0 ? _ref2 : "CPd50ET_n" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, QTbCNlaDR, NHVB7thE7, G6Kvxv2qU, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "CPd50ET_n", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTap15jl1r2 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (G6Kvxv2qU) {
      const res = await G6Kvxv2qU(...args);
      if (res === false)
        return false;
    }
    setVariant("HPPbqSTFE");
  });
  const onTaphgwd1 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (G6Kvxv2qU) {
      const res = await G6Kvxv2qU(...args);
      if (res === false)
        return false;
    }
    setVariant("CPd50ET_n");
  });
  const ref1 = React.useRef(null);
  const isDisplayed = () => {
    if (baseVariant === "HPPbqSTFE")
      return true;
    return false;
  };
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-1d02fxy", className, classNames), "data-border": true, "data-framer-name": "Light / Closed", "data-highlight": true, layoutDependency, layoutId: "CPd50ET_n", onTap: onTap15jl1r2, ref: ref !== null && ref !== void 0 ? ref : ref1, style: { "--border-bottom-width": "1px", "--border-color": "rgb(228, 229, 233)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(244, 244, 247, 0)", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, ...style }, variants: { HPPbqSTFE: { backgroundColor: "rgb(244, 244, 247)" } }, ...addPropertyOverrides({ HPPbqSTFE: { "data-framer-name": "Light / Open", onTap: onTaphgwd1 } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs(motion.div, { className: "framer-1foxuh7", "data-framer-name": "Question", layoutDependency, layoutId: "lqv8__85J", children: [/* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--framer-font-size": "16px", "--framer-line-height": "28.8px" }, children: /* @__PURE__ */ _jsx(motion.span, { style: { "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNjAw", "--framer-font-family": '"Inter Tight"', "--framer-font-size": "16px", "--framer-font-weight": "600", "--framer-text-color": "var(--extracted-1w3ko1f, rgba(28, 37, 55, 1))" }, children: "Can I use Marqly for free?" }) }) }), className: "framer-1uwmnae", "data-framer-name": "Button \u2192 Link \u2192 Can I use Marqly for free?", fonts: ["GF;Inter Tight-600"], layoutDependency, layoutId: "I10:13439;1356:24150", style: { "--extracted-1w3ko1f": "rgba(28, 37, 55, 1)", "--framer-paragraph-spacing": "0px" }, text: QTbCNlaDR, variants: { HPPbqSTFE: { "--extracted-r6o4lv": "rgb(28, 37, 55)" } }, verticalAlignment: "center", withExternalLayout: true, ...addPropertyOverrides({ HPPbqSTFE: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNjAw", "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif', "--framer-font-weight": "600", "--framer-line-height": "28.8px", "--framer-text-color": "var(--extracted-r6o4lv, rgb(28, 37, 55))" }, children: "Can I use Marqly for free?" }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsxs(motion.div, { className: "framer-oomi4x", "data-framer-name": "Icon / Plus", layoutDependency, layoutId: "I10:13439;1356:24151", children: [/* @__PURE__ */ _jsx(SVG, { className: "framer-9y1bwg", "data-framer-name": "Plus", layout: "position", layoutDependency, layoutId: "xewdBp41M", opacity: 1, style: { opacity: 1 }, svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13 13"><path d="M 12.75 6.5 C 12.75 6.699 12.671 6.89 12.53 7.03 C 12.39 7.171 12.199 7.25 12 7.25 L 7.25 7.25 L 7.25 12 C 7.25 12.199 7.171 12.39 7.03 12.53 C 6.89 12.671 6.699 12.75 6.5 12.75 C 6.301 12.75 6.11 12.671 5.97 12.53 C 5.829 12.39 5.75 12.199 5.75 12 L 5.75 7.25 L 1 7.25 C 0.801 7.25 0.61 7.171 0.47 7.03 C 0.329 6.89 0.25 6.699 0.25 6.5 C 0.25 6.301 0.329 6.11 0.47 5.97 C 0.61 5.829 0.801 5.75 1 5.75 L 5.75 5.75 L 5.75 1 C 5.75 0.801 5.829 0.61 5.97 0.47 C 6.11 0.329 6.301 0.25 6.5 0.25 C 6.699 0.25 6.89 0.329 7.03 0.47 C 7.171 0.61 7.25 0.801 7.25 1 L 7.25 5.75 L 12 5.75 C 12.199 5.75 12.39 5.829 12.53 5.97 C 12.671 6.11 12.75 6.301 12.75 6.5 Z" fill="rgb(0,0,0)"></path></svg>', svgContentId: 3675967884, variants: { HPPbqSTFE: { opacity: 0 } }, withExternalLayout: true, ...addPropertyOverrides({ HPPbqSTFE: { opacity: 0, svgContentId: 11499928208 } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx(SVG, { className: "framer-89zvsa", "data-framer-name": "Minus", layout: "position", layoutDependency, layoutId: "CkUrCTjV8", opacity: 0, style: { opacity: 0 }, svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13 3"><path d="M 12.75 1.5 C 12.75 1.699 12.671 1.89 12.53 2.03 C 12.39 2.171 12.199 2.25 12 2.25 L 1 2.25 C 0.801 2.25 0.61 2.171 0.47 2.03 C 0.329 1.89 0.25 1.699 0.25 1.5 C 0.25 1.301 0.329 1.11 0.47 0.97 C 0.61 0.829 0.801 0.75 1 0.75 L 12 0.75 C 12.199 0.75 12.39 0.829 12.53 0.97 C 12.671 1.11 12.75 1.301 12.75 1.5 Z" fill="rgb(0,0,0)"></path></svg>', svgContentId: 782235297, variants: { HPPbqSTFE: { opacity: 1 } }, withExternalLayout: true, ...addPropertyOverrides({ HPPbqSTFE: { opacity: 1, svgContentId: 9345090019 } }, baseVariant, gestureVariant) })] })] }), isDisplayed() && /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R0Y7SW50ZXIgVGlnaHQtcmVndWxhcg==", "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif', "--framer-letter-spacing": "0.01em", "--framer-line-height": "24px", "--framer-text-color": "var(--extracted-r6o4lv, rgb(5, 5, 6))" }, children: "Pro Plan allows you to add unlimited number of bookmarks, priority support service also being the first to try and test future features" }) }), className: "framer-1n0vsol", "data-framer-name": "Button \u2192 Link \u2192 Can I use Marqly for free?", fonts: ["GF;Inter Tight-regular"], layoutDependency, layoutId: "DC6bj0pfQ", style: { "--extracted-r6o4lv": "rgb(5, 5, 6)", "--framer-paragraph-spacing": "0px" }, text: NHVB7thE7, verticalAlignment: "center", withExternalLayout: true })] }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-SoEdv.framer-1rl3ayy, .framer-SoEdv .framer-1rl3ayy { display: block; }", ".framer-SoEdv.framer-1d02fxy { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px; position: relative; width: 700px; }", ".framer-SoEdv .framer-1foxuh7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-SoEdv .framer-1uwmnae { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-SoEdv .framer-oomi4x { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); overflow: hidden; position: relative; width: 16px; }", ".framer-SoEdv .framer-9y1bwg { flex: none; height: 13px; left: calc(50.00000000000002% - 13px / 2); position: absolute; top: calc(50.00000000000002% - 13px / 2); width: 13px; }", ".framer-SoEdv .framer-89zvsa { flex: none; height: 3px; left: calc(50.00000000000002% - 13px / 2); position: absolute; top: calc(50.00000000000002% - 3px / 2); width: 13px; }", ".framer-SoEdv .framer-1n0vsol { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-SoEdv.framer-1d02fxy { gap: 0px; } .framer-SoEdv.framer-1d02fxy > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-SoEdv.framer-1d02fxy > :first-child { margin-top: 0px; } .framer-SoEdv.framer-1d02fxy > :last-child { margin-bottom: 0px; } }", ".framer-SoEdv.framer-v-sl3qt5.framer-1d02fxy { align-content: flex-start; align-items: flex-start; justify-content: center; }", '.framer-SoEdv[data-border="true"]::after, .framer-SoEdv [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerQj1b_xHTI = withCSS(Component, css, "framer-SoEdv");
var Qj1b_xHTI_default = FramerQj1b_xHTI;
FramerQj1b_xHTI.displayName = "FAQ Component";
FramerQj1b_xHTI.defaultProps = { height: 77, width: 700 };
addPropertyControls(FramerQj1b_xHTI, { variant: { options: ["CPd50ET_n", "HPPbqSTFE"], optionTitles: ["Light / Closed", "Light / Open"], title: "Variant", type: ControlType.Enum }, QTbCNlaDR: { defaultValue: "Can I use Marqly for free?", displayTextArea: false, title: "Question", type: ControlType.String }, NHVB7thE7: { defaultValue: "Pro Plan allows you to add unlimited number of bookmarks, priority support service also being the first to try and test future features", displayTextArea: false, title: "Answer", type: ControlType.String }, G6Kvxv2qU: { title: "Tap", type: ControlType.EventHandler } });
addFonts(FramerQj1b_xHTI, [{ explicitInter: true, fonts: [{ family: "Inter Tight", source: "google", style: "normal", url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mj0QiqWSRToK8EPg.woff2", weight: "600" }, { family: "Inter Tight", source: "google", style: "normal", url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjDw-qWSRToK8EPg.woff2", weight: "400" }] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/WKy1lL5fMTalfycOSQt8/OJKoHhjCXPJ2qX2F0Vxi/P9eSCksOK.js
var FAQComponentFonts = getFonts(Qj1b_xHTI_default);
var cycleOrder2 = ["cqYwS5ZGz", "H9aS8gmzB", "hwAnGblSc", "OZrRhLgeY", "BDkD9DYOT", "ZZd_xr5l5"];
var serializationHash2 = "framer-6dnzh";
var variantClassNames2 = { BDkD9DYOT: "framer-v-hzn2a1", cqYwS5ZGz: "framer-v-15hz13w", H9aS8gmzB: "framer-v-13nybe", hwAnGblSc: "framer-v-nl0hyc", OZrRhLgeY: "framer-v-1d351tg", ZZd_xr5l5: "framer-v-17jgi76" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var Transition2 = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion2(React2.Fragment);
var humanReadableVariantMap2 = { "Variant 1": "cqYwS5ZGz", "Variant 2": "H9aS8gmzB", "Variant 3": "hwAnGblSc", "Variant 4": "OZrRhLgeY", "Variant 5": "BDkD9DYOT", "Variant 6": "ZZd_xr5l5" };
var getProps2 = ({ height, id, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return { ...props, variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap2[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "cqYwS5ZGz" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo2();
  const { style, className, layoutId, variant, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder: cycleOrder2, defaultVariant: "cqYwS5ZGz", variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback2(baseVariant);
  const G6Kvxv2qU16n8jsx = activeVariantCallback(async (...args) => {
    setVariant("H9aS8gmzB");
  });
  const G6Kvxv2qU6ki6tf = activeVariantCallback(async (...args) => {
    setVariant("hwAnGblSc");
  });
  const G6Kvxv2qU14lmk1v = activeVariantCallback(async (...args) => {
    setVariant("OZrRhLgeY");
  });
  const G6Kvxv2qU1hyavyi = activeVariantCallback(async (...args) => {
    setVariant("BDkD9DYOT");
  });
  const G6Kvxv2qUg86e5o = activeVariantCallback(async (...args) => {
    setVariant("ZZd_xr5l5");
  });
  const ref1 = React2.useRef(null);
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx2(LayoutGroup2, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition2, { value: transition12, children: /* @__PURE__ */ _jsxs2(motion2.div, { ...restProps, ...gestureHandlers, className: cx2(serializationHash2, ...sharedStyleClassNames, "framer-15hz13w", className, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "cqYwS5ZGz", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { ...style }, ...addPropertyOverrides2({ BDkD9DYOT: { "data-framer-name": "Variant 5" }, H9aS8gmzB: { "data-framer-name": "Variant 2" }, hwAnGblSc: { "data-framer-name": "Variant 3" }, OZrRhLgeY: { "data-framer-name": "Variant 4" }, ZZd_xr5l5: { "data-framer-name": "Variant 6" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx2(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-s27rfj-container", layoutDependency, layoutId: "gW7H3fDP3-container", children: /* @__PURE__ */ _jsx2(Qj1b_xHTI_default, { G6Kvxv2qU: G6Kvxv2qU16n8jsx, height: "100%", id: "gW7H3fDP3", layoutId: "gW7H3fDP3", NHVB7thE7: "Pro Plan allows you to add unlimited number of bookmarks, priority support service also being the first to try and test future features", QTbCNlaDR: "Can I use Marqly for free?", style: { width: "100%" }, variant: "CPd50ET_n", width: "100%", ...addPropertyOverrides2({ H9aS8gmzB: { variant: "HPPbqSTFE" } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx2(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-ootjdr-container", layoutDependency, layoutId: "vzv2avth7-container", children: /* @__PURE__ */ _jsx2(Qj1b_xHTI_default, { G6Kvxv2qU: G6Kvxv2qU6ki6tf, height: "100%", id: "vzv2avth7", layoutId: "vzv2avth7", NHVB7thE7: "Pro Plan allows you to add unlimited number of bookmarks, priority support service also being the first to try and test future features", QTbCNlaDR: "How is the Pro plan different from the Free?", style: { width: "100%" }, variant: "CPd50ET_n", width: "100%", ...addPropertyOverrides2({ hwAnGblSc: { variant: "HPPbqSTFE" } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx2(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-v0onsv-container", layoutDependency, layoutId: "ZbF83ymS4-container", children: /* @__PURE__ */ _jsx2(Qj1b_xHTI_default, { G6Kvxv2qU: G6Kvxv2qU14lmk1v, height: "100%", id: "ZbF83ymS4", layoutId: "ZbF83ymS4", NHVB7thE7: "Pro Plan allows you to add unlimited number of bookmarks, priority support service also being the first to try and test future features", QTbCNlaDR: "Do you have monthly and yearly billing options?", style: { width: "100%" }, variant: "CPd50ET_n", width: "100%", ...addPropertyOverrides2({ OZrRhLgeY: { variant: "HPPbqSTFE" } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx2(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-1exwlrc-container", layoutDependency, layoutId: "BUPuSpFS0-container", children: /* @__PURE__ */ _jsx2(Qj1b_xHTI_default, { G6Kvxv2qU: G6Kvxv2qU1hyavyi, height: "100%", id: "BUPuSpFS0", layoutId: "BUPuSpFS0", NHVB7thE7: "Pro Plan allows you to add unlimited number of bookmarks, priority support service also being the first to try and test future features", QTbCNlaDR: "How is the payment being processed? Can I pay with Paypal?", style: { width: "100%" }, variant: "CPd50ET_n", width: "100%", ...addPropertyOverrides2({ BDkD9DYOT: { variant: "HPPbqSTFE" }, ZZd_xr5l5: { NHVB7thE7: "If you cancel your Pro plan within 14 days of purchasel, you are eligible for a full refund. Lifetime deals/plans are non-refundable." } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx2(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-1x7bpwh-container", layoutDependency, layoutId: "x5UKv1YMd-container", children: /* @__PURE__ */ _jsx2(Qj1b_xHTI_default, { G6Kvxv2qU: G6Kvxv2qUg86e5o, height: "100%", id: "x5UKv1YMd", layoutId: "x5UKv1YMd", NHVB7thE7: "Pro Plan allows you to add unlimited number of bookmarks, priority support service also being the first to try and test future features", QTbCNlaDR: "Purchase cancellation or refunds?", style: { width: "100%" }, variant: "CPd50ET_n", width: "100%", ...addPropertyOverrides2({ ZZd_xr5l5: { G6Kvxv2qU: void 0, NHVB7thE7: "If you cancel your Pro plan within 14 days of purchasel, you are eligible for a full refund. Lifetime deals/plans are non-refundable.", variant: "HPPbqSTFE" } }, baseVariant, gestureVariant) }) }) })] }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-6dnzh.framer-axqbks, .framer-6dnzh .framer-axqbks { display: block; }", ".framer-6dnzh.framer-15hz13w { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 700px; }", ".framer-6dnzh .framer-s27rfj-container, .framer-6dnzh .framer-ootjdr-container, .framer-6dnzh .framer-v0onsv-container, .framer-6dnzh .framer-1exwlrc-container, .framer-6dnzh .framer-1x7bpwh-container { flex: none; height: auto; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-6dnzh.framer-15hz13w { gap: 0px; } .framer-6dnzh.framer-15hz13w > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-6dnzh.framer-15hz13w > :first-child { margin-top: 0px; } .framer-6dnzh.framer-15hz13w > :last-child { margin-bottom: 0px; } }", ".framer-6dnzh.framer-v-17jgi76 .framer-s27rfj-container { order: 0; }", ".framer-6dnzh.framer-v-17jgi76 .framer-ootjdr-container { order: 1; }", ".framer-6dnzh.framer-v-17jgi76 .framer-v0onsv-container { order: 2; }", ".framer-6dnzh.framer-v-17jgi76 .framer-1exwlrc-container { order: 3; }", ".framer-6dnzh.framer-v-17jgi76 .framer-1x7bpwh-container { order: 4; }"];
var FramerP9eSCksOK = withCSS2(Component2, css2, "framer-6dnzh");
var P9eSCksOK_default = FramerP9eSCksOK;
FramerP9eSCksOK.displayName = "FAQ";
FramerP9eSCksOK.defaultProps = { height: 448, width: 700 };
addPropertyControls2(FramerP9eSCksOK, { variant: { options: ["cqYwS5ZGz", "H9aS8gmzB", "hwAnGblSc", "OZrRhLgeY", "BDkD9DYOT", "ZZd_xr5l5"], optionTitles: ["Variant 1", "Variant 2", "Variant 3", "Variant 4", "Variant 5", "Variant 6"], title: "Variant", type: ControlType2.Enum } });
addFonts2(FramerP9eSCksOK, [{ explicitInter: true, fonts: [] }, ...FAQComponentFonts], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramerP9eSCksOK", "slots": [], "annotations": { "framerIntrinsicHeight": "448", "framerIntrinsicWidth": "700", "framerContractVersion": "1", "framerImmutableVariables": "true", "framerComponentViewportWidth": "true", "framerDisplayContentsDiv": "false", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"H9aS8gmzB":{"layout":["fixed","auto"]},"hwAnGblSc":{"layout":["fixed","auto"]},"OZrRhLgeY":{"layout":["fixed","auto"]},"BDkD9DYOT":{"layout":["fixed","auto"]},"ZZd_xr5l5":{"layout":["fixed","auto"]}}}' } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  P9eSCksOK_default as default
};
