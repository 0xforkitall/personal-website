import { routerUtils } from '@shared/utils';

export class ServiceBase {
    private context: string;

    constructor(data: { context: string; isLocalApi?: boolean }) {
        this.context = data.context;
    }

    protected fetch = async <TData>(url: string, params?: Record<string, string>): Promise<TData> => {
        const absoluteUrl = `${this.context}${routerUtils.generatePath(url, params)}`;

        const data = await fetch(absoluteUrl);
        const jsonData = (await data.json()) as TData;

        return jsonData;
    };
}
