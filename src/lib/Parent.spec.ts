import { test, expect } from '@playwright/experimental-ct-svelte';
import Parent from './Parent.svelte';
import Child from './Child.svelte';

test.use({ viewport: { width: 500, height: 500 } });

test('static component', async ({ mount }) => {
  const component = await mount(Parent, {
    props: {
      msg: "Valid" // Confirms props are correctly sent to component
  }})
  await expect(component).toContainText('Loaded Statically');
  await expect(component).toContainText('Valid');

});

test('dynamic component', async ({ mount }) => {

  // I attempted this, but it exceeded call stack : let child = await mount(Child, {})
  const component = await mount(Parent, {
    props: {
      msg: "Valid",
      child: Child
  }})
  await expect(component).toContainText('Loaded Dynamically');
});
