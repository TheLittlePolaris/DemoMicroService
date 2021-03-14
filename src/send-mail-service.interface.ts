export interface MailService {
  sendEmail: (data: IEmailInput) => Promise<IMailStatus>;
}

export interface IEmailInput {
  mailTemplateName: string;
  firstName: string;
  lastName: string;
  userId: string;
}

export interface IMailStatus {
  status: boolean;
  error?: string;
}
