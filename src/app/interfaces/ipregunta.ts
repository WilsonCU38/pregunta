export interface IPregunta {
    /*public int Id { get; set; }
    public string Enunciado { get; set; }
    public int Orden { get; init; }
    public int Peso { get; set; }
    public string Descripcion { get; set; }*/
    id?: number;
    enunciado: string;
    orden: number;
    peso: number;
    descripcion: string;
}
