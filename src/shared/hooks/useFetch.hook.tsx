import {useEffect, useState} from "react";
import {Person} from "../interfaces/person.interface.ts";

export const useFetch = (url: string) => {

    const [data, setData] = useState<Array<Person>>([]);

    useEffect(() => {
        const controller: AbortController = new AbortController();
        const signal: AbortSignal = controller.signal;

        const fetchData = async () => {
            try {
                const response: Response = await fetch(url, {signal});
                const data: Array<Person> = await response.json();
                setData(data);
            } catch (error: any) {
                if (error.name === 'AbortError') return;
                console.error("Error while fetching data: ", error);
            }
        }

        fetchData();
        return () => {
            controller.abort();
        }
    }, [url]);

    return data;
}