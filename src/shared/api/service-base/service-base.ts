import { routerUtils } from '@shared/utils';
import type { IServiceBaseFetchParams, IServiceBaseParams } from './service-base.api';

export class ServiceBase {
    private context: string;

    constructor({ context }: IServiceBaseParams) {
        this.context = context;
    }

    protected fetch = async <TData>(url: string, params: IServiceBaseFetchParams = {}): Promise<TData> => {
        const { pathParams, queryParams, options } = params;

        const fetchUrl = `${this.context}${routerUtils.generatePath(url, pathParams, { query: queryParams })}`;

        const data = await fetch(fetchUrl, options);
        const jsonData = (await data.json()) as TData;

        return jsonData;
    };
}
