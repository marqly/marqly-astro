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
// http-url:https://framerusercontent.com/modules/gXKLKrVEmcV1vFL6KqxS/F1z00tABtTysmMNKmdHl/q7p3j8NmJ.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
var enabledGestures = { E_IGyOoi7: { hover: true }, JD4CdjfoQ: { hover: true }, jINsACwKQ: { hover: true }, KmNzu11dP: { hover: true }, Pfgml7te0: { hover: true }, WGSivsoIs: { hover: true } };
var cycleOrder = ["WGSivsoIs", "Pfgml7te0", "KmNzu11dP", "JD4CdjfoQ", "E_IGyOoi7", "jINsACwKQ"];
var serializationHash = "framer-aO7v0";
var variantClassNames = { E_IGyOoi7: "framer-v-4lxpda", JD4CdjfoQ: "framer-v-1hl2lnm", jINsACwKQ: "framer-v-eecl90", KmNzu11dP: "framer-v-18pb6ia", Pfgml7te0: "framer-v-asrahr", WGSivsoIs: "framer-v-10uzbsg" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { delay: 0, duration: 0.2, ease: [0, 0, 1, 1], type: "tween" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = { "Blue / Bold": "WGSivsoIs", "Blue / Medium": "Pfgml7te0", "Purple / Bold": "JD4CdjfoQ", "Putple / Medium": "KmNzu11dP", "White / Bold": "jINsACwKQ", "White / Medium": "E_IGyOoi7" };
var getProps = ({ buttonText, height, id, newTab, smoothScroll, width, ...props }) => {
  return { ...props, l1L88jkb3: buttonText ?? props.l1L88jkb3 ?? "Get Started for Free ->", Lzl9l661F: newTab ?? props.Lzl9l661F, UkItkESUo: smoothScroll ?? props.UkItkESUo, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "WGSivsoIs" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className, layoutId, variant, l1L88jkb3, Lzl9l661F, UkItkESUo, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "WGSivsoIs", enabledGestures, ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Link, { href: "https://app.marqly.com/", motionChild: true, nodeId: "WGSivsoIs", openInNewTab: Lzl9l661F, scopeId: "q7p3j8NmJ", smoothScroll: UkItkESUo, children: /* @__PURE__ */ _jsx(motion.a, { ...restProps, ...gestureHandlers, className: `${cx(scopingClassNames, "framer-10uzbsg", className, classNames)} framer-1dv8k2j`, "data-border": true, "data-framer-name": "Blue / Bold", layoutDependency, layoutId: "WGSivsoIs", ref: refBinding, style: { "--border-bottom-width": "6px", "--border-color": "rgb(237, 237, 237)", "--border-left-width": "6px", "--border-right-width": "6px", "--border-style": "solid", "--border-top-width": "6px", backgroundColor: "rgb(0, 0, 0)", borderBottomLeftRadius: 69, borderBottomRightRadius: 69, borderTopLeftRadius: 69, borderTopRightRadius: 69, ...style }, variants: { "E_IGyOoi7-hover": { backgroundColor: "rgb(187, 223, 252)" }, "JD4CdjfoQ-hover": { backgroundColor: "rgb(163, 138, 251)" }, "jINsACwKQ-hover": { backgroundColor: "rgb(187, 223, 252)" }, "KmNzu11dP-hover": { backgroundColor: "rgb(163, 138, 251)" }, "Pfgml7te0-hover": { backgroundColor: "rgb(69, 69, 69)" }, "WGSivsoIs-hover": { backgroundColor: "rgb(69, 69, 69)" }, E_IGyOoi7: { "--border-color": "rgb(187, 223, 252)", backgroundColor: "rgb(240, 247, 255)" }, JD4CdjfoQ: { "--border-color": "rgb(163, 138, 251)", backgroundColor: "rgb(119, 73, 246)" }, jINsACwKQ: { "--border-color": "rgb(187, 223, 252)", backgroundColor: "rgb(240, 247, 255)" }, KmNzu11dP: { "--border-color": "rgb(163, 138, 251)", backgroundColor: "rgb(119, 73, 246)" } }, ...addPropertyOverrides({ "E_IGyOoi7-hover": { "data-framer-name": void 0 }, "JD4CdjfoQ-hover": { "data-framer-name": void 0 }, "jINsACwKQ-hover": { "data-framer-name": void 0 }, "KmNzu11dP-hover": { "data-framer-name": void 0 }, "Pfgml7te0-hover": { "data-framer-name": void 0 }, "WGSivsoIs-hover": { "data-framer-name": void 0 }, E_IGyOoi7: { "data-framer-name": "White / Medium" }, JD4CdjfoQ: { "data-framer-name": "Purple / Bold" }, jINsACwKQ: { "data-framer-name": "White / Bold" }, KmNzu11dP: { "data-framer-name": "Putple / Medium" }, Pfgml7te0: { "data-framer-name": "Blue / Medium" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw", "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif', "--framer-font-size": "20px", "--framer-font-weight": "500", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" }, children: "Get Started for Free ->" }) }), className: "framer-ownqdk", "data-framer-name": "Get Started for Free ->", fonts: ["GF;Inter Tight-500"], layoutDependency, layoutId: "Z7mMwECa2", style: { "--extracted-r6o4lv": "rgb(255, 255, 255)", "--framer-paragraph-spacing": "0px" }, text: l1L88jkb3, variants: { E_IGyOoi7: { "--extracted-r6o4lv": "rgb(9, 75, 131)" }, jINsACwKQ: { "--extracted-r6o4lv": "rgb(9, 75, 131)" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ E_IGyOoi7: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw", "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif', "--framer-font-size": "20px", "--framer-font-weight": "500", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 75, 131))" }, children: "Get Started for Free ->" }) }) }, jINsACwKQ: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNTAw", "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif', "--framer-font-size": "20px", "--framer-font-weight": "500", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 75, 131))" }, children: "Get Started for Free ->" }) }) } }, baseVariant, gestureVariant) }) }) }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-aO7v0.framer-1dv8k2j, .framer-aO7v0 .framer-1dv8k2j { display: block; }", ".framer-aO7v0.framer-10uzbsg { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 12px 24px 12px 24px; position: relative; text-decoration: none; width: min-content; }", ".framer-aO7v0 .framer-ownqdk { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }", ".framer-aO7v0.framer-v-4lxpda .framer-ownqdk, .framer-aO7v0.framer-v-eecl90 .framer-ownqdk, .framer-aO7v0.framer-v-4lxpda.hover .framer-ownqdk, .framer-aO7v0.framer-v-eecl90.hover .framer-ownqdk { z-index: unset; }", '.framer-aO7v0[data-border="true"]::after, .framer-aO7v0 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var Framerq7p3j8NmJ = withCSS(Component, css, "framer-aO7v0");
