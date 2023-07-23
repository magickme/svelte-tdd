export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.dfd7aa90.js","app":"_app/immutable/entry/app.36ae128c.js","imports":["_app/immutable/entry/start.dfd7aa90.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.3ee319e7.js","_app/immutable/entry/app.36ae128c.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.0719bd3d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
