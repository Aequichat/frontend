import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Story } from 'src/app/shared/models/story.model';
import { Progress } from 'src/app/shared/models/progress.model';
import { Event } from 'src/app/shared/models/event.model';
import { fadeInOut, fadeIn } from 'src/app/shared/animations';

import {Option} from 'src/app/shared/models/option.model';


@Component({
  selector: 'aequi-chat-body',
  templateUrl: './chat-body.component.html',
  animations: [fadeInOut, fadeIn],
  styleUrls: ['./chat-body.component.scss']
})
export class ChatBodyComponent implements OnInit {

  public conversation: Story = {
    'name': 'El estudiante nuevo',
    'chatName': 'El parche 2020',
    'icon': '',
    'characters': {
      'michael': {
        'name': 'Michael',
        'color': '#35cd96'
      },
      'daniel': {
        'name': 'Daniel',
        'color': '#91ab01'
      },
      'pedro': {
        'name': 'Pedro',
        'color': '#ffa97a'
      },
      'nicolas': {
        'name': 'Nicolas',
        'color': '#6bcbef'
      }
    },
    'events': {
      '0': {
        'type': 'action',
        'child': '2',
        'subtype': 'create',
        'from': 'michael'
      },
      '2': {
        'type': 'action',
        'child': '3',
        'subtype': 'add',
        'from': 'michael',
        'to': 'user'
      },
      '3': {
        'type': 'text',
        'child': '4',
        'value': 'Listo muchachos, ya estamos todos, qué tal las vacaciones?',
        'from': 'michael',
        'timestamp': '22:08'
      },
      '4': {
        'type': 'text',
        'child': '5',
        'value': 'Estuvieron buenísimas, no quiero volver al colegio',
        'from': 'daniel',
        'timestamp': '22:09'
      },
      '5': {
        'type': 'text',
        'child': '6',
        'value': 'Sí parce, que pereza &#128531;',
        'from': 'pedro',
        'timestamp': '22:09'
      },
      '6': {
        'type': 'text',
        'child': '7',
        'value': 'x2 &#128531;',
        'from': 'user',
        'timestamp': '22:10'
      },
      '7': {
        'type': 'text',
        'child': '8',
        'value': 'Oigan, todos quedamos en el mismo salón? Yo quedé en 10-1',
        'from': 'michael',
        'timestamp': '22:12'
      },
      '8': {
        'type': 'text',
        'child': '9',
        'value': '10-1',
        'from': 'pedro',
        'timestamp': '22:12'
      },
      '9': {
        'type': 'text',
        'child': '10',
        'value': 'Yo también &#129395;',
        'from': 'user',
        'timestamp': '22:12'
      },
      '10': {
        'type': 'text',
        'child': '11',
        'value': 'Y yo!',
        'from': 'daniel',
        'timestamp': '22:13'
      },
      '11': {
        'type': 'text',
        'child': '12',
        'value': 'Esooo &#128170; bueno muchachos, nos vemos mañana entonces',
        'from': 'pedro',
        'timestamp': '22:13'
      },
      '12': {
        'type': 'text',
        'child': '13',
        'value': 'Listo, que descansen',
        'from': 'daniel',
        'timestamp': '22:14'
      },
      '13': {
        'type': 'fadeOut',
        'child': '13_1',
        'value': 'Al dia siguiente...'
      },
      '13_1': {
        'type': 'action',
        'child': '14',
        'subtype': 'newDate',
        'value': 'FEB 9'
      },
      '14': {
        'type': 'fadeIn',
        'child': '15'
      },
      '15': {
        'type': 'text',
        'child': '16',
        'value': 'Venga, quién me pasa la tarea?',
        'from': 'pedro',
        'timestamp': '18:14'
      },
      '16': {
        'type': 'options',
        'options': [
          {
            'label': 'Cuál tarea?',
            'child': '16_1'
          },
          {
            'label': 'Tranquilo, no creo que la revisen',
            'child': '16_2'
          }
        ],
        'timestamp': '18:15'
      },
      '16_1': {
        'type': 'text',
        'child': '17',
        'value': 'Jajaja este tampoco hizo nada &#129315;',
        'from': 'pedro',
        'timestamp': '18:15',
      },
      '16_2': {
        'type': 'text',
        'child': '17',
        'value': 'Sí, cálmate Pedro, acabamos de comenzar clases',
        'from': 'daniel',
        'timestamp': '18:15'
      },
      '17': {
        'type': 'text',
        'child': '18',
        'value': 'Parce, llegó mucha gente nueva este año',
        'from': 'michael',
        'timestamp': '18:16'
      },
      '18': {
        'type': 'text',
        'child': '19',
        'value': 'La chica que me tocó al lado está super linda &#128525;',
        'from': 'pedro',
        'timestamp': '18:17'
      },
      '19': {
        'type': 'text',
        'child': '20',
        'value': 'Ese era mi puesto &#128544;',
        'from': 'michael',
        'timestamp': '18:17'
      },
      '20': {
        'type': 'text',
        'child': '21',
        'value': 'Yo llegué antes, mala suerte jajaja',
        'from': 'pedro',
        'timestamp': '18:18'
      },
      '21': {
        'type': 'text',
        'child': '22',
        'value': '&#128530;',
        'from': 'michael',
        'timestamp': '18:18'
      },
      '22': {
        'type': 'text',
        'child': '23',
        'value': 'Venga, y sí vieron al marica?',
        'from': 'michael',
        'timestamp': '18:20'
      },
      '23': {
        'type': 'options',
        'parameter': 'mockedNicolas',
        'options': [
          {
            'label': 'Jajaja sí, el pelirrojo ese?',
            'child': '23_1',
            'value': true
          },
          {
            'label': 'El pelirrojo? Tampoco le digas así...',
            'child': '23_2',
            'value': false
          }
        ],
        'timestamp': '18:21'
      },
      '23_1': {
        'type': 'text',
        'child': '23_1_1',
        'value': 'Sí parce, habla muy gay, se nota que le gustan los hombres',
        'from': 'michael',
        'timestamp': '18:22'
      },
      '23_1_1': {
        'type': 'text',
        'child': '23_1_2',
        'value': 'Toca a metros de ese man &#128541;',
        'from': 'daniel',
        'timestamp': '18:22'
      },
      '23_1_2': {
        'type': 'text',
        'child': '23_1_3',
        'value': 'Obvio, que tal que luego uno le guste... cómo se lo quita uno de encima &#128560;',
        'from': 'user',
        'timestamp': '18:23'
      },
      '23_1_3': {
        'type': 'text',
        'child': '24',
        'value': 'Jajajajaj',
        'from': 'daniel',
        'timestamp': '18:24'
      },
      '23_2': {
        'type': 'text',
        'child': '23_2_1',
        'value': 'Pero qué, te gustó? jajajaja',
        'from': 'michael',
        'timestamp': '18:22'
      },
      '23_2_1': {
        'type': 'text',
        'child': '23_2_2',
        'value': 'Ayyyyy pero como lo defiende jajajaja',
        'from': 'daniel',
        'timestamp': '18:22'
      },
      '23_2_2': {
        'type': 'text',
        'child': '23_2_3',
        'value': 'Te redescubriste en vacaciones, no?',
        'from': 'michael',
        'timestamp': '18:23'
      },
      '23_2_3': {
        'type': 'text',
        'child': '24',
        'value': 'Ni siquiera lo conocemos, tampoco hay que tratarlo mal',
        'from': 'user',
        'timestamp': '18:24'
      },
      '24': {
        'type': 'text',
        'child': '25',
        'value': 'Oigan la tareaaa &#128557; alguien pásemela',
        'from': 'pedro',
        'timestamp': '18:25'
      },
      '25': {
        'type': 'text',
        'child': '26',
        'value': 'Vale ya te la paso, pero mañana me compras una empanada',
        'from': 'daniel',
        'timestamp': '18:26'
      },
      '26': {
        'type': 'text',
        'child': '26_5',
        'value': 'Sí sí, solo pásamela y arreglamos',
        'from': 'pedro',
        'timestamp': '18:26'
      },
      '26_5': {
        'type': 'image',
        'child': '27',
        'value': 'trigonometría.jpg',
        'from': 'daniel',
        'timestamp': '18:29'
      },
      '27': {
        'type': 'text',
        'child': '28',
        'value': 'Alguien quiere jugar LoL?',
        'from': 'daniel',
        'timestamp': '18:40'
      },
      '28': {
        'type': 'text',
        'child': '29',
        'value': 'Yo juego',
        'from': 'michael',
        'timestamp': '18:41'
      },
      '29': {
        'type': 'text',
        'child': '30',
        'value': 'Sí, yo igual',
        'from': 'user',
        'timestamp': '18:41'
      },
      '30': {
        'type': 'text',
        'child': '31',
        'value': 'Vale, pero no invites al novio &#128514;',
        'from': 'michael',
        'timestamp': '18:42',
        'condition': [
          {
            'label': 'mockedNicolas',
            'value': true
          }
        ]
      },
      '31': {
        'type': 'fadeOut',
        'child': '32',
        'value': 'Algunos días más tarde...'
      },
      '32': {
        'type': 'action',
        'child': '33',
        'subtype': 'newDate',
        'value': 'FEB 11'
      },
      '33': {
        'type': 'fadeIn',
        'child': '34'
      },
      '34': {
        'type': 'text',
        'child': '35',
        'value': 'Oigan, quién le dio mi número al invertido?',
        'from': 'michael',
        'timestamp': '19:41',
        'condition': [
          {
            'label': 'mockedNicolas',
            'value': true
          }
        ]
      },
      '35': {
        'type': 'text',
        'child': '36',
        'value': 'Oigan, quién le dio mi número al pelirrojo?',
        'from': 'michael',
        'timestamp': '19:41',
        'condition': [
          {
            'label': 'mockedNicolas',
            'value': false
          }
        ]
      },
      '36': {
        'type': 'text',
        'child': '37',
        'value': 'Se llama Nicolás, y fui yo. Me dijo que lo necesitaba para confirmar algo de un trabajo',
        'from': 'pedro',
        'timestamp': '19:44'
      },
      '37': {
        'type': 'text',
        'child': '38',
        'value': 'Pedro, nunca en la vida vuelvas a hacer eso. Ahora voy a tener que aguantarlo...',
        'from': 'michael',
        'timestamp': '19:45'
      }
    }
  };

