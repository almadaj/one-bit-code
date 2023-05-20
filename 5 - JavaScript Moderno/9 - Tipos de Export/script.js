import { inline } from "./inline.js";
import defaultInline from "./inline.js";
inline();
defaultInline();

import exportDefault, { group, a, b, c, d } from "./non-inline.js";
group();
exportDefault();
