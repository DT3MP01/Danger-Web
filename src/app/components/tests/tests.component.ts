import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Console } from 'console';
import { ScoreService } from 'src/app/services/score.service';
import { quizz } from '../../shared/game';
@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss'],
})
export class TestsComponent implements OnInit {
  showAnswer = false;
  selected = 'Nivel 1';
  disableSelect = new UntypedFormControl(false);
  headingCssCorrect = {
    'color':'red', 
    'font-weight':'bold'
  };
  headingCssWrong = {
    'color':'red', 
    'font-weight':'bold'
  };


  public tests:quizz[] = new Array<quizz>();
  constructor(private ScoreService: ScoreService) {}
  public number:number = 0;
  public correctAnswers:number=0;
  public maxQuestions:number=10;
  public questionLeft:boolean=true; 
  public firstSelect: boolean=true;
  public questionSolved:boolean=false;
  public isDisabled: number[] = [0,0,0];
  ngOnInit(): void {}
  ngAfterContentInit() {
    this.ScoreService.getQuizzes().subscribe((quizzes) => { 
      this.tests = quizzes;
    }
    );
  }
  public next(){
      this.number++;
      this.firstSelect=true;
      this.isDisabled = [0,0,0];
      this.questionSolved=false;
      if(this.number == Math.min(this.maxQuestions,this.tests.length)){
        this.questionLeft = false;
      }

  }
  public submit(){
    console.log(this.number);
  }
  public select(index:number){
    if(index+1==this.tests[this.number].correct ){
      this.isDisabled[index] = 1;
      this.questionSolved=true;
      if(this.firstSelect){
        this.firstSelect = false;
        this.correctAnswers++;
      }
    }
    else{
      this.isDisabled[index] = 2;
      if(this.firstSelect){
        this.firstSelect = false;
      }
    }
    console.log(index+1==this.tests[this.number].correct);
    
  }

}

  // public tests: any = [
  //   {
  //     question: '¿Como debo pasar este recinto con presencia de humo espeso?',
  //     options: [
  //       {
  //         text: 'Gateando al nivel del suelo.',
  //         isAnswer: true,
  //       },
  //       {
  //         text: 'De pie, corriendo lo más rápido posible.',
  //         isAnswer: false,
  //       },
  //       {
  //         text: 'Gateando al nivel del suelo y corriendo lo más rápido posible',
  //         isAnswer: false,
  //       },
  //     ],
  //     explanation:
  //       'Cúbra nariz y boca con alguna prenda o paño. Si la circunstancias lo permite humedézcalo (Sánchez López, 2018). Respirar aire caliente es mortal porque quema las vías respiratorias. Gatear a nivel del suelo es vital porque el calor y el humo de desplazan y se mantienen en la parte superior lo cual permite que a nivel del suelo el aire este relativamente más limpio (BBC Mundo, 2017).',
  //   },
  //   {
  //     question:
  //       '¿Qué debo de hacer en caso de quedar atrapado en un lugar determinado sin otra posibilidad de salida?',
  //     options: [
  //       {
  //         text: 'Buscar un lugar seguro y tapar todos los agujeros posibles para evitar la entrada de humo.',
  //         isAnswer: true,
  //       },
  //       {
  //         text: 'Romper y arrojarme por la ventana.',
  //         isAnswer: false,
  //       },
  //       {
  //         text: 'Entrar en pánico y correr.',
  //         isAnswer: false,
  //       },
  //     ],
  //     explanation:
  //       'En caso de quedar atrapado y no poder salir de un sitio: 1. Tapa rendijas u orificios con paños o cualquier prenda que tengas a la mano y si es posible humedécela, para evitar la entrada de humo en la habitación (Fundación MAPFRE, 2021). 2. Cuando hayas cubierto todos los agujeros, mantén la calma y llama al 112 para informar de tu situación. 3. Presta atención: que personas no se pueden evacuar por sus propios medios , también asegúrate que todos han salido. En caso tal que alguien no pueda salir avisa a emergencias (Sánchez López, 2018).',
  //   },
  //   {
  //     question: '¿Cómo ayudar a una víctima en llamas?',
  //     options: [
  //       {
  //         text: 'Hacer que la víctima corra lo más rápido posible.',
  //         isAnswer: false,
  //       },
  //       {
  //         text: 'Hacer que la persona se tire y ruede por el suelo.',
  //         isAnswer: true,
  //       },
  //       {
  //         text: 'Hacer que mantenga la calma y esperar que la prenda se apague por si sola.',
  //         isAnswer: false,
  //       },
  //     ],
  //     explanation:
  //       'En caso, de que haya fuego en tu ropa (BBC Mundo, 2017; Sánchez López, 2018): ' +
  //       '1. Para apagar el fuego es necesario que la persona se tire al suelo y ruede. ' +
  //       '2. Cúbrete con otro abrigo u otra prenda que tengas a la mano que permita sofocar las llamas. ' +
  //       '3. No corras porque se avivan las llamas ' +
  //       'Use agua fría para las quemaduras y cúbralas con un trapo limpio y seco (Ready, 2022).',
  //   },
  //   {
  //     question: '¿Como debo usar el extintor?',
  //     options: [
  //       {
  //         text: 'Quitar el pasador de seguridad, apretar la maneta y dirigir el chorro a la base de las llamas.',
  //         isAnswer: true,
  //       },
  //       {
  //         text: 'Poner el extintor en posición horizontal, quitar el seguro y apuntar.',
  //         isAnswer: false,
  //       },
  //       {
  //         text: 'Apretar la palanca del disparador.',
  //         isAnswer: false,
  //       },
  //     ],
  //     explanation:
  //       'Cada extintor contiene en su etiqueta las instrucciones de uso, pero la realidad es la siguiente: ante una emergencia no es fácil asimilar esta serie de reglas e instrucciones, por tanto, es importante que lleves contigo las siguientes recomendaciones (Guerrero Pérez, 1999): ' +
  //       '1. El producto que contiene el agente extintor, puede ser toxico cuando se pone en contacto con el fuego. ' +
  //       '2. Al estar próximos al fuego existe el riesgo de quemaduras. ' +
  //       '3. A través de la válvula de seguridad, se pueden producir descargas inesperadas. ' +
  //       '4. No dirigir la salida del agente extintor hacia las personas.',
  //   },
  // ];