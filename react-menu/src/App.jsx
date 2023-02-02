import { useState } from 'react';
import Meal from './Meal';
import sourceMeals from './meals';

function App() {
  let [filter, setFilter] = useState('all');
  let [meals] = useState(sourceMeals);
  let [selected, setSelected] = useState(null);

  const selectMeal = (meal) => {
    setSelected(meal);

    setTimeout(() => setSelected(null), 5000);
  };

  return (
    <div className="container">
      <div className="flex header">
        <h1>Découvrez notre <span className="banner">menu.</span></h1>

        <div className="flex filters">
          <div onClick={() => setFilter('all')} className={`filter ${filter === 'all' ? 'active' : ''}`}>Tout</div>
          <div onClick={() => setFilter('meat')} className={`filter ${filter === 'meat' ? 'active' : ''}`}>Viandes</div>
          <div onClick={() => setFilter('flower')} className={`filter ${filter === 'flower' ? 'active' : ''}`}>Légumes</div>
        </div>
      </div>

      {selected && <div className="selected">
        <h1>Vous avez commandé le repas {selected.title}</h1>
        <img src={selected.imageSrc} alt={selected.title} />
      </div>}

      {!selected && <div className="flex meal-list">
        {meals.filter(meal => filter === 'all' || filter === meal.type).map((meal, key) => <Meal meal={meal} key={key} onClick={() => selectMeal(meal)} />)}
      </div>}
    </div>
  );
}

export default App;