  @ViewChild('bottom', {static: false}) bottom: ElementRef;

  @Input() name: string;

  public messages: Event[] = [];
  public currentEventKey = '0';
  public showFadeIn: boolean;

  private progress: Progress;
  public currentEvent: Event;

  constructor() {}

  ngOnInit(): void {
    this.progress = {
      userId: '1',
      storyId: '1',
      currentEvent: '0',
      parameters: {},
      selectedPath: [],
      completedStories: [],
    };

    if (this.progress.selectedPath.length !== 0) {
      // if (currentMessage.type === 'text' || currentMessage.type === 'image' || currentMessage.type === 'action') {
      //   this.messages.unshift(currentMessage);
      // }
      this.messages = [...this.progress.selectedPath];
      this.currentEventKey = this.progress.currentEvent;
    }

    this.processEvent(this.currentEventKey);
  }

  public handleClickedOption(option: Option) {
    if (!option) {
      console.log('Continuar....', this.currentEvent)
      this.processEvent(this.currentEvent.child);
      return;
    }

    console.log('Opción escogida...', option);

    const timestamp = this.currentEvent.timestamp;

    this.currentEvent = {
      type: 'text',
      from: 'user',
      value: option.label,
      timestamp,
    };

    this.addMessage();
    this.processEvent(option.child);
  }

  public processEvent(currentEventKey, fadeOut = false) {
    this.currentEventKey = currentEventKey;
    this.currentEvent = this.conversation.events[this.currentEventKey];

    console.log(this.currentEvent);

    if (this.currentEvent.type === 'fadeIn') {
      this.showFadeIn = false;
      fadeOut = false;
    }

    if (this.currentEvent.type === 'fadeOut') {
      this.showFadeIn = true;
      setTimeout(() => {
        this.processEvent(this.currentEvent.child, true);
      }, 3000);
    }

    if (this.currentEvent.type === 'action') {
      this.addMessage();
    }

    if (this.currentEvent.type === 'text' || this.currentEvent.type === 'image') {
      this.addMessage();
    }

    // Executes the next events until the a fadeIn event is found.
    if (fadeOut) {
      this.processEvent(this.currentEvent.child, true);
    }

    this.progress.currentEvent = this.currentEventKey;
  }

  private addMessage() {
    this.messages.unshift(this.currentEvent);
    this.progress.selectedPath.push(this.currentEvent);
    setTimeout(() => {
      this.scrollToBottom();
    }, 1)
  }

  public scrollToBottom() {
    if (this.bottom !== undefined) {
      this.bottom.nativeElement.scrollIntoView();
    }
  }
}
