export default function Meal({ meal, onClick }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-6 mt-10">
      <div className="group">
        <div className="relative">
          <img className="h-64 w-full object-cover rounded-t" src={meal.imageSrc} alt={meal.title} />

          <div className="flex items-end absolute bottom-3 left-3 bg-gray-100 rounded-2xl px-5 py-2">
            <div className="inline-flex items-end">
              <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
              <span className="text-sm mr-1 font-bold text-gray-800 leading-none">{meal.rating}</span>
            </div>
            <span className="text-xs text-gray-500 font-medium leading-none"> ({meal.reviews})</span>
          </div>

          <div className="bg-[#ffffff70] absolute w-full h-full top-0 opacity-0 group-hover:opacity-100 flex items-center justify-center duration-200">
            <button onClick={onClick} className="bg-[#6415ff] hover:bg-[#5011cc] text-sm text-white py-3 px-6 cursor-pointer rounded font-medium duration-200">Commander</button>
          </div>
        </div>
        <div className="p-4 bg-slate-100 rounded-b">
          <h2 className="text-lg font-semibold group-hover:text-[#6415ff]">{meal.title}</h2>
          <p className="text-sm font-medium text-slate-500 mt-1">{meal.content}</p>
          <p className="mt-4 font-bold text-xl">{meal.price}</p>
        </div>
      </div>
    </div>
  );
}
