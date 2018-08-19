import {Type} from '@angular/core';
import {GraphicConfig} from '../../../../layout/sider/graphic.config/graphic.config';


export abstract class Auxiliary implements IContent {
  configClass: Type<GraphicConfig>;

  abstract resize();

  abstract init(option: any);

  abstract update(option: any);

  refresh() {
  }

  abstract activate();

  abstract destroy();

  getOption() {

  }
}