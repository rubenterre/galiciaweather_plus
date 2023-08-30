

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/privacidade/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.ea8069b7.js","_app/immutable/chunks/scheduler.4c84dceb.js","_app/immutable/chunks/index.11ec2f83.js"];
export const stylesheets = ["_app/immutable/assets/11.26f37183.css"];
export const fonts = [];
