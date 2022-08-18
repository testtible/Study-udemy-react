import React, { useState, useEffect } from 'react';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const AvailableMeals = () => {

  const [mealsData, setMealsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  // 아무것도 없을 시 undefined 출력
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://udemy-http-7af8a-default-rtdb.firebaseio.com/meals.json');

      if(!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for(const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      }
      setMealsData(loadedMeals);
      setIsLoading(false);
    }
    fetchMeals().catch(err => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);

  if(isLoading) {
    return (
      <section className={styles.MealsLoading}>
        <p>Loading......</p>
      </section>
    )
  }

  if(httpError) {
    return (
      <section className={styles.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }
    const mealsList = mealsData.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));
    
    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;