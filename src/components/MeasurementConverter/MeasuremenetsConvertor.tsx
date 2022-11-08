import React, { useEffect, useState } from 'react'
import './MeasuremenetsConvertor.css'
import UnitListItem from './UnitListItem';

function MeasuremenetsConvertion() {

    const convertText = require('js-unit-converter');
    console.log(convertText)

    const [selectedLength, setSelectedLength] = useState("")
    const [selectedMass, setSelectedMass] = useState("")
    const [selectedLiquid, setSelectedLiquid] = useState("")
    const [selectedTemperature, setSelectedTemperature] = useState("")
    const [selectedTime, setSelectedTime] = useState("")
    const [selectedCurrency, setSelectedCurrency] = useState("")
    const [selectedSpoons, setSelectedSpoons] = useState("")

    const [inputText, setInputText] = useState("")
    const [outputText, setOutputText] = useState("")

    useEffect(() => {
        const timer = setTimeout(() => setOutputText(convertText(inputText)), 500) // this is the debounce time, 500 ms
    
        return () => {
          clearTimeout(timer)
        }
      }, [inputText])

  return (
    <>
        <main>
            <div className='units-selector-container'>
                <div className='units-selector'>
                    <h1>
                        -: Select your preferred units :-
                    </h1>
                    <ul className='length-units'>
                        <UnitListItem unitName={'Milimeters'} selected={selectedLength} setSelected={setSelectedLength}/>
                        <UnitListItem unitName={'Centimeters'} selected={selectedLength} setSelected={setSelectedLength}/>
                        <UnitListItem unitName={'Meters'} selected={selectedLength} setSelected={setSelectedLength}/>
                        <UnitListItem unitName={'Kilometers'} selected={selectedLength} setSelected={setSelectedLength}/>
                        <UnitListItem unitName={'Inches'} selected={selectedLength} setSelected={setSelectedLength}/>
                        <UnitListItem unitName={'Feet'} selected={selectedLength} setSelected={setSelectedLength}/>
                        <UnitListItem unitName={'Yards'} selected={selectedLength} setSelected={setSelectedLength}/>
                        <UnitListItem unitName={'Miles'} selected={selectedLength} setSelected={setSelectedLength}/>
                    </ul>
                    <ul className='mass-units'>
                        <UnitListItem unitName={'Milligrams'} selected={selectedMass} setSelected={setSelectedMass}/>
                        <UnitListItem unitName={'Grams'} selected={selectedMass} setSelected={setSelectedMass}/>
                        <UnitListItem unitName={'Kilograms'} selected={selectedMass} setSelected={setSelectedMass}/>
                        <UnitListItem unitName={'Tonnes'} selected={selectedMass} setSelected={setSelectedMass} title={'Metric System'}/>
                        <UnitListItem unitName={'Pounds'} selected={selectedMass} setSelected={setSelectedMass}/>
                        <UnitListItem unitName={'Ounces'} selected={selectedMass} setSelected={setSelectedMass}/>
                        <UnitListItem unitName={'Tons'} selected={selectedMass} setSelected={setSelectedMass} title={'Imperial  System'}/>
                    </ul>
                    <ul className='liquid-units'>
                        <UnitListItem unitName={'Deciliters'} selected={selectedLiquid} setSelected={setSelectedLiquid}/>
                        <UnitListItem unitName={'Milliliters'} selected={selectedLiquid} setSelected={setSelectedLiquid}/>
                        <UnitListItem unitName={'Liters'} selected={selectedLiquid} setSelected={setSelectedLiquid}/>
                        <UnitListItem unitName={'Meter cubed'} selected={selectedLiquid} setSelected={setSelectedLiquid}/>
                        <UnitListItem unitName={'Kiloliters'} selected={selectedLiquid} setSelected={setSelectedLiquid}/>
                        <UnitListItem unitName={'Cups'} selected={selectedLiquid} setSelected={setSelectedLiquid}/>
                        <UnitListItem unitName={'Gallons'} selected={selectedLiquid} setSelected={setSelectedLiquid}/>
                    </ul>
                    <ul className='temperature-units'>
                        <UnitListItem unitName={'Celsius'} selected={selectedTemperature} setSelected={setSelectedTemperature}/>
                        <UnitListItem unitName={'Kelvin'} selected={selectedTemperature} setSelected={setSelectedTemperature}/>
                        <UnitListItem unitName={'Fahrenheit'} selected={selectedTemperature} setSelected={setSelectedTemperature}/>
                    </ul>
                    <ul className='currency-units'>
                        <UnitListItem unitName={'Dollars'} selected={selectedCurrency} setSelected={setSelectedCurrency}/>
                        <UnitListItem unitName={'Pound Sterlings'} selected={selectedCurrency} setSelected={setSelectedCurrency}/>
                        <UnitListItem unitName={'Euros'} selected={selectedCurrency} setSelected={setSelectedCurrency}/>
                        <UnitListItem unitName={'Japanease Yens'} selected={selectedCurrency} setSelected={setSelectedCurrency}/>
                        <UnitListItem unitName={'UAE Dirhams'} selected={selectedCurrency} setSelected={setSelectedCurrency}/>
                    </ul>
                    <ul className='time-units'>
                        <UnitListItem unitName={'Milliseconds'} selected={selectedTime} setSelected={setSelectedTime}/>
                        <UnitListItem unitName={'Seconds'} selected={selectedTime} setSelected={setSelectedTime}/>
                        <UnitListItem unitName={'Minutes'} selected={selectedTime} setSelected={setSelectedTime}/>
                        <UnitListItem unitName={'Hours'} selected={selectedTime} setSelected={setSelectedTime}/>
                    </ul>
                    <ul className='spoon-units'>
                        <UnitListItem unitName={'Teapoons'} selected={selectedSpoons} setSelected={setSelectedSpoons}/>
                        <UnitListItem unitName={'Tablespoons'} selected={selectedSpoons} setSelected={setSelectedSpoons}/>
                    </ul>
                </div>
            </div>
            <div className='input-output-container'>
                <div className='input-container'>
                    <label>
                        Input text of measurements
                    </label>
                    <div>
                        <textarea rows={40} cols={90} placeholder='Input text' onChange={(e) => setInputText(e.currentTarget.value)}/>
                    </div>
                </div>
                <div className='output-container'>
                    <label>
                        Output text of measurements after conversion
                    </label>
                    <div>
                        <textarea readOnly rows={40} cols={90} placeholder='Output text' value={outputText} />
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default MeasuremenetsConvertion