import { useState } from "react";
const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [fin, setFin] = useState(false);
  const [btnState, setbtnState] = useState(false);
  const [total, setTotal] = useState(null);


  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  async function startGame() {
    const newNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) + 1);
    setNumbers(newNumbers);
    setbtnState(true);

    for (let i = 0; i < newNumbers.length + 1; i++) {
      await wait(1000); // 2秒待機する
      setCurrentNumber(newNumbers[i]);
      console.log(newNumbers[i]);
    }

    setAnswered(true);
  }


// // スタートボタン押したときの処理
//   async function startGame() {
//     // ランダムな数字の配列を生成する関数
//     const newNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) + 1);
//     setNumbers(newNumbers);
//     // ひとつづつ二秒間隔で表示する関数
//     let i = 0;
//     setbtnState(true);

//     const timerId = setInterval(() => {
//       setCurrentNumber(newNumbers[i]);
//       i++;
//       if (i > newNumbers.length + 1) {
//         clearInterval(timerId);
//         setAnswered(true);
//       }
//     }, 2000);
//   }

  // フォーム部分の処理
  const handleChange = (event) => {
    setAnswer(parseInt(event.target.value));
    console.log(answer);
  };

  // 解答ボタンを押したときの処理
  const startAnswer = (event) => {
    event.preventDefault();
    // setAnswered(false);
    setFin(true);
    let total = numbers.reduce((sum, element) => sum + element, 0);
    setTotal(total);
    console.log(total);
    console.log(answer);
  };

  // ディスプレイ部分の条件分岐
  const display = () => {
    if (answered == true && fin == false) {
      return(
        <label>
          <input type="number" value={answer} onChange={handleChange} />
        </label>
      );
    }else if (answered == false && fin == false) {
      return (
        <p className="text-6xl">{currentNumber}</p>
      );
    }else if (fin == true && answer == total){
      return(
        <p className="text-6xl">{"正解"}</p>
      );
    }else {
      return(
        <p className="text-6xl">{"不正解"}</p>
      );
    }
  }

  // リセットボタン押したときの処理
  const reset = () => {
    setNumbers([]);
    setCurrentNumber(null);
    setAnswered(false);
    setAnswer(null);
    setFin(false);
    setTotal(null);
    setbtnState(false)
  }

  // ボタン表示条件分岐
  const buttonFnc = () => {
    if (answered == true && fin == false) {
      return(
        <button class="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase block text-xl px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit"
          onClick={startAnswer}>
          Answer
        </button>
      );
    }else if (answered == false && fin == false && btnState == true) {
      return (

        <button class="text-white bg-teal-600 font-bold uppercase block text-lg md:text-xl px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"

          >
          Start
        </button>
      );
    }
    else if (answered == false && fin == false) {
      return (

        <button class="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase block text-lg md:text-xl px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"

          onClick={startGame}>
          Start
        </button>
      );
    }else {
      return(

        <button class="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase block text-lg md:text-xl px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"

          onClick={reset}>
          Continue
        </button>
      );
    }
  }

  return (
    <div className="conteiner flex justify-center flex-col h-screen">
      <div className="align-middle">
        <h1 className="md:text-7xl text-center text-3xl">
          フラッシュ暗算
        </h1>
        <form onSubmit={startAnswer}>
          <div className="md:h-60 md:w-60 h-40 w-40 shadow-[5px_5px_49px_0px_rgba(49,151,149,0.5)] rounded-md my-16 mx-auto flex justify-center items-center">
            {display()}
          </div>
          <div className="flex justify-center mt-10">
            {
            buttonFnc()
            }
          </div>
        </form>
      </div>
    </div>
  );
};
export default App;
