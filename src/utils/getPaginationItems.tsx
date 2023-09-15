export const getPaginationItems = (numberOfPages: number, currentPage: number) => {
	let pages = [];

	for (let i = 1; i <= numberOfPages; i++) {
		pages.push(i);
	}
	const firstPages = pages.slice(0, 2);
	const lastPages = pages.slice(-2);
	const currentPageIndex = pages.indexOf(currentPage);
	const closePagesToCurrentPage = pages.slice(currentPageIndex - 1, currentPageIndex + 2);

	const pageList = [...new Set([...firstPages, ...closePagesToCurrentPage, ...lastPages])];

	let paginationItems: (string | number)[] = [];

	pageList.forEach((page, index) => {
		paginationItems.push(page);
		if (pageList[index + 1] && page + 1 !== pageList[index + 1]) {
			paginationItems.push("page");
		}
		return page;
	});

	return paginationItems;
};
