import React, { useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react'

const style = {
    // height: "90vh",
    height: "400px",
    width: "100%",
};


let initialOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };



const BasicBar = (props) => {
    const [Option, setOption] = useState(initialOption);
    useEffect(() => {

    }, [props.options])

    return (
        <ReactEcharts
            option={initialOption}
            style={style}
            {...props}
        />
    )
}


export default BasicBar;