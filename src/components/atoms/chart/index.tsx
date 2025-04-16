import { CSSProperties } from 'react';
import ReactECharts from 'echarts-for-react';
interface Props {
  legend?: unknown
  xAxis?: unknown
  yAxis?: unknown
  series: unknown
  style?: CSSProperties
  formatter?: (params: unknown) => string
  setRef?: (T: unknown) => void
  options?: unknown
  onClick?: () => void
}



const ChartComponent = (props: Props) => {
  const { legend, xAxis, yAxis, series, style, formatter, setRef, onClick, options = {} } = props
  const option = {
    tooltip: {
      trigger: 'item',
      confine: true,

      textStyle: {
        color: '#000000',
      },
      ...(formatter && { formatter: formatter }),
    },
    legend: legend,
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: xAxis,
    yAxis: yAxis,
    series: series,
    ...options,
  }

  return (
    <ReactECharts style={style} option={option} ref={(e) => setRef && setRef(e)} onEvents={{
      click: () => {
        if (onClick) {
          onClick()
        }
      }
    }} />
  )
}

export default ChartComponent;