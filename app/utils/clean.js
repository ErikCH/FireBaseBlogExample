export default function clean(title) {
	title = title.replace(/ /g, '_');
	return title.replace(/[^a-zA-Z0-9-_]/g, '');
}
