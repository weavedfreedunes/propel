export const serve = (
	jsxTemplate: string,
	cert?: string,
	key?: string,
	port?: number,
): void => {
	const handler = () => {
		return new Response(jsxTemplate, {
			headers: { "content-type": "text/html; charset=utf-8" },
			status: 200,
		});
	};
	Deno.serve(
		{ cert, key, port },
		handler,
	);
};
