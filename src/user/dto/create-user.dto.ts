export class CreateUserDto {
  /**
   * Name of the user
   * @example "Wellington Pereira Silva"
   */
  name: string;

  /**
   * The user e-mail
   * @example wellington.engps@gmail.com
   */
  email: string;

  /**
   * User CPF
   * @example 14237106659
   */
  cpf: number;

  /**
   * The user phone number
   * @example 33999938459
   */
  phoneNumber: number;

  /**
   * The user address
   * @example "Rua Maria Teixeira Lopes, Juiz de Fora - MG"
   */
  address: string;
}
