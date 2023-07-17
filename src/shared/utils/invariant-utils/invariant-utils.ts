class InvariantUtils {
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

// Explicit type needed because of assertion error on TypeScript
// (see "Assertions require every name in the call target to be declared with an explicit type annotation.ts")
export const invariant: InvariantUtils['invariant'] = invariantUtils.invariant;
