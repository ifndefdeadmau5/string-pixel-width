import widthsMap from "./widthsMap";

const getWidth = (string) => {
  const map = widthsMap;
  let totalWidth = 0;
  string.split("").forEach((char) => {
    if (/[\x00-\x1F]/.test(char)) {
      // non-printable character
      return true;
    }
    // use width of 'x' as fallback for unregistered char
    const widths = map["noto sans kr"][char] || map["noto sans kr"].x;
    const width = widths[0];
    totalWidth += width;
    return true;
  });
  return totalWidth * (10 / 100);
};

export default getWidth;
