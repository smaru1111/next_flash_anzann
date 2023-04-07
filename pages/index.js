const App = () => {
  return (
    <div className="conteiner flex justify-center flex-col h-screen">
      <div className="align-middle">
        <h1 className="text-7xl text-center">
          フラッシュ暗算
        </h1>
        <div className="h-60 w-60 shadow-[5px_5px_49px_0px_rgba(49,151,149,0.5)] rounded-md my-16 mx-auto flex justify-center items-center">
          <p className="text-6xl">123</p>
        </div>
        <div className="flex justify-center mt-10">
          <button class="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase block text-xl px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
