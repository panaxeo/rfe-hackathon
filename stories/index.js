import { CommentInput } from '../lib/CommentInput';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('CommentInput', module).add('basic', () => (
  <div style={{ padding: 80 }}>
    <CommentInput />
  </div>
));
