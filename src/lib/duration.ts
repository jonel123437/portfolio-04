// Turns a "Mon YYYY - Mon YYYY" or "YYYY - YYYY" range into "1 yr 2 mos".
export const formatDuration = (range: string): string => {
  const parse = (s: string): Date | null => {
    const monthYear = s.trim().match(/^([A-Za-z]+)\s+(\d{4})$/);
    if (monthYear) return new Date(`${monthYear[1]} 1, ${monthYear[2]}`);
    const yearOnly = s.trim().match(/^(\d{4})$/);
    if (yearOnly) return new Date(Number(yearOnly[1]), 0, 1);
    return null;
  };

  const [start, end] = range.split("-").map(parse);
  if (!start || !end) return "";

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  if (months <= 0) return "";

  const years = Math.floor(months / 12);
  const rem = months % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rem) parts.push(`${rem} mo${rem > 1 ? "s" : ""}`);
  return parts.join(" ");
};
