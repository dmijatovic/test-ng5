
import { FormatColVal } from './format-col-val.pipe';
import { DatePipe } from '@angular/common';
import { util } from '../app.config';

describe('FormatColValPipe', () => {

  const date = new DatePipe(null);
  const fpipe = new FormatColVal(date);

  it('create an instance', () => {
    expect(fpipe).toBeTruthy();
  });

  it('should return n/a when value=null',()=>{
    expect(fpipe.transform(null)).toBe("n/a");
  });

  it('should return n/a when value is undefined',()=>{
    expect(fpipe.transform(undefined)).toBe("n/a");
  });

  it('should return original value when args not provided',()=>{
    expect(fpipe.transform("test")).toBe("test");
  });

  it('should call date pipe when type:date provided in args',()=>{
    const val = new Date(), mock="datePipeCalled",
      col={type:'date'};

    //set spy on date.transform call
    spyOn(date,'transform').and.returnValue(mock);

    //get value
    let res = fpipe.transform(val, col);
    //if not sure you can use console.log
    //console.log("response...", resp);
    //assert expectation
    expect(res).toBe(mock);
  });

  it('should call formatNumber when type in number/decimal/integer/float',()=>{
    const val = 100.55677, mock="formatNumberCalled",
      col={type:'number'},
      types=['number','decimal','integer','float'];

    spyOn(util,'formatNumber').and.returnValue(mock);

    types.map((t)=>{
      col.type = t;
      let res = fpipe.transform(val,col);
      expect(res).toBe(mock);
    });
  });

  it('should round to whole number when dec prop not provided',()=>{
    let val = 100.5556, mock="101",
      col = {type:'number'},
      types = ['number','decimal','integer','float'];
    //console.log("value...", val);
    types.map((t)=>{
      col.type = t;
      let res = fpipe.transform(val, col);
      expect(res).toBe(mock);
    });
  });

  it('should round number to amount decimals provided',()=>{
    let val = 100.5556, mock="100,56",
      col = {type:'number', dec:2 },
      types = ['number','decimal','integer','float'];
    //console.log("value...", val);
    types.map((t)=>{
      col.type = t;
      let res = fpipe.transform(val, col);
      expect(res).toBe(mock);
    });
  });

});
