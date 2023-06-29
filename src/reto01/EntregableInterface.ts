interface Entregable {
    entregar(): void;
    devolver(): void;
    isEntregado(): boolean;
    comparteTo(obj: any): number;
}