import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  initext:string="Click anywhere to construct initial panel.."
  iniStauts:boolean=false
  solarEditDesignData: number[]=[]
  coloumsCount: number = 3
  coloumCountValue: number[] = []
  rowCountValue: number[] = []
  rowCount: number = 3
  coloumValue: number[][] = []
  finalStatus: boolean = false
  fullPage():void{
    this.iniStauts=true
    if(this.iniStauts){
      this.coloumCountValue = []
      this.rowCountValue = []
      for (let i = 0; i <= this.coloumsCount; i++) {
        this.coloumCountValue.push(i)
      }
      for (let j = 0; j <= this.rowCount; j++) {
        this.rowCountValue.push(j)
      }
    }
  }
  solarEditDesign(row: number, coloum: number) :void{
    this.solarEditDesignData = ([row, coloum])
    let flag = true
    let flag1 = false
    if (this.coloumValue.length==0) {
      this.coloumValue.push(this.solarEditDesignData)
      flag1 = true
    }
    else {
      this.coloumValue.forEach((element: number[], index: number):void => {
        if (this.solarEditDesignData[0] == element[0] && this.solarEditDesignData[1] == element[1]) {
          this.coloumValue.splice(index, 1)
          flag = false
        }
      })

      if (flag) {
        this.coloumValue.push(this.solarEditDesignData)
              console.log(this.coloumValue);
        flag1 = true
      }
    }

    if (flag1) {
      if (row == 0 && coloum != 0 && coloum != this.coloumsCount) {
        this.rowCount += 1
        this.coloumCountValue = []
        this.rowCountValue = []
        for (let i = 0; i <= this.coloumsCount; i++) {
          this.coloumCountValue.push(i)
        }
        for (let j = 0; j <= this.rowCount; j++) {
          this.rowCountValue.push(j)
        }
        this.coloumValue.forEach((element:  number[], index: number):void => {
          element[0] += 1

        })
      }
      if (coloum == 0 && row != 0 && row != this.rowCount) {
        this.coloumsCount += 1
        this.coloumCountValue = []
        this.rowCountValue = []
        for (let i = 0; i <= this.coloumsCount; i++) {
          this.coloumCountValue.push(i)
        }
        for (let j = 0; j <= this.rowCount; j++) {
          this.rowCountValue.push(j)
        }
        this.coloumValue.forEach((element:  number[], index: number):void => {
          element[1] += 1
        })
      }

      if (row == this.rowCount && coloum != 0 && coloum != this.coloumsCount) {
        this.rowCount += 1
        this.coloumCountValue = []
        this.rowCountValue = []
        for (let i = 0; i <= this.coloumsCount; i++) {
          this.coloumCountValue.push(i)
        }
        for (let j = 0; j <= this.rowCount; j++) {
          this.rowCountValue.push(j)
        }
      }

      if (coloum == this.coloumsCount && row != 0 && row != this.rowCount) {
        this.coloumsCount += 1
        this.coloumCountValue = []
        this.rowCountValue = []
        for (let i = 0; i <= this.coloumsCount; i++) {
          this.coloumCountValue.push(i)
        }
        for (let j = 0; j <= this.rowCount; j++) {
          this.rowCountValue.push(j)
        }
      }

      if (coloum == 0 && row == 0) {
        this.rowCount += 1
        this.coloumsCount += 1
        this.coloumCountValue = []
        this.rowCountValue = []
        for (let i = 0; i <= this.coloumsCount; i++) {
          this.coloumCountValue.push(i)
        }
        for (let j = 0; j <= this.rowCount; j++) {
          this.rowCountValue.push(j)
        }
        this.coloumValue.forEach((element:  number[], index: number):void => {
          element[0] += 1
          element[1] += 1
        })
      }

      if (coloum == this.coloumsCount && row == this.rowCount) {
        this.rowCount += 1
        this.coloumsCount += 1
        this.coloumCountValue = []
        this.rowCountValue = []
        for (let i = 0; i <= this.coloumsCount; i++) {
          this.coloumCountValue.push(i)
        }
        for (let j = 0; j <= this.rowCount; j++) {
          this.rowCountValue.push(j)
        }
      }

      if (coloum == this.coloumsCount && row == 0) {
        this.rowCount += 1
        this.coloumsCount += 1
        this.coloumCountValue = []
        this.rowCountValue = []
        for (let i = 0; i <= this.coloumsCount; i++) {
          this.coloumCountValue.push(i)
        }
        for (let j = 0; j <= this.rowCount; j++) {
          this.rowCountValue.push(j)
        }
        this.coloumValue.forEach((element:  number[], index: number):void => {
          element[0] += 1
        })
      }

      if (coloum == 0 && row ==this.rowCount) {
        this.rowCount += 1
        this.coloumsCount += 1
        this.coloumCountValue = []
        this.rowCountValue = []
        for (let i = 0; i <= this.coloumsCount; i++) {
          this.coloumCountValue.push(i)
        }
        for (let j = 0; j <= this.rowCount; j++) {
          this.rowCountValue.push(j)
        }
        this.coloumValue.forEach((element:  number[], index: number):void => {
          element[1] += 1
        })
      }
    }
  }
  reset():void{
    this.coloumsCount = 3
    this.coloumCountValue = []
    this.rowCountValue = []
    this.rowCount = 3
    for (let i = 0; i <= this.coloumsCount; i++) {
      this.coloumCountValue.push(i)
    }
    for (let j = 0; j <= this.rowCount; j++) {
      this.rowCountValue.push(j)
    }
        this.coloumValue.splice(0)
  }
  finalDesign():void{
    this.finalStatus=true
  }
  backToDesign():void{
    this.finalStatus=false
  }
}
