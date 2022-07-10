import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => { // необходимо получать номер текущей страницы, функцию, которая этот номер изменяет и массив на основании которого необходимо отрисовывать элементы. Для созд-я массива необходимо знать, сколько всего страниц
    let pagesArray =  getPagesArray(totalPages); //сформируем массив, в котором значения будут идти от 1 до 10
    return ( 
        <div className="page__wrapper"> 
        {pagesArray.map(p => // итерируемся по массиву, отрисовываем кнопки для каждого элемента
            <span 
                onClick={() => changePage(p)} //слушатель события по клику - будем изменять состояние page куда нажал пользователь. Аргументом передаем номер страницы, на которую нажал пользователь
                key={p} 
                className={page === p ? 'page page__current' : 'page'}
                > 
                    {p}
            </span> // если элемент итерации равняется номеру текущей страницы, то есть элемент page равен состоянию, то в таком случае будем добавлять одни стили, в обратном случае - другие
        )}
        </div>
    )
}

export default Pagination;

