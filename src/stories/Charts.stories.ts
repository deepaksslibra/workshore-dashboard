/* eslint-disable @typescript-eslint/naming-convention */
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { GeneralModule } from 'src/app/general/general.module';
import { ChartComponent } from 'src/app/dashboard/components/chart/chart.component';

export default {
  title: 'Charts',
  component: ChartComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, GeneralModule],
    }),
  ],
} as Meta;

const Template: Story<ChartComponent> = (args: ChartComponent) => ({
  component: ChartComponent,
  props: args,
});

export const Bar = Template.bind({});
Bar.args = {
  chartType: 'bar',
  barData: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        backgroundColor: '#9CCC65',
        borderColor: '#7CB342',
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  },
};

export const Pie = Template.bind({});
Pie.args = {
  chartType: 'pie',
  pieData: {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  },
};
