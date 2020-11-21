export interface HelloWorld {
    message: string;
}

const message: HelloWorld = { message: "Hello World!" }

export const helloMessage = (): HelloWorld => {
    return message;
};
