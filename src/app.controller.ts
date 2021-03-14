import { Controller, Get, Inject } from '@nestjs/common';
import { ClientGrpcProxy, GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import { AppService } from './app.service';
import { CLIENT_NAME } from './grpc-client.option';
import { IEmailInput, IMailStatus } from './send-mail-service.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @GrpcMethod('MailService', 'SendEmail')
  public sendMail(
    data: IEmailInput,
    metadata: Metadata,
    call: ServerUnaryCall<any>,
  ): IMailStatus {
    // ...logic using data here
    console.log(data); // data to be sent
    return { status: true, error: null };
  }
}
