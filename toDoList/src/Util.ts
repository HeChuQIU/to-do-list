export class Util {
    static inSameDay = (date1: Date, date2: Date) => {
        return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear()
    }

    static inSameWeek = (date1: Date, date2: Date) => {
        const date1Copy = new Date(date1.getTime());
        const date2Copy = new Date(date2.getTime());
        date1Copy.setDate(0);
        date2Copy.setDate(0);
        return date1Copy.getDate() === date2Copy.getDate() && date1Copy.getMonth() === date2Copy.getMonth()
            && date1Copy.getFullYear() === date2Copy.getFullYear();
    }

    static inSameMonth = (date1: Date, date2: Date) => {
        return date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear()
    }

    static inToday = (date: Date) => {
        return Util.inSameDay(date, new Date());
    }

    static inThisWeek = (date: Date) => {
        return Util.inSameWeek(date, new Date());
    }

    static inThisMonth = (date: Date) => {
        return Util.inSameMonth(date, new Date());
    }

    static addDays = (date: Date, days: number) => {
        const dateCopy = new Date(date.getTime());
        dateCopy.setDate(dateCopy.getDate() + days);
        return dateCopy;
    }

    static addDaysFromToday = (days: number) => {
        return Util.addDays(new Date(), days);
    }
}
