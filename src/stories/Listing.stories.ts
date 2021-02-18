/* eslint-disable @typescript-eslint/naming-convention */
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { GeneralModule } from 'src/app/general/general.module';
import { ListingComponent } from 'src/app/dashboard/components/listing/listing.component';

export default {
  title: 'Listing',
  component: ListingComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, GeneralModule],
    }),
  ],
  argTypes: { searchTermChange: { action: 'onSearchTermChange' } },
} as Meta;

const Template: Story<ListingComponent> = (args: ListingComponent) => ({
  component: ListingComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  list: [
    { id: 0, value: 'Item 1' },
    { id: 1, value: 'Item 2' },
    { id: 2, value: 'Item 3' },
    { id: 3, value: 'Item 4' },
    { id: 4, value: 'Item 5' },
  ],
};
