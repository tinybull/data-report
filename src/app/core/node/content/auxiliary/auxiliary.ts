
export abstract class Auxiliary implements IContent {
  abstract init(option: any);

  abstract update(option: any);

  updateTheme() {
  }

  refresh() {
  }

  resize() {
  }

  activate() {
  }

  deactivate() {
  }

  render() {
  }

  derender() {
  }

  getOption() {

  }

  abstract destroy();
}
