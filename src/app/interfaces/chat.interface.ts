export interface Chat {
    senderId: number;
    message: string;
    timestamp: number;
    isCurrentUser: boolean;
    roomId: string;
    userId?: number;
    id?: string;
}
