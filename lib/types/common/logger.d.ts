export declare enum LogLevel {
    DEBUG = "DEBUG",
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR",
    OFF = "OFF"
}
export declare enum ErrorCode {
    UNKNOWN_ERROR = "UNKNOWN_ERROR",
    NOT_IMPLEMENTED = "NOT_IMPLEMENTED",
    UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION",
    NETWORK_ERROR = "NETWORK_ERROR",
    RPC_ERROR = "RPC_ERROR",
    TIMEOUT = "TIMEOUT",
    BUFFER_OVERRUN = "BUFFER_OVERRUN",
    NUMERIC_FAULT = "NUMERIC_FAULT",
    MISSING_NEW = "MISSING_NEW",
    INVALID_ARGUMENT = "INVALID_ARGUMENT",
    MISSING_ARGUMENT = "MISSING_ARGUMENT",
    UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT",
    INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"
}
export declare class Logger {
    readonly version: string;
    readonly moduleName: string;
    static errors: typeof ErrorCode;
    static levels: typeof LogLevel;
    constructor(moduleName: string);
    _log(logLevel: LogLevel, args: Array<any>): void;
    debug(...args: Array<any>): void;
    info(...args: Array<any>): void;
    warn(...args: Array<any>): void;
    makeError(message: string, code?: ErrorCode, params?: any): Error;
    throwError(message: string, code?: ErrorCode, params?: any): never;
    throwArgumentError(message: string, name: string, value: any): never;
    assert(condition: any, message: string, code?: ErrorCode, params?: any): void;
    assertArgument(condition: any, message: string, name: string, value: any): void;
    checkNormalize(message?: string): void;
    checkSafeUint53(value: number, message?: string): void;
    checkArgumentCount(count: number, expectedCount: number, message?: string): void;
    checkNew(target: any, kind: any): void;
    checkAbstract(target: any, kind: any): void;
    static globalLogger(): Logger;
    static setCensorship(censorship: boolean, permanent?: boolean): void;
    static setLogLevel(moduleName: string, logLevel: 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR' | 'OFF'): void;
    static from(version: string): Logger;
}
//# sourceMappingURL=logger.d.ts.map