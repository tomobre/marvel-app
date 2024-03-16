import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';

import { setConfig } from 'next/config';
import config from './next.config';

setConfig(config);
