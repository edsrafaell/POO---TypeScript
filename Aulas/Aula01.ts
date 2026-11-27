import { normalize } from "node:path";

//Variaveis
class Aula01 {
    valor: number = 17;

    apresentar(){
        console.log(this.valor);
        return 0;
    }
}

const aula = new Aula01;
aula.apresentar();

