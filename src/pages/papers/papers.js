import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import './styles.css'
import Menu from '../../components/menu/menu'

const Papers = ({open, setOpen}) => {
    const [dummyDom, setDummyDom] = useState()
    // const [paperData, setPaperData] = useState()

    useEffect(() => {
        const fetchPapers = async () => {
            const result = await Axios.get('http://export.arxiv.org/api/query?search_query=all:renormalization')
            const decodedResult = decodeURIComponent(result.data)
            // setPaperData(decodedResult)
            // 
            var el = document.createElement( 'html' )
            el.innerHTML = decodedResult
            var titles = el.getElementsByTagName('title')
            var arr = [...titles]
            setDummyDom(arr)
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
            {dummyDom != undefined ? 
                <ul>
                    {dummyDom.map((item, i) => (
                        <>{JSON.stringify(item)}</>
                    ))}
                </ul> 
                : 
                <p>Loading..</p>
            }
            {JSON.stringify(dummyDom)}

    </div>
  )
}

export default Papers