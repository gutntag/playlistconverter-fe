export class ApiError {

    status: string;
    message: string;
    debugMessage: string;
    action: string;

    constructor(status: string, message: string, debugMessage: string, action: string) {
        this.status = status;
        this.message = message;
        this.debugMessage = debugMessage;
        this.action = action;
    }
}