export default function Meal({ meal, onClick }) {
  return (
    <div className="card">
      <div className="relative">
        <img src={meal.imageSrc} alt={meal.title} />

        <div className="flex review">
          <div className="flex">
            <svg fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
            <span>{meal.rating}</span>
          </div>
          <span className="count"> ({meal.reviews})</span>
        </div>

        <div className="card-filter flex">
          <button onClick={onClick}>Commander</button>
        </div>
      </div>
      <div className="card-content">
        <h2 className="card-title">{meal.title}</h2>
        <p className="card-text">{meal.content}</p>
        <p className="card-price">{meal.price}</p>
      </div>
    </div>
  );
}
