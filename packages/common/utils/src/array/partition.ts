import {Predicate} from '../function';

export const partition = <T>(array: Array<T>, predicate: Predicate<T>): [Array<T>, Array<T>] => {
    return array.reduce(([pass, fail], elem) => {
        return predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
    }, [[] as Array<T>, [] as Array<T>]);
};