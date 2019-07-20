export class Alert {
    value: AlertValue[];
    key: string;
    keepAfterRouteChange: boolean;

    constructor(init?: Partial<Alert>) {
        Object.assign(this, init);
    }
}
export class AlertValue {
    severity: AlertType;
    detail: string;
    summary: string;
}
export enum AlertType {
    success,
    error,
    info,
    warning
}
