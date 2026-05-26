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
// http-url:https://framerusercontent.com/modules/JBcRjsfU0Z26fT235jWM/5L9LjkuWE1xgrxFsrPPo/zsNUMdZlB.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, RichText, SVG, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
var MotionDivWithFX = withFX(motion.div);
var cycleOrder = ["RA3lWZcGb", "YNDovXqA_", "Oznh4y0N5", "LTrF_B_N5", "txymEmn0b"];
var serializationHash = "framer-UavNr";
var variantClassNames = { LTrF_B_N5: "framer-v-145s6e8", Oznh4y0N5: "framer-v-1tffniu", RA3lWZcGb: "framer-v-1tcvu7", txymEmn0b: "framer-v-13gssfz", YNDovXqA_: "framer-v-16y0rc7" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var inertia = { bounceDamping: 30, bounceStiffness: 400, delay: 0, type: "inertia" };
var preventDefault = (e) => e.preventDefault();
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = { "Blue Folder": "LTrF_B_N5", "Purple Folder": "Oznh4y0N5", "Variant 5": "txymEmn0b", Kiwi: "YNDovXqA_", Smiley: "RA3lWZcGb" };
var getProps = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "RA3lWZcGb" };
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
  const { style, className, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "RA3lWZcGb", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (["Oznh4y0N5", "LTrF_B_N5"].includes(baseVariant))
      return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "Oznh4y0N5")
      return true;
    return false;
  };
  const isDisplayed2 = () => {
    if (baseVariant === "LTrF_B_N5")
      return true;
    return false;
  };
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(MotionDivWithFX, { ...restProps, ...gestureHandlers, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: cx(scopingClassNames, "framer-1tcvu7", className, classNames), "data-framer-name": "Smiley", drag: true, dragMomentum: false, dragSnapToOrigin: true, dragTransition: inertia, layoutDependency, layoutId: "RA3lWZcGb", onMouseDown: preventDefault, ref: refBinding, style: { ...style }, ...addPropertyOverrides({ LTrF_B_N5: { "data-framer-name": "Blue Folder" }, Oznh4y0N5: { "data-framer-name": "Purple Folder" }, txymEmn0b: { "data-framer-name": "Variant 5" }, YNDovXqA_: { "data-framer-name": "Kiwi" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-jd8601", "data-framer-name": "White Border", layoutDependency, layoutId: "gykD6h_IG", style: { backgroundColor: "rgb(217, 217, 217)", borderBottomLeftRadius: 40, borderBottomRightRadius: 40, borderTopLeftRadius: 40, borderTopRightRadius: 40 }, children: /* @__PURE__ */ _jsxs(motion.div, { className: "framer-10wke8m", "data-framer-name": "Fill", layoutDependency, layoutId: "EAv5jxSpr", style: { backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: 40, borderBottomRightRadius: 40, borderTopLeftRadius: 40, borderTopRightRadius: 40 }, children: [isDisplayed() && /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R0Y7U0YgUHJvLTcwMA==", "--framer-font-family": '"SF Pro", "-apple-system", "BlinkMacSystemFont", sans-serif', "--framer-font-size": "23px", "--framer-font-weight": "699", "--framer-letter-spacing": "0px", "--framer-line-height": "23px", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, rgb(0, 122, 255))" }, children: "\u{1F92A}" }) }), className: "framer-19d0lac", "data-framer-name": "Symbol", fonts: ["GF;SF Pro-700"], layoutDependency, layoutId: "B8sOZUnLv", style: { "--extracted-r6o4lv": "rgb(0, 122, 255)", "--framer-paragraph-spacing": "0px", rotate: 10 }, verticalAlignment: "center", withExternalLayout: true, ...addPropertyOverrides({ txymEmn0b: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R0Y7U0YgUHJvLTcwMA==", "--framer-font-family": '"SF Pro", "-apple-system", "BlinkMacSystemFont", sans-serif', "--framer-font-size": "23px", "--framer-font-weight": "699", "--framer-letter-spacing": "0px", "--framer-line-height": "23px", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, rgb(0, 122, 255))" }, children: "\u{1F468}\u{1F3FB}\u200D\u{1F9B1}" }) }) }, YNDovXqA_: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R0Y7U0YgUHJvLTcwMA==", "--framer-font-family": '"SF Pro", "-apple-system", "BlinkMacSystemFont", sans-serif', "--framer-font-size": "23px", "--framer-font-weight": "699", "--framer-letter-spacing": "0px", "--framer-line-height": "23px", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, rgb(0, 122, 255))" }, children: "\u{1F95D}" }) }) } }, baseVariant, gestureVariant) }), isDisplayed1() && /* @__PURE__ */ _jsx(SVG, { className: "framer-1g1ujl4", "data-framer-name": "Folder", layout: "position", layoutDependency, layoutId: "v5m2kPFKg", opacity: 1, style: { backgroundColor: "rgba(0, 0, 0, 0)" }, svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27 26"><g transform="translate(0.919 2.605)"><path d="M 9.966 21.407 L 23.041 13.858 C 23.784 13.429 24.156 13.214 24.356 12.906 C 24.532 12.635 24.618 12.314 24.601 11.991 C 24.582 11.624 24.367 11.253 23.939 10.51 L 18.773 1.562 C 18.344 0.819 18.129 0.447 17.821 0.247 C 17.549 0.071 17.229 -0.015 16.906 0.002 C 16.539 0.021 16.167 0.236 15.424 0.665 L 8.251 4.806 C 7.855 5.035 7.327 5.291 6.611 5.2 C 5.896 5.11 6.506 5.187 5.747 5.085 C 4.987 4.983 4.672 5.055 4.212 5.32 L 1.562 6.85 C 0.819 7.279 0.447 7.494 0.247 7.802 C 0.071 8.073 -0.015 8.394 0.002 8.717 C 0.021 9.084 0.236 9.455 0.665 10.198 L 6.618 20.51 C 7.047 21.253 7.261 21.624 7.57 21.824 C 7.841 22.001 8.161 22.086 8.484 22.069 C 8.852 22.05 9.223 21.836 9.966 21.407 Z" fill="rgb(194,118,240)"></path><path d="M 9.966 21.407 L 23.041 13.858 C 23.784 13.429 24.156 13.214 24.356 12.906 C 24.532 12.635 24.618 12.314 24.601 11.991 C 24.582 11.624 24.367 11.253 23.939 10.51 L 18.773 1.562 C 18.344 0.819 18.129 0.447 17.821 0.247 C 17.549 0.071 17.229 -0.015 16.906 0.002 C 16.539 0.021 16.167 0.236 15.424 0.665 L 8.251 4.806 C 7.855 5.035 7.327 5.291 6.611 5.2 C 5.896 5.11 6.506 5.187 5.747 5.085 C 4.987 4.983 4.672 5.055 4.212 5.32 L 1.562 6.85 C 0.819 7.279 0.447 7.494 0.247 7.802 C 0.071 8.073 -0.015 8.394 0.002 8.717 C 0.021 9.084 0.236 9.455 0.665 10.198 L 6.618 20.51 C 7.047 21.253 7.261 21.624 7.57 21.824 C 7.841 22.001 8.161 22.086 8.484 22.069 C 8.852 22.05 9.223 21.836 9.966 21.407 Z" fill="rgba(0,0,0,0.3)"></path><g transform="translate(0.865 0.545)"><path d="M 8.305 21.322 C 7.573 21.745 6.979 22.087 6.979 22.087 L 0 10 C 0 10 0.594 9.657 1.327 9.234 L 15.994 0.766 C 16.727 0.343 17.321 0 17.321 0 L 24.299 12.087 C 24.299 12.087 23.705 12.43 22.973 12.853 Z" fill="rgb(194,118,240)"></path></g></g></svg>', svgContentId: 10661251028, withExternalLayout: true, ...addPropertyOverrides({ Oznh4y0N5: { svgContentId: 11824996314 } }, baseVariant, gestureVariant) }), isDisplayed2() && /* @__PURE__ */ _jsx(SVG, { className: "framer-1waa5ny", "data-framer-name": "Folder", layout: "position", layoutDependency, layoutId: "Z6L2NuYjM", opacity: 1, style: { backgroundColor: "rgba(0, 0, 0, 0)" }, svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 23"><g transform="translate(0.373 0.996)"><path d="M 2.322 16.296 L 16.628 21.123 C 17.441 21.397 17.847 21.534 18.211 21.481 C 18.531 21.434 18.828 21.287 19.059 21.061 C 19.322 20.804 19.459 20.397 19.734 19.584 L 23.037 9.795 C 23.312 8.982 23.449 8.575 23.395 8.212 C 23.348 7.891 23.201 7.594 22.975 7.363 C 22.718 7.1 22.312 6.963 21.499 6.689 L 13.65 4.04 C 13.217 3.894 12.676 3.667 12.271 3.07 C 11.867 2.473 12.211 2.982 11.786 2.345 C 11.361 1.707 11.099 1.518 10.596 1.348 L 7.697 0.369 C 6.884 0.095 6.477 -0.042 6.113 0.011 C 5.793 0.058 5.496 0.205 5.265 0.432 C 5.002 0.689 4.865 1.095 4.591 1.908 L 0.784 13.189 C 0.509 14.002 0.372 14.409 0.426 14.773 C 0.473 15.093 0.62 15.39 0.846 15.621 C 1.103 15.884 1.509 16.021 2.322 16.296 Z" fill="rgb(129,217,255)"></path><path d="M 2.322 16.296 L 16.628 21.123 C 17.441 21.397 17.847 21.534 18.211 21.481 C 18.531 21.434 18.828 21.287 19.059 21.061 C 19.322 20.804 19.459 20.397 19.734 19.584 L 23.037 9.795 C 23.312 8.982 23.449 8.575 23.395 8.212 C 23.348 7.891 23.201 7.594 22.975 7.363 C 22.718 7.1 22.312 6.963 21.499 6.689 L 13.65 4.04 C 13.217 3.894 12.676 3.667 12.271 3.07 C 11.867 2.473 12.211 2.982 11.786 2.345 C 11.361 1.707 11.099 1.518 10.596 1.348 L 7.697 0.369 C 6.884 0.095 6.477 -0.042 6.113 0.011 C 5.793 0.058 5.496 0.205 5.265 0.432 C 5.002 0.689 4.865 1.095 4.591 1.908 L 0.784 13.189 C 0.509 14.002 0.372 14.409 0.426 14.773 C 0.473 15.093 0.62 15.39 0.846 15.621 C 1.103 15.884 1.509 16.021 2.322 16.296 Z" fill="rgba(0,0,0,0.3)"></path><g transform="translate(0 2.287)"><path d="M 1.451 13.715 C 0.65 13.444 0 13.225 0 13.225 L 4.463 0 C 4.463 0 5.113 0.219 5.914 0.49 L 21.961 5.905 C 22.763 6.176 23.413 6.395 23.413 6.395 L 18.95 19.62 C 18.95 19.62 18.3 19.4 17.499 19.13 Z" fill="rgb(129,217,255)"></path></g></g></svg>', svgContentId: 12786162228, withExternalLayout: true, ...addPropertyOverrides({ LTrF_B_N5: { svgContentId: 8742709696 } }, baseVariant, gestureVariant) })] }) }) }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-UavNr.framer-a0eg71, .framer-UavNr .framer-a0eg71 { display: block; }", ".framer-UavNr.framer-1tcvu7 { align-content: flex-start; align-items: flex-start; cursor: grab; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-UavNr .framer-jd8601 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 47px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 47px; }", ".framer-UavNr .framer-10wke8m { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 44px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 44px; }", ".framer-UavNr .framer-19d0lac { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-UavNr .framer-1g1ujl4 { flex: none; height: 26px; position: relative; width: 27px; }", ".framer-UavNr .framer-1waa5ny { flex: none; height: 23px; position: relative; width: 25px; }", ".framer-UavNr.framer-v-1tffniu .framer-10wke8m, .framer-UavNr.framer-v-145s6e8 .framer-10wke8m, .framer-UavNr.framer-v-13gssfz .framer-10wke8m { aspect-ratio: 1.075 / 1; height: var(--framer-aspect-ratio-supported, 40px); }"];
var FramerzsNUMdZlB = withCSS(Component, css, "framer-UavNr");
var zsNUMdZlB_default = FramerzsNUMdZlB;
FramerzsNUMdZlB.displayName = "Hero Circle";
FramerzsNUMdZlB.defaultProps = { height: 47, width: 47 };
addPropertyControls(FramerzsNUMdZlB, { variant: { options: ["RA3lWZcGb", "YNDovXqA_", "Oznh4y0N5", "LTrF_B_N5", "txymEmn0b"], optionTitles: ["Smiley", "Kiwi", "Purple Folder", "Blue Folder", "Variant 5"], title: "Variant", type: ControlType.Enum } });
addFonts(FramerzsNUMdZlB, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerzsNUMdZlB", "slots": [], "annotations": { "framerDisplayContentsDiv": "false", "framerIntrinsicHeight": "47", "framerColorSyntax": "true", "framerContractVersion": "1", "framerImmutableVariables": "true", "framerIntrinsicWidth": "47", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"YNDovXqA_":{"layout":["auto","auto"]},"Oznh4y0N5":{"layout":["auto","auto"]},"LTrF_B_N5":{"layout":["auto","auto"]},"txymEmn0b":{"layout":["auto","auto"]}}}', "framerComponentViewportWidth": "true", "framerAutoSizeImages": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  zsNUMdZlB_default as default
};
