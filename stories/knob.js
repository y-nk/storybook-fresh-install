import { storiesOf } from '@storybook/vue';
import { withKnobs, text, button } from '@storybook/addon-knobs';

storiesOf('Knobs demo', module)
  .addDecorator(withKnobs)
  .add('...', () => ({
    template: '<span @click="i++">My name is {{ name }} and i am {{ i }} years old.</span>',

    data() { return {
      name: text('name', 'John Doe'),
      i: 40,
    }; },

    beforeCreate() {
      button('age me', () => this.i++)
    },

    created() { console.log('created') },
    destroyed() { console.log('destroyed') },
  }));
