/* eslint-disable @typescript-eslint/naming-convention */
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { NavbarComponent } from 'src/app/dashboard/components/navbar/navbar.component';
import { GeneralModule } from 'src/app/general/general.module';

export default {
  title: 'Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, GeneralModule],
    }),
  ],
  argTypes: { signOut: { action: 'onSignOut' } },
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  component: NavbarComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  signOutText: 'SignOut',
  signOutIcon: 'pi-user',
  logoImgSrc:
    'https://www.primefaces.org/primeng/showcase/assets/showcase/images/primeng-logo-dark.svg',
};
