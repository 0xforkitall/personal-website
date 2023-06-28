export class InvariantUtils {
    INVARIANT_ERROR = 'Invariant';

    invariant = (condition: boolean, message: string): asserts condition => {
        if (!condition) {
            const error = new Error(message);
            error.name = this.INVARIANT_ERROR;

            throw error;
        }

        return;
    };
}

export const invariantUtils = new InvariantUtils();
