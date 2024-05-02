import { toast } from "react-toastify";

// General Function for API Call
export async function makeApiRequest({
  method = "GET",
  data = null,
  token = null,
  url = "",
}) {
  try {
    const headers = {};

    if (token) {
      headers["token"] = getToken();
    }

    let newOptions = {
      method,
      headers,
    };

    if (data !== null) {
      if (data instanceof FormData) {
        newOptions.body = data;
      } else {
        headers["Content-Type"] = "application/json";
        newOptions.body = JSON.stringify(data);
      }
    }

    const response = await fetch(apiUrl() + url, newOptions);
    const processedData = await response.json();

    if (response.ok) {
      return processedData;
    } else {
      if (response.status === 401) {
        removeUserSession();
        window.location.href = "/login";
      }
      throw new Error(processedData.message);
    }
  } catch (error) {
    throw error;
  }
}

export function apiUrl() {
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_API_URL_DEV
      : process.env.REACT_APP_API_URL_PROD;
  return apiUrl;
}

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
export const getMyself = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const userRole = () => {
  const user = getMyself();
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
    day: "numeric",
    month: "short",
    year: "2-digit",
  };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const dayNumber = date.getDate();
  const suffix = getNumberSuffix(dayNumber);

  const [monthName, day, year] = formattedDate.split(" ");

  return `${dayNumber}${suffix} ${monthName}, ${year}`;
}

function getNumberSuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
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

export function toggleDarkmode(mode, newColor) {
  const darkColors = {
    "--primaryColor": "#16a086",
    "--secondaryBG": "rgb(0, 0, 0)",
    "--background": "rgb(0, 0, 0)",
    "--white": "#1a1a1a",
    "--text": "rgb(154, 154, 154)",
    "--heading": "rgb(194, 194, 194)",
    "--chatBG": "rgba(16, 0, 32, 0.119)",
    "--lightest": "rgba(128, 128, 128, 0.308)",
    "--secondaryColor": "rgb(132, 132, 132)",
    "--glassBG": "rgba(0, 0, 0, 0.192)",
    "--cardColor": "black",
    "--shadow":
      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    "--btnBG": "rgb(0, 0, 0)",
    "--btnText": "grey",

    "--secondaryColor": "rgb(44, 44, 44)",
    "--heading": "rgb(66, 66, 66)",
    "--chatBG": "rgba(193, 193, 193, 0.164)",
    "--lightest": "rgba(128, 128, 128, 0.308)",

    "--text": "rgb(154, 154, 154)",
    "--secondaryBG": "rgb(243, 243, 243)",
    "--color": "rgb(48, 48, 48)",
    // "--cardColor": "rgb(252, 252, 252)",
    "--glassBG": "rgba(255, 255, 255, 0.505)",
    "--shadow":
      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    "--hoverShadow":
      "rgba(0, 0, 0, 0.12) 0px 1px 3px , rgba(0, 0, 0, 0.24) 0px 1px 2px",
    "--borderRadius": "1.2em",

    "--btnBG": "blueviolet",
    "--btnText": "grey",

    "--paraSize": "14px",
  };

  const lightColors = {
    "--primaryColor": "#16a086 ",
    "--secondaryColor": "rgb(44, 44, 44)",
    "--white": "white",
    "--heading": "rgb(66, 66, 66)",
    "--chatBG": "rgba(193, 193, 193, 0.164)",
    "--lightest": "rgba(128, 128, 128, 0.308)",

    "--text": "rgb(154, 154, 154)",
    "--background": "whitesmoke",
    "--secondaryBG": "rgb(243, 243, 243)",
    "--color": "rgb(48, 48, 48)",
    "--cardColor": "rgb(252, 252, 252)",
    "--glassBG": "rgba(255, 255, 255, 0.505)",
    "--shadow":
      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    "--hoverShadow":
      "rgba(0, 0, 0, 0.12) 0px 1px 3px , rgba(0, 0, 0, 0.24) 0px 1px 2px",
    "--borderRadius": "1.2em",

    "--btnBG": "blueviolet",
    "--btnText": "grey",

    "--paraSize": "14px",
  };

  let colors;
  if (mode === "on") {
    colors = darkColors;
  } else if (mode === "off") {
    colors = lightColors;
  } else if (mode === "system") {
    colors =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme:dark)").matches
        ? darkColors
        : lightColors;
  }

  for (const property in colors) {
    document.documentElement.style.setProperty(property, colors[property]);
  }
}
