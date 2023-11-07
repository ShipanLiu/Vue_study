<script lang="ts" setup>
// Imports the PieChart module, which is needed to render pie charts.
import { PieChart } from "echarts/charts"
// Imports various ECharts components like TitleComponent for the chart title,
// TooltipComponent for the tooltips, and LegendComponent for the legend.
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components"

// Imports the use function from ECharts, which is used to manually register components required by ECharts.
import { use } from "echarts/core"
// Imports CanvasRenderer, which is responsible for rendering charts using the HTML5 Canvas.
import { CanvasRenderer } from "echarts/renderers"
import { ref, provide } from "vue"
import VChart, { THEME_KEY } from "vue-echarts"
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
])

// Provides a theme for all ECharts instances within this component's scope. It sets the theme to "dark".
provide(THEME_KEY, "dark");



const option = ref({
  title: {
    text: "Referer of a Website",
    subtext: "Fake Data",
    left: "center"
  },
  // tooltip: Defines the tooltip's behavior, which is shown when the user hovers over an item in the chart.
  // trigger: The trigger for the tooltip; set to "item" so the tooltip will show when hovering over pie slices.
  tooltip: {
    trigger: "item"
  },

  legend: {
    orient: "vertical",
    left: "left"
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "Jiba" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" }
      ],
      // emphasis: Configuration for the pie chart's style when a slice is hovered over.
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
});


</script>


<template>
  <div>
    <!-- Wrapping VChart in <client-only> tells Nuxt.js to only render the chart component in the browser, once the JavaScript bundle has been loaded and executed. This avoids SSR-related errors and ensures that the component's lifecycle hooks are fired in the correct environment (i.e., the browser). -->
    <client-only>
      <VChart class="chart" :option="option" />
      <template #placeholder>
        <div>I am Loading chart...</div>
      </template>
    </client-only>
  </div>
</template>


<style scoped>
.chart {
  height: 100vh;
}
</style>
