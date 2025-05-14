"use client"

import { createChart, ColorType, AreaSeries } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

interface ChartData {
  time: string;
  value: number;
}

interface PriceChartProps {
  data: ChartData[];
  tokenSymbol: string;
}

export function TokenPriceChart({ data, tokenSymbol }: PriceChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);

  console.log(tokenSymbol)

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: '#16213e' },
        textColor: '#d1d4dc',
      },
      grid: {
        vertLines: { color: '#334158' },
        horzLines: { color: '#334158' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
    });

    const newSeries = chart.addSeries(AreaSeries, {
      lineColor: '#4ecdc4',
      topColor: '#4ecdc450',
      bottomColor: '#16213e',
    });

    newSeries.setData(data);

    chart.timeScale().fitContent();
    chartRef.current = chart;

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ 
          width: chartContainerRef.current.clientWidth 
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [data]);

  return (
    <div 
      ref={chartContainerRef} 
      className="w-full"
    />
  );
}