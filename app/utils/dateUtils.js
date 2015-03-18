
var dateUtils = {
  addDay(date) {
    return this.addDays(date, 1);
  },
  addDays(date, num) {
  	var newDate = new Date(date);
    return newDate.setDate(newDate.getDate() + num);
  }
};

export default dateUtils;