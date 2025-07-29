import { formatDistanceToNow, isPast, parseISO } from 'date-fns'

export const getPostedTimeAgo = (postedDate) => {
    try {
        return formatDistanceToNow(parseISO(postedDate), { addSuffix: true })
    } catch (e) {
        console.log(e);
        return '';
    }
}

export const isExpired = (deadline) => {
    try {
        return isPast(parseISO(deadline))
    } catch (e) {
        console.log(e);
        return false
    }
}
