/**
 * react-typestyle utils
 * @module react-typestyle/internal/utils
 * @author Paul Brachmann
 * @license Copyright (c) 2017 Malpaux IoT All Rights Reserved.
 */

import { DynamicSheet, Plugin, StaticSheet, XDynamicSheet } from '../types';

/** Shallowly compare two objects */
export const shallowCompare = (
  a: { [key: string]: any },
  b: { [key: string]: any },
): boolean => {
  let i;
  for (i in a) if (!(i in b)) return true;
  for (i in b) if (a[i] !== b[i]) return true;
  return false;
};

/** Process a style with a number of plugins */
export const processPlugins = <P>(
  plugins: Plugin[] | undefined,
  style: { [property: string]: any },
  props?: P,
) => {
  let result = { ...style };

  if (plugins) {
    plugins.forEach((plugin) => {
      result = plugin(result, 'RULE', undefined, props);
    });
  }

  return result;
};

/** Split a style sheet into its dynamic & static components */
export const splitSheet = <P>(sheet: DynamicSheet<P>): {
  dynamic: XDynamicSheet<P>,
  static: StaticSheet,
} => {
  const dynamicSheet: XDynamicSheet<P> = {};
  const staticSheet: StaticSheet = {};

  // Iterate styled entities
  Object.keys(sheet).forEach((name) => {
    const style = sheet[name];
    if (typeof style === 'function') {
      dynamicSheet[name] = style;
    } else {
      staticSheet[name] = style;
    }
  });

  return { dynamic: dynamicSheet, static: staticSheet };
};