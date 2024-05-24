import React, { useEffect, useState } from 'react'
import WorkPage from './../Work/WorkPage';

const Work = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData([
            {
                'name':'Shopyfield',
                'category':'E-Commerce',
            },{
                'name':'NexTalk',
                'category':'Chat',
            },{
                'name':'Management',
                'category':'CRM',
            },{
                'name':'Interior',
                'category':'Interior',
            },{
                'name':'Volunteer',
                'category':'Listings',
            }
        ]);
    }, []);
    return (
        <>
            <WorkPage data={data} />
        </>
    )
}

export default Work
