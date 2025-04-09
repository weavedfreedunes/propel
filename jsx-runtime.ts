export const jsxAttr = (
	name: string,
	value: boolean | number | object | string,
): string => {
	return `${name}="${value}"`;
};
