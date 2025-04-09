export const jsxAttr = (
	name: string,
	value: boolean | number | object | string,
): string => {
	return `${name}="${value}"`;
};

export const jsxEscape = (
	value: boolean | number | object | string,
): string => {
	const string = `${value}`;
	if (string.length === 0 || /["&<]/.test(string) === false) {
		return string;
	}

	const encode = (
		remaining: string,
		index: number,
		string2: string,
	): string => {
		if (index >= remaining.length) {
			return string2;
		}

		const entity = {
			34: "&quot;",
			38: "&amp;",
			39: "&apos;",
			60: "&lt;",
			62: "&gt;",
		}[remaining.charCodeAt(index)];

		if (!entity) {
			return encode(remaining, index + 1, string2 + remaining.charAt(index));
		}

		return encode(remaining, index + 1, string2 + entity);
	};

	return encode(string, 0, "");
};

export const jsxTemplate = (
	template: readonly string[],
	...substitions: readonly string[]
): string => {
	if (template.length === 1) {
		return template.at(0) || "";
	}

	const template2: readonly string[] = [
		template.at(0)! + substitions.at(0) + template.at(1),
		...template.slice(2),
	];
	return jsxTemplate(template2, ...substitions.slice(1));
};