var q7p3j8NmJ_default = Framerq7p3j8NmJ;
Framerq7p3j8NmJ.displayName = "CTA Button";
Framerq7p3j8NmJ.defaultProps = { height: 48, width: 244 };
addPropertyControls(Framerq7p3j8NmJ, { variant: { options: ["WGSivsoIs", "Pfgml7te0", "KmNzu11dP", "JD4CdjfoQ", "E_IGyOoi7", "jINsACwKQ"], optionTitles: ["Blue / Bold", "Blue / Medium", "Putple / Medium", "Purple / Bold", "White / Medium", "White / Bold"], title: "Variant", type: ControlType.Enum }, l1L88jkb3: { defaultValue: "Get Started for Free ->", displayTextArea: false, title: "Button Text", type: ControlType.String }, Lzl9l661F: { defaultValue: false, title: "New Tab", type: ControlType.Boolean }, UkItkESUo: { defaultValue: false, title: "Smooth Scroll", type: ControlType.Boolean } });
addFonts(Framerq7p3j8NmJ, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Tight", source: "google", style: "normal", uiFamilyName: "Inter Tight", url: "https://fonts.gstatic.com/s/intertight/v9/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjPQ-qWSRToK8EPg.woff2", weight: "500" }] }], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "Framerq7p3j8NmJ", "slots": [], "annotations": { "framerIntrinsicWidth": "244", "framerImmutableVariables": "true", "framerContractVersion": "1", "framerColorSyntax": "true", "framerDisplayContentsDiv": "false", "framerComponentViewportWidth": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"Pfgml7te0":{"layout":["auto","auto"]},"KmNzu11dP":{"layout":["auto","auto"]},"JD4CdjfoQ":{"layout":["auto","auto"]},"E_IGyOoi7":{"layout":["auto","auto"]},"jINsACwKQ":{"layout":["auto","auto"]},"I4w2wdqzh":{"layout":["auto","auto"]},"va9jCLEYw":{"layout":["auto","auto"]},"RtVRc_oou":{"layout":["auto","auto"]},"vO6SrPKOz":{"layout":["auto","auto"]},"JxmCGyGdz":{"layout":["auto","auto"]},"VH5emtIxR":{"layout":["auto","auto"]}}}', "framerAutoSizeImages": "true", "framerVariables": '{"l1L88jkb3":"buttonText","Lzl9l661F":"newTab","UkItkESUo":"smoothScroll"}', "framerIntrinsicHeight": "48" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  q7p3j8NmJ_default as default
};
