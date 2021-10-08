import { Component } from '@angular/core';
import { Equipment } from './models/interfaces/equipment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oec-client';

  

  equipments: Equipment[] = [
    {
      id: 1,
      code: '123455',
      name: 'Монитор Dell xisr3421',
      creator: 'Dell'
    },
    {
      id: 2,
      code: '123456',
      name: 'Монитор Dell xisps42x',
      creator: 'Dell',
      currentOwner: 'Ivan Fedorov'
    },
  ];

  public equipmentClicked(id: number): void {
    const eq = this.equipments.find((item) => item.id === id);
    alert(!!eq ? `${eq.code} - ${eq.name} кликнут` : `Что-то работает не так`)
  }

}
