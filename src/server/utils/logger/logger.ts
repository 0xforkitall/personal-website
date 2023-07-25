/* eslint-disable no-console */

class Logger {
    info = (message: string) => {
        console.log(message);
    };

    error = (message: string, error: unknown) => {
        console.error(message, error);
    };
}

export const logger = new Logger();
