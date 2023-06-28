interface Entregable {
    entregar(): void;
    devolver(): void;
    esEntregado(): boolean;
    comparteTo(obj: any): number;
}