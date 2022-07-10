import {useState} from "react";
export const useFetching = (callback) => { //аргумент - запрос, перед которым надо показать крутилку и после выполнения скрыть
    const [isLoading, setIsloading] = useState(false);  //создаём состояние, отвечающее за загрузку
    const [error, setError] = useState('');//обработка ошибок

    const fetching = async () => {
        try {
            setIsloading(true) //изменяем состояние для того, чтобы показалась крутилка
            await callback() // затем вызываем коллбек
        } catch (e) {
            setError(e.message); // если произошла ошибка, то вызываем ф-ю setError
        } finally {
            setIsloading(false) //чтобы убрать крутилку
        }
    }

    return [fetching, isLoading, error] // по итогу возвращаем из хука
}