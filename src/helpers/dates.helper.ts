import format from 'date-fns/format';

export const formatDateForResultsPage = (isoDateString: string): string => {
  const date = new Date(isoDateString);

  return format(date, 'dd MMM uuuu');
};
