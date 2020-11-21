import { ServerRequest } from "https://deno.land/std/http/server.ts";

export const respondNotFound = (req: ServerRequest) =>
    req.respond({
        status: 404,
        body: "request not found!",
    });

export const respondWithBody = <T>(req: ServerRequest, body?: T) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    req.respond({
        status: 200,
        headers,
        body: JSON.stringify(body),
    });
};

export const parseRequestBody = async <T>(req: ServerRequest): Promise<T> => {
    const buf = new Uint8Array(req.contentLength || 0);
    let bufSlice = buf;
    let totRead = 0;
    while (true) {
        const nread = await req.body.read(bufSlice);
        if (nread === null) break;
        totRead += nread;
        if (totRead >= req.contentLength!) break;
        bufSlice = bufSlice.subarray(nread);
    }
    const str = new TextDecoder("utf-8").decode(bufSlice);
    return JSON.parse(str) as T;
};