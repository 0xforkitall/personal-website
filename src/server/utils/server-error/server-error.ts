import type { IServerErrorParams } from './server-error.api';

export class ServerError extends Error {
    message: string;
    code: number;

    constructor({ message, code }: IServerErrorParams) {
        super();

        this.message = message;
        this.code = code;
    }
}
