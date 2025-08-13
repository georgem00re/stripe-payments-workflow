import axios, {AxiosInstance, AxiosResponse, isAxiosError} from "axios";
import {Product} from "../schemas/Product";

const getRestApi = (): AxiosInstance => {
    return axios.create({
        baseURL: import.meta.env.VITE_APP_BACKEND_URL,
    });
};

export interface CustomError {
    error: string;
    msg: string;
}

interface ErrorResult {
    data: null;
    error: CustomError;
}

interface OkResult<T> {
    data: T;
    error: null;
}

const okResult = <T>(data: T): OkResult<T> => ({
    data,
    error: null,
});

const errorResult = (error: unknown): ErrorResult => ({
    data: null,
    error:
        isAxiosError(error) && error.response
            ? {
                error: error.response.data.error ?? error.response.statusText,
                msg: error.response.data.msg ?? error.message,
            }
            : {
                error: "Error",
                msg: "",
            },
});

const parseResponse = (response: AxiosResponse) => {
    if (![200, 201].includes(response.status)) {
        throw Error(response.statusText);
    }
    if (!response.data) {
        return [];
    }
    let data = response.data;
    if (typeof data !== "object") {
        data = [];
    }
    return data;
};

const getProducts = async () => {
    try {
        const response = await getRestApi().get("/product")
        const data = parseResponse(response);
        return okResult(data.products as Product[]);
    } catch (error: unknown) {
        console.error(error);
        return errorResult(error);
    }
}

export const dataService = { getProducts }
