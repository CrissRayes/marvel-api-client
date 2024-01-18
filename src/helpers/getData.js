const getData = async (offset = 0, limit = 100) => {
  const url = `https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&offset=${offset}&limit=${limit}&ts=1&apikey=9b47a875a6bc074de5b57f236d551413&hash=e7637815b05b0eb7de0568b7ff3e924f`;
  const response = await fetch(url);
  const data = await response.json();
  const { results } = data.data;
  const resultsAscending = results.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );

  const items = resultsAscending.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    src: `${item.thumbnail.path}.${item.thumbnail.extension}`,
  }));

  // const itemsWithImage = items.filter(
  //   (item) =>
  //     item.src !==
  //     'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
  // );

  // return itemsWithImage;
  return items;
};

export default getData;
