import React, { useState } from "react";
import { useEffect } from "react";


function App() {
  const [rentInput, setRentInput] = useState(0)
  const [leaseTerm, setLeaseTerm] = useState(0)
  const [specialSelection, setSpecialSelection] = useState(0)
  const [specialAmount, setSpecialAmount] = useState(0)
  const [otherSpecial, setOtherSpecial] = useState(0)
  const [result, setResult] = useState("$0.00")
  const [difference, setDifference] = useState("$0.00")

  const [isLeaseTermOther, setIsLeaseTermOther] = useState(false)
  const [isSpecialOther, setIsSpecialOther] = useState(false)

  const totalRentCost = rentInput * leaseTerm

  const answer = (totalRentCost - specialAmount) / leaseTerm

  const answerCurrency = answer.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const delta = rentInput - answer

  const deltaCurrency = delta.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })


  const handleRentInput = event => {
    setRentInput(event.target.value)
  }

  const handleLeaseTerm = event => {
    setLeaseTerm(event.target.value)
    if (isLeaseTermOther === true) {
      setIsLeaseTermOther(false)
    }
  }

  const handleLeaseTermOther = event => {
    setLeaseTerm(event.target.value)
  }

  const handleSpecial = event => {
    setSpecialSelection(event.target.value)
    if (isSpecialOther === true) {
      setIsSpecialOther(false)
    }
  }

  const handleSpecialOther = event => {
    setOtherSpecial(event.target.value)
  }

  const handleResult = event => {
    setSpecialSelection(specialSelection)
    setResult(answerCurrency)
    setDifference(deltaCurrency)
  }

  useEffect(() => {
    const specialCalculation = () => {
      if (specialSelection === "other") {
        setSpecialAmount(otherSpecial)
      } else if (specialSelection === "1") {
        const amount = rentInput * 1
        setSpecialAmount(amount)
        setOtherSpecial(0)
      } else if (specialSelection === "2") {
        const amount = rentInput * 2
        setSpecialAmount(amount)
        setOtherSpecial(0)
      }
    }
    specialCalculation()
  }, [rentInput, specialAmount, specialSelection, otherSpecial])


  return (
    <div className="App">


      <section class="bg-[url(https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800)] bg-no-repeat bg-cover">
        <section><div
          class="mx-auto max-w-screen-xl px-4 py-8 lg:flex lg:h-screen lg:items-center "
        >
          <div class="bg-gray-50 bg-opacity-80 border-none mx-auto max-w-xl text-center border rounded p-6 ">
            <h1 class="text-3xl font-extrabold sm:text-5xl opacity-100">
              Rent Specials Calculator
            </h1>

            <h1 class="text-2xl mt-6 font-bold">Avg. {result}/month</h1>
            <h1 class="text-2xl text-green-600 font-bold">{difference}</h1>

            <input type="text" onChange={handleRentInput} placeholder="Monthly Rent" class="input input-bordered w-full max-w-xs mt-8" />

            <p class="mt-4 sm:text-xl sm:leading-relaxed font-bold">
              Lease Term
            </p>
            <form>
              <div class="btn-group w-fit" onChange={handleLeaseTerm}>
                <input type="radio" value="13" name="options" data-title="13" class="btn w-fit" />
                <input type="radio" value="14" name="options" data-title="14" class="btn w-fit" />
                <input type="radio" value="15" name="options" data-title="15" class="btn w-fit" />
                <input type="radio" value="other" name="options" data-title="Other" class="btn text-xs w-fit" onClick={() => setIsLeaseTermOther(true)} />
              </div>
              {isLeaseTermOther === true ? <div><input type="text" onChange={handleLeaseTermOther} placeholder="Lease Term" class="input input-bordered w-full max-w-xs mt-8" /></div> : ""}

            </form>

            <p class="mt-4 sm:text-xl sm:leading-relaxed font-bold">
              Special
            </p>

            <form>
              <div class="btn-group w-fit" onChange={handleSpecial}>
                <input type="radio" value="1" name="options" data-title="1 Month Free" class="btn text-xs w-fit" />
                <input type="radio" value="2" name="options" data-title="2 Months Free" class="btn text-xs w-fit" />
                <input type="radio" value="other" name="options" data-title="Other" class="btn text-xs w-fit" onClick={() => setIsSpecialOther(true)} />
              </div>
              {isSpecialOther === true ? <div><input type="text" onChange={handleSpecialOther} placeholder="Enter special in $" class="input input-bordered w-full max-w-xs mt-8" /></div> : ""}

            </form>

            <div class="mt-8 opacity-100">
              <button onClick={handleResult} class="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded mb-4 text-2xl">
                Calculate
              </button>
            </div>

          </div>
        </div>
        </section>
      </section>


    </div>
  );
}

export default App;
