export const separateNumber = (num) => parseInt(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
