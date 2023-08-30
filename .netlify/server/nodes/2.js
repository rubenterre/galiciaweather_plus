

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6f1615f8.js","_app/immutable/chunks/scheduler.4c84dceb.js","_app/immutable/chunks/index.11ec2f83.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/_layout.6d81b8ba.js"];
export const stylesheets = ["_app/immutable/assets/2.8248b21f.css","_app/immutable/assets/_layout.77542ff3.css"];
export const fonts = ["_app/immutable/assets/SF-Pro-Text-Bold.fef7eb65.otf","_app/immutable/assets/SF-Pro-Text-Medium.90b3647c.otf","_app/immutable/assets/SF-Pro-Text-Regular.3afd2ac9.otf"];
