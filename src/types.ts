/**
 * Type definitions
 * @module react-typestyle/types
 * @author Paul Brachmann
 * @license Copyright (c) 2017 Malpaux IoT All Rights Reserved.
 */

import { FreeStyle } from 'free-style';
import { types } from 'typestyle';

export interface ClassNames { [name: string]: string; }

export type StaticStyle = Partial<types.NestedCSSProperties>;
export type StyleGenerator<P> = (props: P) => StaticStyle;
export interface StaticSheet { [name: string]: StaticStyle; }
export interface XDynamicSheet<P> { [name: string]: StyleGenerator<P>; }
export interface DynamicSheet<P> { [name: string]: StyleGenerator<P> | StaticStyle; }
export type SheetGenerator<P> = (props: P) => DynamicSheet<P>;

export type Plugin = (
  style: { [property: string]: any },
  type: string,
  renderer: any,
  props?: { [key: string]: any },
) => { [property: string]: any };

export type updateListener = (patch: FreeStyle, subtractive?: boolean) => void;

export interface StylesTarget { textContent: string | null; }
