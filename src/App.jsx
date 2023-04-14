import React, { useState } from "react";
import './App.css';

function App() {
  const [rentInput, setRentInput] = useState(0)
  const [leaseTerm, setLeaseTerm] = useState(0)
  const [special, setSpecial] = useState(0)
  const [result, setResult] = useState(0)


  const totalRentCost = rentInput * leaseTerm
  const answer = (totalRentCost - special) / leaseTerm
  const answerCurrency = answer.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })


  const handleRentInput = event => {
    setRentInput(event.target.value)
  }

  const handleLeaseTerm = event => {
    setLeaseTerm(event.target.value)
  }

  const handleSpecial = event => {
    setSpecial(event.target.value)
  }

  const handleResult = event => {
    setResult(answerCurrency)
  }

  return (
    <div className="App">


      <section class="bg-gray-50">
        <div
          class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
        >
          <div class="mx-auto max-w-xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Rent Specials Calculator
            </h1>

            <h1 class="text-2xl mt-6">Avg. {result} /month</h1>
            {/* <h1>Lease Term {leaseTerm}</h1>
            <h1>Special {special}</h1> */}

            <input type="text" onChange={handleRentInput} placeholder="Monthly Rent" class="input input-bordered w-full max-w-xs mt-8" />

            <p class="mt-4 sm:text-xl sm:leading-relaxed font-bold">
              Lease Term
            </p>
            <form>
            <div class="btn-group" onChange={handleLeaseTerm}>
              <input type="radio" value="13" name="options" data-title="13" class="btn" />
              <input type="radio" value="14" name="options" data-title="14" class="btn" />
              <input type="radio" value="15" name="options" data-title="15" class="btn" />
              <input type="radio" value="other" name="options" data-title="Other" class="btn" />
            </div>
            </form>

            <p class="mt-4 sm:text-xl sm:leading-relaxed font-bold">
              Special
            </p>

            <form>
            <div class="btn-group" onChange={handleSpecial}>
              <input type="radio" value={rentInput} name="options" data-title="1 Month Free" class="btn" />
              <input type="radio" value={rentInput * 2} name="options" data-title="2 Months Free" class="btn" />
              <input type="radio" name="options" data-title="Other" class="btn" />
            </div>
            </form>

            <div class="mt-8">
              <button onClick={handleResult} class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-600">Calculate</button>
            </div>

          </div>
        </div>
      </section>






    </div>
  );
}

export default App;
