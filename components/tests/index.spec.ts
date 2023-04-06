import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import InputVue from '../input.vue';

describe('InputVue', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(InputVue);
    
    expect(wrapper.vm).toBeTruthy()
  })
})