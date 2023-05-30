export const productTableData = (amount) => {
  const names = [
    "Iphone 14 pro",
    "Samsung S23 Ultra",
    "Realme 10 pro",
    "Google Pixel 5",
    "Vivobook s14",
    "Cobb Jeans",
    "Sparx Shoes",
    "Cannon DSLR",
    "Nike Shoes",
    "Redmi Note 10",
  ];

  const images = [
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
  ];
  let dummyArray = [];
  for (let i = 0; i < amount; i++) {
    dummyArray.push({
      srNo: i < 9 ? "0" + (i + 1) : `${i + 1}`,
      productName: names[Math.floor(Math.random() * 10)],
      productCode: 100000 + Math.floor(Math.random() * 1000000),
      productImages: images[Math.floor(Math.random() * 4)],
    });
  }
  return dummyArray;
};
