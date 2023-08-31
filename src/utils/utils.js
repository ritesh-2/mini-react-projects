
/**
 * @date =>new Date()<=
 * Returns Formatted date and time in string format
 */
export function formatDateAndTime(date) {
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const lastMonday = new Date(now);
    lastMonday.setDate(now.getDate() - (now.getDay() + 6) % 7);

    if (date.toDateString() === now.toDateString()) {
        return 'Today, ' + formatTime(date);
    } else if (date.toDateString() === yesterday.toDateString()) {
        return 'Yesterday, ' + formatTime(date);
    } else if (date >= lastMonday) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek[date.getDay()] + ', ' + formatTime(date);
    } else {
        return formatDate(date) + ', ' + formatTime(date);
    }
}

function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString(undefined, options);
}

function formatTime(date) {
    const options = { hour: '2-digit', minute: '2-digit' };
    return date.toLocaleTimeString(undefined, options);
}
