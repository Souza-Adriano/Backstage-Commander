export interface Issued {
    by: string;
    to: string;
    at: number;
}
export interface CommandOrder {
    issued: Issued;
    key: string;
    args: BaseDTO;
}
export interface HandlerIndentity {
    name: string;
    description: string;
    status: boolean;
    key: string;
}
export interface CommandHandler extends HandlerIndentity {
    help: string;
    handler<T = BaseDTO>(args: T): Promise<void>;
}
export declare type BasicType = string | number | boolean;
export interface BaseDTO {
    [key: string]: BasicType | BaseDTO | BasicType[] | BaseDTO[];
}
export interface Model<T> {
    name: string;
    save(key: string, data: BaseDTO): Promise<void>;
    findOne(key: string): Promise<T>;
    findAll(): Promise<T[]>;
    keys(): Promise<string[]>;
}
export interface Publisher {
    init(): Promise<void>;
    emit(order: CommandOrder): Promise<void>;
}
export interface Subscriber {
    init(): Promise<void>;
    onCommand(callback: (command: CommandOrder) => Promise<void>): void;
}
export declare const BaseKey: (...args: string[]) => (id?: string | undefined) => string;
