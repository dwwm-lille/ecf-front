import { useState } from 'react';
import Meal from './Meal';
import sourceMeals from './meals';

function App() {
  let [filter, setFilter] = useState('all');
  let [meals, setMeals] = useState(sourceMeals);
  let [selected, setSelected] = useState(null);

  const selectMeal = (meal) => {
    setSelected(meal);

    setTimeout(() => setSelected(null), 5000);
  };

  return (
    <div className="px-8 py-32 max-w-7xl mx-auto">
      <div className="flex justify-between items-center flex-col xl:flex-row">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#243e63]">
          Découvrez notre <span className="bg-[#6415ff] text-white -skew-x-12 inline-block p-3 px-4">menu.</span>
        </h1>

        <div className="flex bg-slate-100 p-2 mt-6 xl:mt-0 rounded">
          <div onClick={() => setFilter('all')} className={`mr-3 py-2 px-6 cursor-pointer rounded font-medium duration-200 ${filter == 'all' ? 'bg-[#6415ff] text-white' : 'text-slate-500 hover:bg-slate-200'}`}>Tout</div>
          <div onClick={() => setFilter('meat')} className={`mr-3 py-2 px-6 cursor-pointer rounded font-medium duration-200 ${filter == 'meat' ? 'bg-[#6415ff] text-white' : 'text-slate-500 hover:bg-slate-200'}`}>Viandes</div>
          <div onClick={() => setFilter('flower')} className={`mr-3 py-2 px-6 cursor-pointer rounded font-medium duration-200 ${filter == 'flower' ? 'bg-[#6415ff] text-white' : 'text-slate-500 hover:bg-slate-200'}`}>Légumes</div>
        </div>
      </div>

      {selected && <div className="text-center my-16">
        <h1 className="text-3xl text-emerald-500 mb-12">Vous avez commandé le repas {selected.title}</h1>
        <img className="h-64 w-64 mx-auto object-cover rounded-t" src={selected.imageSrc} alt={selected.title} />
      </div>}

      {!selected && <div className="flex flex-wrap -mx-6 mt-6">
        {meals.filter(meal => filter == 'all' || filter == meal.type).map((meal, key) => <Meal meal={meal} key={key} onClick={() => selectMeal(meal)} />)}
      </div>}
    </div>
  );
}

export default App;
