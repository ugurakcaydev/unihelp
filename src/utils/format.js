export const numberFormat = (value) => {
  let config = {};
  if (value > 9999) {
    config = {
      notation: "compact",
      maximumFractionDigits: 1,
    };
  }
  return Intl.NumberFormat("tr", config).format(value);
};

export const capitalizeFullName = (name) => {
  return name
    .split(" ") // Boşluklardan böl
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // İlk harfi büyük, geri kalanı küçük yap
    .join(" "); // Tekrar birleştir
};

export const routeFormat = (route) => {
  return route?.toLowerCase("TR-tr").trim();
};
