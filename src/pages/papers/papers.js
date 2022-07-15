import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import './styles.css'
import Menu from '../../components/menu/menu'

const Papers = ({open, setOpen}) => {
    const [dummyDom, setDummyDom] = useState(null)
    // const [paperData, setPaperData] = useState()

    useEffect(() => {
        const fetchPapers = async () => {
            const result = await Axios.get('http://export.arxiv.org/api/query?search_query=all:renormalization')
            const decodedResult = decodeURIComponent(result.data)
            // setPaperData(decodedResult)
            // 
            var el = document.createElement( 'html' )
            el.innerHTML = decodedResult
            setDummyDom(el.getElementsByTagName('title'))
        }

        fetchPapers()
    }, [])

    // console.log(paperData)
    console.log(dummyDom)
    // console.log(dummyDom.item(1))
    // console.log(dummyDom[1])

  return (
    <div>
        <Menu open={open} setOpen={setOpen}/>
        <h2>Papers</h2>
        <p>
            
            {/* {dummyDom != null ? <p>{dummyDom[1]}</p> : <p>Loading..</p>} */}
        </p>
    </div>
  )
}

export default Papers