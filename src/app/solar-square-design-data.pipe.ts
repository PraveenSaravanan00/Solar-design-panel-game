import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'solarSquareDesignData',
  pure: false
})
export class SolarSquareDesignDataPipe implements PipeTransform {
  solardata: any = []
  transform(value: any, ...args: any): any {
    if (args[0].length == 0) {
      this.solardata = []
    }
    else {
      args.forEach((element: any) => {
        let flag = true
        element.forEach((state: any) => {
          if (state[0] === value[0] && state[1] === value[1]) {
            this.solardata = state
            flag = false
          }
        })
        if (flag) {
          this.solardata = []
        }
      })
    }
    return this.solardata
  }

}
