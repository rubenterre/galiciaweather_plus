import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.fb9e43e3.js","_app/immutable/chunks/_layout.6d81b8ba.js","_app/immutable/chunks/scheduler.4c84dceb.js","_app/immutable/chunks/index.11ec2f83.js"];
export const stylesheets = ["_app/immutable/assets/_layout.77542ff3.css"];
export const fonts = ["_app/immutable/assets/SF-Pro-Text-Bold.fef7eb65.otf","_app/immutable/assets/SF-Pro-Text-Medium.90b3647c.otf","_app/immutable/assets/SF-Pro-Text-Regular.3afd2ac9.otf"];
