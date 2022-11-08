const regex = /(\d{4})-(\d{2})-(\d{2})/
const matchers = regex.exec("1991-02-01");
console.table(matchers);
