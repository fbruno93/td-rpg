# Comment document son composant
```typescript
// src/components/Mycomponent/MyComponent.tsx
import React from 'react';

export interface IBtnProps {
    /** action button click */
    click: () => void,
    /** button text */
    text?: string    
}

/** Component description */
export const MyButton = ({click, text='default'}: IBtnProps) => (
    <button onClick={click}>{text}</button>
)

// src/components/Mycomponent/MyComponent.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import MyButton from "../components/Button";

export default {
  title: 'MyButton',
  component: MyButton,
};

export const MyText = () => <MyButton onClick={action('clicked')} text="Hello MyButton"></MyButton>;

export const MyEmoji = () => (<MyButton onClick={action('clicked')}></MyButton>);
```