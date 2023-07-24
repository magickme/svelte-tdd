export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.43a335d1.js","app":"_app/immutable/entry/app.7bf38c5a.js","imports":["_app/immutable/entry/start.43a335d1.js","_app/immutable/chunks/scheduler.d35e8dc7.js","_app/immutable/chunks/singletons.7f0c990a.js","_app/immutable/entry/app.7bf38c5a.js","_app/immutable/chunks/scheduler.d35e8dc7.js","_app/immutable/chunks/index.e88137da.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/birthdays",
				pattern: /^\/birthdays\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
