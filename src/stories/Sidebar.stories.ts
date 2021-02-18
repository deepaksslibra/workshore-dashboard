/* eslint-disable @typescript-eslint/naming-convention */
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { GeneralModule } from 'src/app/general/general.module';
import { SidebarComponent } from 'src/app/dashboard/components/sidebar/sidebar.component';

export default {
  title: 'Sidebar',
  component: SidebarComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, GeneralModule],
      providers: [],
    }),
  ],
} as Meta;

const Template: Story<SidebarComponent> = (args: SidebarComponent) => ({
  component: SidebarComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      label: 'Pages',
      items: [
        {
          label: 'Charts',
          icon: 'pi pi-fw pi-chart-bar',
        },
        {
          label: 'Listing',
          icon: 'pi pi-fw pi-download',
        },
      ],
    },
  ],
};
