/**
 * @file The main entry point
 * @author Paul Brachmann
 * @license Copyright (c) 2017 Malpaux IoT All Rights Reserved.
 */

import Cache from './internal/cache';
import hoc, { ComponentOptions, InjectedProps, InputSheet, Options } from './internal/hoc';
import Registry from './internal/registry';
import Renderer from './internal/renderer';
import { shallowCompare } from './internal/utils';

export { Cache, Registry, Renderer, shallowCompare };

import * as types from './types';
export { ComponentOptions, InjectedProps, InputSheet, Options, types };

/** The default styles renderer */
export const defaultRenderer = new Renderer({ autoGenerateTag: true });

/** Higher-order component */
const withStyles = ({
  plugins,
  renderer = defaultRenderer,
  shouldStylesUpdate = shallowCompare,
}: Partial<Options> = {
  renderer: defaultRenderer,
  shouldStylesUpdate: shallowCompare,
}) =>
  hoc({ plugins, renderer, shouldStylesUpdate });

export default withStyles;