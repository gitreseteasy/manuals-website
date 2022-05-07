import format from 'date-fns/format';

export const formatDateForResultsPage = (isoDateString: string): string => {
  const dateAsJsDate = new Date(isoDateString);
  return format(dateAsJsDate, 'ii MMM uuuu');
};
