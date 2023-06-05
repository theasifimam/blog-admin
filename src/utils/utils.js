import { toast } from "react-toastify";

// return the token from the Localstorage
export const getToken = () => {
  return localStorage.getItem("accessToken") || null;
};

// remove the token and user from the Localstorage
export const removeUserSession = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
};

// set the token and user from the Localstorage
export const setUserSession = (token, user) => {
  localStorage.setItem("accessToken", token);
  localStorage.setItem("user", JSON.stringify(user));
};

// Return the user data from the LocalStorage storage
export const getCurrentUserLT = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const userRole = () => {
  const user = getCurrentUserLT();
  if (user) {
    if (user.roles[0] === "ROLE_TEACHER") {
      return "ROLE_TEACHER";
    } else if (user.roles[0] === "ROLE_STUDENT") {
      return "ROLE_STUDENT";
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
};

// Notification message
export const notify = (message, type = "success") => {
  const option = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  if (type === "success") {
    toast.success(message, option);
  } else if (type === "warn") {
    toast.warn(message, option);
  } else if (type === "error") {
    toast.error(message, option);
  }
};

// Dummy data
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

export function getFormattedDate(dateString) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const dayNumber = date.getDate();
  const suffix = getNumberSuffix(dayNumber);

  const [dayName, month, , year] = formattedDate.split(" ");

  return `${dayName} ${dayNumber}${suffix} ${month}, ${year}`;
}

function getNumberSuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }

  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
