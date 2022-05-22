import { InjectionToken } from '@angular/core';

import { Config } from '@markdoc/markdoc';

export const MARKDOC_GLOBAL_CONFIG = new InjectionToken<Config>('_MARKDOC_GLOBAL_CONFIG_');
export const GLOBAL_RENDERER_CONFIG = new InjectionToken<unknown>('_GLOBAL_RENDERER_CONFIG_');
