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

export const calculateTime = (time) => {
  const now = new Date();
  const timeDiff = now - new Date(time);

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}g`;
  } else if (hours > 0) {
    return `${hours}s`;
  } else if (minutes > 0) {
    return `${minutes}d`;
  } else {
    return `${seconds}sn`;
  }
};
