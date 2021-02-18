import "source-map-support/register";
import {Handler} from "aws-lambda";
import {partition} from "@common/utils";

const lambda: Handler = async (event) => {

    const numbers = [1,2,3,4,5,6,7,8,9];
    const [evenNumbers] = partition(numbers, item => item % 2 === 0);

    return JSON.stringify({evenNumbers});
};

export const handler = lambda;
