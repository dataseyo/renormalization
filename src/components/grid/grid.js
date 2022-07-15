import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { animated, useSpring } from 'react-spring'

import './styles.css'
import Menu from '../menu/menu'
import Options from './options/options'

const Grid = () => {
    const navigate = useNavigate()

    // grid state
    const [numSquares, setNumSquares] = useState(256)
    const [numColumns, setNumColumns] = useState(16)
    const [squareSize, setSquareSize] = useState(50)
    const [gridState, setGridState] = useState([])

    // options state
    const [optionsOpen, setOptionsOpen] = useState(false)
    
    var possibleVals = ['+', '-']

    useEffect(() => {
        // generate a random array of +'s and -'s 
        var gridElements = []
        for (var i = 0; i < numSquares; i++) {
            let selectedVal = Math.floor(Math.random() * possibleVals.length)
            gridElements.push(possibleVals[selectedVal])
        }

        // set grid state equal to random array
        setGridState(gridElements)
        console.log("grid state set")
    }, [])
    
    // averaging function
    const averageSpins = (spins) => {
        var numPlus = 0
        var numMinus = 0
        var result = ''

        // add 1 to numPlus/numMinus for every instance of +/- in spins array
        for (var i = 0; i < spins.length; i++) {
            if (spins[i] === '+') {
                numPlus++;
            } else {
                numMinus++;
            }
        }

        // determine which spin value dominates
        // set result equal to that value
        if (numPlus > numMinus) {
            result = '+'
        } else if (numMinus > numPlus) {
            result = '-'
        } else if (numMinus = numPlus) {
            let randChoice = Math.floor(Math.random() * possibleVals.length)
            result = possibleVals[randChoice]
        }

        // console.log(`Plus: ${numPlus} | Minus: ${numMinus} | Result: ${result}`)

        return result
    }

    // generate new averaged grid
    const coarseGrain = (spins) => {
        console.log("spins:", spins)

        // determine the average spins of sub-segments of gridElements array
        var spinSegments = []
        while (spins.length) {
            spinSegments.push(spins.splice(0, 4))
        }

        console.log("spin segments", spinSegments)

        // generate new array of spins (+/-) 
        var newSpins = []
        for (var i = 0; i < spinSegments.length; i++) {
            // console.log("segments:", spinSegments, "avg spins:", averageSpins(spinSegments[i]))
            newSpins.push(averageSpins(spinSegments[i]))
        }

        console.log("new spins:", newSpins)

        // console.log(newSpins)

        // replace old spin array with new averaged array
        setGridState(newSpins)

        // reduce number of squares shown
        setNumSquares(prevNumSquares => prevNumSquares/4)
        
        // increase square size to preserve total grid size
        setSquareSize(prevSquareSize => prevSquareSize*2) 
        document.documentElement.style.setProperty('--square-size', `${squareSize}px`)

        // reduce number of columns
        setNumColumns(prevNumColumns => prevNumColumns/2)
        document.documentElement.style.setProperty('--grid-col-num', numColumns/2)
    }

  return (
    <section className='grid-container'>
        <div className='grid-menu'>
            {gridState.length != 1 ? (
                <button onClick={() => coarseGrain(gridState)} className='grid-button'>Coarse Grain</button>
            ) :
                <button className='grid-button' onClick={() => navigate(0)}>Reset</button>
            }

            <FontAwesomeIcon onClick={() => setOptionsOpen(!optionsOpen)} icon={faGear} className='grid-icon' size='2xl'/>
        </div>

        {optionsOpen ? <Options /> : null}
        
        <div className='grid'>
            {
                // use +/- array to create a grid of squares containing +/-'s
                gridState.map((element, index) => {
                    return (
                        <div className='square' key={index}>{element}</div>
                    )
                })

            }
        </div>
    </section>
  )
}

export default Grid