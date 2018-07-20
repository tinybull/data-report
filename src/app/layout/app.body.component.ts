import {AfterViewInit, Component} from '@angular/core';
import {DataSet} from '../adapter/groupBy';
import {Report} from '../node/report';
import {ExplicitRegion} from "../node/region.explicit";

@Component({
  selector: 'app-body',
  templateUrl: './app.body.component.html',
  styleUrls: ['./app.body.component.less']
})
export class AppBodyComponent implements AfterViewInit {

  report;
  ngAfterViewInit() {
    var a=true;
    if(a){
      var report =this.report= new Report();
      report.addChild(new ExplicitRegion())
      $('.app-content').prepend(report.$element);

      return ;
    }
    // 基于准备好的dom，初始化echarts实例
    var myChart = this._chart = echarts.init(document.getElementById('main'));

    var table = new DataSet(demo);
    table.orderBy({
      fieldName:'录取人数'
    }).top(10);
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: 'ECharts 入门示例'
      },
      dataset: {
        // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
        // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
          {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
          {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
          {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
          {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
        ]
      },
      tooltip: {},
      legend: {
        data: ['销量','销量1']
      },
      xAxis: {
        type:'category'
      },
      yAxis: {},
      series: [

      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  private _chart;

  get chart() {
    return this._chart;
  }

  formatter(value) {
    return `${value}%`;
  }

  scaleChange(event){
    console.log('****',event);
    this.report.scale=event;
  }

}


var demo = [
  {'省份': '北京', '最高分': '655', '最低分': '604', '平均分': '622', '录取人数': '42'},
  {'省份': '天津', '最高分': '682', '最低分': '648', '平均分': '667', '录取人数': '37'},
  {'省份': '河北', '最高分': '672', '最低分': '657', '平均分': '665', '录取人数': '29'},
  {'省份': '山西', '最高分': '651', '最低分': '621', '平均分': '632', '录取人数': '41'},
  {'省份': '内蒙古', '最高分': '637', '最低分': '598', '平均分': '619', '录取人数': '20'},
  {'省份': '辽宁', '最高分': '660', '最低分': '629', '平均分': '643', '录取人数': '33'},
  {'省份': '吉林', '最高分': '656', '最低分': '635', '平均分': '645', '录取人数': '23'},
  {'省份': '黑龙江', '最高分': '669', '最低分': '625', '平均分': '642', '录取人数': '26'},
  {'省份': '上海', '最高分': '512', '最低分': '468', '平均分': '492', '录取人数': '34'},
  {'省份': '安徽', '最高分': '665', '最低分': '600', '平均分': '655', '录取人数': '41'},
  {'省份': '福建', '最高分': '660', '最低分': '646', '平均分': '653', '录取人数': '44'},
  {'省份': '江西', '最高分': '664', '最低分': '640', '平均分': '651', '录取人数': '45'},
  {'省份': '山东', '最高分': '695', '最低分': '630', '平均分': '678', '录取人数': '73'},
  {'省份': '河南', '最高分': '667', '最低分': '625', '平均分': '644', '录取人数': '42'},
  {'省份': '湖北', '最高分': '656', '最低分': '639', '平均分': '649', '录取人数': '41'},
  {'省份': '湖南', '最高分': '642', '最低分': '615', '平均分': '630', '录取人数': '47'},
  {'省份': '广东', '最高分': '668', '最低分': '641', '平均分': '660', '录取人数': '48'},
  {'省份': '广西', '最高分': '655', '最低分': '624', '平均分': '641', '录取人数': '30'},
  {'省份': '海南', '最高分': '825', '最低分': '802', '平均分': '810', '录取人数': '16'},
  {'省份': '重庆', '最高分': '663', '最低分': '638', '平均分': '651', '录取人数': '41'},
  {'省份': '四川', '最高分': '628', '最低分': '600', '平均分': '619', '录取人数': '49'},
  {'省份': '贵州', '最高分': '660', '最低分': '615', '平均分': '630', '录取人数': '34'},
  {'省份': '云南', '最高分': '637', '最低分': '608', '平均分': '628', '录取人数': '26'},
  {'省份': '西藏', '最高分': '579', '最低分': '561', '平均分': '571', '录取人数': '4'},
  {'省份': '陕西', '最高分': '681', '最低分': '668', '平均分': '670', '录取人数': '36'},
  {'省份': '甘肃', '最高分': '643', '最低分': '621', '平均分': '635', '录取人数': '26'},
  {'省份': '青海', '最高分': '616', '最低分': '578', '平均分': '603', '录取人数': '13'},
  {'省份': '宁夏', '最高分': '593', '最低分': '549', '平均分': '577', '录取人数': '13'},
  {'省份': '新疆', '最高分': '632', '最低分': '559', '平均分': '615', '录取人数': '22'},

];
