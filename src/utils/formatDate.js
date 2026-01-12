/**
 * Format date string according to language
 * @param {string} dateString - ISO date string or any valid date string
 * @param {string} lang - Language code ('ja' or 'en')
 * @returns {string} Formatted date string
 *
 * @example
 * formatDate('2025-04-24', 'ja') // '2025年 4月24日'
 * formatDate('2025-04-24', 'en') // 'April 24th, 2025'
 */
const formatDate = (dateString, lang) => {
  const date = new Date(dateString);

  if (lang === "ja") {
    // 日本語形式: 2025年 4月24日
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年 ${month}月${day}日`;
  } else {
    // 英語形式: April 24th, 2025
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();

    // 序数詞を追加 (1st, 2nd, 3rd, 4th, etc.)
    const getOrdinal = (n) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    return `${month} ${getOrdinal(day)}, ${year}`;
  }
};

export default formatDate;
