import { mockedAuthorsList } from '../constants';

export const formatAuthors = (authors) => {
	let names = '';
	mockedAuthorsList.forEach((author) => {
		if (authors.includes(author.id)) names = `${names}, ${author.name}`;
	});
	return names.slice(1);
};
