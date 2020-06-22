/* Toda vez que formos fazer um agendamento iremos utilizar esse arquivo */
import { uuid } from 'uuidv4';

class Appointment {
  id: string;

  provider: string;

  date: Date;

  /* O constructor é criado para passar parâmetros quando chamarmos a classe em outros arquivos, deverá ser passado o provider e a date. Appointment(provider,date) */
  constructor(provider: string, date: Date){
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
