const makeTagList = (tech) => {
  const colors = {
    blue: "bg-blue-200 text-blue-700",
    green: "bg-green-200 text-green-700",
    orange: "bg-orange-200 text-orange-700",
    red: "bg-red-200 text-red-700",
    white: "bg-slate-300 text-gray-700",
  };

  tech = tech.toLowerCase();
  let result = "";
  if (tech == "html") {
    result = colors.white;
  } else if (tech == "css") {
    result = colors.red;
  } else if (tech == "scss") {
    result = colors.red;
  } else if (tech == "php") {
    result = colors.blue;
  } else if (tech == "wordpress") {
    result = colors.blue;
  } else if (tech == "javascript") {
    result = colors.orange;
  } else if (tech == "jquery") {
    result = colors.orange;
  } else if (tech == "react") {
    result = colors.orange;
  } else {
    result = colors.blue;
  }

  return result;
};

export default makeTagList;
