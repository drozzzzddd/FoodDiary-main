import React from 'react';

const AddFood = (props) => {
    const addFoodHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={addFoodHandler}>
<label>
    Продукт:
    <select name = "product" required>
        <option value = "Orange" selected> Апельсин </option>
        <option value = "Lemon" selected> Лимон </option>
        <option value = "Apple" selected> Яблоко </option>
    </select>
</label>
 
            <label htmlFor="foodGramms">Количество(в граммах)</label>
            <input id="foodGramms" type="text" />

            <label htmlFor="foodCalories">Калорий:</label>
            <input id="foodCalories" type="text" />
        
        </form>
    );
}

export default AddFood;