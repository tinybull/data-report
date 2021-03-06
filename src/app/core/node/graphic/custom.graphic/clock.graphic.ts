import {ComponentRef} from '@angular/core';
import {RegionController} from '../../region/region.controller';
import {IGraphic} from '../graphic';
import {Chart} from '../../graphic.view/chart/chart';
import {siderLeftComponent} from '../../../../layout/sider/sider.left.component';

import {GraphicConfig} from '../../../../components/graphic.config/graphic.config';

import * as moment from 'moment';
import {BarConfigComponent} from '../../../../components/graphic.config/chart/bar.config.component';

const template = `
<div class="time-chart-container" 
style='font-family: "Microsoft Yahei", Arial, sans-serif; 
font-size: 20px; color: rgb(255, 255, 255); font-weight: normal; justify-content: center;'>
<i class="anticon anticon-clock-circle-o" style="padding-right: 12px"></i>
<span>1970-01-01 00:00:00</span></div>
`;

export class ClockGraphic implements IGraphic {
  $element: JQuery;

  private _configComponentRef: ComponentRef<GraphicConfig>;

  private _internal;

  get model() {
    return this._configComponentRef.instance;
  }

  /**
   * 1、初始化视图
   * 2、给视图绑定事件处理函数
   * 3、建立父子关系
   * @param {RegionController} region
   */
  constructor(region: RegionController) {
    this.$element = $(template);

    region.addChild(this);
  }

  init(option?: any) {
    this._configComponentRef = siderLeftComponent.forwardCreateGraphicConfig(BarConfigComponent);
    if (option) {
      this.model.importOption(option);
    }
    this.model.register('option', (key, oldValue, newValue) => {
      this.update(newValue);
    });

    this._internal = setInterval(() => {
      this.$element.find('span').text(moment().format('YYYY-MM-DD HH:mm:ss'));
    }, 1000);
  }

  getOption() {
    return {
      graphicClass: 'clock.graphic',
      option: this.model.exportOption()
    };
  }

  addChild(chart: Chart) {
  }


  update(option: any) {

  }

  updateTheme(theme) {

  }

  updateGraphic(option: any) {

  }

  resize() {

  }

  activate() {

  }

  deactivate() {

  }

  activateConfig() {
    if (this._configComponentRef) {
      siderLeftComponent.attachDataProperty(this._configComponentRef.hostView);
    }
  }

  /**
   *
   */
  destroy() {
    this._configComponentRef.destroy();
    this._configComponentRef = null;
    if (this._internal) {
      clearInterval(this._internal);
      this._internal = null;
    }
  }
}
