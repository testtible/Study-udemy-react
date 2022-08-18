import React, {Fragment} from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';


const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    );
};

export default Meals;

// 밀스 리스트 렌더