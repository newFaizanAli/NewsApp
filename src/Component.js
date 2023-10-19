let fetchData = async (url) => {
  let data;
  // data = url
  await fetch(url).then((res) => (data = res.json()));
  return data;
};

let NavItemsSearch = () => {
  let NavEle = [
    "world",
    "business",
    "health",
    "sports",
    "entertainment",
    "science",
    "technology",
  ];

  return NavEle
};

export { fetchData, NavItemsSearch };
