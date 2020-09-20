export interface Issued {
    by: string;
    to: string;
    at: number;
}

export interface CommandOrder {
    issued: Issued
    key: string;
    args: BaseDTO;
}

export interface HandlerIndentity {
    name: string;
    description: string;
    status: boolean;
    key: string;
}

export interface CommandHandler extends HandlerIndentity{
    help: string;
    handler<T = BaseDTO>(args: T):Promise<void>
}

export type BasicType = string | number | boolean

export interface BaseDTO {
    [key:string]: BasicType | BaseDTO | BasicType[] | BaseDTO[]
}

interface ModelDataSet<T> {
    key: string;
    contet: T
}

export interface Model<T> {
    name: string;
    save(key: string, data: BaseDTO): Promise<void>
    findOne(key: string): Promise<ModelDataSet<T>>
    findAll(): Promise<ModelDataSet<T>[]>
    keys(): Promise<string[]>
}

export interface Publisher {
    init(): Promise<void>
    emit(order: CommandOrder): Promise<void>
}

export interface Subscriber {
    init(): Promise<void>
    onCommand(callback: (command: CommandOrder) => Promise<void>): void
}

export const BaseKey = (...args: string[]) => {
    return (id?: string) => `@BACKSTAGE:${args.map(t => t.replace(':', '')).join(':')}${id ? `:${id}` : ''}`
}