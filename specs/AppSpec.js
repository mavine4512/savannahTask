export default function (spec) {
  spec.describe('My feature Home screen function', function () {
    spec.it('filter the items by searching', async function () {
      await spec.fillIn('Searched.TextInput', 'Error launching');
      await spec.notExists('App.rskor');
      await spec.exists('App.local');
      // await spec.press('Scene.button');
      // await spec.exists('NextScene');
    });
  });
}
