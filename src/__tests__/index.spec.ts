// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

// Add any needed widget imports here (or from controls)
// import {} from '@jupyter-widgets/base';

import { createTestModel } from './utils';

import { Slider2DModel } from '..';

describe('Slider2D', () => {
  describe('Slider2DModel', () => {
    it('should be createable', () => {
      const model = createTestModel(Slider2DModel);
      expect(model).toBeInstanceOf(Slider2DModel);
      expect(model.get('value')).toEqual('Hello World');
    });

    it('should be createable with a value', () => {
      const state = { value: 'Foo Bar!' };
      const model = createTestModel(Slider2DModel, state);
      expect(model).toBeInstanceOf(Slider2DModel);
      expect(model.get('value')).toEqual('Foo Bar!');
    });
  });
});
