export function makeActionCreator(type, ...argNames) {
    return function (...args) {
        const action = { type };
        argNames.map((arg, index) => {
            return action[argNames[index]] = args[index];
        });
        return action;
    };
}