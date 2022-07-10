export const getPageCount = (totalCount, limit) => {  //аргументом принимает общее кол-во элементов
    return Math.ceil(totalCount / limit) //возвращает необходимое кол-во страниц
}

export const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages ; i++) {
        result.push(i + 1)
    }
    return result;
}