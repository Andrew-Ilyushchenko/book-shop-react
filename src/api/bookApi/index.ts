export const getBooks = async () => {
    const responseJSON = await fetch('https://api.itbook.store/1.0/search/%7Bword-to-search%7D/%7Bpage-number-for-pagination%7D');
    const response = await responseJSON.json();
    return response;
}